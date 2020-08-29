const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
		type: String,
		required: true
	},
    type: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	unitPrice: {
		type: Number,
		required: true
	},
	farmerUserId:{
		type: String,
		required: true
	},
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);