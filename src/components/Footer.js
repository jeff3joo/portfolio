import { FaBehance } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, IconButton, Typography } from "@mui/material";

export const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: "primary.main",
				color: "secondary.main",
				py: 3,
				mt: "auto",
			}}
		>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: { xs: "column", sm: "row" },
					}}
				>
					<Typography variant='body2' sx={{ mb: { xs: 2, sm: 0 } }}>
						© {new Date().getFullYear()} My Portfolio. All Rights Reserved.
					</Typography>
					<Box>
						<IconButton
							aria-label='GitHub'
							sx={{ color: "secondary.main" }}
							href='https://github.com/jeff3joo'
							target='_blank'
						>
							<GitHubIcon />
						</IconButton>
						<IconButton
							aria-label='LinkedIn'
							sx={{ color: "secondary.main" }}
							href='https://www.linkedin.com/in/jeff3joo'
							target='_blank'
						>
							<LinkedInIcon />
						</IconButton>
						<IconButton
							aria-label='Behance'
							sx={{ color: "secondary.main" }}
							href='https://www.behance.net/jeff3joo'
							target='_blank'
						>
                          <FaBehance size={20} />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
