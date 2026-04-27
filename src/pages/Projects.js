import { Box, Typography } from "@mui/material";
import PortfolioGallery from "../components/PortfolioGallery";
import ProjectCategory from "../components/ProjectCategory";
import works from "../data/works";
import { useParams } from "react-router-dom";

const Projects = () => {
	const { slug, category } = useParams();

	// Check if it's a category route
	const categories = ["Games", "3D Models", "Website"];
	const isCategory = category && categories.includes(category);

	// Filter works by category
	const getFilteredWorks = () => {
		if (!category) return null;
		if (category === "Games") {
			return works.filter((w) => w.project === "Game");
		}
		if (category === "3D Models") {
			return works.filter((w) => w.project === "3D Model");
		}
		if (category === "Website") {
			return works.filter((w) => w.project === "Website");
		}
		return null;
	};

	const filteredWorks = getFilteredWorks();

	// If category slug exists, show filtered PortfolioGallery
	if (isCategory && filteredWorks) {
		return (
			<div>
				<PortfolioGallery works={filteredWorks} />
			</div>
		);
	}

	// Otherwise show category selection
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					my: 2,
					alignItems: "center",
				}}
			>
				<Typography
					variant="h4"
					sx={{ color: "secondary.main", fontWeight: 800 }}
				>
					Projects
				</Typography>
			</Box>
			<ProjectCategory />
		</div>
	);
};

export default Projects;
