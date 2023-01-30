import { ImageProps,Image , Pressable, PressableProps, StyleProp, Text as DefaultText, TextInput, View as DefaultView, ViewStyle } from 'react-native';
import Colors from '../constants/Colors';
import { ThemeContext } from '../hooks/useColorScheme';
import { styles as themStyle } from '../styles/themeStyles';
import { useContext } from 'react';
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const Themes = useContext(ThemeContext);
  const colorFromProps = props[Themes.theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[Themes.theme][colorName];
  }
}
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  text?:string;
  action ?: any;
  color?:string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ThemeProps & PressableProps;
export type InputProps =  ThemeProps &  TextInput["props"];
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return <DefaultText  style={[{ color }, style,{fontWeight:'600'}]} {...otherProps}  />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  return <DefaultView style={[style]} {...otherProps} />;
}

export function  Button(props : ButtonProps){
  const {style,lightColor,darkColor,...otherProps} = props;
  const backgroundColor = useThemeColor({light:lightColor,dark:darkColor},"background");
  
  return (
    <Pressable onPress={props.action} style={[{backgroundColor},style as StyleProp<ViewStyle>]} >
        <Text>{props.text}</Text>
    </Pressable>
  )
}
export function Input (props : InputProps){
  return <TextInput {...props} />
}

export function BaseImage (props:ImageProps) {
  return (
    <Image source={props.source} style={props.style}/>
  )
}