const {
    ValidationError,
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError
} = require('sequelize')

const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
}

const errorHandler = (err, req, res, next) => {
    let { status } = err

    return res.status(status || 500)
        .json({
            message: err.message,
            errorName: err.name
        })
}

const ormErrorHandler = (err, req, res, next) => {
    if (err instanceof ConnectionError ||
        err instanceof ConnectionTimedOutError ||
        err instanceof ConnectionRefusedError ||
        err instanceof ConnectionAcquireTimeoutError ||
        err instanceof InvalidConnectionError
    ) {
        return res.status(409).json({
            name: err.name,
            message: "Database connection failed"
        })
    }

    if (err instanceof ValidationError) {

        return res.status(409).json({
            name: err.name,
            message: err.message,
            error: err.error
        })
    }

    if (err instanceof DatabaseError) {
        return res.status(409).json({
            name: err.name,
            message: err.message,
            error: err.error,
            params: err['parameters']
        })
    }

    next(err)
}

module.exports = {
    logError,
    errorHandler,
    ormErrorHandler,
}