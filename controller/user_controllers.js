const User = require('../models/user');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


module.exports.index=function(req,res){
 
        console.log("enter");
    
   return res.send('successfully login')
}
//................. function for register a doctor ..............//
module.exports.register= async function(req,res){
 
const{name,phone,password} = req.body;

try {
console.log('enter');
        let user= await User.findOne({phone})

        if (!user){
             const newUser= new User({
                name,
                phone,
                password
             })
             await newUser.save();
             return res.send(newUser)
        }
 
        return res.send('ok')


        
} catch (error) {
        console.log(error);
        
}
     
    
}


//................. function for Login as doctor ..............//

module.exports.login= async function(req,res){
        console.log("enter in login");
           const phone=req.body.phone;
           const password=req.body.password
           
           const user=await User.findOne({phone});
           const isMatch= await bcrypt.compare(password,user.password);
          
          
             if(user){
               
           if(user.phone==phone&&isMatch){
                return res.send(user)
           }
           
        }
           return res.send('f')


}
//................. function for creating jwt ..............//

module.exports.createSession= async function(req,res){
        try {
                let password=req.body.password
                let user= await User.findOne({phone:req.body.phone});

                const isMatch= await bcrypt.compare(password,user.password);
                 if(!user || !isMatch){
                      return res.json(422,{
                        message:"invalid user name and password"
                      })  
                 }

                  return res.json(200,{
                        message:'sign in successfully',
                        data:{
                                token: jwt.sign(user.toJSON(),'qwertyuiomqsdertyhj',{expiresIn:'3600000'})
                        }
                  })


}
         catch (error) {
                console.log(error);
        }
}
        

