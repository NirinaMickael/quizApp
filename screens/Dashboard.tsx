import { Ionicons } from "@expo/vector-icons"
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { Context } from "react"
import { HomeScreen, ResultScreen, SettingScreen, TakeQuizScreen } from "."
import CustomerDrawer from "../components/customerDrawer"
import { ThemeTypeContext } from "../types"

const DrawerScreen = createDrawerNavigator()
export default function Dashboard() {
    return (
      <NavigationContainer independent={true}
      >
        <DrawerScreen.Navigator
         initialRouteName="Home"
         backBehavior="firstRoute"
         drawerContent={(props:DrawerContentComponentProps)=><CustomerDrawer {...props} />}
         screenOptions = {{
          drawerLabelStyle: {
            color:"#fff",
            fontSize:15,
            fontWeight:"600",
            marginLeft:-10
          }
         }}
        >
          <DrawerScreen.Screen name="Home" component={HomeScreen}
          options= {{
            drawerIcon : ({color})=>{
              return <Ionicons name="home-outline" color="#fff" size={22} />
            }
          }}
          />
          <DrawerScreen.Screen
            name="Results"
            component={ResultScreen}
            options= {{
              drawerIcon : ({color})=>{
                return <Ionicons name="checkbox-outline" color="#fff" size={22} />
              }
            }}
          />
          <DrawerScreen.Screen
            name="TakeQuiz"
            component={TakeQuizScreen}
            options= {{
              drawerIcon : ({color})=>{
                return <Ionicons name="help-outline" color="#fff" size={22}/>
              }
            }}
          />
          <DrawerScreen.Screen
            name="Settings"
            component={SettingScreen}
            options= {{
              drawerIcon : ({color})=>{
                return <Ionicons name="settings-outline" color="#fff" size={22}/>
              }
            }}
          />
          <DrawerScreen.Screen
            name="About"
            component={SettingScreen}
            options = {{
              drawerIcon : ({color}) =>{
                return <Ionicons name="document-outline" color="#fff" size={22} />
              }
            }}
          />
        </DrawerScreen.Navigator>
      </NavigationContainer>
    )
  } 

function useContext(ThemeContext: Context<ThemeTypeContext>) {
  throw new Error("Function not implemented.")
}
