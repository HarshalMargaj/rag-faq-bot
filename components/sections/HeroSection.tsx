import React from "react";
import Navbar from "../Navbar";
import {
	ChartNoAxesColumn,
	MessageSquare,
	StickyNoteCheck,
} from "lucide-react";

const HeroSection = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#262624]">
			{/* Background Glow Effects */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[140px]" />
				<div className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
				<div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-purple-400/10 blur-[100px]" />
			</div>

			<Navbar />

			<div className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center">
				{/* Badge */}
				<div className=" px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-[#C2C0B6] font-medium">
					TRUSTED BY 4,000+ TEAMS
				</div>

				{/* Heading */}
				<h1 className="mt-6 text-center text-white text-[72px] font-semibold leading-[78px] tracking-[-0.04em]">
					Project management that
					<br />
					<span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
						doesn&apos;t slow you down
					</span>
				</h1>

				{/* Subtitle */}
				<p className="mt-6 max-w-2xl text-center text-lg text-[#C2C0B6] leading-8">
					Plan, track, and ship work with a modern collaboration
					platform built for fast-moving teams and ambitious projects.
				</p>

				{/* Buttons */}
				<div className="mt-8 flex items-center gap-4">
					<button className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg shadow-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
						Start free trial
					</button>

					<button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
						Explore more
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
