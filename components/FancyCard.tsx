import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source ={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/0/03/Old_Courthouse_Denton_TX.jpg'
        }}
        style ={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Pamper</Text>
            <Text style={styles.cardLabel}>Denton,Texas</Text>
            <Text style={styles.cardDescription}>Welcome to Denton, famously home to the University of North Texas, Texas Woman's University, and a world-class music and arts scene.</Text>
            <Text style={styles.cardFooter}>1000 Miles Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        fontStyle:'italic',
        paddingHorizontal: 8
    },
    card:{
        width : 380,
        height: 400,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:12

    },
    cardElevated:{
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset:{
        width:1,
        height:1
      }

    },
    cardImage:{
        height: 150,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    cardBody:{
      flex:1,
      flexGrow: 1,
      paddingHorizontal : 8

    },
    cardTitle:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 22,
      fontStyle: 'italic'

    },
    cardLabel:{
      color: 'black',
      fontWeight: 'bold',
      fontSize:14,
      marginBottom:6
    },
    cardDescription:{
      color: '#242B2E',
      fontWeight: 'bold',
      fontSize:12,
      marginBottom:12,
      marginTop:6,
      flexShrink:1
    },
    cardFooter:{
      color: 'black',
      //fontWeight: 'bold'
    }
})