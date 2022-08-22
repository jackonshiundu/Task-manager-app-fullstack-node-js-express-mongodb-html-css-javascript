const {CustomAPIError} =require('../errors/customs-error')
const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log(err)
    res.status(500).json({msg:"spmething went wrong"})
}
module.exports=errorHandlerMiddleware