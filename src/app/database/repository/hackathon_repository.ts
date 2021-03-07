import HackathonDataService from '../../../core/adapters/hackathon_data_service';
import { HackathonInterface, HackathonModel } from '../schema';

class HackathonRepository implements HackathonDataService {
  async getAll(): Promise<HackathonInterface[]> {
    return await HackathonModel.find();
  }
}

export default HackathonRepository;
