import React, { Component } from 'react';

import {  StyleSheet, View, Image,KeyboardAvoidingView,TextInput, Alert, } from 'react-native'; 

import {Container,Fab, Header, Title, Content, Footer, FooterTab, Button,
              Left, Body, Text,Icon } from 'native-base';  

import ImagePicker from 'react-native-image-picker';

import {Avatar} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';

import DatePicker from 'react-native-datepicker';

import MenuButton from './components/MenuButton';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      active: false,
      name: '',
      email: '',
      cnic: '',
      phone: '',
      address: '',
      city: '',
      education: '',
      officeaddress: '',
      officephone: '',
      about: '',
      nameValidator: true,
      emailValidtor: true,
      cnicValidtor: true,
      phoneValidtor: true,
      addressValidtor: true,
      cityValidtor: true,
      educationValidtor: true,
      officePhoneValidtor: true,
      officeAddressValidtor: true,
      aboutValidtor: true,
    };
  }



  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };
 


      handleSubmit() {
        console.log(this.loginform);
      };
    

      _simpleAlertHandler=()=>{
        Alert.alert(
         'Congratulation',
         'Your Professional Profile Successfully Created',
          );
      }


      componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange)
      }
  
      componentWillUnmount() {
        Orientation.removeOrientationListener(this._orientationDidChange)
      }
  
      _orientationDidChange(orientation) {
        console.log(orientation)
      }
  



      updateProfile = () =>{
        console.log('getting data from fetch+++++++++++++++++++++++++')
        if (this.state.name != '') {
          if (this.state.email != '') {
            if (this.state.cnic != '') {
              if (this.state.phone != '') {
                if (this.state.address != '') {
                  if (this.state.officeaddress != '') {
                    if (this.state.oficephone != '') {
                      if (this.state.city != '') {
                        if (this.state.about != '') {
                          if (this.state.education != '') {
          
      fetch('http://167.71.64.243:9090/userLogin/update', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": this.state.name,
          "email": this.state.email,
          "password": this.state.password,
          "userType": this.state.checked,
          "address": this.state.address,
          "phone": this.state.phone,
          "city": this.state.city,
          "officeaddress": this.state.officeaddress,
          "officephone": this.state.officephone,
          "cnic": this.state.cnic,
          "education": this.state.education,
          "about": this.state.about,
        }
        )},)
        .then((response) => response.json())
        .then((json) => {
          console.log('getting data from fetch => ',json)
        })
        .catch((error) => {
          console.error(error);
        });
        Alert.alert(
          'Congratulation',
         'Your Professional Profile Successfully Created',
         'You can view your profile in the Tax Agent List',
          [
            { text: 'View Profile',
             onPress: () => this.props.navigation.navigate('TaxAgent') 
             },
            {
              text: 'Go to Home!',
              onPress: () => this.props.navigation.navigate('Home'),
            },
          ],
          { cancelable: true }
        );
      }
    else{
      alert('Please Enter Education Correctly')
    }
    } else {
      alert('Please Enter About Your Self Correctly');
    }
    } else {
    alert('Please Enter City Correctly');
    } 
  } else {
      alert('Please Enter Office Phone Correctly');
      } 
    } else {
        alert('Please Enter Office Address Correctly');
        }
      } else {
        alert('Please Enter Address Correctly');
        }
      } else {
        alert('Please Enter Phone No Correctly');
        }
      } else {
        alert('Please Enter CNIC Correctly');
        }
      } else {
        alert('Please Enter Your Registered Email Correctly');
        }
      } else {
        alert('Please Enter Full Name Correctly');
        }
      }



      validateName = (text) => {
        console.log(text);
        let reg =  /^[a-zA-Z][a-zA-Z\s]*$/;
        if (reg.test(text)) {
          console.log("Name is Correct");
          this.setState({
             nameValidator: true, 
             name: text
             })
        }
        else {
          console.log("Name is Not Correct");
          this.setState({ 
            nameValidator: false 
          })
          
        }
      }
        
    
    
      validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(text)) {
          console.log("Email is Correct");
          this.setState({ 
            emailValidator: true, 
            email: text
          })
        }
        else {
          console.log("Email is not Correct");
          this.setState({
            emailValidator: false,
           })
        }
      }


      validateCNIC = (text) => {
        console.log(text);
        let reg = /^\d+$/;
        if (reg.test(text)) {
          console.log("CNIC is Correct");
          this.setState({
             cnicValidator: true, 
             cnic: text
             })
        }
        else {
          console.log("CNIC is Not Correct");
          this.setState({ 
            cnicValidator: false 
          })
          
        }
      }
     
      

      validateSales = (text) => {
        console.log(text);
        let reg =  /^\d+$/;
        if (reg.test(text)) {
          console.log("Sales is Correct");
          this.setState({
             salesValidator: true, 
             phone: text
             })
        }
        else {
          console.log("Sales is Not Correct");
          this.setState({ 
            salesValidator: false 
          })
          
        }
      }
    
    
      validatePhone = (text) => {
        console.log(text);
        let reg =   /^\d+$/;
        if (reg.test(text)) {
          console.log("Mobile No. is Correct");
          this.setState({ 
            phoneValidator: true, 
            phone: text
          })
        }
        else {
          console.log("Mobile No. is not Correct");
          this.setState({
            phoneValidator: false,
           })
        }
      }



      validateOfficePhone = (text) => {
        console.log(text);
        let reg =  /^\d+$/;
        if (reg.test(text)) {
          console.log("Office Phone is Correct");
          this.setState({ 
            officePhoneValidator: true, 
            officephone: text
          })
        }
        else {
          console.log("Office Phone no. is not Correct");
          this.setState({
            officePhoneValidator: false,
           })
        }
      }



      validateCity = (text) => {
        console.log(text);
        let reg =  /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
        if (reg.test(text)) {
          console.log("City is Correct");
          this.setState({
             cityValidator: true, 
             city: text
             })
        }
        else {
          console.log("City Name is Not Correct");
          this.setState({ 
            cityValidator: false 
          })
          
        }
      }
        


      validateAddress = (text) => {
        console.log(text);
        let reg =   /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
        if (reg.test(text)) {
          console.log("Address is Correct");
          this.setState({
             addressValidator: true, 
             address: text
             })
        }
        else {
          console.log("Address is Not Correct");
          this.setState({ 
            addressValidator: false 
          })
          
        }
      }
        

      validateOfficeAddress = (text) => {
        console.log(text);
        let reg =  /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
        if (reg.test(text)) {
          console.log("Office Address is Correct");
          this.setState({
             officeAddressValidator: true, 
             officeaddress: text
             })
        }
        else {
          console.log("Office Address is Not Correct");
          this.setState({ 
            officeAddressValidator: false 
          })
          
        }
      }
        

      validateEducation = (text) => {
        console.log(text);
        let reg = /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
        if (reg.test(text)) {
          console.log("Education is Correct");
          this.setState({
             educationValidator: true, 
             education: text
             })
        }
        else {
          console.log("Education is Not Correct");
          this.setState({ 
            educationValidator: false 
          })
          
        }
      }



      validateAbout = (text) => {
        console.log(text);
        let reg =  /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
        if (reg.test(text)) {
          console.log("About is Correct");
          this.setState({
             aboutValidator: true, 
             about: text
             })
        }
        else {
          console.log("About is Not Correct");
          this.setState({ 
            aboutValidator: false 
          })
          
        }
      }
        
        

      
  render() {   

    return (

      <Container style={styles.cntainer}>

                                       {/*Header of the Page */}

      <Header style={{backgroundColor: '#01444e'}}>

        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>

         <Body>
           <Title>Update Profile</Title>
         </Body>

           </Header>

           {/* Content of the Page */}
   
       <Content>

       <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <Text style= {styles.textContainer}>
       Professional Profile
         </Text>

        <View style={styles.imagepicker}>
             
        <Avatar
             rounded
             size={200}
             icon={{name: 'user', type: 'font-awesome'}}
             source={{
             uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            showEditButton= {true}
            onPress={this.chooseFile.bind(this)}
            onEditPress={this.chooseFile.bind(this)} 
            activeOpacity={0.7}
  
            containerStyle={{ marginLeft: wp(15), marginTop: hp(0), marginBottom: hp(3)}}
          />

           <View style={styles.inputContainer}>

          <Image style={styles.inputIcon}
           source={{uri: 'https://rentalcrates.com/wp-content/uploads/2017/08/pictures-icon-22.gif'}}
                />

          <TextInput style={styles.inputs}
              placeholder="Image Path ">
                 {this.state.filePath.uri}
                </TextInput>
            </View>


            <View style={[styles.inputContainer, 
          {borderColor: !this.state.nameValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/dotty/2x/name.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              blurOnSubmit= {true}
              onChangeText={text => this.validateName(text)}
             />
        </View>


        <View style={[styles.inputContainer, 
          {borderColor: !this.state.emailValidtor? 'red':'orange'}]}>
     <Image style={styles.inputIcon}
         source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}
      />
     <TextInput style={styles.inputs}
      placeholder="Email "
      keyboardType="email-address"
      underlineColorAndroid='transparent'
      onChangeText={text => this.validateEmail(text)}
      />
     </View>



     <View style={[styles.inputContainer, 
          {borderColor: this.state.cnicValidtor? 'orange':'red'}]}>
     <Image style={styles.inputIcon} 
       source={{uri: 'https://cdn4.iconfinder.com/data/icons/black-and-white-business/32/i8_business-512.png'}}
      />
     <TextInput style={styles.inputs}
     placeholder="CNIC # "
     keyboardType="number-pad"
     underlineColorAndroid='transparent'
    onChangeText={text => this.validateCNIC(text)}
        />
     </View>


     <View style={styles.inputContainer}>
     <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1950"
          maxDate="30-12-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 15,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 15,
              borderColor: 'white',
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
     </View>


     <View style={[styles.inputContainer, 
          {borderColor: !this.state.phoneValidtor? 'red':'orange'}]}>
     <Image style={styles.inputIcon} 
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_1UYX8CXtfAdjY9QPI7a25B_vheb-T9aMtPFF136b-2jwDjC&s'}}
                 />
     <TextInput style={styles.inputs}
            placeholder="Mobile No  "
            keyboardType="number-pad"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.validatePhone(text)}/>
     </View>



     <View style={[styles.inputContainer, 
          {borderColor: !this.state.officePhoneValidtor? 'red':'orange'}]}>
    <Image style={styles.inputIcon}
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfA4iK5VQxf-Rnj6CAJEWH1Oh9h0erJauzCQ-BpBimsod5rju&s'}}
      />
    <TextInput style={styles.inputs}
           placeholder="Office Phone No "
           keyboardType="number-pad"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.validateOfficePhone(text)}/>
     </View>

     <View style={[styles.inputContainer, 
          {borderColor: !this.state.officeAddressValidtor? 'red':'orange'}]}>
     <Image style={styles.inputIcon}
             source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_242130.png'}}
      />
     <TextInput style={styles.inputs}
            placeholder="Office Adress "
            keyboardType="default"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.validateAddress(text)}/>
     </View>

     <View style={[styles.inputContainer, 
          {borderColor: !this.state.officeAddressValidtor? 'red':'orange'}]}>
     <Image style={styles.inputIcon}
             source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_242130.png'}}
      />
     <TextInput style={styles.inputs}
            placeholder="Office Adress "
            keyboardType="default"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.validateOfficeAddress(text)}/>
     </View>


     <View style={[styles.inputContainer, 
          {borderColor: !this.state.cityValidtor? 'red':'orange'}]}>
    <Image style={styles.inputIcon} 
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z7T_XfEvdrh7gzYVXUG6HSgYSIJb7Ip3HbLpMZRGWSIEYo4q&s'}}
      />
    <TextInput style={styles.inputs}
              placeholder="City "
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateCity(text)}/>
     </View>



     <View style={styles.inputContainer}>
     <Image style={styles.inputIcon} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNd8ZxnnPofpPJ6loy4NwgAc0UxQ72iTp7WY-Cd4d-9EgUSenOQ&s'}}
      />
     <TextInput style={styles.inputs}
             placeholder=" Designation "
            keyboardType="default"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState(text)}/>
     </View>


     <View style={[styles.inputContainer, 
          {borderColor: !this.state.educationValidtor? 'red':'orange'}]}>
    <Image style={styles.inputIcon}
           source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png'}}
      />
    <TextInput style={styles.inputs}
           placeholder="Education(Latest Deg) "
           keyboardType="default"
           underlineColorAndroid='transparent'
           onChangeText={(text) => this.validateEducation(text)}/>
    </View>


    <View style={[styles.inputContainer1, 
          {borderColor: !this.state.nameValidator? 'red':'orange'}]}>
    <Image style={styles.inputIcon1} 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgkPbIoUoiu4TzOFfc8oyA34M07dYcMWShAlkfHpwGrZpGI-p&s'}}
          />
          <TextInput style={styles.inputs2}
              placeholder="Write Something about you ........"
              keyboardType="default"
              underlineColorAndroid='transparent'
              multiline= {true}
              maxLength= {200}
              onChangeText={(text) => this.validateAbout(text)}  />
        </View>


        <Button block success  style={styles.btn} 
        onPress={this.updateProfile}
       >
          <Text style={styles.btntxt}>
            Submit
            </Text>
                 </Button>

        </View>
          
       </KeyboardAvoidingView>

         </Content>

{/*Footer of the Page */}

         <Footer >
  <FooterTab style={{backgroundColor: '#01444e'}}>
   
  <Button  vertical onPress={() => this.props.navigation.navigate('Home')}>
    <Icon name="home" />
      <Text>Home</Text>
          </Button>
   

          </FooterTab>
        </Footer>

      </Container>
    );
  }}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingHorizontal: 45,
    backgroundColor: '#cc7d16',
  },
  cntainer: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'center', 
    alignItems: 'stretch'
},  
textContainer: {
    textAlign: 'center',
   color: 'white',
   fontSize: wp(8),
   fontWeight: 'bold',
   marginTop: hp(4),
   marginBottom: hp(4),
   marginHorizontal: wp(5) ,
   padding: 0,
},
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(7),
  marginBottom:wp(6),
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
  fontSize: 20,
},
inputIcon:{
width:30,
height:30,
marginLeft:16,
justifyContent: 'center'
},
btntxt: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
},
txt: {
  fontSize :16,
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  marginBottom: 20,
  paddingBottom: 20,
},
inputs1:{
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  borderBottomColor: 'black',
  fontSize: 12,
  margin: 5,
  maxWidth: 500,
  width: 300,
},
Container1:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
},
imgbtn: {
  width: 200,
   height: 200,
    borderRadius: 50,
     alignItems: 'center',
      marginLeft: wp(10),
       marginBottom: hp(4)
       },
inputContainer1: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(30),
  marginBottom:15,
  flexDirection: 'row',
  alignItems:'center'
},
inputIcon1:{
  width:30,
  height:30,
  marginLeft:15,
  marginBottom: 135,
  },
inputs2:{
  height:200,
  marginLeft:16,
  paddingTop: 20,
  borderBottomColor: '#FFFFFF',
  flex:1,
  maxWidth: 250,
  textAlignVertical: 'top',
  fontSize: 20,
    },
    btn: {
      marginVertical: hp('5%')
    }
});