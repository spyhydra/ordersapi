const passport=require('passport');

const JWTstrategy=require('passport-jwt').Strategy;
const extractJWT=require('passport-jwt').ExtractJwt
const User=require('../models/user');

let opts={
 
    jwtFromRequest:extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'qwertyuiomqsdertyhj'
}

passport.use(new JWTstrategy(opts,function(jwtPayLoad,done){

    User.findById(jwtPayLoad._id,function(err,user){
        if(err){
            console.log('err in finding user form jwt'); return
        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })

}));

module.exports=passport;