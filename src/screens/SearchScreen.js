import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultLists from '../components/ResultLists';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, message] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <View style={styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit = {() => searchAPI(term) }
            ></SearchBar>
            {message ? <Text>{message}</Text> : null}
            <ScrollView>
                <ResultLists title="Cost Effective" results={filterResultsByPrice('$')}/>
                <ResultLists title="Bit Pricier" results={filterResultsByPrice('$$')}/>
                <ResultLists title="Big Spender" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#FFFFFF',
        height: '100%',
        flex: 1
    }
});


export default SearchScreen;