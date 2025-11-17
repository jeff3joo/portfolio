import {
	Box,
	Button,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";


export const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const isMobile = useMediaQuery("(max-width:600px)");
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 2,
				backgroundColor: "primary.main",
			}}
		>
			<Typography
				variant='h6'
				component={RouterLink}
				to='/'
				sx={{
					textDecoration: "none",
					color: "secondary.main",
				}}
			>
				Jeffrin Rijo V C
			</Typography>

			{isMobile ? (
				<>
                    <Avatar
                        alt="Jeffrin Rijo V C"
                        src="profile.jpg"
                        sx={{ width: 34, height: 34, border: "2px solid #4fd0e3" }}
                        component={RouterLink}
                        to="/about"
                    />
					<IconButton
						edge='end'
						color='secondary'
						aria-label='menu'
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						sx={{
							"& .MuiPaper-root": {
								bgcolor: "background.paper",
								color: "text.primary",
							},
						}}
					>
						<MenuItem component={RouterLink} to='/'>
							Home
						</MenuItem>
						<MenuItem component={RouterLink} to='/about'>
							About
						</MenuItem>
						<MenuItem component={RouterLink} to='/projects'>
							Projects
						</MenuItem>
						<MenuItem component={RouterLink} to='/contact'>
							Contact
						</MenuItem>
					</Menu>
				</>
			) : (
				<Box sx={{ display: "flex", gap: 2 }}>
					<Button
						component={RouterLink}
						to='/'
						sx={{ color: "secondary.main" }}
					>
						Home
					</Button>
					<Button
						component={RouterLink}
						to='/about'
						sx={{ color: "secondary.main" }}
					>
						About
					</Button>
					<Button
						component={RouterLink}
						to='/projects'
						sx={{ color: "secondary.main" }}
					>
						Projects
					</Button>
					<Button
						component={RouterLink}
						to='/contact'
						sx={{ color: "secondary.main" }}
					>
						Contact
					</Button>
                    <Avatar
                        alt="Jeffrin Rijo V C"
                        src="profile.jpg"
                        sx={{
                            width: 38,
                            height: 38,
                            cursor: "pointer",
                            border: "2px solid #4fd0e3",
                        }}
                        component={RouterLink}
                        to="/about"
                    />

				</Box>
			)}
		</Box>
	);
};

export default Header;
