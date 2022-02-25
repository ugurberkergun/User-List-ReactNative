import React from 'react'
import { Button, View,Text, Image, TouchableOpacity } from 'react-native'
import styles from "./User.style"
const User = ({onSelect,avatar,name,id }) => {
    

  return (
    <TouchableOpacity  style={styles.container} onPress={onSelect}>
        <View style={styles.container_img}>
            <Image style={styles.image} source={{uri: avatar}}></Image>
        </View>
        <View style={styles.container_user}>
            <Text style={styles.card}>{name}</Text>
        </View>
        <View style={styles.trash_container}>
            <Button style={styles.trash} title='-'></Button>
        </View>
    </TouchableOpacity>
  )
}
export default User