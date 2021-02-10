import React, { Component } from 'react';
import  { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addNumberToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subNumberToCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResult.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteRsult(result.id)}>{result.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr : state.counter,
        storeResult: state.results
    };
};

const mapDispatchT0Props = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addNumberToCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        subNumberToCounter: () => dispatch({type: actionTypes.SUB, value: 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteRsult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId:id})
    };
};

export default connect(mapStatetoProps, mapDispatchT0Props)(Counter);