import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View style={styles.background}>
            <Image source={{ uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.heading}>{result.name}</Text>
            <Text style={styles.ratingStyle}>{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        paddingVertical:15,
        paddingLeft:15,
        flex: 1
    },
    imageStyle: {
        width:200,
        height: 120,
        padding: 5,
        borderRadius: 5
    },
    heading: {
        paddingTop: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    ratingStyle: {
        color: '#888'
    }
});

export default ResultsDetail;