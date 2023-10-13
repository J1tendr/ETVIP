const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

app.post('/api/login', (req, res) => {
  // Authenticate the user, generate a token
  const user = { id: 1, username: 'example' };
  const token = jwt.sign({ user }, secretKey);
  res.json({ token });
});

// Middleware for protecting routes
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/api/protected-route', authenticateToken, (req, res) => {
  // Access protected resource
  res.json({ message: 'This is a protected route' });
});
