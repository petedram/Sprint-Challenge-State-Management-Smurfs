import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const SmurfList = props => {

    const loadList = e => {
        console.log('SmurfList props', props.smurfs);

        props.smurfs.forEach(element => {
            console.log(element);
            return (
            <div>
                <h2>{element.name}</h2>
                <h3>{element.age}</h3>
                <h4>{element.height}</h4>
            </div>
            );
        });
    }


    return (
        <>
        {props.error ? (
            <div className="error">{props.error}</div>
        ) : (
          <div className="content">
              <h1>exporting props here!</h1>
              {loadList()}
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
{})(SmurfList);

//add action