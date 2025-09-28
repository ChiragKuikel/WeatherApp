const Joi = require('joi');
const loginValdiation = (req,res,next) => {
    const schema = Joi.object(
        {
        usertype:Joi.string(),
        username: Joi.string().alphanum(),
        password: Joi.string()
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
            .required().messages({ "string.pattern.base": "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).",
                "any.required": "Password is required."})
        }
    )
    const {error} = schema.validate(req.body,{abortEarly: false});
    if(error){
        return res.status(400).json({ errors: error.details.map(err => err.message) });       
    }
    next();
}
const signupValidation = (req,res,next) => {
    const schema = Joi.object(
        {
            usertype:Joi.string(),
            username: Joi.string().alphanum(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
            .required().messages({ "string.pattern.base": "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).",
                "any.required": "Password is required."}),
            repeat_password: Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .messages({ 'any.only': 'Passwords do not match' }),}
    )
    const { error } = schema.validate(req.body, { abortEarly: false });        
    if(error){
    return res.status(400).json({ errors: error.details.map(err => err.message) });    }
        next();
    
    
}
module.exports = {loginValdiation,signupValidation};