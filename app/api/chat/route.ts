import { db } from "@/lib/db";
import { getEmbeddings } from "@/lib/embedding";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// Get the user's query from the request body
		const { query } = await req.json();

		// Generate an embedding for the user's query
		const embedding = await getEmbeddings(query);
		const vector = `[${embedding.join(",")}]`;

		// Find matching FAQs using vector similarity search
		const faqs = await db.$queryRaw<
			{
				id: string;
				question: string;
				answer: string;
			}[]
		>`
                select 
                    id,
                    question, 
                    answer
                from match_faqs(
                    ${vector}::vector,
                    0.4,
                    10
                )
            `;

		// If no relevant FAQs are found, return early with a fallback message
		if (!faqs || faqs.length === 0) {
			return NextResponse.json({
				answer: "I don't have information about that. Try asking something else!",
			});
		}

		// Build context from the matched FAQs
		const context = faqs
			.map(f => `Q: ${f.question}\nA: ${f.answer}`)
			.join("\n\n");

		// Send the context and query to HeyRoute AI for the final answer
		const completionRes = await axios.post(
			`${process.env.HEYROUTE_BASE_URL}`,
			{
				model: "gpt-5.5",
				messages: [
					{
						role: "system",
						content: `You are a helpful support assistant. Answer using ONLY this context:\n\n${context}`,
					},
					{
						role: "user",
						content: query,
					},
				],
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.HEYROUTE_API_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);

		const completionData = completionRes.data;

		console.log(completionData);

		// Extract the generated answer, with a fallback if parsing fails
		const answer =
			completionData?.choices?.[0]?.message?.content ??
			"Sorry, I couldn't generate a response right now.";

		// Return the final answer to the client
		return NextResponse.json({ answer });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Something went wrong..." },
			{ status: 500 },
		);
	}
}
