import React, { useCallback, useState } from "react";
import { View, Text, RefreshControl, FlatList } from "react-native";
import ListingItem from "./ListingItem";

import listingCss from "./listingCss";

const Listing = ({ route, navigation }) => {
  const { id, name } = route.params;

  const [refreshing, setRefreshing] = useState(false);

  const _DATA = [...Array(11)].map((_, idx) => {
    const id = idx + 1;

    return {
      id,
      name: "Organization Name " + id,
    };
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={listingCss.container}>
      <Text style={listingCss.title}>
        {name} ID: {id}
      </Text>

      <FlatList
        contentContainerStyle={listingCss.list}
        data={_DATA}
        ListEmptyComponent={() => <Text>Хоосон байна</Text>}
        renderItem={({ item }) => (
          <ListingItem data={item} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Listing;
