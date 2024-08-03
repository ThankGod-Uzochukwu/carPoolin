import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import Press from '@/components/Press'
import Back from '@/components/Back'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Octicons from '@expo/vector-icons/Octicons';
import { VerticalLine, HorizontalLine } from '@/components/Lines'

const Order = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{ backgroundColor: '#7AA6FB', height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginTop: 30 }}>
            <Back>
              <AntDesign name="left" size={24} color="white" />
            </Back>
            <Text style={{ fontSize: 24, fontWeight: "700", }}>21€</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <View>
              <View style={{ marginHorizontal: 15, marginTop: '15%', backgroundColor: '#fff', width: 15, height: 15, borderRadius: 10, justifyContent: 'center', }}>
                <View style={{ backgroundColor: '#7AA6FB', width: 8, height: 8, alignSelf: 'center', borderRadius: 5, }} />
              </View>
              <View style={{ marginLeft: 21, marginBottom: -70 }}>
                <VerticalLine />
              </View>
              <View style={{ marginHorizontal: 15, backgroundColor: '#fff', width: 15, height: 15, borderRadius: 10, }} />
            </View>

            <View style={{ width: '70%', marginLeft: -10 }}>
              <View style={{ marginTop: 15, }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                  <Text style={{ fontSize: 28, color: '#FFF', fontWeight: '600', lineHeight: 29 }}>16:40</Text>
                  <Text style={{ fontSize: 18, color: '#E6E7EA', fontWeight: '500' }}>Brussels</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#E6E7EA', fontWeight: '500', marginTop: 5 }}>Pick up at Brussels</Text>
              </View>
              <View style={{ marginTop: 45, }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                  <Text style={{ fontSize: 28, color: '#FFF', fontWeight: '600', lineHeight: 29 }}>17:20</Text>
                  <Text style={{ fontSize: 18, color: '#E6E7EA', fontWeight: '500' }}>Ghent</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#E6E7EA', fontWeight: '500', marginTop: 5 }}>Drop off at Ghent-Sinf-</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../assets/images/pp.png')} />
          <View>
            <Text style={{ fontSize: 28, fontWeight: '700', lineHeight: 30 }}>Dishu</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 23 }}>4.99</Text>
              <Octicons name="star-fill" size={18} color="yellow" />
              <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 23 }}>(347 reviews)</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30, marginHorizontal: 15, marginLeft: 45, marginTop: 30 }}>
          <Fontisto name="car" size={32} color="black" />
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Big White Car</Text>
        </View>
        <Press onPress={() => router.push('/order')} style={{ marginTop: '10%', backgroundColor: '#6E6E6F', height: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 50, marginHorizontal: 15, marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 22 }}>Order Now</Text>
        </Press>

        <Text style={{ marginHorizontal: 15, textAlign: 'center', lineHeight: 23, color: '#6e6e6e', fontSize: 16, marginTop: 10 }}>By clicking on "Order Now" button, I agree with the{'\n'}Terms and Policies of using CarPoolin.</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Order