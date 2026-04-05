export function OmnaiHero() {
	return (
		<div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
			{/* Ambient glow effects */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/15 via-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

			{/* Grid background */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
					                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
					backgroundSize: '80px 80px'
				}}
			/>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center gap-12 px-6">
				{/* Logo mark */}
				<div className="relative">
					<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.4)]">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							className="text-white"
						>
							<path
								d="M16 4L28 28H4L16 4Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinejoin="round"
								fill="none"
							/>
							<circle cx="16" cy="18" r="4" fill="currentColor" />
						</svg>
					</div>
				</div>

				{/* Wordmark */}
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-5xl md:text-6xl font-light tracking-tight text-white">
						Omnai
					</h1>
					<div className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
				</div>

				{/* Tagline */}
				<p className="text-lg md:text-xl text-white/50 font-light tracking-wide max-w-2xl text-center leading-relaxed">
					Organizing Minds, Networked AI
				</p>

				{/* Status */}
				<div className="mt-8 flex items-center gap-3">
					<div className="w-2 h-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
					<span className="text-sm text-white/30 tracking-widest uppercase">
						Stealth Mode
					</span>
				</div>
			</div>

			{/* Footer */}
			<div className="absolute bottom-8 left-0 right-0 flex justify-center">
				<a
					href="mailto:hello@omnai.ai"
					className="text-sm text-white/20 hover:text-white/50 transition-colors duration-300 tracking-wide"
				>
					hello@omnai.ai
				</a>
			</div>
		</div>
	);
}