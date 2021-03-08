import SearchHackathon from '../../core/usecases/search_hackathons';
import mockingoose from 'mockingoose';
import { HackathonInterface, HackathonModel } from '../database/schema';
import HackathonRepository from '../database/repository/hackathon_repository';
import FuseSearchHackathon from './index';

describe('execute()', () => {
  it('should return a valid list of results', async () => {
    mockingoose(HackathonModel).toReturn([
      {
        name: 'DeepHack',
        description: 'A data science event',
        sponsor: 'Nubank',
      },
      {
        name: 'Interhack',
        description: 'The largest univeritary hackathon in Brazil',
        sponsor: 'USPCodeLab',
      },
    ]);

    const expected = [
      {
        name: 'DeepHack',
        description: 'A data science event',
        sponsor: 'Nubank',
      },
    ];
    const result: HackathonInterface[] = await new SearchHackathon(
      new HackathonRepository(),
      new FuseSearchHackathon()
    ).execute('banks');

    expect(
      result.map((result) => {
        delete result['_id'];
        return result;
      })
    ).toMatchObject(expected);
  });
});
