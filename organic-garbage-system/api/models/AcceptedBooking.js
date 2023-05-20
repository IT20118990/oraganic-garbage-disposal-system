const mongoose = require("mongoose");

const AcceptedBookingSchema = new mongoose.Schema(
    {
        booking_id:{
            type:String,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        contact_number:{
            type:String,
            required:true,
        },
        type_of_service:{
            type:String,
            required:true,
        },
        selected_model:{
            type:String,
            required:true,
        },
        no_of_days:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        vehicle_pic:{
            type:String,
            default:"",
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("AcceptedBooking",AcceptedBookingSchema);