import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import Button from 'react-native-button'
import ResponsiveImage from 'react-native-responsive-image';

export default class LoginForm extends React.Component
{
     constructor(props)
     {
         super(props)

         this.state = {
             isPassenger:false,
             isDriver:false,
             status:false,
             email:'',
             pass:'',
             isValidEmail:false
         }

     }

     validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text,isValidEmail:true})   
        }
        }

    componentWillMount()
    {
        this.setState(()=>{
            return {
                isPassenger:this.props.userType==='rider' ? true : false,
                isDriver:this.props.userType==='driver' ? true : false
            }
        })
    }
     render()
     {
         return(
             <View style={LoginFormStyle.container}>
                 <ResponsiveImage source={require('../assets/logo.png')} initWidth="300" initHeight="100"/>
                  <Text style={LoginFormStyle.heading}>{this.state.isDriver ? "Driver Login" : "Rider Login"}</Text>
                      
                       <View style={LoginFormStyle.form} >
                       <TextInput onChangeText={(text)=>this.validateEmail(text)} placeholder="Email Address" style={LoginFormStyle.InputText}/>
                       <TextInput secureTextEntry={true} placeholder="Password" style={LoginFormStyle.InputText}/>  
                       <Button style={LoginFormStyle.LoginButton} onPress={()=>alert('Pressed')}>Login</Button>
                       
                       <View style={LoginFormStyle.signupText}>
                           <Text style={LoginFormStyle.forgetPassword}>Forget Password</Text>
                           <Text>Don't have an account ? <Text style={{color:'skyblue',fontWeight:'bold'}} onPress={()=>alert("signup")}>Sign up</Text></Text>
                       </View>
                       </View>            
             </View>
         )
     }
}

const LoginFormStyle = StyleSheet.create({

    container:{
         flex:1,
         flexDirection:"column",
         justifyContent:"flex-start",
         alignItems:'center',
         paddingTop:90,
         color:"#ffffff",
         zIndex:10,
         position:'relative'
        },
        form:{
            position:'relative',
            marginTop:40,
            width:"100%",
            height:"100%",
            display:'flex',
            justifyContent:'flex-start',
            alignItems:"center"
        }    
    ,heading:{
        fontSize:20,
        color:"black",
        textAlign:"center",
        paddingTop:15,
        marginBottom:20,
        fontStyle:'italic'
    },
    signupText:{
         marginTop:20,
         color:"black",
         fontSize:12,
         textAlign:"center",
         flex:2,
         flexDirection:'column'
    },
    forgetPassword:{
      fontSize:14,
      color:'skyblue',
      textAlign:'center',
      marginBottom:5,
      fontWeight:'bold'
    },
    LoginButton:{
        padding:"3%",
        textAlign:"center",
        backgroundColor:"#76dbfc",
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        borderRadius:6,
        fontWeight:'bold',
        width:270,
        height:50
    },
    InputText:{
        color:"black",
        borderRadius:1,
        padding:"3%",
        borderBottomWidth:2,
        width:270,
        fontSize:18,
        marginBottom:55
    }
})