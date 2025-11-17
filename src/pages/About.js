import {
	Box,
	Button,
	Container,
	Typography,
	Grid,
	Paper,
	Avatar,
	Stack,
	Chip,
	Divider,
} from "@mui/material";

const About = () => {
	return (
		<Container maxWidth='lg' sx={{ py: 6 }}>
			<Typography
				variant='h3'
				component='h1'
				align='center'
				sx={{ mb: 4, color: "secondary.main", fontWeight: 800 }}
			>
				About Me
			</Typography>

			<Box
				sx={{
					height: "55vh",
					overflowY: "auto",
					pr: 1,
					"&::-webkit-scrollbar": {
						width: "8px",
					},
					"&::-webkit-scrollbar-track": {
						background: "transparent",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "rgba(255, 255, 255, 0.2)",
						borderRadius: "8px",
					},
					"&::-webkit-scrollbar-thumb:hover": {
						backgroundColor: "rgba(255, 255, 255, 0.35)",
					},
				}}
			>
				<Grid
					container
					spacing={4}
					sx={{
						flexWrap: {
							xs: "wrap",
							sm: "wrap",
							md: "wrap",
							lg: "nowrap",
							xl: "nowrap",
						},
						justifyContent: "center",
					}}
				>
					<Grid item xs={12} lg={4}>
						<Paper
							elevation={3}
							sx={{
								p: 3,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								gap: 2,
								border: (theme) =>
									`1px solid ${theme.palette.custom?.borderLight || "#eee"}`,
								maxHeight: "100%",
							}}
						>
							<Avatar
								alt='Jeffrin Rijo V C'
								src='/profile.jpg'
								sx={{
									width: 110,
									height: 110,
									border: "3px solid",
									borderColor: "secondary.main",
								}}
							/>

							<Typography variant='h6' sx={{ fontWeight: 700 }}>
								Jeffrin Rijo V C
							</Typography>

							<Typography variant='body2' color='text.secondary'>
								3D Artist focused on stylized assets, product animation, and
								polished renders.
							</Typography>

							<Button
								variant='contained'
								color='secondary'
								fullWidth
								href='/resume.pdf'
								download='Resume.pdf'
								sx={{ fontWeight: "bold", mt: 2 }}
							>
								Download Resume
							</Button>
						</Paper>
					</Grid>

					<Grid item xs={12} lg={8}>
						<Stack spacing={3}>
							<Paper
								sx={{
									p: 3,
									border: (theme) =>
										`1px solid ${theme.palette.custom?.borderLight || "#eee"}`,
								}}
							>
								<Typography
									variant='h5'
									sx={{ mb: 1, color: "secondary.main", fontWeight: 700 }}
								>
									My Journey
								</Typography>
								<Typography variant='body1' sx={{ mb: 1 }}>
									I’m a 3D designer who loves bringing ideas to life in Blender
									— from stylized props and product animations to small
									character & environment studies.
								</Typography>
								<Typography variant='body1' color='text.secondary'>
									I approach every project with both a designer’s eye and a
									developer’s discipline — clean, organized, and always
									shipping. I'm constantly experimenting with new pipelines,
									improving my lighting & shading, and building assets that feel
									polished and portfolio-ready.
								</Typography>
							</Paper>

							{/* Skills */}
							<Paper
								sx={{
									p: 3,
									border: (theme) =>
										`1px solid ${theme.palette.custom?.borderLight || "#eee"}`,
								}}
							>
								<Typography
									variant='h5'
									sx={{ mb: 1, color: "secondary.main", fontWeight: 700 }}
								>
									Skills & Expertise
								</Typography>

								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
											3D Modeling
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Subdivision modeling, retopology, UV unwrapping,
											hard-surface forms, organic shapes, clean topology for
											animation/export.
										</Typography>
									</Grid>

									<Grid item xs={12} sm={6}>
										<Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
											Rendering & Animation
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Lighting, look-dev, compositing, camera work, basic
											rigging, character animation, cloth/physics sims,
											presentation.
										</Typography>
									</Grid>
								</Grid>

								<Divider sx={{ my: 2 }} />

								<Typography variant='h6' sx={{ mb: 1 }}>
									Tools & Software
								</Typography>

								<Stack direction='row' spacing={1} flexWrap='wrap'>
									{[
										"Blender",
										"React",
										"MUI",
										"Node.js",
										"Figma",
										"SQL",
										"Python",
										"C++",
										"Git",
										"Electron",
									].map((tool) => (
										<Chip
											key={tool}
											label={tool}
											size='small'
											sx={{
												backgroundColor: "secondary.main",
												color: "secondary.contrastText",
												fontWeight: "bold",
												mb: 1,
												mr: 1,
											}}
										/>
									))}
								</Stack>
							</Paper>

							{/* What I'm working on */}
							<Paper
								sx={{
									p: 3,
									border: (theme) =>
										`1px solid ${theme.palette.custom?.borderLight || "#eee"}`,
								}}
							>
								<Typography
									variant='h5'
									sx={{ mb: 1, color: "secondary.main", fontWeight: 700 }}
								>
									What I'm working on
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Sharpening animation fundamentals — timing, arcs, physics, and
									expressive motion. Learning VFX & real-world physics sims.
									Next up: Unreal Engine for real-time lighting, environments,
									and interactive design.
								</Typography>
							</Paper>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default About;
