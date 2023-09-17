import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const MyInput = ({
  placeholder,
  value,
  type = "default",
  onChangeText,
  maxLength,
  onFocus,
  onBlur,
  css,
  /* Formik */
  touched,
  error,
}) => {
  /* keyboardType:
        decimal-pad
        email-address
        number-pad
        numeric
        phone-pad
        web-search */

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, css]}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          value={value}
          keyboardType={type === "password" ? "default" : type}
          secureTextEntry={type === "password" ? !showPassword : false}
          maxLength={maxLength}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {value && (
          <TouchableOpacity onPress={() => onChangeText("")}>
            <EvilIcons name="close-o" size={24} color="gray" />
          </TouchableOpacity>
        )}

        {value && type === "password" && (
          <TouchableOpacity
            style={styles.showHidePass}
            onPress={() => setShowPassword((val) => !val)}
          >
            {showPassword ? (
              <FontAwesome5 name="eye-slash" size={20} />
            ) : (
              <FontAwesome5 name="eye" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,

    paddingHorizontal: 6,
  },
  input: {
    flex: 1,
    minHeight: 40,
  },
  showHidePass: {
    marginLeft: 6,
  },

  errorText: {
    color: "red",

    marginTop: 2,
    marginLeft: 4,
  },
});
