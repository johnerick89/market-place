module.exports = (app) => {
    const products = require('../controllers/products.controller.js');
    const sales  = require('../controllers/sales.controller.js');
    const users = require('../controllers/users.controller.js');

    // Create a new Product
    app.post('/products', products.create);

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);

    // Update a Product with productId
    app.put('/products/:productId', products.update);

    // Delete a Product with productId
    app.delete('/products/:productId', products.delete);

    // Create a new Sale record
    app.post('/sales', sales.create);

    // Retrieve all Sale record
    app.get('/sales', sales.findAll);

    // Retrieve a single Sale record with saleId
    app.get('/sales/:saleId', sales.findOne);

     // Create a new User
     app.post('/users', users.create);

     // Retrieve all Users
     app.get('/users', users.findAll);
 
     // Retrieve a single User with userId
     app.get('/users/:userId', users.findOne);

     //login 
     app.post('/users/login', users.login)
}