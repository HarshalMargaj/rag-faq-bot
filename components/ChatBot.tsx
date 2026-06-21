import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { MessageCircle, Send, X } from "lucide-react";
import React, { SetStateAction, useState } from "react";

interface ChatBotProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ChatBot = ({ setIsOpen }: ChatBotProps) => {
	const [userInput, setUserInput] = useState<string>();
	const [messages, setMessages] = useState([
		{
			role: "assistant",
			content: "👋 Hi! Ask me anything about Streamline.",
		},
	]);

	const handleSend = async (customQuery?: string) => {
		const query = customQuery || userInput;
		if (!query) return;

		setMessages(prev => [...prev, { role: "user", content: query }]);

		setUserInput("");

		await sendMessage(query);
	};

	const { mutateAsync: sendMessage, isPending } = useMutation({
		mutationFn: async (query: string) => {
			const response = await axios.post("/api/chat", { query });
			return response.data.answer;
		},
		onSuccess: answer => {
			setMessages(prev => [
				...prev,
				{ role: "assistant", content: answer },
			]);
		},
		onError: error => {
			console.log(error);
		},
	});

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSend();
		}
	};

	return (
		<div className="fixed z-50 bottom-30 right-10 bg-[#30302E] border border-neutral-600 rounded-xl h-120 w-100 flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
			<div className="flex items-center justify-between gap-2 p-4 border-b border-neutral-600">
				<div className="flex items-center gap-2">
					<div className="text-purple-400 p-2 rounded-xl bg-purple-400/10 border border-purple-400/10">
						<MessageCircle />
					</div>
					<div>
						<div className="text-white">Ask Streamline</div>
						<div className="text-[#C2C0B6]">
							Answers from our docs
						</div>
					</div>
				</div>
				<X
					onClick={() => setIsOpen(false)}
					className="text-[#C2C0B6] hover:text-white cursor-pointer hover:bg-neutral-700 rounded-full p-1"
				/>
			</div>
			<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`${message.role === "assistant" ? "self-start" : "self-end"} max-w-[85%] bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm`}
					>
						{message.content}
					</div>
				))}

				{isPending && (
					<div className="self-start max-w-[85%] bg-neutral-800 text-neutral-400 px-3 py-2 rounded-lg text-sm italic">
						Typing...
					</div>
				)}

				{messages.length < 2 && (
					<div className="flex flex-col gap-2 mt-2">
						<p className="text-[#C2C0B6] text-xs">Try asking:</p>
						{[
							"How do I invite teammates?",
							"Do you offer refunds?",
							"What payment methods work?",
						].map(q => (
							<button
								key={q}
								className="text-left text-sm text-neutral-300 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 transition-colors"
								onClick={() => handleSend(q)}
							>
								{q}
							</button>
						))}
					</div>
				)}
			</div>
			<div className="mt-auto border-t border-neutral-600 p-4 flex items-center gap-2">
				<input
					type="text"
					placeholder="Ask a question..."
					className="text-white placeholder:text-[#C2C0B6] outline-none border-none w-full text-medium"
					onChange={e => setUserInput(e.target.value)}
					value={userInput}
					onKeyDown={handleKeyDown}
				/>
				<button
					disabled={isPending}
					onClick={() => handleSend()}
					className="text-white cursor-pointer"
				>
					<Send />
				</button>
			</div>
		</div>
	);
};

export default ChatBot;
