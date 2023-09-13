import { Author } from './Author';
import { Item } from './Item';

export interface SearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}
