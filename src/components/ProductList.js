import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstallmentModal from './InstallmentModal';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [btcToUsd, setBtcToUsd] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const url = 'https://dummyjson.com/products';
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
    fetchBtcPrice();
  }, []);

  const fetchBtcPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      setBtcToUsd(data.bitcoin.usd);
    } catch (error) {
      console.error('Error fetching BTC price:', error);
    }
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cardswrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map((p) => (
        <Card key={p.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={p.images[0] || 'https://via.placeholder.com/140'}
            title={p.brand}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {p.description}
            </Typography>
            <br></br>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={() => handleBuyClick(p)}>Buy Now for ${p.price}</Button>
          </CardActions>
        </Card>
      ))}
      <InstallmentModal 
        open={modalOpen} 
        handleClose={() => setModalOpen(false)} 
        product={selectedProduct}
        btcToUsd={btcToUsd}
      />
    </div>
  );
}

export default ProductList;