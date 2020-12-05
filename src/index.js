import './misc/dotenv.js';
import './db/init.js';
import express from 'express';

const app = express();
const port = process.env.PORT || '3000';

app.listen(port);
