import HackathonDataService from '../adapters/hackathon_data_service';
import Hackathon from '../model/hackathon';

class CreateHackathon {
  constructor(private hackathonDataService: HackathonDataService) {}

  execute = async (name: string, description: string, sponsor: string) => {
    const hackathon = new Hackathon(name, description, sponsor);
    return await this.hackathonDataService.create(hackathon);
  };
}

export default CreateHackathon;
