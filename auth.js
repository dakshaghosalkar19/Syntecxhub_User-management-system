const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Access Denied: No credentials provided' });
  }

  // Decode the base64 credentials from the header
  const token = authHeader.split(' ')[1];
  const decoded = Buffer.from(token, 'base64').toString('ascii');
  const [username, password] = decoded.split(':');

  // Credentials verification
  if (username === 'admin' && password === 'password123') {
    next(); // Pass control to the next function (the controller)
  } else {
    res.status(403).json({ message: 'Access Denied: Invalid credentials' });
  }
};

module.exports = basicAuth;