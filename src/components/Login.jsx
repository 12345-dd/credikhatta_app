import React from "react";
import { useForm } from "react-hook-form";
import {TextField,Button,Container,Typography,Card,CardContent,Box} from "@mui/material";
import Grid from "@mui/material/Grid"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed.email === data.email && parsed.password === data.password) {
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      toast.error("User not found. Please sign up.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email", { required: true })}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", { required: true })}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link to="/signup" underline="hover">
                    Signup here
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;

