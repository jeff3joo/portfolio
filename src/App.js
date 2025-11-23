import "./App.css";
import theme from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";

import { PageWrapper } from "./components/motion-utils";

function App() {
	const location = useLocation();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: {
						xs: "80vh",
						lg: "100vh",
					},
				}}
			>
				<Header />
				<Box component='main' sx={{ flexGrow: 1 }}>
					<AnimatePresence mode='wait' initial={false}>
						<Routes location={location} key={location.pathname}>
							<Route
								path='/'
								element={
									<PageWrapper>
										<Home />
									</PageWrapper>
								}
							/>
							<Route
								path='/about'
								element={
									<PageWrapper>
										<About />
									</PageWrapper>
								}
							/>
							<Route
								path='/contact'
								element={
									<PageWrapper>
										<Contact />
									</PageWrapper>
								}
							/>
							<Route
								path='/projects'
								element={
									<PageWrapper>
										<Projects />
									</PageWrapper>
								}
							/>
							<Route
								path='/projects/:slug'
								element={
									<PageWrapper>
										<ProjectDetail />
									</PageWrapper>
								}
							/>
						</Routes>
					</AnimatePresence>
				</Box>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
