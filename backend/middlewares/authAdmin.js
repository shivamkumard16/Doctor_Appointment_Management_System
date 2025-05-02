import jwt from "jsonwebtoken";
// admin authentication middlware

export const authAdmin=async(req,res,next)=>{
    try {
        const {atoken} = req.headers;
        if(!atoken){
            return res.json({success:false,message:"Not Authorized please login again"})
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
       if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
        
        return res.json({success:false,message:"Not Authorized please login again"})
    }
        req.user = token_decode;
        next();

    } catch (error) {
        console.log(error);
        return resizeBy.send({success:false,message:error.message});
    }
}

