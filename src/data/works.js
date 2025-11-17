const works = [
	{
		id: 1,
		slug: "game-animation",
		title: "Game Scenario Animation",
		description:
			"Stylized low-poly scenario animation showcasing level layout, simple gameplay props, and a clean lighting pass for quick prototyping.",
		image: "/assets/projects/game-animation/game_animation.png",
		glb: "/assets/projects/game-animation/game_animation.glb",
		renders: [
			"/assets/projects/game-animation/game_animation.mp4",
			"/assets/projects/game-animation/game_animation.png",
		],
		tags: ["Low Poly", "Game Animation", "Environment"],
	},
	{
		id: 2,
		slug: "wireless-pods",
		title: "Wireless Pods Animation",
		description:
			"Product animation demonstrating shading, material polish, and subtle camera movement to present form and surface details for a consumer product.",
		image: "/assets/projects/wireless-pods/wireless_pods_animation.png",
		glb: "/assets/projects/wireless-pods/wireless_pods_animation.glb",
		renders: [
			"/assets/projects/wireless-pods/wireless_pods_animation.mp4",
			"/assets/projects/wireless-pods/wireless_pods_animation.png",
		],
		tags: ["Product Animation", "Shading", "Hard Surface"],
	},
	{
		id: 3,
		slug: "Dungeon",
		title: "Gaming Dungeon",
		description:
			"Environment blockout and asset set for a dungeon scene — focused on modular props, stylized lighting, and atmosphere for in-game use.",
		image: "/assets/projects/dungeon/dungeon-2.png",
		glb: "/assets/projects/dungeon/dungeon.glb",
		renders: [
			"/assets/projects/dungeon/dungeon-1.png",
			"/assets/projects/dungeon/dungeon-2.png",
		],
		tags: ["Environment", "Modular Assets", "Stylized"],
	},
	{
		id: 4,
		slug: "flag-simulation",
		title: "Flag Animation",
		description:
			"Cloth simulation study of a flag in wind — cleaned-up topology, baked simulation, and final look-development for realistic motion.",
		image: "/assets/projects/flag-simulation/flag_simulation.png",
		glb: "/assets/projects/flag-simulation/flag_simulation.glb",
		renders: [
			"/assets/projects/flag-simulation/flag_simulation.mp4",
			"/assets/projects/flag-simulation/flag_simulation.png",
		],
		tags: ["Cloth Simulation", "Animation", "Shading"],
	},
	{
		id: 5,
		slug: "light-house",
		title: "Light House",
		description:
			"Small diorama exploring stylized lighting and reflections — focus on composition, emissive materials, and atmospheric post-processing.",
		image: "/assets/projects/light-house/light-house.png",
		glb: "/assets/projects/light-house/light-house.glb",
		renders: ["/assets/projects/light-house/light-house.png"],
		tags: ["Environment", "Lighting", "Stylized"],
	},
	{
		id: 6,
		slug: "low_poly_dinosaur",
		title: "Low Poly Dinosaur",
		description:
			"Low-poly creature with simple environment — emphasis on silhouette, readable forms, and efficient topology for game-ready export.",
		image: "/assets/projects/low_poly_dinosaur/low_poly_dinosaur.png",
		glb: "/assets/projects/low_poly_dinosaur/low_poly_dinosaur.glb",
		renders: ["/assets/projects/low_poly_dinosaur/low_poly_dinosaur.png"],
		tags: ["Low Poly", "Character", "Environment"],
	},
	{
		id: 7,
		slug: "plane-animation",
		title: "Plane Animation",
		description:
			"UV-mapping and animation study applied to an aircraft model — demonstrates clean UV layout, texture work, and simple animated sequences.",
		image: "/assets/projects/plane-animation/plane-animation.png",
		glb: "/assets/projects/plane-animation/plane-animation.glb",
		renders: [
			"/assets/projects/plane-animation/plane-animation.mp4",
			"/assets/projects/plane-animation/plane-animation.png",
		],
		tags: ["UV Mapping", "Animation", "Modeling"],
	},
	{
		id: 8,
		slug: "popsicle",
		title: "Popsicle Animation",
		description:
			"Product-focused stylized renders and turntable — material experiments and clean lighting to communicate color and surface quality.",
		image: "/assets/projects/popsicles/popsicle-3.png",
		glb: "/assets/projects/popsicles/popsicle.glb",
		renders: [
			"/assets/projects/popsicles/popsicle-3.png",
			"/assets/projects/popsicles/popsicle-4.png",
			"/assets/projects/popsicles/popsicle-1.png",
			"/assets/projects/popsicles/popsicle-2.png",
		],
		tags: ["Product Animation", "Shading", "Stylized"],
	},
	{
		id: 9,
		slug: "portal",
		title: "Portal Low Poly Asset",
		description:
			"Compact low-poly asset designed for game use — focused on readable silhouette, optimized geometry, and simple texture maps.",
		image: "/assets/projects/portal/portal.png",
		glb: "/assets/projects/portal/portal.glb",
		renders: ["/assets/projects/portal/portal.png"],
		tags: ["Low Poly", "Game Asset", "Stylized"],
	},
	{
		id: 10,
		slug: "sci-fi-environment",
		title: "Sci-fi Environment",
		description:
			"Procedural environment built with node-based workflows — experiments in lighting, modular kitbashing and shader-driven detail.",
		image: "/assets/projects/sci-fi-environment/sci-fi-environment-2.png",
		glb: "/assets/projects/sci-fi-environment/sci-fi-environment.glb",
		renders: [
			"/assets/projects/sci-fi-environment/sci-fi-environment.mp4",
			"/assets/projects/sci-fi-environment/sci-fi-environment-2.png",
			"/assets/projects/sci-fi-environment/sci-fi-environment-1.png",
			"/assets/projects/sci-fi-environment/sci-fi-environment-3.png",
		],
		tags: ["Sci-Fi", "Environment", "Procedural Nodes"],
	},
	{
		id: 11,
		slug: "sculpt-cartoon-demon",
		title: "Cartoon Demon",
		description:
			"Sculpting study focused on stylized anatomy and surface detail — concept-to-sculpt workflow with retopology for presentation.",
		image: "/assets/projects/sculpt-cartoon-demon/sculpt-cartoon-demon.png",
		glb: "/assets/projects/sculpt-cartoon-demon/sculpt-cartoon-demon.glb",
		renders: [
			"/assets/projects/sculpt-cartoon-demon/sculpt-cartoon-demon.mp4",
			"/assets/projects/sculpt-cartoon-demon/sculpt-cartoon-demon.png",
		],
		tags: ["Sculpting", "Character", "Stylized"],
	},
	{
		id: 12,
		slug: "tv-walk-animation",
		title: "Character Walking Animation",
		description:
			"Rigging and walk-cycle demo for a TV-headed character — clean setup, animation polish, and loop-ready export for reels.",
		image: "/assets/projects/tv-walk-animation/tv-walk-animation.png",
		glb: "/assets/projects/tv-walk-animation/tv-walk-animation.glb",
		renders: [
			"/assets/projects/tv-walk-animation/tv-walk-animation.mp4",
			"/assets/projects/tv-walk-animation/tv-walk-animation.png",
		],
		tags: ["Rigging", "Character Animation", "Stylized"],
	},
];

export default works;
