import React, { useEffect, useState } from 'react'
import { SafeAreaView,Text, View,Image} from 'react-native'
import {useFetch} from "../../components/Fetch"
import styles from "./UserDetails.style"
function UserDetails({route}) {

  const { id } = route.params
  const { loading, error, data } = useFetch(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`)
  

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_img}>
        <Image style={styles.image} source={{uri: data.avatar}}></Image>
      </View>
      <View style={styles.container_context}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.job}>{data.job}</Text>
      </View>
      
        
    </SafeAreaView>
  )
}

export default UserDetails