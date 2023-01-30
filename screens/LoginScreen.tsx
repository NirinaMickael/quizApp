import { SafeAreaView, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Button, Input, Text, View } from '../components/Themed'
import Font from '../constants/Font'
import Svg from '../helpers/Svg'
import { styles } from '../styles/themeStyles'

export default function LoginScreen({ navigation }: { navigation: any }) {
  const handleSubmit = () =>{
    navigation.navigate("Dashboard")
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SvgXml xml={Svg.knoledge} width="100%" height="35%" />
        <Text
          style={{
            fontSize: Font.title.small,
            ...styles.center,
            ...styles.text,
            fontWeight: 'bold',
          }}
        >
          Login in
        </Text>
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
        <Button text="Log in" style={styles.button} action={()=>navigation.navigate("Dashboard")} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginHorizontal:10
          }}
        >
          <Text
            style={{
              fontSize: Font.text.Xsmall,
              ...styles.text,
            }}
          >
            Create an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Root')}>
            <Text
              style={{
                fontSize: Font.text.small,
                ...styles.text,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
