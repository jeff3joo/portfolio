import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Container,
	Chip,
} from "@mui/material";
import works from "../data/works";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 360;
const MEDIA_HEIGHT = 200;

const PortfolioGallery = ({ limit }) => {
	const location = useLocation();
	const onProjectsPage = location.pathname.startsWith("/projects");

	const defaultLimit = onProjectsPage ? undefined : 3;
	const items = works.slice(0, limit ?? defaultLimit);

	return (
		<Container sx={{ py: 3 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mb: 3,
					alignItems: "center",
				}}
			>
				<Typography variant='h4' sx={{ color: "secondary.main", fontWeight: 800 }}>
					Featured Work
				</Typography>

				{!onProjectsPage && (
					<Typography	component={RouterLink} to='/projects'
						sx={{
							textDecoration: "none",
							color: "text.secondary",
							fontSize: 14,
							fontWeight: 700,
						}}
					>
						See all projects →
					</Typography>
				)}
			</Box>
			<Box
				sx={{
					height: `${onProjectsPage ? "70vh" : "40vh"}`,
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
					spacing={3}
					sx={{ justifyContent: "center"}}
				>
					{items.map((work) => (
						<Grid item key={work.id}
							sx={{
								width: { xs: "100%", sm: `calc(50% - 12px)`, md: `${CARD_WIDTH}px` },
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Card component={RouterLink} to={`/projects/${work.slug}`}
								sx={{
									width: "100%",
									maxWidth: `${CARD_WIDTH}px`,
									height: `${CARD_HEIGHT}px`,
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
									image={work.image}
									alt={work.title}
									sx={{
										width: "100%",
										height: `${MEDIA_HEIGHT}px`,
										objectFit: "cover",
									}}
								/>

								<CardContent
									sx={{
										flexGrow: 1,
										display: "flex",
										flexDirection: "column",
										gap: 1,
										padding: 2,
									}}
								>
									<Typography
										gutterBottom
										variant='h6'
										sx={{ lineHeight: 1.1 }}
									>
										{work.title}
									</Typography>

									<Typography variant='body2' color='text.secondary'
										sx={{
											display: "-webkit-box",
											WebkitLineClamp: 2,
											WebkitBoxOrient: "vertical",
											overflow: "hidden",
											textOverflow: "ellipsis",
											mb: 1,
										}}
									>
										{work.description}
									</Typography>

									<Box
										sx={{
											mt: "auto",
											display: "flex",
											gap: 0.5,
											flexWrap: "wrap",
										}}
									>
										{work.tags.map((t, i) => (
											<Chip
												key={i}
												label={t}
												size='small'
												sx={{
													backgroundColor: "secondary.main",
													color: "secondary.contrastText",
													fontWeight: "400",
												}}
											/>
										))}
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default PortfolioGallery;
