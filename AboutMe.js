import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {AdMobBanner} from 'expo-ads-admob';

export default class AboutMe extends React.Component {
    render() {
        return (
            <View style={styles.containerBig}>
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        source={require('./assets/profile.png')}
                    />
                </View>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.txtTopic}>
                            การศึกษา
                        </Text>
                        <Text style={styles.txtDetail}>
                            - ESL Program, City College of San Francisco
                        </Text>
                        <Text style={styles.txtDetail}>
                            - ปริญญาตรี สาขาเทคโนโลยีคอมพิวเตอร์ คณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                        </Text>
                        <Text style={styles.txtTopic}>
                            ประสบการณ์ด้านคอมพิวเตอร์
                        </Text>
                        <Text style={styles.txtDetail}>
                            - เป็นหนึ่งในทีมของสถาบันสหกิจศึกษาและพัฒนาสื่ออิเล็กทรอนิกส์ไทย-เยอรมัน ออกแบบและพัฒนาเกมการแข่งขัน ตอบปัญหาทางธรรมะ ในงานวันวิสาขบูชาโลก
                        </Text>
                        <Text style={styles.txtDetail}>
                            - ชนะเลิศการประกวดสื่อการสอน ประเภทซอฟต์แวร์ ในงาน Teaching Academy 2015 (ระดับประเทศ)
                        </Text>
                        <Text style={styles.txtDetail}>
                            - พัฒนาแอปพลิเคชันจัดการโภชนาการโคนม ให้กับองค์การส่งเสริมกิจการโคนมแห่งประเทศไทย
                        </Text>
                        <Text style={styles.txtDetail}>
                            - พัฒนาโปรแกรมตรวจโรคเบื้องต้นด้วยปิงปองเจ็ดสีให้กับโรงพยาบาลส่งเสริมสุขภาพตำบล
                        </Text>
                        <Text style={styles.txtDetail}>
                            - พัฒนาระบบสารสนเทศให้องค์กรต่าง ๆ เช่น กระทรวงพาณิชย์ เบทราโก สมศ.
                        </Text>
                        <Text style={styles.txtDetail}>
                            - ครูสาขาคอมพิวเตอร์ธุรกิจ
                        </Text>
                        <Text style={styles.txtDetail}>
                            - หัวหน้างานศูนย์ข้อมูลสารสนเทศ
                        </Text>
                        <Text style={styles.txtDetail}>
                            - พัฒนาเว็บไซต์สอบครูผู้ช่วย ครูผู้ช่วย.com
                        </Text>
                        <Text style={styles.txtDetail}>
                            - พัฒนาเว็บไซต์สอบครูผู้ช่วย เอกคอมพิวเตอร์ นายโรบอท.com
                        </Text>
                        <Text style={styles.txtTopic}>
                            กำลังศึกษา
                        </Text>
                        <Text style={styles.txtDetail}>
                            ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์ (Human–computer interaction)
                        </Text>
                        <View style={styles.line}/>
                        <Text style={styles.txtTopic}>
                            ติดต่อ
                        </Text>
                        <Text style={styles.txtDetail}>
                            ชลธี สินสาตร์
                        </Text>
                        <Text style={styles.txtDetail}>
                            โทรศัพท์ 082 781 8941
                        </Text>
                        <Text style={styles.txtDetail}>
                            อีเมล kruchonlatee@gmail.com
                        </Text>
                    </ScrollView>
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
        marginBottom: 10,
        width: 80,
        height: 80,
    },
    container: {
        height:'60%',
        backgroundColor: '#f6fff6',
        borderColor:'#5b785b',
        borderLeftWidth:5,
        margin:10,
        padding:10
    },
    txtTopic: {
        color: '#627498',
        fontFamily: 'SarabunRegular',
        fontSize: 14,
        padding: 0,
        marginTop:10
    },
    txtDetail: {
        color: '#627498',
        fontFamily: 'SarabunLight',
        fontSize: 12,
        padding: 0,
        marginTop:0
    },
    line: {
        borderBottomColor: '#cfd1cf',
        borderBottomWidth: 0.3,
        marginTop:10,
        marginBottom:10
      }
});
