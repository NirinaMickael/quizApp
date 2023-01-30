import { Ionicons } from '@expo/vector-icons'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { SvgXml } from 'react-native-svg'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Svg from '../helpers/Svg'
import { View ,Text} from './Themed'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function customerDrawer(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex:1
      }}
    >
      <DrawerContentScrollView {...props}
      style={{
        backgroundColor:Colors.dark.background,
      }}
      >
        <View
          style={{
            height:Layout.window.height/4,
            width: '100%',
            display:'flex',
            flexDirection:"row",
            justifyContent:'center'
          }}
        >
          <SvgXml xml={Svg.question} width="60%" height="60%"></SvgXml>
        </View>
        <View style={{ flex: 1, marginTop: 10,height:Layout.window.height/1.6}}>
          <DrawerItemList {...props} />
        </View>
        <View
          style ={{
            borderTopWidth:1,
            borderTopColor:"black",
            display:'flex',
            flexDirection:'row',
            padding:10
          }}
        > 
          <TouchableOpacity
          style={styles.boutton}
          onPress={()=>{navigation.navigate("Root")}}
          >
          <View 
            style={styles.container}
          >
              <Ionicons name="exit-outline" size={22} color="#fff"/>
              <Text style={styles.label} >Sign Out</Text>            
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.boutton}
          >
          <View 
            style={styles.container}
          >
              <Ionicons name="share-outline" size={22} color="#fff"/>
              <Text style={styles.label} >Share</Text>            
          </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display:'flex',
    flexDirection:'row'
  },
  label : {
    color:"#fff",
    fontSize:15,
    fontWeight:"600",
    marginHorizontal:5
  },
  boutton : {
    marginHorizontal:10
  }
})