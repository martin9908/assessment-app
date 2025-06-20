import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonTypes } from "../types";

const Button = ({ label, onPressHandler }: ButtonTypes) => {
  return (
    <TouchableOpacity style={styles.buttonStyles} onPress={onPressHandler}>
      <Text style={styles.labelStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  labelStyles: {
    color: "#fff",
  },
});

export default Button;
