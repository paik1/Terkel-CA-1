exports.signin = (req,res) => {
    const {email, password} = req.body;
    
    if( email === "sampleemail@email.com" && password === "password"){
        return res.status(200).json({
            message : "Login succssful"
        });
    }
    else{
        return res.status(401).json({
            message : "Email and password do not match"
        });
    }
}