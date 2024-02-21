import { apiUrl } from '../../config';

interface Like {
    id: number;
    user: string;
    superhero_id: number;
}

interface PostLikeBody {
}

export const postLike = async (like: PostLikeBody): Promise<Like> => {
  const res = await fetch(`${apiUrl}/like`, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data;
};
