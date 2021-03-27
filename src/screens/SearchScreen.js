import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');

    const searchAPI = async(searchTerm) => {
        console.log('API called..');
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    location: 'poughkeepsie',
                    term: searchTerm
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            console.log(err);
            setMessage('Something went wrong..');
        }
        console.log('...');
    }

    //call API for one time on reder component
    useEffect(()=>{
        searchAPI('food');
    },[]);

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