const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
dob: {
    type: Date,
    required: true
},
email: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},
LGA: {
    type: String,
    required: true
},
landImage: {
  type: String,
  required: true
},
phoneNumber: {
  type: String,
  required: true
},
password: {
    type: String,
    required: true
},
Address: {
    type: String,
    required: true
},
idtype: {
    type: String,
    required: true
},
idnumber: {
    type: String,
    required: true
},
contractType: {
    type: String,
    enum: ["Mechanization", "Supplier", "Agro-dealer", "farmer", "consumer", "logistics", "Distributor"],
    required: true
},

farmSize: {
  type: Number,
  required: true
},
cacNumber: {
  type: Number,
  required: true
},

}, {
  timestamps: true
})

module.exports = mongoose.model("FarmprofitUser", userSchema)