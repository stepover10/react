import * as React from 'react';

const Context = React.createContext();

const { Provider, Consumer } = Context;

class ContextProvider extends React.Component {
  state = {
    context: 'INITIAL'
  }

  actions = {
    contextAction: (context) => {
      this.setState({context});
    }
  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

// :: HOC
function ContextConsumer(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ state, actions }) => (
            <WrappedComponent 
              context={state.context} 
              setValue={actions.setValue}
            /> 
          )}
        </Consumer>
      )
    }
  }
}

export { ContextProvider, ContextConsumer }