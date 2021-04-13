class Product {
	title;
	subtitle;
	price;
	image;
	
	constructor(title, subtitle, price) {
		this.title = title;
		this.subtitle = subtitle;
		this.price = price;
		this.image = '/assets/images/product.png';
	}
}

module.exports = Product;
