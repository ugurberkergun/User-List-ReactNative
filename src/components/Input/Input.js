import React from 'react'
import { TextInput, View } from 'react-native'
import styles from "./Input.style"

function Input({value,onType}) {
  return (
      <View  style={styles.container}>
          <TextInput style={styles.input}
          onChangeText={onType}
          value={value}
          ></TextInput>
    </View>
  )
}

export default Input