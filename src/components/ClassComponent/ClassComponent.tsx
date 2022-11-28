import React from 'react';

class ClassComponent extends React.Component {
    state ={
        name: 'Mundo'
    }


    render(){
        return <div>
          <p>name: {this.state.name}</p>
          <button onClick={() => {
            this.setState({name: 'Eu'})
          }}>
            Clique aqui
          </button>
        </div>
    }
}

export default ClassComponent;