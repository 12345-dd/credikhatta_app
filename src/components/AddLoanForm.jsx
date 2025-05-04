import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

const AddLoanForm = ({ customerId, customers, setCustomers }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const updatedCustomers = customers.map((cust) =>
      cust.id === customerId
        ? {
            ...cust,
            balance: cust.balance + parseFloat(data.amount),
            status: "Overdue",
            dueDate: data.dueDate,
          }
        : cust
    );
    setCustomers(updatedCustomers);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
      <TextField
        label="Loan Amount"
        type="number"
        {...register("amount", { required: "Amount is required" })}
        error={!!errors.amount}
        helperText={errors.amount?.message}
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
      <Button variant="contained" type="submit" fullWidth>Add Loan</Button>
    </Box>
  );
};

export default AddLoanForm;
