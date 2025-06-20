import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { FormInputTypes } from "../types";

const FormInput = ({ onChangeText, placeholder }: FormInputTypes) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default FormInput;
