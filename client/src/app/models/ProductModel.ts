export class ProductModel {
	public constructor(
		public title: string,
		public subtitle: string,
		public price: number,
		public image: string = '/assets/images/product.png'
	) {}
}
