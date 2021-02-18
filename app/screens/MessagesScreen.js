import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Sebastian Schreuder",
    description: "Hey! Is this item still available?",
    image: require("../assets/sebastian.jpg"),
  },
  {
    id: 2,
    title: "Sebastian Schreuder",
    description:
      "I'm interested in this item. Can you sell it now?",
    image: require("../assets/sebastian.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Sebastian Schreuder",
              description: "Nevermind!",
              image: require("../assets/sebastian.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
