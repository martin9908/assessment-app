import React from "react";
import { StyleSheet, View } from "react-native";

import data from "../consts/Data.json";
import Header from "../components/Header";
import FormGroup from "../components/FormGroup";
import { FieldItemTypes } from "../types";

const AppScreen = () => {
  const { Title, Subtitle, Fields } = data;
  const fieldItems = Fields as FieldItemTypes[];

  return (
    <View>
      <Header title={Title} subtitle={Subtitle} />
      <View style={styles.container}>
        <FormGroup fields={fieldItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default AppScreen;
