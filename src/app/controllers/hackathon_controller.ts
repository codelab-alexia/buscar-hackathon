import { Request, Response } from 'express';
import HackathonDataService from '../../core/adapters/hackathon_data_service';
import SearchHackathon from '../../core/usecases/search_hackathons';
import HackathonRepository from '../database/repository/hackathon_repository';
import { HackathonInterface } from '../database/schema';
import FuseSearchHackathon from '../search';

class HackathonController {
  private hackathonDataService: HackathonDataService;

  constructor() {
    this.hackathonDataService = new HackathonRepository();
  }

  find = async (request: Request, response: Response) => {
    const { query } = request.query;
    const searchHackathon = new SearchHackathon(
      this.hackathonDataService,
      new FuseSearchHackathon()
    );
    const hackathons = (await searchHackathon.execute(
      query as string
    )) as HackathonInterface[];
    return response.status(200).json(hackathons);
  };
}

export default HackathonController;
