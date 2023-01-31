const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    
    user_id:{

        type:String,
        require:true
        
    },
     
    sub_total:{
        type:Number,
        require:true
    },

    phone_number:{
        type:Number,
        require:true
    },
    


},{
    timestamps:true
})


module.exports=mongoose.model("Orders",userSchema)