import { Author } from './Author';
import { ItemDetail } from './ItemDetail';

export interface ItemDetailResponse {
  author: Author;
  categories: string[];
  item: ItemDetail;
}
