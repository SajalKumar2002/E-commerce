const notFound = (req,res,next) => {
    const error = new Error(`Not Found - $(req.originalUrl)`);
    res.status(404);
    next(error);
};

const errorHandler = (err,req,res,next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // check for mongoose bad objectId or cast error
    // sending id which is not found
    if(err.name ==='CaseError' && err.kind === 'ObjectId') {
        message = "Resource Not found";
        statusCode = 404;
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE.ENV === 'production' ? "pancake" : err.stack,
    });
};

module.exports = {
    errorHandler,
    notFound
}