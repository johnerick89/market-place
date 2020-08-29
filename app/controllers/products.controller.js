const Product = require('../models/products.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Product name can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        type: req.body.type, 
        name: req.body.name,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
        farmerUserId: req.body.farmerUserId
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });

};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
        Product.find()
        .then(Products => {
            res.send(Products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Products."
            });
        });

};

// Find a single Product with a ProductId
exports.findOne = (req, res) => {
    Product.findById(req.params.ProductId)
    .then(Product => {
        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });            
        }
        res.send(Product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Product with id " + req.params.ProductId
        });
    });

};

// Update a Product identified by the ProductId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    // Find Product and update it with the request body
    Product.findByIdAndUpdate(req.params.ProductId, {
        title: req.body.title || "Untitled Product",
        content: req.body.content
    }, {new: true})
    .then(Product => {
        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });
        }
        res.send(Product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });                
        }
        return res.status(500).send({
            message: "Error updating Product with id " + req.params.ProductId
        });
    });

};

// Delete a Product with the specified ProductId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.ProductId)
    .then(Product => {
        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.ProductId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Product with id " + req.params.ProductId
        });
    });

};