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

export const addSmurf = (newName, newAge, newHeight) => dispatch => {
    console.log('from action: ', newName, newAge, newHeight );

    const newValue = {
        name: newName,
        age: newAge,
        height: newHeight
    };
    console.log('new object', newValue);

    setTimeout ( () => {
        axios
        .post("http://localhost:3333/smurfs", newValue)
        .then(function (response) {
            console.log('from post action axios', response)
            dispatch({type: UPDATE_LIST, payload: response.data})
            })
        .catch(function (error) {
            console.log(error);
        });
    }, 2000);
}

export const deleteSmurf = (smurfID) => dispatch => {
    console.log('from action: ', smurfID );
    const delValue = 'http://localhost:3333/smurfs/' + smurfID
    console.log(delValue);

    setTimeout ( () => {
        axios
        .delete(delValue)
        .then(function (response) {
            console.log('from post action axios', response)
            dispatch({type: UPDATE_LIST, payload: response.data})
            })
        .catch(function (error) {
            console.log(error);
        });
    }, 2000);
}


