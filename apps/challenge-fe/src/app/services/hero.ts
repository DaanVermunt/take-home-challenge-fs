import { apiUrl } from '../../config';
import { useEffect, useState } from 'react';

interface Hero {
  id: number;
  name: string;
  powerstats_intelligence: string;
  powerstats_durability: string;
  powerstats_power: string;
  powerstats_speed: string;
  powerstats_strength: string;
  powerstats_combat: string;
  biography_full_name: string;
  biography_alter_egos: string;
  biography_place_of_birth: string;
  biography_nature: 'good' | 'bad' | 'neutral' | '-';
  biography_publisher: string;
  biography_first_appearance: string;
  appearance_gender: 'Male' | 'Female' | '-';
  appearance_race: string;
  appearance_height_001: string; // inches
  appearance_height_002: string; // cm
  appearance_weight_001: string; /// lbs
  appearance_weight_002: string; // kg
}

export const getHeros = async (): Promise<Hero[]> => {
  const res = await fetch(`${apiUrl}/heroes`);
  const data = await res.json();
  return data.heroes;
};

export const useHeros = (): Hero[] | null => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);

  useEffect(() => {
    getHeros().then((heroes) => setHeroes(heroes));
  }, []);

  return heroes;
};
