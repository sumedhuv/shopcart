const {Order,ProductCart}= require("../models/order");
const { pushOrderInPurchaseList } = require("./user");
exports.getOrderById=(req,res,next,id)=>{
    Order.findById(id)
    .populate("products.product","name price")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"No order found in DB"
            })
        }
        req.order=order;
        next();
    })
}

exports.createOrder=(req,res)=>{
    req.body.order.user=req.profile;
    const order= new Order(req.body.order);
    order.save((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to save your order in DB",
            })
        }
        res.json(order);
    })

}

exports.getAllOrders=(req,res)=>{
    Order.find()
    .populate("user","_id name")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"Unable to get orders"
            })
        }
        res.json(order);
    })
}
exports.getOrderStatus=(req,res)=>{
    res.json(Order.schema.path.apply("status").enumValues)
}
exports.updateStatus=(req,res)=>{
    Order.findOneAndUpdate(
        {_id:req.body.orderId},
        {$set: {status: req.body.status}},
        (err,order)=>{
            if(err){
                return res.status(400).json({
                    error:"Cannot update order status"
                })
            }
            res.json(order)
        }
    )

}
