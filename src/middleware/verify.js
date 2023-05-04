
function verify(req, res, next){
    const token = (req.headers.authorization).spilt(" ")[1]
    const isAuth = false
    if (!isAuth){
        next(new Error("Access denied"))
    }
    next()

}

module.exports = verify;