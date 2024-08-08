import client from './mongoDBClient';
import getCSVData from './getCSVData';
import mapper from './mapper';
import { csvData } from './types/csvData';
import getAllFilenames from './getAllFilenames';

const allFilenames = getAllFilenames();
for (let i = 0; i < allFilenames.length; i++) {
  const csv = getCSVData(allFilenames[i]);
  if (csv) {
    const splitLines = csv.split('\n');
    const splitValues = splitLines[2].split(',');

    let mongoData = {} as csvData;
    mongoData = mapper(splitValues);

    try {
      await client.connect();
      const db = client.db('pvDatabase');
      const data = db.collection<csvData>('pvData');
      const result = await data.insertOne(mongoData);
      console.log(
        `Document was successfully inserted: ${result.insertedId} from date ${mongoData.date}`
      );
    } finally {
      await client.close();
    }
  }
}
