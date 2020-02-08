export const initialState = {
    smurfs:
    [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        }
    ],
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'UPDATE_LIST':
        console.log('UPDATE_LIST type and payload', action.type, action.payload);
        console.log('logging state from reducer', state)
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload]
        }
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload
        };

      default:
        return state;
    }
  }