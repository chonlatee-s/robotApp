import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxScore: {
        backgroundColor: '#5b785b',
        borderRadius: 5,
        margin:10,
        padding:10
    },
    txtTopScore: {
        color:'#fff',
        fontFamily: 'SarabunRegular',
        fontSize: 18,
        textAlign:'center',
        marginBottom:-15,
    },
    txtScore: {
        color:'#fff',
        fontFamily: 'SarabunRegular',
        fontSize: 50,
        textAlign:'center',
    },
    txtAnswer: {
        color:'#627498',
        fontFamily: 'SarabunRegular',
        fontSize: 18,
        textAlign:'center',
        marginBottom:15,
    },
    boxAnswer: {
        height:'80%',
        backgroundColor: '#f6fff6',
        borderColor:'#5b785b',
        borderLeftWidth:5,
        margin:10,
        padding:10
    },
    question: {
        fontFamily:'SarabunRegular',
        fontSize:12,
        color:'#627498',
        marginTop:5
    },
    answer: {
        fontFamily:'SarabunLight',
        fontSize:12,
        color:'#5b785b',
    },
    reply: {
        fontFamily:'SarabunLight',
        fontSize:12,
        color:'#5b785b',
        margin:0,
        padding:0
    },
    hr: {
        borderBottomColor: '#C7BCBC',
        borderBottomWidth: 0.5,
        opacity: 0.3,
    }
});

export default class Result extends React.Component {
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.boxScore }>
                    <Text style = { styles.txtTopScore } >คะแนนรวม</Text>
                    <Text style = { styles.txtScore } >{this.props.score}/10</Text>
                </View>
        
                <View style = { styles.boxAnswer }>                     
                    <ScrollView>
                        <Text style = { styles.txtAnswer } >เฉลยข้อสอบ</Text>
                        {this.props.exam.map((item, index) => {
                            return (
                                <View key = {index}>
                                    {
                                        item.img !== '' ?
                                            <Image
                                                style={{width: 250, height: 150, marginBottom:5, marginTop:5 }}
                                                resizeMode="contain"
                                                source={{ uri: item.img }}
                                            />
                                        :null
                                    }

                                    <Text style={styles.question}>ข้อ {index+1} {item.question}</Text>
                                    <Text style={styles.reply}>
                                        <Text style={{textDecorationLine:"underline"}}>ตอบ</Text> 
                                    {
                                        item.reply==='1' ?  ' '+item.ch1 :
                                        item.reply==='2' ?  ' '+item.ch2 :
                                        item.reply==='3' ?  ' '+item.ch3 : 
                                        item.reply==='4' ?  ' '+item.ch4 : ' ไม่ได้ตอบคำถาม'
                                    }
                                    </Text>
                                    { 
                                        item.check===true ? null : 
                                        <Text style={styles.answer}><Text style={{textDecorationLine:"underline"}}>เฉลย</Text> {
                                            item.answer==='1' ? item.ch1 :
                                            item.answer==='2' ? item.ch2 :
                                            item.answer==='3' ? item.ch3 : item.ch4
                                        }</Text>
                                    }
                                    <View style={{flexDirection:'row-reverse'}}>
                                        {
                                            item.check===true ? <Ionicons name="md-checkmark" size={ 14 } color="#7A7575"/> 
                                            :<Ionicons name="md-close" size={ 14 } color="#7A7575"/> 
                                        }
                                    </View>
                                    <View style = { styles.hr }></View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
