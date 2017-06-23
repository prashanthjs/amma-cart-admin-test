export class CategoryModel {
  _id: string;
  title: string;
  parent: string;
  description: string;
  isActive: boolean;
  addon?: Object;
}
