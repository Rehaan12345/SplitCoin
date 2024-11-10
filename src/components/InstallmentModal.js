import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function InstallmentModal({ open, handleClose, product, btcToUsd }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [installmentAmount, setInstallmentAmount] = useState(0);
  const [btcEquivalent, setBtcEquivalent] = useState(0);

  useEffect(() => {
    if (product) {
      const total = product.price * 1.05; // 5% charge
      const installment = total / 5;
      setTotalAmount(total);
      setInstallmentAmount(installment);
      setBtcEquivalent(installment / btcToUsd);
    }
  }, [product, btcToUsd]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h6" component="h2">
          Split Purchase for {product?.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Total amount (including 5% charge): ${totalAmount.toFixed(2)}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          5 installments of: ${installmentAmount.toFixed(2)}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          BTC equivalent per installment: {btcEquivalent.toFixed(8)} BTC
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default InstallmentModal;