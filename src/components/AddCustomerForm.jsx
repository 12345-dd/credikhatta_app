import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCustomerForm = ({ setCustomers }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const balance = parseFloat(data.balance);
    const newCustomer = {
      id: Date.now(),
      name: data.name,
      balance,
      dueDate: data.dueDate,
      status: balance > 0 ? "Overdue" : "Up-to-date",
      repaymentHistory: [],
    };
    setCustomers((prev) => [...prev, newCustomer]);
    reset();
    navigate("/dashboard");
  };
  

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4,m:2 }}>
      <Typography variant="h4" sx={{textAlign:"center"}}>Add Customer Details</Typography>
      <TextField
        label="Customer Name"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Initial Balance"
        type="number"
        {...register("balance", { required: "Balance is required" })}
        error={!!errors.balance}
        helperText={errors.balance?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Due Date"
        type="date"
        {...register("dueDate", { required: "Due Date is required" })}
        error={!!errors.dueDate}
        helperText={errors.dueDate?.message}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" type="submit" fullWidth>Add Customer</Button>
    </Box>
  );
};

export default AddCustomerForm;
