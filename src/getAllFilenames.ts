import { readdirSync } from 'node:fs';

export default function getAllFilenames() {
  const path = process.env.PATH_TO_CSV?.trim() || '';
  const allFilenames = readdirSync(path);

  return allFilenames;
}
