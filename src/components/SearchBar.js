import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange,  onTermSubmit }) => {



    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black" style={styles.searchIcon}/>
            <TextInput 
                placeholder="Search" 
                style={styles.textField}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    searchIcon: {
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    textField: {
        fontSize: 22,
        flex: 1
    }
});

export default SearchBar;