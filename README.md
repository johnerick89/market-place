# Market Place
App for farmers to setup their products and buyers to buy

## Environment:
- Node JS
- Express JS
- MongoDB


## Data:
Users
```
{
    "firstName": "Jim",
    "lastName": "Doe",
    "email":"jane.doe@test.com",
    "password": "1234",
    "userType": "customer"
}
```
Products
```
{
    "name": "Cabbages",
    "type": "Vegetables",
    "quantity": 1000,
    "unitPrice":20,
    "farmerUserId":"5f4a14c484dd4b3fbec29b62"
}
```
Sales
```
{
    "productId": "5f4a09445b4f0503d25717de",
    "quantity": 10,
    "buyerUserId":"5f4a14c484dd4b3fbec29b62"
}
```


## Users
POST request to `/users/`:
- creates a new user
- expects a valid user object as its body payload, except that it does not have an id property; you can assume that the given object is always valid
- adds the given object to the collection and assigns a unique integer id to it
- the response code is 201 and the response body is the created record, including its unique id

GET request to `/users/`:
- the response code is 200
- the response body is an array of matching records, ordered by their ids in increasing order

GET request to `/users/<id>/`:
- returns a record with the given id
- if the matching record exists, the response code is 200 and the response body is the matching object
- if there is no record in the collection with the given id, the response code is 404

## Products
POST request to `/products/`:
- creates a new user
- expects a valid user object as its body payload, except that it does not have an id property; you can assume that the given object is always valid
- adds the given object to the collection and assigns a unique integer id to it
- the response code is 201 and the response body is the created record, including its unique id

GET request to `/products/`:
- the response code is 200
- the response body is an array of matching records, ordered by their ids in increasing order

GET request to `/products/<id>/`:
- returns a record with the given id
- if the matching record exists, the response code is 200 and the response body is the matching object
- if there is no record in the collection with the given id, the response code is 404

## Sales
POST request to `/sales/`:
- creates a new user
- expects a valid user object as its body payload, except that it does not have an id property; you can assume that the given object is always valid
- adds the given object to the collection and assigns a unique integer id to it
- the response code is 201 and the response body is the created record, including its unique id

GET request to `/sales/`:
- the response code is 200
- the response body is an array of matching records, ordered by their ids in increasing order

GET request to `/sales/<id>/`:
- returns a record with the given id
- if the matching record exists, the response code is 200 and the response body is the matching object
- if there is no record in the collection with the given id, the response code is 404

## Running Locally
Make sure you have Node JS & MongoDB

```sh
# Install dependencies and start service
$ npm install 
$ npm start
