import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BaseImage, Button, Input, Text, View } from '../components/Themed'
import Font from '../constants/Font'
import { styles } from '../styles/themeStyles'
// const img = require('../assets/images/mimi.jpg')
export function SignUpScreen({navigation}:{navigation:any}) {
  return (
    <View style={styles.container}>
      {/* <BaseImage style={styles.image} source={img} /> */}
      <SafeAreaView>
        <Text
          style={{
            fontSize: Font.title.small,
            ...styles.center,
            ...styles.text,
            fontWeight:"bold"
          }}
        >
          Sign Up
        </Text>
        <Input
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoFocus={true}
          textContentType="emailAddress"
        />
        <Input
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoFocus={true}
          textContentType="username"
        />
        <Input
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoFocus={true}
          secureTextEntry={true}
          textContentType="password"
        />
        <Button text="Sign up" style={styles.button} />
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Text
            style={{
              fontSize: Font.text.Xsmall,
              ...styles.text,
            }}
          >
            Do you have already an account?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: Font.text.small,
                ...styles.text,
                fontWeight:"bold",
                marginHorizontal:5
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
