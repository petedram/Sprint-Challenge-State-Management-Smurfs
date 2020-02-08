import axios from 'axios';

export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_ERROR = 'SET_ERROR';

export const updateList = () => dispatch => {
    setTimeout ( () => {
        axios
        .get("http://localhost:3333/smurfs")
        .then(function (response) {
            console.log('from action axios', response)
            dispatch({type: UPDATE_LIST, payload: response.data})
            })
        .catch(function (error) {
            console.log(error);
        });
    }, 2000);
}


