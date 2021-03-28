import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
import ResultsDetail from '../components/ResultsDetail';


const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        console.log('getResult() called..');
        getResult(id);
    },[]);

    if(!result) 
        return null;

    return (
        <View>
            <Text style={style.headingStyle}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) =>  {
                    return <Image source={{ uri: item }} style={style.imageStyle}/>
                }}
            />
        </View>
    );

};

const style = StyleSheet.create({
    imageStyle: {
        height:200,
        width:300,
        margin:15,
        padding:5
    },
    headingStyle: {
        margin:15,
        fontWeight: 'bold',
        fontSize:18
    }
});

export default ResultsShowScreen;
