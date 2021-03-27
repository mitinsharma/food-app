import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultLists = ({title, results}) => {

    return (
        <View style={styles.background}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList 
                style={styles.listStyle} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return <ResultsDetail result={item}></ResultsDetail>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        paddingVertical:15,
        paddingLeft:15
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18
    },
    listStyle: {

    }
});

export default ResultLists;