import { csvData } from './types/csvData';

export default function mapper(csvArr: string[]) {
  const mongoData = {} as csvData;

  const splittedGermanDate = csvArr[0].split('.');
  const date = new Date(
    Number(splittedGermanDate[2]),
    Number(splittedGermanDate[1]) - 1,
    Number(splittedGermanDate[0]),
    23,
    59,
    59
  );

  mongoData.date = date;
  mongoData.totalGenerated = Number(csvArr[1]);
  mongoData.totalConsumption = Number(csvArr[2]);
  mongoData.consumptionFromGenerated = Number(csvArr[3]);
  mongoData.energyFeedIntoGrid = Number(csvArr[4]);
  mongoData.energyTakenFromGrid = Number(csvArr[5]);

  return mongoData;
}
