import React from 'react';

class ClassComponent extends React.Component {
  constructor(props: any){
    super(props)
    console.log('Constructing ClassComponent')
  }  
  
  state ={
        name: 'Mundo'
    }

    componentDidMount() {
      console.log('Mounting atingido')
    }

    componentDidUpdate(){
      console.log('Update atingido')
    }


    render(){
      console.log('Render')
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