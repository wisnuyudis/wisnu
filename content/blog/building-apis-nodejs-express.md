---
title: Building APIs with Node.js and Express
date: 2024-09-20
tags: ["nodejs", "express", "api", "backend"]
---

# Building APIs with Node.js and Express

Building robust APIs is a crucial skill for modern web developers. Node.js with Express.js provides an excellent foundation for creating scalable and maintainable backend services.

![API Development](https://picsum.photos/800/300)

## Getting Started

First, let's set up a basic Express server:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## RESTful API Design

A well-designed REST API follows these principles:

### HTTP Methods

- **GET** - Retrieve data
- **POST** - Create new resources
- **PUT** - Update entire resources
- **PATCH** - Partial updates
- **DELETE** - Remove resources

### Example Routes

```javascript
// Get all users
app.get('/api/users', (req, res) => {
  // Return all users
});

// Get a specific user
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Return user by ID
});

// Create a new user
app.post('/api/users', (req, res) => {
  const userData = req.body;
  // Create and return new user
});

// Update a user
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  // Update and return user
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete user and return confirmation
});
```

## Middleware

Middleware functions are the backbone of Express applications:

```javascript
// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
```

## Data Validation

Always validate incoming data:

```javascript
const { body, validationResult } = require('express-validator');

app.post('/api/users',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('name').trim().isLength({ min: 1 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process valid data
    const { email, password, name } = req.body;
    // Create user...
  }
);
```

## Database Integration

Using MongoDB with Mongoose:

```javascript
const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

## Error Handling

Implement comprehensive error handling:

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const handleAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// Global error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
});
```

## Security Best Practices

1. **Use HTTPS** in production
2. **Validate all inputs** thoroughly
3. **Implement rate limiting**
4. **Use proper authentication** (JWT, OAuth)
5. **Sanitize data** to prevent injection attacks
6. **Keep dependencies updated**

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

## Testing Your API

Use Jest and Supertest for testing:

```javascript
const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  test('should return all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
      
    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBeTruthy();
  });
});
```

## Conclusion

Building APIs with Node.js and Express is both powerful and flexible. By following REST principles, implementing proper error handling, and prioritizing security, you can create robust backend services that scale with your application's needs.

Remember to always validate inputs, handle errors gracefully, and write comprehensive tests for your API endpoints.