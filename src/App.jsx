import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About"; // Import the About page
import FaceIcon from "@mui/icons-material/Face";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
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
      <Box
        sx={{
          flex: 1,
          mt: 8,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2, // Add padding to adjust for smaller screens
          }}
        >
          {/* Hero Section */}
          <Box
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
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" }, // Adjust font size for small screens
              }}
            >
              Face Recognition System
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                maxWidth: { xs: "100%", sm: 600 }, // Full width on smaller screens
                mx: "auto",
                mb: 6,
                fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust font size
              }}
            >
              A simple and secure way to manage access through facial
              recognition technology.
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
          </Box>

          {/* Features */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <SpeedIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Fast Detection
                  </Typography>
                  <Typography color="text.secondary">
                    Quick and accurate facial recognition processing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <SecurityIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Secure Access
                  </Typography>
                  <Typography color="text.secondary">
                    Enhanced security for your applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <IntegrationInstructionsIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Easy Integration
                  </Typography>
                  <Typography color="text.secondary">
                    Simple API for seamless implementation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: theme.palette.grey[100],
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Built with React and Material-UI for learning purposes
        </Typography>
      </Box>
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
