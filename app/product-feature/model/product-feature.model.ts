export class ProductFeatureModel {
  _id: string;
  title: string;
  items?:[{
    _id: string;
    title: string;
    description?: string;
    addon?: Object;
  }];
  addon?: Object;
}
