import jwt from 'jsonwebtoken';

export default function autheticateToke(req, res, next) {
    const { authcookie } = req.cookies;

    jwt.verify(authcookie, process.env.JWT_TOKEN, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else if (data.user) {
            req.user = data.user;
            next();
        }
    });
}
