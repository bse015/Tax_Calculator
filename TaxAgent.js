import React, { Component } from 'react';

import {  StyleSheet, View, TextInput, Image,KeyboardAvoidingView,
           TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';

import {Container, Header, Title,  Content, Picker, Footer, FooterTab,
                Button, Left, Body, Text ,Icon, Card, CardItem, CardSwiper } from 'native-base';  

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';

import {Avatar} from 'react-native-elements';

import MenuButton from './components/MenuButton';

import { NavigationEvents } from 'react-navigation';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.getListCall= this.getListCall.bind(this);
     this.GetListItem= this.GetListItem.bind(this);
    this.state = {
      search: '',
      active: false,
      searchType: '',
      searchValidator: true,
      data: '',
      dataSource: [],
      isLoading: false,
      JSONResult: "",
    };
  }


  getListCall(){
    var that = this;
    var url = "http://167.71.64.243:9090/userLogin/listAgents";
    console.log("-----------url:"+url);
  
    fetch(url,{method: 'POST'}).then(function (response) {
     return response.json();
    }).then(function (result) {
      if(result.status === "success"){
       that.setState({ 
       JSONResult: result.data,
     });
   }
    console.log(result.data);
 }).catch(function (error) {
    console.log("-------- error ------- "+error);
    alert("result:"+error)
 });
 }




 GetListItem ( City) {
   alert(City)
  
}
 

ItemSeparatorLine = () => {
  return (
    <View
    style={{ height: 3,width: wp(100),backgroundColor: "#111a0b",}}
    />
  );
}


  updateSearch = search => {
    this.setState({ search });
  };

    

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange)
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange)
  }

  _orientationDidChange(orientation) {
    console.log(orientation)
  }



componentDidMount(){
  {this.AgentList()}
}

  AgentList = () =>{
    console.log('getting data from fetch+++++++++++++++++++++++++')
    if (this.state.password != '') {
      if (this.state.email != '') {
      
  fetch('http://167.71.64.243:9090/userLogin/listAgents', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": this.state.email,
      "password": this.state.password,
    }
    )},)
    .then((response) => response.json())
    .then((json) => {
      if(json.success === true )
      {
        this.setState({
        dataSource : json.data.user,
      })
       // In this block you can do something with new state.
       this.arrayholder = json.data.user;
    }
    console.log(this.state.dataSource);
    console.log('getting data from fetch => ',json.data)
    })
    .catch((error) => {
      alert("result:"+error)
      console.error(error);
    });
  }
else{
  alert('Please Enter Email')
}
} else {
  alert('Please Enter Password');
}
}


searchData(text) {
  if(this.state.searchType === 'name'){
  const newData = this.arrayholder.filter(item => {
    const itemData = item.displayName.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1
  });
  this.setState({
    dataSource: newData,
    text: text
    })
  }
  else if( this.state.searchType === 'city')
  {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.City.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
    this.setState({
      dataSource: newData,
      text: text
      })
  }
  }



validateSearch = (text) => {
  console.log(text);
  let reg =  /^[a-zA-Z][a-zA-Z\s]*$/;
  if (reg.test(text)) {
    console.log("Name is Correct");
    this.setState({
       searchValidator: true, 
       search: text
       })
  }
  else {
    console.log("Name is Not Correct");
    this.setState({ 
      searchValidator: false 
    })
    
  }
}

FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 3,
        width: wp("100%"),
        backgroundColor: "#607D8B",

      }}
    />
  );
}


  render() {
     
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    const { search } = this.state;

    console.log('from')
  console.log(this.state.searchType)
  

   
    return (
      <Container style={styles.cntainer}>
      <Header style={{backgroundColor: '#01444e'}}>
        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>
   
         <Body>
           <Title>Tax Agent</Title>
         </Body>
   
      
   
           </Header>
   
       <Content>
       
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
  
         <Image source= {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOvD9rLFkJnlOx9H-ggqLetyQSTmseSUa0BAYCCCNOOfgx_XA&s'}}
         style = {styles.img}/>

       <Text style= {styles.textContainer}>
               Find Tax Agent 
            </Text>

            <Text style={styles.txt}>Our Tax Agents are trustworthy. You can trust them. </Text>

             <Picker
  selectedValue={this.state.searchType}
  style={styles.type}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({searchType: itemValue})
  }>
  <Picker.Item label="Select Seacrch Type" value="" />
  <Picker.Item label="Name" value="name" />
  <Picker.Item label="City" value="city" />
</Picker>


<View style={[styles.inputContainer, 
          {borderColor: !this.state.searchValidator? 'red':'orange'}]}>
     <Image style={styles.inputIcon} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNd8ZxnnPofpPJ6loy4NwgAc0UxQ72iTp7WY-Cd4d-9EgUSenOQ&s'}}
      />
     <TextInput style={styles.inputs}
             onChangeText={(text) => this.searchData(text)}
             value={this.state.text}
             underlineColorAndroid='transparent'
             placeholder="Search Here" />
     </View>

     <NavigationEvents
                onDidFocus={() => this.AgentList()}
                />

    <FlatList
      data={ this.state.dataSource }
      ItemSeparatorComponent = {this.ItemSeparatorLine}
 
  renderItem={({item}) => 
   
   <TouchableOpacity style={styles.List} activeOpacity={2}
    onPress={() =>
      this.props.navigation.navigate('CompleteProfile', {
        JSON_ListView_Clicked_Item_email: item.email,
        JSON_ListView_Clicked_Item_city: item.City,
        JSON_ListView_Clicked_Item_name: item.displayName,
        JSON_ListView_Clicked_Item_rating: item.Feedback,
        JSON_ListView_Clicked_Item_address: item.Address,
        JSON_ListView_Clicked_Item_phone: item.Phone,
        JSON_ListView_Clicked_Item_education: item.Education,
        JSON_ListView_Clicked_Item_officeaddress: item.OfficeAddress,
        JSON_ListView_Clicked_Item_officephone: item.OfficePhone,
        JSON_ListView_Clicked_Item_about: item.About,
        
      })
    }
    >

      <View style={{flexDirection: 'row'}}>

    <Avatar
             rounded
             size={80}
             icon={{name: 'user', type: 'font-awesome'}}
             source={{
             uri: 'data:image/png;base64,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'
            }}
            showEditButton= {false}
  
            containerStyle={{flexDirection: 'row', marginLeft: wp(4), marginTop: hp(0), marginBottom: hp(0)}}
          />

<View style={{flexDirection: 'column'}}>
  <Text 
  style={{ marginLeft: wp(4), marginTop: hp(1), marginBottom: hp(0),fontWeight: 'bold', fontSize: wp(5)}} >
   Name: {item.displayName} 
     </Text>

     <Text 
  style={{ marginLeft: wp(4), marginTop: hp(0), marginBottom: hp(0),fontWeight: '500', fontSize: wp(5)}} >
     Email: {item.email} 
     </Text>

     <Text 
  style={{ marginLeft: wp(4), marginTop: hp(0), marginBottom: hp(0),fontWeight: '500', fontSize: wp(5)}} >
     From: {item.City} 
     </Text>

     {/* <Text 
  style={{ marginLeft: wp(4), marginTop: hp(0), marginBottom: hp(0),fontWeight: '500', fontSize: wp(5)}} >
     From: {item.Feedbacks[0].rating} 
     </Text> */}


     </View>

  </View>
  
</TouchableOpacity>


}
keyExtractor={(item, index) => index}

/>

    
 </KeyboardAvoidingView>
 
         </Content>
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
    padding: 25,
    backgroundColor: '#cc7d16',
    alignItems: 'center',
  },
  cntainer: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'center', 
},  
textContainer: {
    textAlign: 'center',
   color: 'white',
   fontSize: wp(8),
   fontWeight: 'bold',
   marginTop: 0,
   padding: 8,
},
responsiveBox: {
  width: wp('100%'),
  height: hp('100%'), 
  justifyContent:'center',
}, 
img:{
  flex: 1,
  width: wp('50%'),
  height: hp('18%'),
 marginLeft: wp(0),
 marginTop: hp(2),
 borderRadius: 25,
},
txt: {
  fontSize :wp(4),
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  paddingBottom: 15,
},
button: {
  width: wp('50%'),
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#00BCD4',
  borderRadius: 7,
  marginTop: hp(2),
  marginBottom: hp(3)
},
TextStyle: {
  color: '#fff',
  textAlign: 'center',
  fontSize: wp(7)
},
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(7),
  marginBottom:wp(2),
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
type: {
  height: hp(6), 
  width: wp(75), 
  backgroundColor: '#282c34', 
  marginBottom: hp(2),
  color: 'white',
  textAlign: 'center',
  borderColor: '#3e3e3e',
  justifyContent: 'center',
},
  FlatListItemStyle: {
    padding: 15,
    fontSize: 18,
    height: 44,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  List: {
    width: wp('100%'),
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
});