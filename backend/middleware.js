const ExpressError = require('./utils/ExpressError');
const jwt = require("jsonwebtoken");


module.exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (authHeader) {
        const token = authHeader;
        // const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            username = user.username;
            role = user.role;
            id = user.id;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};