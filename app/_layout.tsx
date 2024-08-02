import {Slot} from 'expo-router';
import React from 'react';
// import 'react-native-reanimated';
// // @ts-ignore
// import Splash from "../assets/images/splash.png"
// import {
//   Mulish_300Light,
//   Mulish_300Light_Italic,
//   Mulish_400Regular,
//   Mulish_500Medium,
//   Mulish_700Bold, Mulish_800ExtraBold,
//   useFonts,
// } from '@expo-google-fonts/mulish';

// import {ImageBackground, StyleSheet} from "react-native";
// import store, {persistor} from "../store";
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Provider} from "react-redux";
// import {PersistGate} from "redux-persist/lib/integration/react";
// import {StatusBar} from "expo-status-bar";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Toast from 'react-native-toast-message'

const RootLayoutNav = () => {
  return (<Slot/>);
}

export default RootLayoutNav

/**
 * Redux framework is used heavily for store
 * management. The store holds the application
 * state and is passed to all react components
 * with the help of the Provider tag
 */

// import loadFonts from "../../assets/fonts";

/**
 *   handles the application
 *  navigation with redux framework
 */

// const styles = StyleSheet.create({
//   image: {
//     flex: 1, height: '100%', width: '100%',
//     justifyContent: 'center', alignItems: 'center'
//   }
// })

// const Suspender = () => <ImageBackground style={styles.image} source={Splash}/>
// const loadFonts = () => {
//   return useFonts({
//     bold: Mulish_800ExtraBold,
//     medium: Mulish_500Medium,
//     regular: Mulish_400Regular,
//     light: Mulish_300Light,
//     italic: Mulish_300Light_Italic,
//   });
// }

// function AppProvider() {
//   const [loaded] = loadFonts();
//   if (!loaded) return <Suspender/>;
//   return (
//     <SafeAreaProvider style={{flex: 1}}>
//       <PersistGate persistor={persistor} loading={<Suspender/>}>
//         <Provider store={store}>
//           <Slot/>
//           {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
//         </Provider>
//       </PersistGate>
//       <StatusBar networkActivityIndicatorVisible style="auto"/>
//     </SafeAreaProvider>
//   );
// }


// export default AppProvider;
