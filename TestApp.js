import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.containerBig}>
               <Text>HELLO APP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerBig: {
        flex: 1,
        backgroundColor:'#fff'
    }
});
