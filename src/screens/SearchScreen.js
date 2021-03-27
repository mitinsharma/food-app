import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [message,setMessage] = useState('');

    const searchAPI = async() => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    location: 'poughkeepsie',
                    term
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            console.log(err);
            setMessage('Something went wrong..');
        }
    }

    console.log(results);
    return (
        <View style={styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit = {searchAPI}
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