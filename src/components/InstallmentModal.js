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
    <Modal open={open} onClose={handleClose} className="installmodal">
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
          Total amount (including 5% charge): <div className="infobutton">${totalAmount.toFixed(2)}</div>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          5 installments of: <div className="infobutton">${installmentAmount.toFixed(2)}</div>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          BTC equivalent per installment: <div className="infobutton">{btcEquivalent.toFixed(8)} BTC</div>
        </Typography>
        <Button className="allbuttons" onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default InstallmentModal;