import React, { Component } from 'react';
import  { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        number: null
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

    onNumberChangedHandler = (event) => {
        this.setState({number: parseInt(event.target.value)});
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={'Add ' + (this.state.number ? this.state.number :  '')} 
                clicked={() => this.props.addNumberToCounter(this.state.number)}  />
                <CounterControl label={'Subtract ' + (this.state.number ? this.state.number :  '')} 
                clicked={() => this.props.subNumberToCounter(this.state.number)}  />
                <p>Enter the number to be added or substracted:</p> 
                <input type="number" placeholder="Enter Number" onChange={this.onNumberChangedHandler}/>
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
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
        ctr : state.ctr.counter,
        storeResult: state.res.results
    };
};

const mapDispatchT0Props = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addNumberToCounter: (number) => dispatch({type: actionTypes.ADD, value: number}),
        subNumberToCounter: (number) => dispatch({type: actionTypes.SUB, value: number}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result}),
        onDeleteRsult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId:id})
    };
};

export default connect(mapStatetoProps, mapDispatchT0Props)(Counter);