import React, { useState } from 'react'
import { Button, TextInput, View ,SafeAreaView,Text} from 'react-native';
import { Formik } from "formik";
import Input from '../../components/Input/Input';
import styles from "./NewUser.style"



function NewUser() {

  function handleAdd(values){
    //Feature should be added: This data should added to device storage with Async-Storage
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <Formik initialValues={{name:"",job:"",avatar:""}} onSubmit={handleAdd}>
        {({handleSubmit,handleChange,values})=> (
        <View>
          <Text>Name Surname:</Text>
          <Input value={values.name}
          onType={handleChange("name")}
          ></Input>
          <Text>Job Title:</Text>
          <Input value={values.job}
          onType={handleChange("job")}
          ></Input>
          <Text>Image Link:</Text>
          <Input value={values.avatar}
          onType={handleChange("avatar")}
          ></Input>
          <View style={styles.addbutton}>
          <Button  title='Add User' onPress={handleSubmit}></Button>
          </View>
        </View>
      )}

      </Formik>
    </SafeAreaView>
  )
}

export default NewUser