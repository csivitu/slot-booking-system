import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
    if (!req.headers.authorization) {
        res.json({ status: 'failed', error: 'Error: authorization token not found in headers' });
    } else {
        try {
            const data = jwt.verify(process.env.JWT_SECRET, req.headers.authorization);
            if (data.id) {
                req.body.id = data.id;
                next();
            } else {
                res.json({ status: 'failed', error: 'Error: unknown id' });
            }
        } catch (e) {
            res.json({ status: 'failed', error: e.toString() });
        }
    } next();
}
