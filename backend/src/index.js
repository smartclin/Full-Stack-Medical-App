const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authenticate = require('./auth/verifyToken');
// Importing route handlers
const authRoute = require('./Routes/auth.js');
const userRoute = require('./Routes/user.js');
const doctorRoute = require('./Routes/doctor.js');
const reviewRoute = require('./Routes/review.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const corsOptions = {
  origin: true,
};

app.get('/', (req, res) => {
  res.send('API is working');
});

// PostgreSQL database connection using db.js
// index.js

// index.js

const { query } = require('./db'); // Note: omit the file extension '.js'

async function main() {
  try {
    const result = await query('SELECT NOW() as now');
    console.log('PostgreSQL database connected successfully');
    console.log('Current time from the database:', result.rows[0].now);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

// Middleware
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
