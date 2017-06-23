export class ProductModel {
  _id: string;
  title: string;
  sku: string;
  categories: string[];
  price: {
    sell: number;
    cost: number;
    list: number;
  };
  promoText: string;
  shortDescription: string;
  description: string;
  images: string[];
  inventory: {
    stock: number;
    quantity:{
      min: number;
      max: number;
      step: number;
    }
  };
  shipping: {
    weight: number;
    freeShipping: boolean;
    box: {
      length: number;
      width: number;
      height: number;
    }
  };
  tags: string[];
  available: {
    store: {
      name: string;
      availableToChildren: boolean;
    },
    userGroup: string;
  };
  isActive: boolean;
  addon?: Object;
}
