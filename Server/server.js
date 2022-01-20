const express = require('express');
const app = express();
var cors = require('cors')


const authRoutes = require('./routes/auth');

app.use(cors())
app.use(express.json());

app.use('/api', authRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
}) 