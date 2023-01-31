const mongoose=require('mongoose');
const bcrypt=require('bcrypt')

const userSchema= new mongoose.Schema({
    
    name:{

        type:String,
        require:true
        
    },

    phone:{
        type:Number,
        require:true,
        unique: true,
        require:true
    },

    password:{
        type:String,
        require:true,
          
    }
    
},{
    timestamps:true
})
//this for using bcrypt 
userSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,9)
     
        next();
    }
    

})


const Doctor=mongoose.model('Doctor',userSchema)

module.exports=Doctor;