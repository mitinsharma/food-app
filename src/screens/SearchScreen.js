import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, message] = useResults();

    return (
        <View style={styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit = {() => searchAPI(term) }
            ></SearchBar>
            <Text>We have found: {results.length}</Text>
            {message ? <Text>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#FFFFFF',
        height: '100%'
    }
});


export default SearchScreen;