//npm install axios
import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZW39dTFv240fYUtXih9TxHIVvr9sS6GFv3HsWCy3gy8skLhA5zJj15tBMsgahRFbrLc0hyJgUkkDozWvAQ0MivcjKGvKGyo90x9aTS8HE__CX0vZ1XhPuza3GGFdYHYx'
    }

});
