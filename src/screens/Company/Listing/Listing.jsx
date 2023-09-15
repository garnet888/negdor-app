import React, { useCallback, useState } from "react";
import { View, Text, RefreshControl, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListingItem from "./ListingItem";

import listingCss from "./listingCss";

const Listing = () => {
  const goto = useNavigation();
  const {
    params: { id, name },
    
  } = useRoute();

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
        renderItem={({ item }) => <ListingItem data={item} goto={goto} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Listing;
