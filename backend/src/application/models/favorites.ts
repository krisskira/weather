import { PopulatedDoc } from 'mongoose';
import { City, Season, User } from ".";

export interface Favorite {
  id?: string;
  city: City;
  season: Season;
  owner: User;
}
