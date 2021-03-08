import HackathonDataService from '../adapters/hackathon_data_service';
import SearchDataService from '../adapters/search_data_service';

class SearchHackathon {
  constructor(
    private hackathonDataService: HackathonDataService,
    private searchDataService: SearchDataService
  ) {}

  execute = async (query: string) => {
    const hackathons = await this.hackathonDataService.getAll();
    const results = this.searchDataService.run(hackathons, query);
    return results;
  };
}

export default SearchHackathon;
