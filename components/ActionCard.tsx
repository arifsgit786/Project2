import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebSite(link: string) {
        Linking.openURL(link)
    }
  return (
    <View>
      <Text style= {styles.headingText}>Blog Card</Text>
      <View style= {[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style = {styles.headerText}> What's new in Javascript 21 - ES12</Text>
        </View>
        <Image source={{uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} style={styles.cardImage}></Image>
        <View style={styles.imageContainer}>
            <Text numberOfLines={2} style={styles.imageBody}> Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=> openWebSite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> ('https://www.instagram.com/hiteshchoudharyofficial/')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor: '#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity:0.4
    },
    headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight: '600'
    },
    cardImage:{
        height: 190
    },
    imageContainer:{
        padding:10,
    },
    imageBody:{
        fontStyle:'italic'
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        color: '#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})