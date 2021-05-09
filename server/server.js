const express = require('express');
const cors = require('cors');
const Product = require('./models/Product');

// CREATE DATABASE
const productsCount = 10;
const products = Array(productsCount);

for (let i = 0; i < productsCount; i++) {
	const title = `Title ${i + 1}`;
	const subtitle = `This is a subtitle for product ${i + 1}`;
	const price = Math.floor(Math.random() * 90 + 10) * 100;
	
	products[i] = new Product(title, subtitle, price);
}

// MAIN
const app = express();
app.use(cors());

// END POINTS
app.get('/products', (req, res) => {
	res.send(products);
});

app.get('/products/:id', (req, res) => {
	const {id} = req.params;
	
	if (1 <= id && id <= products.length)
		res.send(products[req.params.id - 1]);
	else
		res.status(400).send('The requested id is not found in the database');
});

// START THE SERVER
app.listen(5000, () => console.log('Listening on port 5000 ...'));
