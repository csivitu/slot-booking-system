import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import bodyParser from 'body-parser';
import registerRouter from './routes/register.js';
import resetRouter from './routes/reset.js';

const app = express();

app.use(bodyParser.json());

app.use('/', registerRouter);
app.use('/reset', resetRouter);

const port = process.env.PORT || '3000';

app.listen(port);
