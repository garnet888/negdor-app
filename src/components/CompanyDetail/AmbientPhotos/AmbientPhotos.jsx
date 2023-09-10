import React from "react";
import { Text, FlatList, Image } from "react-native";

import ambientPhotosCss from "./ambientPhotosCss";

const _pictures = [
  "https://images.hdqwalls.com/download/blue-beetle-5k-movie-zi-1280x720.jpg",
  "https://images.hdqwalls.com/download/wolverine-and-deadpool-unstoppable-r6-1280x720.jpg",
  "https://images.hdqwalls.com/download/michael-keaton-batman-neon-artwork-jr-1280x720.jpg",
  "https://images.hdqwalls.com/download/supergirl-soars-protecting-metropolis-city-vv-1280x720.jpg",
  "https://images.hdqwalls.com/download/zenvo-aurora-tur-prototype-2023-kp-1280x720.jpg",
  "https://images.hdqwalls.com/download/mountains-reflection-snow-sky-mirror-nh-1280x720.jpg",
  "https://images.hdqwalls.com/download/pubg-battlegrounds-2023-r9-1280x720.jpg",
  "https://images.hdqwalls.com/download/sunset-serenity-a-landscape-bathed-in-warmth-0z-1280x720.jpg",
];

const AmbientPhotos = () => {
  return (
    <FlatList
      style={ambientPhotosCss.list}
      data={_pictures}
      ListEmptyComponent={() => <Text>Хоосон байна</Text>}
      renderItem={({ item }) => (
        <Image style={ambientPhotosCss.photo} source={{ uri: item }} />
      )}
      horizontal
    />
  );
};

export default AmbientPhotos;
