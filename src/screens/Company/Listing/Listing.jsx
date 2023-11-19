import React, { useCallback, useEffect, useState } from "react";
import { View, Text, RefreshControl, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { renderContent } from "../../../lib/otherFuncs";
import Axios from "../../../../Axios";
import ListingItem from "./ListingItem";

import listingCss from "./listingCss";

const Listing = () => {
  const goto = useNavigation();
  const router = useRoute();
  const { name } = router;

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Axios.get(`/organization/list`)
      .then((res) => {
        if (res.data) {
          setData(res.data.data.list);

          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={listingCss.container}>
      <Text style={listingCss.title}>{name}</Text>

      {renderContent(
        { isLoading, isError },
        <FlatList
          contentContainerStyle={listingCss.list}
          data={data}
          ListEmptyComponent={() => (
            <Text style={listingCss.errorText}>Хоосон байна</Text>
          )}
          renderItem={({ item }) => <ListingItem data={item} goto={goto} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default Listing;
