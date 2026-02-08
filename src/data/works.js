const works = [
	{
		id: 1,
		slug: "shooter-sam",
		title: "Shooter Sam Game",
		description:
		    "This game went deep into third-person shooting mechanics, Sounds , animation systems, AI with Behavior Trees, combat logic, HUDs, level polish, animation, and AI into a shippable experience.",
		image: "/assets/projects/shooter-sam/shooter-sam.png",
		renders: [
			"/assets/projects/shooter-sam/shooter-sam.mp4",
		],
		tags: ["Game Development", "AI Enemy", "Shooting Game"],
	},
	{
		id: 2,
		slug: "battle-blaster",
		title: "Battle Blaster Game",
		description:"In this game I have used input systems, AI behavior, damage handling, UI widgets, timers, particles, audio — basically the “real dev stuff” behind the fun.",
		image: "/assets/projects/battle-blaster/battle-blaster.png",
		renders: [
			"/assets/projects/battle-blaster/battle-blaster.mp4",
		],
		tags: ["Game Development", "Projectile", "Camera Effects"],
	},
	{
		id: 3,
		slug: "object-assault",
		title: "Object Assault Game",
		description:"In this Game dived into the fundamentals that actually make a game move — from geometry brushes and live coding to vectors, delta time, actor movement, rotation, physics, and building reusable classes.",
		image: "/assets/projects/object-assault/object-assault.png",
		renders: [
			"/assets/projects/object-assault/object-assault.mp4",	
		],
		tags: ["Game Development", "Rotation", "Movement"],
	},
	{
		id: 4,
		slug: "dungeon-escape",
		title: "Dungeon Escape Game",
		description:"In this game went deep into gameplay systems: actor components, pointers & references, delegates, collision, tracing, enhanced input, and clean C++ architecture with Blueprint integration. Built mechanics like pressure plates, locks, secret walls, and item-based progression.",
		image: "/assets/projects/dungeon-escape/dungeon-escape.png",
		renders: [
			"/assets/projects/dungeon-escape/dungeon-escape.mp4",
		],
		tags: ["Game Development", "Trigger", "Projectile"],
	},
	{
		id: 5,
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
		id: 6,
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
		id: 7,
		slug: "Dungeon",
		title: "Gaming Dungeon",
		description:
			"Environment blockout and asset set for a dungeon scene — focused on modular props, stylized lighting, and atmosphere for in-game use.",
		image: "/assets/projects/dungeon/dungeon-2.png",
		glb: "/assets/projects/dungeon/dungeon.glb",
		renders: [
			"/assets/projects/dungeon/dungeon.mp4",
			"/assets/projects/dungeon/dungeon-1.png",
			"/assets/projects/dungeon/dungeon-2.png",
		],
		tags: ["Environment", "Modular Assets", "Stylized"],
	},
	{
		id: 8,
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
		id: 9,
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
		id: 10,
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
		id: 11,
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
		id: 12,
		slug: "popsicle",
		title: "Popsicle Animation",
		description:
			"Product-focused stylized renders and turntable — material experiments and clean lighting to communicate color and surface quality.",
		image: "/assets/projects/popsicles/popsicle-3.png",
		glb: "/assets/projects/popsicles/popsicle.glb",
		renders: [
			"/assets/projects/popsicles/popsicle.mp4",
			"/assets/projects/popsicles/popsicle-3.png",
			"/assets/projects/popsicles/popsicle-4.png",
			"/assets/projects/popsicles/popsicle-1.png",
			"/assets/projects/popsicles/popsicle-2.png",
		],
		tags: ["Product Animation", "Shading", "Stylized"],
	},
	{
		id: 13,
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
		id: 14,
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
		id: 15,
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
		id: 16,
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
