import React from "react";
import Navbar from "../Navbar";
import {
	ChartNoAxesColumn,
	MessageSquare,
	StickyNoteCheck,
} from "lucide-react";

const featureCards = [
	{
		id: 1,
		title: "Task boards",
		description:
			"Organize tasks with flexible Kanban boards that update instantly, helping teams track progress and priorities in real time.",
		icon: <StickyNoteCheck />,
	},
	{
		id: 2,
		title: "Reporting",
		description:
			"Generate detailed burndown charts, sprint insights, and velocity reports to understand team performance over time.",
		icon: <ChartNoAxesColumn />,
	},
	{
		id: 3,
		title: "Team chat",
		description:
			"Collaborate seamlessly with built-in messaging, quick mentions, and contextual discussions tied directly to tasks.",
		icon: <MessageSquare />,
	},
];

const HeroSection = () => {
	return (
		<div className="h-screen ">
			<Navbar />
			<div className="flex flex-col gap-4 items-center justify-center h-full">
				<div className="text-[#C2C0B6] font-medium">
					TRUSTED BY 4,000+ TEAMS
				</div>
				<div className="text-white text-[64px] font-semibold text-center leading-17">
					Project management that <br />
					doesn&apos;t slow you down
				</div>
				<div className="text-[#C2C0B6] text-lg font-medium">
					Plan, track, and ship work with a tool built for fast-moving
					teams.
				</div>
				<div className="flex items-center gap-4">
					<button className="bg-white text-black rounded-xl p-2 px-4 cursor-pointer font-medium">
						Start free trial
					</button>
					<button className="border border-neutral-400  text-white rounded-xl p-2 px-4 cursor-pointer font-medium">
						Explore more
					</button>
				</div>
				<div className="flex items-center gap-6 max-w-6xl mt-10">
					{featureCards.map(card => (
						<div
							key={card.id}
							className="bg-[#30302E] p-6 rounded-xl border border-[#4A4A45] flex flex-col gap-2 h-53"
						>
							<div className="text-purple-400">{card.icon}</div>
							<div className="text-white font-semibold text-xl">
								{card.title}
							</div>
							<div className="text-[#C2C0B6] font-medium">
								{card.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
