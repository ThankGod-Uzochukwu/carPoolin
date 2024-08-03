import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Press from '@/components/Press'
import { router } from 'expo-router'
import { HorizontalLine, VerticalLine } from '@/components/Lines'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = () => {

    const [isSwitched, setIsSwitched] = useState(false);

    const handlePress = () => {
        setIsSwitched(!isSwitched);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <View style={{ backgroundColor: '#7AA6FB', height: 320, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <View style={{ marginHorizontal: 15, marginTop: 40 }}>
                        <Text style={{ fontSize: 24, color: '#fff', fontWeight: '600' }}>Where are{"\n"}you going?</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <View style={{ marginHorizontal: 15, marginTop: '15%', backgroundColor: '#fff', width: 15, height: 15, borderRadius: 10, justifyContent: 'center', }}>
                                <View style={{ backgroundColor: '#7AA6FB', width: 8, height: 8, alignSelf: 'center', borderRadius: 5, }} />
                            </View>
                            <View style={{ marginLeft: 21, marginBottom: -70 }}>
                                <VerticalLine />
                            </View>
                            <View style={{ marginHorizontal: 15, backgroundColor: '#fff', width: 15, height: 15, borderRadius: 10, }} />
                        </View>

                        {isSwitched ? (
                            <>
                                <View style={{ width: '70%', marginLeft: -10 }}>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#E6E7EA', fontWeight: '500', lineHeight: 29 }}>From</Text>
                                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>Brussels</Text>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <HorizontalLine />
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ fontSize: 16, color: '#E6E7EA', fontWeight: '500', lineHeight: 29 }}>To</Text>
                                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>Ghent</Text>
                                    </View>
                                </View>
                                <Press onPress={handlePress} style={{ height: 50, width: 50, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginRight: 10 }}>
                                    <MaterialCommunityIcons name="compare-vertical" size={24} color="black" />
                                </Press>
                            </>
                        ) : (
                            <>
                                <View style={{ width: '70%', marginLeft: -10 }}>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#E6E7EA', fontWeight: '500', lineHeight: 29 }}>To</Text>
                                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>Ghent</Text>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <HorizontalLine />
                                    </View>

                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ fontSize: 16, color: '#E6E7EA', fontWeight: '500', lineHeight: 29 }}>From</Text>
                                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>Brussels</Text>
                                    </View>
                                </View>
                                <Press onPress={handlePress} style={{ height: 50, width: 50, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginRight: 10 }}>
                                    <MaterialCommunityIcons name="compare-vertical" size={24} color="black" />
                                </Press>
                            </>

                        )}
                    </View>
                </View>
                <View style={{ marginTop: 40, marginHorizontal: 15 }}>
                    <View>
                        <Text style={{ fontSize: 32, fontWeight: '800' }}>Date</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, gap: 25 }}>
                            <Press>
                                <Text style={{ color: '#7AA6FB', fontSize: 20, fontWeight: '700' }}>Today</Text>
                            </Press>
                            <Press>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#6E6E6F' }}>Tomorrow</Text>
                            </Press>
                            <Press style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#6E6E6F' }}>Other Date</Text>
                                <AntDesign name="calendar" size={20} color="#6E6E6F" />
                            </Press>
                        </View>
                    </View>
                    <View style={{ marginTop: 30, }}>
                        <Text style={{ fontSize: 32, fontWeight: '800' }}>Passengers</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20, gap: 30 }}>
                            <Press style={{ backgroundColor: '#7AA6FB', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 0.2 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>1</Text>
                            </Press>
                            <Press style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 0.2 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#6E6E6F' }}>2</Text>
                            </Press>
                            <Press style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 0.2 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#6E6E6F' }}>3</Text>
                            </Press>
                            <Press style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 0.2 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#6E6E6F' }}>4</Text>
                            </Press>
                        </View>
                    </View>
                </View>
                <Press onPress={() => router.push('/order')} style={{ marginTop: '10%', backgroundColor: '#6E6E6F', height: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 50, marginHorizontal: 15, marginBottom: 10 }}>
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 22 }}>Search</Text>
                </Press>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search