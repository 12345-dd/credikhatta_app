import React from "react";
import { useForm } from "react-hook-form";
import {TextField,Button,Container,Typography,Card,CardContent,Box} from "@mui/material";
import Grid from "@mui/material/Grid"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
            Sign Up
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
              Sign Up
            </Button>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link to="/login" underline="hover">
                    Login here
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

export default Signup;

