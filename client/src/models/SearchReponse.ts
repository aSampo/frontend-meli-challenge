import { Author } from './Author';
import { Item } from './Item';

export interface ApiSearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}
