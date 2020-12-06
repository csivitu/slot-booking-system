import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authorize from 'csi-accounts-express';
import registerRouter from './routes/register.js';
import resetRouter from './routes/reset.js';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res) => {
    authorize({
        secret: process.env.JWT_SECRET,
        token: (req, res) => res.session.token,
    });
    res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });
});

app.use('/', registerRouter);
app.use('/reset', resetRouter);

const port = process.env.PORT || '3000';

app.listen(port);
