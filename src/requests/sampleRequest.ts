import { defaultInstance } from './helpers/instances';

export function getFoo() {
  return defaultInstance.get('/foo');
}
