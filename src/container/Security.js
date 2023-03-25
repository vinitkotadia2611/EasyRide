import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { create } from 'react-test-renderer'

export default function Security({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.safety}>Safety</Text>
            </View>
            <View style={styles.logo}>
                <Image source={require('../../src/assets/image/group.png')} />
            </View>
            <View style={styles.text}>
                <Text style={styles.contact}>Who Do You Want To Contact?</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Ionicons color="#898989" name="md-call" size={25} style={styles.icon1} />
                    </View>
                    <View style={styles.btnview1}>
                        <Text style={styles.vectorText}>Ambulance</Text>
                    </View>
                    <View style={styles.btnview2}>
                        <AntDesign style={styles.icon} color="#898989" name="right" size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Ionicons color="#898989" name="md-call" size={25} style={styles.icon1} />
                    </View>
                    <View style={styles.btnview1}>
                        <Text style={styles.vectorText}>Police</Text>
                    </View>
                    <View style={styles.btnview2}>
                        <AntDesign style={styles.icon} color="#898989" name="right" size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    heading: {
        // flex: 1,
        backgroundColor: null,
        justifyContent: 'center',
    },
    safety: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
    logo: {
        flex: 3,
        backgroundColor: null,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        flex: 1,
        backgroundColor: null,
    },
    contact: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
    button: {
        flex: 3.5,
        marginTop: 30,
    },
    btn: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    icon: {
        color: '#898989',
        flexDirection: 'row',
        marginLeft: 15,
    },
    btnview1: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    vectorText: {
        color: '#898989',
        fontFamily: 'Poppins-Regular',
        fontWeight: 400,
        fontSize: 20,
    },
    icon1: {
        flexDirection: 'row',
        marginRight: 10,
    },

})