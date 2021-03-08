import Fuse from 'fuse.js';

const fuseOptions = (keys: string[]): Fuse.IFuseOptions<any> => ({
  isCaseSensitive: false,
  includeScore: false,
  threshold: 0.5,
  findAllMatches: true,
  shouldSort: true,
  ignoreLocation: true,
  keys,
});

export default fuseOptions;
