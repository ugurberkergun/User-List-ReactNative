import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        height:60,
        borderTopWidth:0.2,
        borderBottomWidth:0.2,
        borderBottomColor:"#e0e0e0",
        borderTopColor:"#e0e0e0",
        margin:0,
      
        flexDirection:"row",
        flex:1
    },
    card:{
        marginBottom:0,
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        paddingTop:10
    },
    image:{
        borderRadius:5,
        height:50,
        width:80,
    },
    container_img:{
        padding:5,
        flex:0.2,
        alignItems:"flex-start"
    },
    container_user:{
        marginLeft:10,
        padding:5,
        flex:0.6,
        alignItems:"flex-start",
        
    },
    trash_container:{
        marginTop:10,
        flex:0.1,
        
    }

    
})