import React from "react";

const NavItems = [
	{
		id: 1,
		name: "Product",
	},
	{
		id: 2,
		name: "Pricing",
	},
	{
		id: 3,
		name: "Docs",
	},
	{
		id: 4,
		name: "Support",
	},
];

const Navbar = () => {
	return (
		<div className="fixed left-0 top-5 right-0 max-w-6xl mx-auto flex items-center justify-between h-16 px-6 bg-[#1A1A18] border-b border-white/10 rounded-xl">
			<div className="flex items-center gap-2">
				<div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1A1A18"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-4 h-4"
					>
						<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
					</svg>
				</div>
				<span className="text-white font-medium text-xl">
					Streamline
				</span>
			</div>

			<div className="flex items-center gap-6">
				{NavItems.map(item => (
					<div
						key={item.id}
						className="cursor-pointer text-neutral-400 text-base hover:text-white transition-colors font-medium"
					>
						{item.name}
					</div>
				))}
			</div>

			<button className="text-base font-medium text-white border border-white/15 rounded-xl px-4 py-1.5 hover:bg-white/5 transition-colors cursor-pointer">
				Sign in
			</button>
		</div>
	);
};

export default Navbar;
