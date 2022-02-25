import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        // backgroundColor:"#e0e0e0"
        flex:1
    },
    bottom:{
        flex:0.05,
        alignItems:"center"
    },
    list:{
        flex:0.85
    },
    addedbutton:{
        width:60,
        height:60,
        backgroundColor:"#2196F3",
        borderRadius:60,
        alignItems:"center",
        
    },
    butonText:{
        color:"white",
        paddingTop:15,
        fontWeight:"bold",
        fontSize:20
    }
})