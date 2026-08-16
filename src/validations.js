const {z} = require("zod");

function validateEmail(req,res,next) {
    const passReq = z.object({
        email : z.string().email({message : "Invalid Email Address"})
    });

    const result = passReq.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            "msg" : "Invalid Email Address Sent",
            "details" : result.error.format()
        })
    }

    else{
        next();
    }

}

function validatePassword(req,res,next){
    const passReq = z.object({
        password : z.string()
        .min(8)
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[0-9]/, "Must contain a number")
        .regex(/[a-z]/, "Must contain a lowercase letter")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
    })


    const result = passReq.safeParse(req.body);

    if(!result.success){
        res.status(400).json({
            "msg" : "Invalid Password Entered",
            "details" : result.error.format()
        })
    
    }
    else{
        next();
    }
}

function validateAge(req,res,next){
    const passReq = z.object({
        age : z.number()
        .positive()
        .int()
        .finite()
        .min(18)
    })

    const result = passReq.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            "msg" : "Invalid Age Entered",
            "details" : result.error.format()
        })
    }

    else{
        next();
    }
}

module.exports = {validateAge,validateEmail,validatePassword}