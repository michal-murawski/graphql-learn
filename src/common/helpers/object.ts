import { identity, pickBy } from 'lodash';

/**
 * Remove keys with undefined, null values form an object/
 */
export const compactObject = <T extends Record<string, unknown>>(obj: T) => pickBy(obj, identity);
