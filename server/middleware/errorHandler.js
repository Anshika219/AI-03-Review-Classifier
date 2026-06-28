const errorHandler = (err , req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internet Server Error"
    });
};
module.exports=errorHandler;