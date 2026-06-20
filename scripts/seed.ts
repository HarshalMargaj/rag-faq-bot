import "dotenv/config";
import { db } from "@/lib/db";
import { faqs } from "@/constants/Faqs";

async function main() {
	await db.fAQ.createMany({
		data: faqs,
	});

	console.log("🟢 Data inserted successfully.");
}

main()
	.catch(e => console.log("🔴 Error inserting data...", e))
	.finally(async () => {
		await db.$disconnect();
	});
