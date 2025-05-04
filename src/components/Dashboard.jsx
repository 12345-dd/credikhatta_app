import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import { useNavigate } from "react-router-dom";

const Dashboard = ({customers}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div>
      <div style={{ marginBottom: 20,marginRight:20 }}>
        <Button variant="contained" onClick={() => navigate("/add-customer")} sx={{marginLeft:2}}>
          Add Customer
        </Button>
        <Button variant="outlined" color="error" onClick={handleLogout} sx={{marginLeft:2}}>
          Logout
        </Button>
      </div>
      <Typography variant="h4" textAlign="center">CrediTracker Dashboard</Typography>
      <Grid container spacing={3} padding={3}>
        {customers.map((cust) => (
          <Grid item xs={12} md={6} key={cust.id}>
            <Card
              sx={{
                border: cust.status === "Overdue" ? "2px solid red" : "1px solid #ddd",
                minWidth: { xs: 220, sm: 250, md: 280 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6">{cust.name}</Typography>
                <Typography>Balance: &#8377;{cust.balance}</Typography>
                <Typography>Due: {cust.dueDate}</Typography>
                <Typography>Status: {cust.status}</Typography>
                <Button variant="outlined" onClick={() => navigate(`/customer/${cust.id}`)} style={{ marginTop: 10 }}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;

{/* <Button variant="outlined" onClick={() => navigate(`/customer/${cust.id}`)} style={{ marginTop: 10 }}>View Details</Button> */}
