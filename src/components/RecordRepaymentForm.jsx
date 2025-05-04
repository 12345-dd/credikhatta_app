import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

const RecordRepaymentForm = ({ customerId, customers, setCustomers }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const updatedCustomers = customers.map((cust) =>
      cust.id === customerId
        ? {
            ...cust,
            balance: Math.max(0, cust.balance - parseFloat(data.amount)),
            repaymentHistory: [
              ...(cust.repaymentHistory || []),
              { amount: parseFloat(data.amount), date: data.date },
            ],
            status: cust.balance - parseFloat(data.amount) <= 0 ? "Up-to-date" : "Overdue",
          }
        : cust
    );
    setCustomers(updatedCustomers);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
      <TextField
        label="Amount"
        type="number"
        {...register("amount", { required: "Amount is required" })}
        error={!!errors.amount}
        helperText={errors.amount?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        type="date"
        {...register("date", { required: "Date is required" })}
        error={!!errors.date}
        helperText={errors.date?.message}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" type="submit" fullWidth>Record Repayment</Button>
    </Box>
  );
};

export default RecordRepaymentForm;
