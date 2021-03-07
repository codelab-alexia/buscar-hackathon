import HackathonDataService from '../../../core/adapters/hackathon_data_service';
import Hackathon from '../../../core/model/hackathon';
import { HackathonInterface, HackathonModel } from '../schema';

class HackathonRepository implements HackathonDataService {
  async create(hackathon: Hackathon): Promise<HackathonInterface> {
    return await HackathonModel.create(hackathon);
  }

  async getAll(): Promise<HackathonInterface[]> {
    return await HackathonModel.find();
  }
}

export default HackathonRepository;
