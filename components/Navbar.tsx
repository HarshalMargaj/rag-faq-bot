import React from "react";

const NavItems = [
	{ id: 1, name: "Product" },
	{ id: 2, name: "Pricing" },
	{ id: 3, name: "Docs" },
	{ id: 4, name: "Support" },
];

const Navbar = () => {
	return (
		<div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
			<div className="h-18 px-7 rounded-2xl border border-white/10 bg-[#121212]/75 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#121212"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-5 h-5"
						>
							<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
						</svg>
					</div>

					<span className="text-white font-semibold text-xl tracking-tight">
						Streamline
					</span>
				</div>

				{/* Nav Items */}
				<div className="hidden md:flex items-center gap-8">
					{NavItems.map(item => (
						<div
							key={item.id}
							className="relative group cursor-pointer text-neutral-400 hover:text-white transition-all duration-300 font-medium"
						>
							{item.name}

							<div className="absolute left-0 -bottom-1 h-px w-0 bg-purple-400 group-hover:w-full transition-all duration-300" />
						</div>
					))}
				</div>

				{/* CTA */}
				<button className="px-5 py-2 rounded-xl border border-white/10 bg-white/3 text-white font-medium hover:bg-white/8 hover:border-white/20 transition-all duration-300 cursor-pointer">
					Sign in
				</button>
			</div>
		</div>
	);
};

export default Navbar;
