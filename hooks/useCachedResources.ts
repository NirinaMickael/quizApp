import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
export default function useCachedResources (){
  const [isLoadingComplete,setLoadingComplete] = useState(false);
  // Load any resources or data that we need prior to rendering the app
  useEffect(()=>{
    async function loadResourcesAndDataAsync() {
        try {
            SplashScreen.preventAutoHideAsync();
            //load Fonts
            await Font.loadAsync({
              ...FontAwesome.font,
              'space-mono':require('../assets/fonts/SpaceMono-Regular.ttf')
            });
        } catch (error) {
          // we might want to provide this error information to an erreor reportin g service
          console.warn(error)
        }finally{
          setLoadingComplete(true);
          SplashScreen.hideAsync();
        }
    }
    loadResourcesAndDataAsync();
  },[])
  return isLoadingComplete;
}
