const express = require('express');
const cors = require('cors');
const Product = require('./models/Product');

// CREATE DATABASE
let productsCount = 10;
let products = Array(productsCount);
let shoppingCard = [];

for (let i = 0; i < productsCount; i++) {
	const id = (i + 1).toString();
	const title = `Title ${id}`;
	const subtitle = `This is a subtitle for product ${id}`;
	const price = Math.floor(Math.random() * 90 + 10) * 100;
	
	products[i] = new Product(id, title, subtitle, price);
}

// MAIN
const app = express();
app.use(express.json());
app.use(cors());

// END POINTS
app.get('/products', (req, res) => {
	res.send(products);
});

app.get('/product/:id', (req, res) => {
	const {id} = req.params;
	
	if (1 <= id && id <= products.length)
		res.send(products[req.params.id - 1]);
	else
		res.status(400).send('The requested id is not found in the database');
});

app.get('/shopping-card', (req, res) => {
	res.send(shoppingCard);
});

app.post('/shopping-card', (req, res) => {
	const {id, increase} = req.body;
	
	if (1 <= id && id <= products.length) {
		const item = shoppingCard.filter(x => x.id === id)[0];
		
		if (item) {
			if (increase)
				item.quantity++;
			else if (item.quantity > 0)
				item.quantity--;
			
			res.sendStatus(200);
		} else {
			res.status(400).send('The item is already in the shopping card');
		}
	} else {
		res.status(400).send('The requested id is not found in the database');
	}
});

app.put('/shopping-card/:id', (req, res) => {
	const {id} = req.params;
	
	if (1 <= id && id <= products.length) {
		if (shoppingCard.some(x => x.id === id)) {
			res.status(400).send('The item is already in the shopping card');
		} else {
			const item = products.filter(x => x.id === id)[0];
			shoppingCard.push({...item, quantity: 1});
			
			res.sendStatus(200);
		}
	} else {
		res.status(400).send('The requested id is not found in the database');
	}
});

app.delete('/shopping-card/:id', (req, res) => {
	const {id} = req.params;
	
	if (1 <= id && id <= products.length) {
		shoppingCard = shoppingCard.filter(x => x.id !== id);
		res.sendStatus(200);
	} else {
		res.status(400).send('The requested id is not found in the database');
	}
});

// START THE SERVER
app.listen(5000, () => console.log('Listening on port 5000 ...'));
