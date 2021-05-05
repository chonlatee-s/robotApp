import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import {AdMobBanner} from 'expo-ads-admob';
import axios from 'axios'

export default class Home extends React.Component {
    state = {
        txt : "ถิ่นไทยในป่ากว้าง ห่างไกล แสงอารยธรรมใด ส่องบ้าง เห็นเทียนอยู่รำไร เล่มหนึ่ง ครูนั่นแหละอาจสร้าง เสกให้ชัชวาล [ ม.ล.ปิ่น มาลากุล ]",
        linkNews:''
    }
    getNews = () => {
        axios.get('https://xn--o3cdd5af5d5a4j.com/getNews.php')
            .then((res) => {
                this.setState({txt:res.data.news, linkNews:res.data.link})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() { // ดึงข้อสอบจากฐานข้อมูล
        this.getNews()
    }

    openNews = (link) => {
        Linking.openURL(link);
    }

    render() {
        return (
            <View style={styles.containerBig}>
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        resizeMode="contain"
                        source={require('./assets/home.png')}
                    />
                </View>
                <View style = { styles.boxNews }>
                    {
                        this.state.linkNews === '' ? <Text style = { styles.txtNews } >{this.state.txt}</Text>
                        :<TouchableOpacity onPress={() => this.openNews(this.state.linkNews)}>
                            <Text style = { styles.txtNews } >{this.state.txt}</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.container}>
                        <Text style={styles.txtCoffee}>ร่วมเป็นกำลังใจ และสนับสนุนนักพัฒนา</Text>
                        <Text style={styles.txtCoffee2}>พร้อมเพย์ 082 781 8941 ชลธี สินสาตร์</Text>
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
    boxNews: {
        backgroundColor: '#5b785b',
        borderRadius: 5,
        margin:20,
        marginBottom:0,
        padding:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    txtNews: {
        color:'#fff',
        fontFamily: 'SarabunLight',
        fontSize: 14,
        textAlign:'center',
    },
    box: {
        alignItems: 'center'
    },
    logo: {
        marginTop: 50,
        width: 99,
        height: 90,
    },
    container: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 5,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    txtCoffee: {
        color: '#627498',
        fontFamily: 'SarabunRegular',
        fontSize: 14,
        paddingTop: 15,
        paddingBottom:0,
        textAlign: 'center'
    },
    txtCoffee2: {
        color: '#627498',
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
