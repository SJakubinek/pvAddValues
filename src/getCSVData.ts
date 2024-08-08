import fs from 'node:fs';

export default function getCSVData(filename: string) {
  const stat = fs.statSync(process.env.PATH_TO_CSV + filename);
  if (stat.isFile()) {
    const csv = fs.readFileSync(process.env.PATH_TO_CSV + filename, 'utf-8');
    return csv;
  } else {
    return;
  }
}
