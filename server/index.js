const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));   


app.listen(PORT, () => {
    console.log('Listening on port 3000');
    console.log(`backend server is running on http://localhost:${PORT}`);
}
);
