

const isAdmin = (req, res, next) => {

    const {username,role} = req.user

    if (role !== "ADMIN") {
        return res.status(401).json({
            message: `${username} is not an administrator`
        })
    }

    next()
}

const getRoles = (...roles) => {
    return (req, res, next) => {
        const {role} = req.user
        if (!roles.includes(role)) {
            return res.status(401).json({
                message: `User needs one of ${roles}`
            });
        }
        next()
    }
}

module.exports ={
    isAdmin,
    getRoles,
}