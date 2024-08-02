import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Press from '@/components/Press'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFF0a1' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Image style={{ width: 400, height: 200 }} source={require("@/assets/images/lambo.png")} />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 32 }}>CarPoolin</Text>
          <Text style={{ fontWeight: '600', fontSize: 16 }}>Drive & Save Money</Text>
        </View>
        <Press onPress={() => router.push('/search')} style={{ marginTop: '24%', backgroundColor: '#6E6E6F', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
          <AntDesign name="arrowright" size={24} color="white" />
        </Press>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding