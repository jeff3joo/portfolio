import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Container,
} from "@mui/material";
import works from "../data/works";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 280;
const MEDIA_HEIGHT = 160;

// Group works by category based on their tags
const getCategoryData = () => {
	const categories = {
		Website: {
			projects: works.filter(w => w.project === "Website"),
			image: "/assets/category/Website.jpg",
			description: "Web development projects",
		},
		Games: {
			projects: works.filter(w => w.project === "Game"),
			image: "/assets/category/Game.jpg",
			description: "Unity and Unreal engine games",
		},
		"3D Models": {
			projects: works.filter(w => w.project === "3D Model"),
			image: "/assets/category/3D-Model.jpg",
			description: "3D models, animations, and environments",
		},
	};

	return Object.entries(categories).map(([name, data]) => ({
		name,
		...data,
		count: data.projects.length,
	}));
};

const categoryData = getCategoryData();

const ProjectCategory = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<Container sx={{ py: isHomePage ? 2 : 3 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 3,
					flexWrap: "wrap",
				}}
			>
					{categoryData.map((category) => (
						<Card component={RouterLink} to={`/projects/category/${category.name}`}
							sx={{
								width: isHomePage ? "320px" : "100%",
								maxWidth: `${CARD_WIDTH}px`,
								height: isHomePage ? "300px" : `${CARD_HEIGHT}px`,
								display: "flex",
								flexDirection: "column",
								textDecoration: "none",
								transition: "transform 200ms ease, box-shadow 200ms ease",
								borderRadius: 2,
								overflow: "hidden",
								"&:hover": {
									transform: "translateY(-6px) scale(1.01)",
									boxShadow: (theme) => theme.shadows[8],
								},
							}}
						>
							<CardMedia
								component='img'
								alt={category.name}
								image={category.image}
								sx={{
									width: "100%",
									height: isHomePage ? "160px" : `${MEDIA_HEIGHT}px`,
									objectFit: "cover",
								}}
							/>

							<CardContent
								sx={{
									flexGrow: 1,
									display: "flex",
									flexDirection: "column",
									gap: 0.5,
									padding: 1.5,
								}}
							>
								<Typography
									gutterBottom
									variant={isHomePage ? "subtitle1" : "h6"}
									sx={{ lineHeight: 1.2 }}
								>
									{category.name}
								</Typography>

								<Typography variant='body2' color='text.secondary'
									sx={{
										display: "-webkit-box",
										WebkitLineClamp: 2,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
										textOverflow: "ellipsis",
										mb: 0.5,
									}}
								>
									{category.description}
								</Typography>

								<Box
									sx={{
										mt: "auto",
										display: "flex",
										gap: 0.5,
										flexWrap: "wrap",
									}}
								>
									<Typography variant='caption' color='text.secondary'>
										{category.count} projects
									</Typography>
								</Box>
							</CardContent>
						</Card>
					))}
			</Box>
		</Container>
	);
};

export default ProjectCategory;
