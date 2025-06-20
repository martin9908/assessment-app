import React, { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { FieldTypes } from "../types";
import Button from "./Button";
import FormInput from "./FormInput";

type Vars = Record<string, string>;

const FormGroup = ({ fields }: FieldTypes) => {
  const [inputs, setInputs] = useState<Vars | undefined>(undefined);

  const handleChange = (text: string, key: string) => {
    setInputs((prev) => ({ ...prev, [key]: text }));
  };
  const useParseString = (template: string, vars: Vars) => {
    return template.replace(/\$\{([^}]+)\}/g, (_, key) => vars[key] || "");
  };

  const onPressHandler = (template: string) => {
    const result = useParseString(template, inputs as Vars);

    Alert.alert("Alert", result);
  };

  const renderItem = (item: any) => {
    switch (item.Type) {
      case "H1":
        return <Text style={styles.label}>{item.Text}</Text>;
      case "Text":
        return (
          <FormInput
            placeholder={item.Placeholder}
            onChangeText={(value) => handleChange(value, item.ID)}
          />
        );
      case "Button":
        return (
          <Button
            label={item.Title}
            onPressHandler={() => onPressHandler(item.AlertMessage)}
          />
        );
    }
  };

  return (
    <View>
      {fields.map((item, index) => {
        return (
          <View key={index} style={{ marginVertical: 6 }}>
            {renderItem(item)}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FormGroup;
