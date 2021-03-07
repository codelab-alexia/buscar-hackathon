import Hackathon from '../model/hackathon';

interface HackathonDataService {
  create: (hackathon: Hackathon) => Promise<any>;
  getAll: () => Promise<any>;
}

export default HackathonDataService;
