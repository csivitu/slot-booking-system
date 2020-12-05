import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import registerRouter from './routes/register';

const app = express();
app.use(registerRouter, '/register');
const port = process.env.PORT || '3000';

app.listen(port);
