import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import About from "./About";

function Home() {
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Box display="flex" alignItems="center">
            <FaceIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="div">
              FaceID
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          pt: 15,
          pb: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Face Recognition System
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ maxWidth: 600, mx: "auto", mb: 6 }}
        >
          A simple and secure way to manage access through facial recognition
          technology.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              transition: "all 0.3s ease",
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/about" // React Router navigation
            sx={{
              px: 4,
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                borderColor: "primary.dark",
                color: "primary.dark",
              },
              transition: "all 0.3s ease",
            }}
          >
            About
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
