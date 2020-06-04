import React, { Component } from 'react';
import LoginForm from './LoginForm'
import Layout from './Layout'
import { connect } from 'react-redux';
import { userActions } from '../store/actions';

const storeProps = (store) => {
	console.log(store)
	const { loggingIn } = store.authentication || false;
	return {
		loggingIn
	}
}

const actionCreators = {
	login: userActions.login
};

@connect(storeProps, actionCreators)
export default class App extends Component {
	state = {
		InSigned: false
	}

	static getDerivedStateFromProps(nextProps, prevState) {		
		const { loggingIn } = nextProps; 		
		console.log('App-Get', loggingIn)
		if (loggingIn) {	
			return {
				InSigned: loggingIn
			}
		} 
		
		return {
			InSigned: false
		};
	}

	componentDidMount() {
		if (localStorage.getItem('LOGIN_SUCCESS')) {
			console.log("localSt")
			this.props.login('App_Postion');
		}
	}

	render() {
		const { InSigned } = this.state;
		console.log(InSigned)
		return (
			<>
				{ InSigned
					? <Layout />
					: <LoginForm />
				}
			</>
		)

	}
}
