import Fuse from 'fuse.js';
import SearchDataService from '../../core/adapters/search_data_service';
import { HackathonInterface } from '../database/schema';
import fuseOptions from './config';

class FuseSearchHackathon implements SearchDataService {
  run(data: HackathonInterface[], query: string): HackathonInterface[] {
    const keys = ['name', 'description', 'sponsor'];
    const fuse = new Fuse(data, fuseOptions(keys));
    const results = fuse.search(query);
    return results.map((result) => result.item);
  }
}

export default FuseSearchHackathon;
