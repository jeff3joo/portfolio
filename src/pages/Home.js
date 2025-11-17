import { Link as RouterLink } from "react-router-dom";
import PortfolioGallery from "../components/PortfolioGallery";
import { Box, Button, Container, Typography, Grid } from "@mui/material";

const Home = () => {
	return (
		<Container maxWidth='lg' >
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					paddingTop: 4,
				}}
			>
				<Grid container spacing={4} alignItems='center'>
					<Grid item xs={12} md={6}>
						<Box>
							<Typography
								variant='overline'
								sx={{ color: "secondary.main", fontWeight: 700, mb: 1 }}
							>
								Jeff — Developer, 3D Designer
							</Typography>

							<Typography
								variant='h4'
								component='h1'
								sx={{
									fontWeight: 800,
									lineHeight: 1.05,
									mb: 2,
								}}
							>
								Crafting stylized 3D assets, product animations, and clean
								low-poly scenes.
							</Typography>

							<Typography
								sx={{ color: "text.secondary", mb: 2 }}
								variant="h6"
							>
								Full-stack dev transitioning into the 3D world — blending
								design, animation, and real-time workflows. Explore featured
								work or dive into full breakdowns of how each project was built.
							</Typography>

							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant='contained'
									color='secondary'
									size='large'
									component={RouterLink}
									to='/projects'
									sx={{ fontWeight: "bold" }}
								>
									Explore My Projects
								</Button>

								<Button
									variant='outlined'
									color='secondary'
									size='large'
									component={RouterLink}
									to='/about'
									sx={{ fontWeight: "bold" }}
								>
									About Me
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<PortfolioGallery limit={3} />
		</Container>
	);
};

export default Home;
