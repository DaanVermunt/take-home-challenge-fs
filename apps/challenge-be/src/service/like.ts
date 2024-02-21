import { Like, openDb } from "./db";

export const getLike = async () => {
    const db = await openDb()
    return db.get<Like>('SELECT * FROM Like WHERE id = 1');
}
