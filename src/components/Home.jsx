import React from "react";
import {Box,Typography,Button,Container,Card,CardContent} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 4, boxShadow: 6, p: 3 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Welcome to CrediTracker
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Effortlessly manage your customers, track balances, and stay updated on repayments.
            </Typography>

            <Box display="flex" justifyContent="center" gap={2} mt={4}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;

