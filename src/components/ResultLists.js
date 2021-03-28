import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Touchable} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultLists = ({title, results, navigation}) => {

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
                    return (
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('ResultsShow',{ id: item.id})}
                                >
                                <ResultsDetail result={item}/>
                            </TouchableOpacity>
                        )
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

export default withNavigation(ResultLists);