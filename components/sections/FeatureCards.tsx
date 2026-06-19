import {
	ChartNoAxesColumn,
	MessageSquare,
	StickyNoteCheck,
} from "lucide-react";
import React from "react";

const featureCards = [
	{
		id: 1,
		title: "Task boards",
		description:
			"Organize tasks with flexible Kanban boards that update instantly, helping teams track progress and priorities in real time.",
		icon: <StickyNoteCheck size={22} />,
	},
	{
		id: 2,
		title: "Reporting",
		description:
			"Generate detailed burndown charts, sprint insights, and velocity reports to understand team performance over time.",
		icon: <ChartNoAxesColumn size={22} />,
	},
	{
		id: 3,
		title: "Team chat",
		description:
			"Collaborate seamlessly with built-in messaging, quick mentions, and contextual discussions tied directly to tasks.",
		icon: <MessageSquare size={22} />,
	},
];

const FeatureCards = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto pb-28">
			{featureCards.map(card => (
				<div
					key={card.id}
					className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 h-64 flex flex-col gap-5 hover:-translate-y-2 hover:border-purple-400/40 transition-all duration-300"
				>
					{/* Hover Glow */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
					</div>

					{/* Icon */}
					<div className="relative z-10 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400">
						{card.icon}
					</div>

					{/* Title */}
					<h3 className="relative z-10 text-white text-2xl font-semibold">
						{card.title}
					</h3>

					{/* Description */}
					<p className="relative z-10 text-[#C2C0B6] leading-7">
						{card.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default FeatureCards;
