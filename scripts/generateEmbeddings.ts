import "dotenv/config";
import { db } from "@/lib/db";
import { getEmbeddings } from "@/lib/embedding";

async function main() {
	const faqs = await db.fAQ.findMany();

	for (const faq of faqs) {
		const text = `${faq.question} ${faq.answer}`;
		const embedding = await getEmbeddings(text);
		const vector = `[${embedding.join(",")}]`;

		await db.$executeRaw`
            UPDATE "FAQ"
            SET embedding = ${vector}::vector
            WHERE id = ${faq.id}
        `;

		console.log(`🟢 Embedded: ${faq.question}`);
	}

	console.log("Done 🎉");
}

main()
	.catch(e => console.log("🔴 Error generating embeddings...", e))
	.finally(() => db.$disconnect);
