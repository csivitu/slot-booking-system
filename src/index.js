import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import bodyParser from 'body-parser';
import authorize from 'csi-accounts-express';
import registerRouter from './routes/register.js';
import resetRouter from './routes/reset.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(authorize({
	secret: process.env.JWT_SECRET,
	scope: ['r2'],

}));

app.use('/', registerRouter);
app.use('/reset', resetRouter);

const port = process.env.PORT || '3000';

app.listen(port);
