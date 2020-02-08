import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateList, deleteSmurf } from '../actions/actions';

const SmurfList = props => {
    

    useEffect(() => {
        props.updateList();
      }, []);

      


    function deleteCard(itemID){
        console.log('delete ', itemID);
        props.deleteSmurf(itemID);
    }
    
    function loadCards() {
        console.log('loadCards');

            console.log ('return', props.smurfs)
            var result = props.smurfs.map(item => (
                <div className="smurf-box" style={styles}>
                <h2>{item.name}</h2>
                <h3>Age: {item.age}</h3>
                <h3>Height: {item.height}</h3>
                <a href="#" onClick={() => deleteCard(item.id)} className="myButton">DELETE</a>
                </div>
            ))
            return result
    }

    let styles = {
        margin: '20px',
        padding: '20px',
        width: '250px',
        height: '180px',
        backgroundColor: '#88CCFF',
      };
 
      console.log('SmurfList props', props.smurfs);





    return (
        <>
        {props.error ? (
            <div className="error">{props.error}</div>
        ) : (
          <div className="content">
              {loadCards()}
                {/* {props.smurfs.map(item => (
                    <div className="yellow-box" style={styles}>
                    <h2>{item.name}</h2>
                    <h3>Age: {item.age}</h3>
                    <h3>Height: {item.height}</h3>
                    </div>
                ))} */}
          </div>
        )}
      </>
      );


}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    };
}

export default connect(
    mapStateToProps,
{updateList, deleteSmurf})(SmurfList);

