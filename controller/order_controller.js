const Orders = require('../models/orders')
module.exports.register = async function (req, res) {

    const {
        user_id,
        sub_total,
        phone_number
    } = req.body;

    try {

        let user = await Orders.findOne({
            user_id
        });
        if (!user) {
            const newOrder = new Orders({
                user_id,
                sub_total,
                phone_number


            })
            await newOrder.save();
            return res.send(newOrder)

        }
        return res.send(user)

    } catch (error) {
        console.log(error);
    }

}


module.exports.ordersDetails=async function(req,res){

    const id=req.body.id
    const order= await Orders.findOne({id})    
    if(id){
       return res.send(order)
    }else{
        return res.send()
    }

}