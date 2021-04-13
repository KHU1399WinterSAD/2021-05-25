const express = require('express');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
app.use(cors());

app.get('/products', (req, res) => {
	const productsCount = 10;
	const products = Array(productsCount);
	
	for (let i = 0; i < productsCount; i++) {
		const title = `Title ${i + 1}`;
		const subtitle = `This is a subtitle for product ${i + 1}`;
		const price = Math.floor(Math.random() * 90 + 10) * 100;
		
		products[i] = new Product(title, subtitle, price);
	}
	
	res.send(products);
});

app.listen(5000, () => console.log('Listening on port 5000 ...'));
