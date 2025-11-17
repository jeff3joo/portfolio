import { Link as RouterLink } from "react-router-dom";
import PortfolioGallery from "../components/PortfolioGallery";
import { Box, Button, Container, Typography, Grid } from "@mui/material";

const Home = () => {
	return (
		<Container maxWidth='lg' sx={{ pb: 8 }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 6,
					paddingTop: { xs: 6, md: 12 },
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
								variant='h3'
								component='h1'
								sx={{
									fontWeight: 800,
									lineHeight: 1.05,
									mb: 2,
								}}
							>
								Building stylized assets, product animations, and low poly
								assets.
							</Typography>

							<Typography
								sx={{ color: "text.secondary", maxWidth: 600, mb: 3 }}
							>
								Full-stack dev pivoting into the 3D world — building clean
								models, stylized scenes, and product-style animations. Check out
								the featured pieces or jump into the full case studies.
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
			<Box sx={{ mt: 6 }}>
				<PortfolioGallery limit={3} />
			</Box>
		</Container>
	);
};

export default Home;
