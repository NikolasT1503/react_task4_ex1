import React from 'react';
import './App.css';





class App extends React.Component {
  counter = 0;

  constructor(props){
    super(props);
    this.pressMe = this.pressMe.bind(this);   //способ №2 - задаем контекст на текущий объект для функции pressMe
    this.state={hw : "Hello World", hw2: "Привет Мир", counter: 0}; 
  }


  //pressMe = () => {                   //способ №1
  //  this.counter++;
  //  console.log(this.counter, '!!!')
  //}

  pressMe(e){
    this.counter++;
    console.log(e.type);
    console.log(this.counter, '!!!')
  }

  press = (name, age, bool) => {
    //const hw = this.state.hw+"!!"
    this.counter++;
    //this.setState({hw});
    this.setState((prevState, props) => ({hw: prevState.hw+"!", counter: prevState.counter+1}));
    console.log(this.counter, name, bool ? age : "");
  }

  handleValues = (e) => this.press("Nikolas", 41,true);
    //this.pressMe(e);



  render() {
    const {name, age, bool }=this.props;
    return (
      <div className="App">
        <h1>{this.state.hw}</h1>
        <br/>
        <p>{this.state.counter}</p>
        <br/>
        <button onClick={(e) => this.press("Nikolas", 41,true)}>Count</button>
        <button onClick={(e) => this.press(name, age, bool)}>Count 2</button>
      </div>
    );
  
  }  
}

export default App;
