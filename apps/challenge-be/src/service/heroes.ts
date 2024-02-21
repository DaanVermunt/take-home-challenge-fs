import { Hero, openDb } from './db';

export const getHeros = async () => {
  const db = await openDb();
  return db.all<Hero[]>('SELECT * FROM Superhero LIMIT 10');
};
