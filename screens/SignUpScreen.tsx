import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'
import { BaseImage, Button, Input, Text, View } from '../components/Themed'
import Font from '../constants/Font'
import {Svg} from '../helpers/Svg'
import { styles } from '../styles/themeStyles'
export function SignUpScreen({ navigation }: { navigation: any }) {
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginHorizontal:10,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: Font.text.Xsmall,
              ...styles.text,
            }}
          >
            Do you have already an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: Font.text.small,
                ...styles.text,
                fontWeight: 'bold',
                marginHorizontal: 5,
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
