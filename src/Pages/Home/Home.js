import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, SafeAreaView,Text, TouchableOpacity, View } from 'react-native'
import User from '../../components/Users/User';
import styles from "./Home.style"
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"


function Home(props) {
  const [userList,setUserList] = useState([]);
  
  useEffect(() => {
    fetchData()
  },[])
  
  function navigateToPage(){
    props.navigation.navigate("Add New User")
  }
  const handleProductSelect = (id) => {
    props.navigation.navigate("DetailPage", { id })
  }

  async function fetchData(){
    const response = await axios.get(
      "https://5fc9346b2af77700165ae514.mockapi.io/simpsons",
      );
      setUserList(response.data)
      //Feature should be added: This data should save to device storage with Async-Storage
  }
 


  //Feature should be added: 
  //Data should be taken from Storage and properties should be sent renderUser
  const renderUser = ({item}) =><User avatar={item.avatar} name={item.name} id={item.id} onSelect={() =>handleProductSelect(item.id)} ></User>;
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
          <FlatList keyExtractor={(item,index) => item.id.toString()} data={userList} renderItem={renderUser}/>
      </View>
      <View style={styles.bottom}>
          <TouchableOpacity style={styles.addedbutton} onPress={navigateToPage}><Text style={styles.butonText}>Add</Text></TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}


export default Home