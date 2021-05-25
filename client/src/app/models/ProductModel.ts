export class ProductModel {
	public constructor(
		public id: string,
		public title: string,
		public subtitle: string,
		public price: number,
		public image: string = '/assets/images/product.png',
		public quantity?: number,
	) {}
}
