import { Link as RouterLink } from "react-router-dom";
import Project from "../components/ProjectCategory";
import { Box, Button, Container, Typography, Grid } from "@mui/material";

const Home = () => {
	return (
		<Container maxWidth='lg'>
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
								Jeff — Full Stack Developer & Game Dev | 3D Designer
							</Typography>

							<Typography
								variant='h4'
								component='h1'
								sx={{
									fontWeight: 800,
									lineHeight: 1.05,
									mb: 1,
									fontSize: {
										xs: "1.4em",
										sm: "1.6em",
										md: "1.8em",
										lg: "2.4em",
									},
								}}
							>
								Game Developer focused on gameplay systems and
								performance-driven experiences, with 2+ years of Full Stack
								development experience.
							</Typography>

							<Typography
								sx={{
									color: "text.secondary",
									mb: 2,
									fontSize: { xs: "1em", sm: "1em", md: "1.2em", lg: "1.2em" },
									fontWeight: 400,
								}}
								variant='h6'
							>
								Game developer focused on gameplay systems and real-time
								experiences. Explore featured projects or dive into detailed
								breakdowns of how each was built.
							</Typography>

							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant='outlined'
									color='secondary'
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
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					my: 2,
					alignItems: "center",
				}}
			>
				<Typography
					variant="h4"
					sx={{ color: "secondary.main", fontWeight: 800 }}
				>
					Explore My Projects
				</Typography>
			</Box>
			<Project />
		</Container>
	);
};

export default Home;
