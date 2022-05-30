import mongoose from "mongoose";
import { Favorite, City, Season } from "../../../application/models";

const CitySchema = new mongoose.Schema<City>(
  {
    description: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
    versionKey: false,
  }
);

const SeasonSchema = new mongoose.Schema<Season>(
  {
    temp: {
      type: Number,
      required: true,
    },
    alarm: {
      type: Number,
      required: false,
    },
  },
  {
    _id: false,
    versionKey: false,
  }
);

const FavoriteSchema = new mongoose.Schema<Favorite>({
  city: {
    type: CitySchema,
    required: true,
  },
  season: {
    type: SeasonSchema,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const FavoriteModel = mongoose.model<Favorite>(
  "Favorite",
  FavoriteSchema,
  "favorite_places"
);
