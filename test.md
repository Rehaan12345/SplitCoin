curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-H "Authorization: Bearer your_jwt_token" \
-d '{
  "name": "Apple MacBook Pro 17\"",
  "color": "Silver",
  "category": "Laptop",
  "price": 2999
}'