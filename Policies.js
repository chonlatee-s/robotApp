import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Policies extends React.Component {
    render() {
        return (
            <View style={styles.containerBig}>
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        source={require('./assets/policies.png')}
                    />
                </View>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.txtPolicy}>
                            แอปพลิเคชันนี้จัดทำขึ้นเพื่อให้ผู้ที่กำลังเตรียมตัวสอบครูผู้ช่วย หรือข้าราชการอื่น ๆ 
                            ที่เกี่ยวข้องกับสาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ 
                            ข้อสอบเหล่านี้ ได้ถูกรวบรวมมาจากผู้ที่มีประสบการณ์การสอบมานับครั้งไม่ถ้วน จากทุกสังกัด 
                            นอกจากนี้ ข้อสอบมีการปรับปรุง แก้ไข เพิ่มเติมอย่างต่อเนื่อง เพื่อให้ทันต่อสถานการณ์ปัจจุบัน
                        </Text>
                        <Text style={styles.txtPolicy}>
                            สามารถทำข้อสอบได้ฟรี ไม่มีค่าใช้จ่ายใด ๆ แต่ถ้าอยากร่วมเป็นกำลังใจ และสนับสนุนนักพัฒนา ก็ยินดีครับ :) 
                            ธ.กรุงไทย 317-0-125591 ชลธี สินสาตร์ หรือพร้อมเพย์ 082 781 8941
                        </Text>
                        <Text style={styles.txtPolicy}>
                            ดาวน์โหลดแนวข้อสอบ หรือฝึกทำข้อสอบออนไลน์ผ่านเว็บไซต์ได้ที่ นายโรบอท.com
                            หากมีข้อสงสัย คำแนะนำ หรือคำติชมใด ๆ แจ้งได้ที่อีเมล kruchonlatee@gmail.com
                        </Text>
                        <View style={styles.line}/>
                        <Text style={styles.txtPolicy}>
                            ผู้ดูแลระบบ
                        </Text>
                    </ScrollView>
                </View>
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
        width: 110,
        height: 50,
    },
    container: {
        height:'50%',
        backgroundColor: '#f6fff6',
        borderColor:'#5b785b',
        borderLeftWidth:5,
        margin:10,
        padding:10
    },
    txtPolicy: {
        color: '#627498',
        fontFamily: 'SarabunLight',
        fontSize: 12,
        padding: 5,
    },
    line: {
        borderBottomColor: '#cfd1cf',
        borderBottomWidth: 0.3,
        marginTop:10,
        marginBottom:10
      }
});
