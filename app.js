// app.js

const express = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Sequelize
const sequelize = new Sequelize(process.env.MYSQL_URI || 'mysql://username:password@localhost:3306/installments', {
    dialect: 'mysql',
});

// Test Database Connection
sequelize.authenticate()
    .then(() => console.log('Connected to MySQL'))
    .catch(err => console.error('Database connection error:', err));

// Define Models

// User Model
class User extends Model { }
User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
});

// Product Model
class Product extends Model { }
Product.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Product',
});

// Transaction Model
class Transaction extends Model { }
Transaction.init({
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    installments: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'fulfilled', 'cancelled'),
        defaultValue: 'pending',
    },
}, {
    sequelize,
    modelName: 'Transaction',
});

// Payment Model
class Payment extends Model { }
Payment.init({
    installmentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amountPaid: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    paymentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Payment',
});

// Define Relationships
User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Transaction, { foreignKey: 'productId' });
Transaction.belongsTo(Product, { foreignKey: 'productId' });

Transaction.hasMany(Payment, { foreignKey: 'transactionId' });
Payment.belongsTo(Transaction, { foreignKey: 'transactionId' });

// Synchronize Models with Database
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.error('Synchronization error:', err));

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access token required' });

    jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid access token' });
        req.user = user;
        next();
    });
};

// Routes

// User Registration
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({ email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Change Password
app.post('/api/change-password', authenticateToken, async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Check if the request is made by the same user
        if (user.id !== req.user.userId) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **Add a New Product**
// For simplicity, this route is **public**. In a production environment, protect this route with authentication and authorization.
app.post('/api/products', async (req, res) => {
    try {
        const { name, color, category, price } = req.body;

        // Validate input
        if (!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }

        // Create product
        const product = await Product.create({ name, color, category, price });

        res.status(201).json(product);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Create a New Transaction
app.post('/api/transactions', authenticateToken, async (req, res) => {
    try {
        const { productId, installments } = req.body;

        // Validate input
        if (!productId || !installments) {
            return res.status(400).json({ message: 'Product ID and installments are required' });
        }

        // Find product
        const product = await Product.findByPk(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Create transaction
        const transaction = await Transaction.create({
            userId: req.user.userId,
            productId: product.id,
            amount: product.price,
            installments,
        });

        res.status(201).json(transaction);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Transactions for a User
app.get('/api/transactions', authenticateToken, async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            where: { userId: req.user.userId },
            include: [Product, Payment],
        });
        res.json(transactions);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a Payment Installment
app.post('/api/transactions/:id/payments', authenticateToken, async (req, res) => {
    try {
        const { installmentNumber, amountPaid } = req.body;
        const transactionId = req.params.id;

        // Validate input
        if (!installmentNumber || !amountPaid) {
            return res.status(400).json({ message: 'Installment number and amount paid are required' });
        }

        // Find transaction
        const transaction = await Transaction.findOne({
            where: { id: transactionId, userId: req.user.userId },
            include: [Payment]
        });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

        // Add payment
        const payment = await Payment.create({
            transactionId: transaction.id,
            installmentNumber,
            amountPaid,
        });

        // Calculate total paid
        const totalPaid = transaction.Payments.reduce((sum, p) => sum + p.amountPaid, 0) + amountPaid;

        // Update transaction status if fulfilled
        if (totalPaid >= transaction.amount) {
            transaction.status = 'fulfilled';
            await transaction.save();
        }

        res.json({ transaction, payment });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});