import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {AdMobBanner} from 'expo-ads-admob';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.containerBig}>
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        resizeMode="contain"
                        source={require('./assets/home.png')}
                    />
                    <Text style={styles.txtRobot}>นายโรบอท.com</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.coffee}>
                        <Text style={styles.txtCoffee}>สนับสนุนค่ากาแฟแอดมิน :)</Text>
                        <Text style={styles.txtCoffee2}>พร้อมเพย์ 082 781 8941 ชลธี สินสาตร์</Text>
                    </View>
                    <View style={styles.line}/>
                    <TouchableOpacity style={styles.btnTest} onPress={() => this.props.navigation.navigate('ทำข้อสอบ')}>
                        <Text style={styles.txtBtn}>ทำข้อสอบ</Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.menu }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ข้อตกลงการใช้งาน')}>
                        <Text style={{
                            fontFamily: 'SarabunLight',
                            color:'#627498',
                            fontSize: 12,
                            marginTop: 15,
                            textAlign: 'center',
                            marginBottom:10
                        }}>ข้อตกลงการใช้งาน</Text>
                    </TouchableOpacity>
                    <Text style={{
                            fontFamily: 'SarabunLight',
                            color:'#627498',
                            fontSize: 12,
                            marginTop: 15,
                            textAlign: 'center',
                            marginBottom:10
                        }}> | </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ผู้จัดทำ')}>
                        <Text style={{
                            fontFamily: 'SarabunLight',
                            color:'#627498',
                            fontSize: 12,
                            marginTop: 15,
                            textAlign: 'center',
                            marginBottom:10
                        }}>ผู้จัดทำ</Text>
                    </TouchableOpacity>
                </View>

                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-5901161227057601/7244214360"
                    servePersonalizedAds
                    onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerBig: {
        flex: 1,
        backgroundColor:'#fff'
    },
    box: {
        alignItems: 'center'
    },
    logo: {
        marginTop: 50,
        width: 99,
        height: 90,
    },
    txtRobot: {
        color: '#5b785b',
        fontFamily: 'SarabunRegular',
        fontSize: 14,
        textAlign: 'center'
    },
    container: {
        backgroundColor: '#f6fff6',
        padding: 12,
        borderRadius: 5,
        margin: 20,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    coffee: {
        backgroundColor: '#d1ecf1',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtCoffee: {
        color: '#357193',
        fontFamily: 'SarabunRegular',
        fontSize: 14,
        paddingTop: 15,
        paddingBottom:0,
        textAlign: 'center'
    },
    txtCoffee2: {
        color: '#357193',
        fontFamily: 'SarabunRegular',
        fontSize: 14,
        paddingTop:0,
        paddingBottom:15,
        textAlign: 'center'
    },
    btnTest: {
        backgroundColor: '#eb5749',
        alignItems: 'center',
        borderRadius: 5,
    },
    txtBtn: {
        color: '#fff',
        fontFamily: 'SarabunRegular',
        fontSize: 18
    },
    line: {
        borderBottomColor: '#cfd1cf',
        borderBottomWidth: 0.3,
        marginTop:10,
        marginBottom:10
    },
    menu: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
