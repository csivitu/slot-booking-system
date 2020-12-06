import './misc/dotenv.js';
import './db/init.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import registerRouter from './routes/register.js';
import resetRouter from './routes/reset.js';

const app = express();

app.use((req, res, next) => {
    if (!req.headers.authorization) {
        res.json({ status: 'failed', error: 'Error: authorization token not found in headers' });
    } else {
        try {
            const data = jwt.veryfy(process.env.JWT_SECRET, req.headers.authorization);
            if (data.id) {
                req.body.id = data.id;
                next();
            } else {
                res.json({ status: 'failed', error: 'Error: unknown id' });
            }
        } catch (e) {
            res.json({ status: 'failed', error: e.toString() });
        }
    }
});

app.use('/', registerRouter);
app.use('/reset', resetRouter);

const port = process.env.PORT || '3000';

app.listen(port);
