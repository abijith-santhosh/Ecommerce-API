# Ecommerce-API

## Project Overview

API's for ecommerce platform admin to manage product inventory

## API Endpoints

### Products

1) POST /products/create :  Add a new product<br>
2) GET /products : Get all products<br>
3) DELETE /products/:id  : Delete a product<br>
4) POST  /products/:id/update_quantity/?number=10 : Update(increment or decrement) the quantity of a product<br>

## Documentation

API documentation is available at https://documenter.getpostman.com/view/33771867/2sA3XTdev3 for comprehensive information about the application and its endpoints

## How to use

1) To use the API, follow these steps:<br>
2) Clone the repository to your local machine.<br>
3) Navigate to the project directory.<br>
4) Install dependencies using npm install.<br>
5) Create a .env file with the necessary environment variables<br>
6) Start the server using node <filename><br>
7) Access the API endpoints as described in the documentation.<br>

## Database Usage

The API's utilizes MongoDB and Mongoose for data storage and retrieval. Ensure you have MongoDB and Mongoose installed and configured for the application to function properly.



