const Sale = require('../models/sales.model.js');
const Product = require('../models/products.model.js');

// Create and Save a new sale record
exports.create = (req, res) => {
    // Validate request
    if(!req.body.productId) {
        return res.status(400).send({
            message: "Product can not be empty"
        });
    }
    if(!req.body.quantity) {
        return res.status(400).send({
            message: "Quantity can not be empty"
        });
    }
  
    if(!req.body.buyerUserId) {
        return res.status(400).send({
            message: "Buyer can not be empty"
        });
    }

    const product= Product.findById(req.body.productId)
    let unitPrice = 0
    console.log(product)
    if(!product[0]){
        res.status(404).send({})
    }
    else{
        unitPrice =  product[0].unitPrice;
    }
    

    // Create a sale
    const sale = new Sale({
        productId: req.body.productId, 
        quantity: req.body.quantity,
        unitPrice: unitPrice,
        totalPrice: unitPrice * req.body.quantity,
        buyerUserId: req.body.buyerUserId
    });

    // Save sale in the database
    sale.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sale record."
        });
    });

};

// Retrieve and return all sale records from the database.
exports.findAll = (req, res) => {
    Sale.find()
    .then(sales => {
        res.send(sales);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sales."
        });
    });

};

// Find a single Sale with a SaleId
exports.findOne = (req, res) => {
    Sale.findById(req.params.saleId)
    .then(sale => {
        if(!sale) {
            return res.status(404).send({
                message: "Sale not found with id " + req.params.saleId
            });            
        }
        res.send(sale);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sale not found with id " + req.params.saleId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Sale with id " + req.params.saleId
        });
    });

};
