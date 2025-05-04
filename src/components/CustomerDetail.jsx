import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Divider } from "@mui/material";
import AddLoanForm from "./AddLoanForm";
import RecordRepaymentForm from "./RecordRepaymentForm";

const CustomerDetail = ({ customers, setCustomers }) => {
  const { id } = useParams();
  const customerId = parseInt(id);
  const customer = customers.find((c) => c.id === customerId);

  if (!customer) return <Typography>Customer not found.</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{customer.name}'s Details</Typography>
      <Typography>Balance: &#8377;{customer.balance}</Typography>
      <Typography>Due Date: {customer.dueDate}</Typography>
      <Typography>Status: {customer.status}</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Repayment History:</Typography>
      {customer.repaymentHistory?.map((rep, i) => (
        <Typography key={i}>&#8377;{rep.amount} on {rep.date}</Typography>
      ))}

      <Divider sx={{ my: 3 }} />

      <AddLoanForm customerId={customerId} customers={customers} setCustomers={setCustomers} />
      <RecordRepaymentForm customerId={customerId} customers={customers} setCustomers={setCustomers} />
    </Box>
  );
};

export default CustomerDetail;



