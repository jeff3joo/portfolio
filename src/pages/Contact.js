import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
	Avatar,
	IconButton,
	Stack,
	Divider,
	Snackbar,
	Alert,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const InfoRow = ({ icon, title, children }) => (
	<Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
		<Box sx={{ color: "secondary.main", mt: "4px" }}>{icon}</Box>
		<Box>
			<Typography variant='subtitle2' sx={{ fontWeight: 700 }}>
				{title}
			</Typography>
			<Typography variant='body2' sx={{ color: "text.secondary" }}>
				{children}
			</Typography>
		</Box>
	</Box>
);

const Contact = () => {
	const theme = useTheme();
	const isSmUp = useMediaQuery(theme.breakpoints.up("md"));
	const { register, handleSubmit, reset, formState } = useForm({
		mode: "onBlur",
	});
	const { errors, isSubmitting } = formState;
	const [openSnack, setOpenSnack] = useState(false);

	const openMailClient = ({ name, email, subject, message }) => {
		const to = "jeffrinrijo4@gmail.com";
		const bodyLines = [
			`From: ${name}`,
			`Reply-To: ${email}`,
			"",
			message,
			"",
			"— Sent from portfolio contact form",
		];
		const body = encodeURIComponent(bodyLines.join("\n"));
		const mailto = `mailto:${encodeURIComponent(
			to
		)}?subject=${encodeURIComponent(subject)}&body=${body}`;

		window.open(mailto, "_blank");
	};

	const onSubmit = async (data) => {
		try {
			await new Promise((r) => setTimeout(r, 250));
			openMailClient(data);
			setOpenSnack(true);
			reset();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Container maxWidth='lg' sx={{ py: { xs: 4, md: 4 } }}>
			<Typography
				variant='h3'
				component='h1'
				align='center'
				sx={{ mb: 2, color: "secondary.main", fontWeight: 800 }}
			>
				Get In Touch
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
					<Grid item xs={12} md={5} lg={4}>
						<Paper
							elevation={3}
							sx={{
								p: 3,
								display: "flex",
								flexDirection: "column",
								gap: 2,
								justifyContent: "space-between",
								border: (t) =>
									`1px solid ${t.palette.custom?.border || "#e8e8e8"}`,
							}}
						>
							<Box>
								<Box
									sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}
								>
									<Avatar
										alt='Jeffrin Rijo V C'
										src='/profile.jpg'
										sx={{
											width: 72,
											height: 72,
											border: "3px solid",
											borderColor: "secondary.main",
										}}
									/>
									<Box>
										<Typography variant='h6' sx={{ fontWeight: 800 }}>
											Jeffrin Rijo V C
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											3D Artist — stylized assets, product animations & polished
											renders.
										</Typography>
									</Box>
								</Box>

								<Divider />

								<Box sx={{ mt: 2 }}>
									<InfoRow icon={<Email fontSize='small' />} title='Email'>
										<a
											href='mailto:jeffrinrijo4@gmail.com'
											style={{ color: "inherit", textDecoration: "none" }}
										>
											jeffrinrijo4@gmail.com
										</a>
									</InfoRow>

									<InfoRow icon={<Phone fontSize='small' />} title='Phone'>
										<a
											href='tel:+919442798022'
											style={{ color: "inherit", textDecoration: "none" }}
										>
											+91 9442798022
										</a>
									</InfoRow>

									<Box sx={{ mt: 2 }}>
										<Typography
											variant='subtitle2'
											sx={{ fontWeight: 700, mb: 1 }}
										>
											Follow Me
										</Typography>

										<Stack direction='row' spacing={1}>
											<IconButton
												component='a'
												href='https://www.linkedin.com/in/jeff3joo'
												target='_blank'
												rel='noreferrer'
												aria-label='LinkedIn'
												sx={{
													border: (t) =>
														`1px solid ${t.palette.custom?.border || "#ddd"}`,
													color: "secondary.main",
												}}
											>
												<LinkedIn />
											</IconButton>

											<IconButton
												component='a'
												href='https://github.com/jeff3joo'
												target='_blank'
												rel='noreferrer'
												aria-label='GitHub'
												sx={{
													border: (t) =>
														`1px solid ${t.palette.custom?.border || "#ddd"}`,
													color: "secondary.main",
												}}
											>
												<GitHub />
											</IconButton>

											<Button
												component={RouterLink}
												href='/resume.pdf'
												download='Resume.pdf'
												size='bold'
												variant='outlined'
												color='secondary'
												sx={{ textTransform: "none", ml: 1 }}
											>
												Resume
											</Button>
										</Stack>
									</Box>
								</Box>
							</Box>

							<Typography variant='caption' color='text.secondary'>
								I aim to reply within 2–3 business days. Prefer email for
								project inquiries.
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={12} md={7} lg={8}>
						<Paper
							elevation={3}
							sx={{
								p: 3,
								height: "100%",
								display: "flex",
								flexDirection: "column",
								border: (t) =>
									`1px solid ${t.palette.custom?.border || "#e8e8e8"}`,
							}}
						>
							<Box
								component='form'
								noValidate
								onSubmit={handleSubmit(onSubmit)}
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 2,
									flexGrow: 1,
								}}
							>
								<Typography
									variant='h4'
									sx={{ color: "secondary.main", fontWeight: 800 }}
								>
									Send a Message
								</Typography>

								<TextField
									label='Name'
									fullWidth
									margin='normal'
									autoComplete='name'
									error={!!errors.name}
									helperText={errors.name ? errors.name.message : ""}
									{...register("name", {
										required: "Please enter your name",
										maxLength: { value: 60, message: "Name is too long" },
									})}
									InputLabelProps={{ style: { color: "text.primary" } }}
									sx={{
										"& .MuiOutlinedInput-root": {
											"& fieldset": { borderColor: "custom.border" },
											"&:hover fieldset": { borderColor: "secondary.main" },
											"&.Mui-focused fieldset": {
												borderColor: "secondary.main",
											},
										},
									}}
								/>

								<TextField
									label='Your Email'
									fullWidth
									autoComplete='email'
									error={!!errors.email}
									helperText={errors.email ? errors.email.message : ""}
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Enter a valid email",
										},
									})}
									InputLabelProps={{ style: { color: "text.primary" } }}
									sx={{
										"& .MuiOutlinedInput-root": {
											"& fieldset": { borderColor: "custom.border" },
											"&:hover fieldset": { borderColor: "secondary.main" },
											"&.Mui-focused fieldset": {
												borderColor: "secondary.main",
											},
										},
									}}
								/>

								<TextField
									label='Subject'
									fullWidth
									{...register("subject", { required: "Subject is required" })}
									InputLabelProps={{ style: { color: "text.primary" } }}
									sx={{
										"& .MuiOutlinedInput-root": {
											"& fieldset": { borderColor: "custom.border" },
											"&:hover fieldset": { borderColor: "secondary.main" },
											"&.Mui-focused fieldset": {
												borderColor: "secondary.main",
											},
										},
									}}
								/>

								<TextField
									label='Message'
									fullWidth
									multiline
									rows={2}
									error={!!errors.message}
									helperText={errors.message ? errors.message.message : ""}
									{...register("message", {
										required: "Please write a message",
										minLength: {
											value: 8,
											message: "Write a bit more, please",
										},
									})}
									InputLabelProps={{ style: { color: "text.primary" } }}
									sx={{
										"& .MuiOutlinedInput-root": {
											"& fieldset": { borderColor: "custom.border" },
											"&:hover fieldset": { borderColor: "secondary.main" },
											"&.Mui-focused fieldset": {
												borderColor: "secondary.main",
											},
										},
									}}
								/>

								<Box
									sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
								>
									<Typography
										variant='caption'
										color='text.secondary'
										sx={{ mt: 2, mr: 2 }}
										width={"70%"}
									>
										Clicking "Send Message" will open your default mail client
										or Gmail (web) with the message prefilled.
									</Typography>

									<Button
										type='submit'
										variant='contained'
										color='secondary'
										size='large'
										width={"30%"}
										disabled={isSubmitting}
										sx={{ fontWeight: "bold" }}
									>
										{isSubmitting ? "Preparing..." : "Send Message"}
									</Button>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>

			<Snackbar
				open={openSnack}
				autoHideDuration={3500}
				onClose={() => setOpenSnack(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					severity='success'
					onClose={() => setOpenSnack(false)}
					sx={{ width: "100%" }}
				>
					Composer opened — check your mail client to send the message.
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default Contact;
