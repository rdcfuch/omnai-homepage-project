import type { Route } from "./+types/home";
import { OmnaiHero } from "../components/OmnaiHero";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Omnai — Human-AI Collaboration Platform" },
		{ name: "description", content: "The future of human-AI collaboration." },
	];
}

export default function Home() {
	return <OmnaiHero />;
}