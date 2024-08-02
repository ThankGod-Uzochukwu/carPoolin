import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Press from '@/components/Press'
import Back from '@/components/Back'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';

const order = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{ backgroundColor: '#7AA6FB', height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <Back>
            <AntDesign name="left" size={24} color="white" />
          </Back>
        </View>
        <View>
          <View>
            <Text>Date</Text>
            <View style={{ flexDirection: 'row' }}>
              <Press>
                <Text>Today</Text>
              </Press>
              <Press>
                <Text>Tomorrow</Text>
              </Press>
              <Press>
                <Text>Other Date</Text>
              </Press>
            </View>
          </View>
          <View>
            <Text>Date</Text>
            <View style={{ flexDirection: 'row' }}>
              <Press>
                <Text>1</Text>
              </Press>
              <Press>
                <Text>2</Text>
              </Press>
              <Press>
                <Text>3</Text>
              </Press>
              <Press>
                <Text>4</Text>
              </Press>
            </View>
          </View>
        </View>
        <Press onPress={() => router.push('/order')} style={{ marginTop: '24%', backgroundColor: '#6E6E6F', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
          <Text>Order Now</Text>
        </Press>
      </ScrollView>
    </SafeAreaView>
  )
}

export default order