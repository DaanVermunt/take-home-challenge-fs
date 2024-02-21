import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function openDb() {
  return open({
    filename: './apps/challenge-be/data/superheroes.db',
    driver: sqlite3.Database,
  });
}

export interface Hero {
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

export interface Like {
  id: number;
  user: string; // Prepopulated with "Daan" "Yaren" "Charlotte" "Thom" "Walter" "Phillip" "Sam" "Isabelle",
  superhero_id: number;
}
