import { useState } from "react";
import works from "../data/works";
import ModelViewer from "../components/3dComponent";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

const ProjectDetail = () => {
	const { slug } = useParams();
	const work = works.find((w) => w.slug === slug);

	const [modelError, setModelError] = useState(false);

	if (!work) {
		return (
			<Container sx={{ py: 6 }}>
				<Typography variant='h4'>Project not found</Typography>
				<Button component={RouterLink} to='/projects' sx={{ mt: 2 }}>
					Back to projects
				</Button>
			</Container>
		);
	}

	return (
		<Container maxWidth='lg' sx={{ py: 4 }}>
			<Typography variant='h4' sx={{ mb: 2 }}>
				{work.title}
			</Typography>
			<Typography variant='subtitle1' color='text.secondary' sx={{ mb: 3 }}>
				{work.description}
			</Typography>

			{work.glb && !modelError ? (
				<ModelViewer
					src={work.glb}
					height={400}
					onError={() => setModelError(true)}
				/>
			) : (
				<Box
					sx={{
						width: "100%",
						height: 400,
						background: "#111",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src={work.renders?.[0] || work.image}
						alt={work.title}
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
			)}

			{modelError && <Typography>Error in Model</Typography>}

			<Grid container spacing={2} sx={{ mt: 3 }}>
				{(work.renders || []).map((r, i) => {
					const isVideo = r.endsWith(".mp4") || r.endsWith(".webm");

					return (
						<Grid item xs={12} sm={6} md={3} key={i}>
							{isVideo ? (
								<video
									src={r}
									controls
									autoPlay
									muted
									loop
									playsInline
									style={{
										width: "100%",
										borderRadius: 8,
										background: "#000",
										maxHeight: "200px",
										objectFit: "cover",
									}}
								/>
							) : (
								<img
									src={r}
									alt={`${work.title}-${i}`}
									style={{
										width: "100%",
										borderRadius: 8,
										maxHeight: "200px",
										objectFit: "cover",
									}}
								/>
							)}
						</Grid>
					);
				})}
			</Grid>

			<Box sx={{ mt: 3, display: "flex", gap: 2 }}>
				{work.glb && (
					<Button href={work.glb} download variant='outlined' 									color='secondary'
>
						Download .glb
					</Button>
				)}
				<Button component={RouterLink} to='/projects' variant='contained'>
					Back to projects
				</Button>
			</Box>
		</Container>
	);
};

export default ProjectDetail;
