import HackathonDataService from '../adapters/hackathon_data_service';

class SearchHackathon {
  constructor(private hackathonDataService: HackathonDataService) {}

  execute = async (query: string) => {
    return await this.hackathonDataService.getAll();
  };
}

export default SearchHackathon;
