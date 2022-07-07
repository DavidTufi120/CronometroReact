import React, { Component } from 'react';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      numero: 0,
      botaoIniciar : "INICIAR"
    };
    this.timer = null;
    this.iniciarCronometro = this.iniciarCronometro.bind(this);
    this.limparCronometro = this.limparCronometro.bind(this);
  };
  iniciarCronometro(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer=null;
      state.botaoIniciar = "INICIAR";
    }else{
        this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state)
        },100);
        state.botaoIniciar = "PAUSAR";
    }
        this.setState(state)
  }

  limparCronometro(){
    
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer=null;
    }
    let state = this.state;
    state.numero = 0;
    state.botaoIniciar = 'INICIAR';
    this.setState(state);
  }

  render(){
  return (
   <>
  <div className='container'>
   <img src={require('./assets/cronometro.png')} alt='Ícone cronômetro branco'/>
   
    <a className='timer'>{this.state.numero.toFixed(1)}</a>
    <div className='areaBtn'>
    <a className='botaoIniciar' onClick={this.iniciarCronometro}>{this.state.botaoIniciar}</a>
    <a className='botaolimpar' onClick={this.limparCronometro}>LIMPAR</a>
   </div>
   </div>
   </>
  );
}
}

export default App;
