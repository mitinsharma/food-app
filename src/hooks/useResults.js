import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default() => {

    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');
    
    const searchAPI = async(searchTerm) => {
        console.log('Searcing for ' + searchTerm);
        if(searchTerm != null)
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
        console.log('.........');
    }
    
    //call API for one time on reder component
    useEffect(()=>{
        searchAPI('food');
    },[]);

    return [searchAPI, results, message];
}