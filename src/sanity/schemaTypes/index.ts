import { type SchemaTypeDefinition } from 'sanity';




import { products } from './products';
import { categorySchema } from '../categories';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,categorySchema],
};
