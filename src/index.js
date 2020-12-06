import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import bodyParser from 'body-parser';
import authorize from 'csi-accounts-express';
import registerRouter from './routes/register.js';
import resetRouter from './routes/reset.js';

const app = express();

app.use(bodyParser.json());

app.use(authorize({
	secret: process.env.JWT_SECRET,
	scope: ['ccs'],

}));

app.use('/', registerRouter);
app.use('/reset', resetRouter);

const port = process.env.PORT || '3000';

app.listen(port);
