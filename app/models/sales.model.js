const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    productId: {
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
    totalPrice: {
		type: Number,
		required: true
	},
	buyerUserId:{
		type: String,
		required: true
	},
}, {
    timestamps: true
});

module.exports = mongoose.model('Sale', SaleSchema);