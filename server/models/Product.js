class Product {
	id;
	title;
	subtitle;
	price;
	image;
	
	constructor(id, title, subtitle, price) {
		this.id = id;
		this.title = title;
		this.subtitle = subtitle;
		this.price = price;
		this.image = '/assets/images/product.png';
	}
}

module.exports = Product;
