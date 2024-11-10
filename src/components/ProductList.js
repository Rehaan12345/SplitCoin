import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

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
            image={p.images[0] || 'https://via.placeholder.com/140'} // Placeholder image if none available
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
            <Button size="large">Buy Now for ${p.price}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;