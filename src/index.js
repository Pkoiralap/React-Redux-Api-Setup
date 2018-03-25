import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Ajax from 'ajax';
import '../styles/style.css';

const clickHandlerActionCreator = () => {
  return {
    type: 'CLICK_ME',
  }
}

const fetchApiData = (dispatch) => {
  return dispatch => Ajax.get(
    'https://jsonplaceholder.typicode.com/posts/1',
    undefined,
    (response) => {
      return dispatch({type: 'FETCH_FINISH', payload: response})
    }
  )
}

class HelloWorld extends React.Component {
    handleButtonClick = () => {
      this.props.clickHandlerActionCreator();
    }
    fetchApiData = () => {
      this.props.fetchApiData();
    }
    render() {
      return (
        <div className="mainDiv">
          <h1>Hello World</h1>
          <p> This is a simple hello world example </p>
          <button onClick={this.handleButtonClick}> Click Me </button>
          <button onClick={this.fetchApiData}> Fetch Api Data </button>
          {this.props.message && <p> The message is {this.props.message} </p>}
          {this.props.apiMessage && <p> The api response is {this.props.apiMessage} </p>}
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    message: state.message,
    apiMessage: state.apiMessage,
  }
}
const mapDispachToProps = (dispatch) => {
  return bindActionCreators({
    clickHandlerActionCreator,
    fetchApiData: () => fetchApiData(dispatch),
  }, dispatch);
};

export default connect(
  mapStateToProps, mapDispachToProps,
)(HelloWorld);
