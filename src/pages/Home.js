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
								Jeff — Software Developer
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
								Full Stack Developer building scalable, real-time web
								applications with React, Node.js, and modern technologies.
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
								Full Stack Developer with 2+ years of total experience building
								real-world products, from responsive interfaces and REST APIs to
								real-time systems and C++ SDK integrations. I also explore game
								development and interactive experiences in my free time.
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
					variant='h4'
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
