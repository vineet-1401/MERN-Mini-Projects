const constants = require('../constants');

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({title:"Validation Error" ,message: error.message, stackTrace: error.stack});
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({title:"Unautharized" ,message: error.message, stackTrace: error.stack});
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({title:"Forbidden" ,message: error.message, stackTrace: error.stack});
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({title:"Not Found" ,message: error.message, stackTrace: error.stack});
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({title:"Server Error" ,message: error.message, stackTrace:error.stack});
            break;
        default:
            res.status(statusCode).json({message: error.message, stackTrace:error.stack});
            break;
    }
    res.json({message: error.message, stackTrace: error.stack})
    res.json({message: error.message, stackTrace: error.stack})
    next();
}

module.exports = errorHandler;