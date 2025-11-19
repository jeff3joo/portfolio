import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import theme from "./theme";

function App() {
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
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/projects/:slug' element={<ProjectDetail />} />
					</Routes>
				</Box>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
