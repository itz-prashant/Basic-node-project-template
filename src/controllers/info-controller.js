const {StatusCodes} = require('http-status-codes')

const info = (req, res)=>{
    return res.status(StatusCodes.OK).json({
        sucess: true,
        message : "Api is alive",
        error: {},
        data: {}
    })
}

module.exports = {
    info
}