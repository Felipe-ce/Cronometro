import React from 'react';
import styles from './Cronometro.module.css';

export default class App extends React.Component {
  state = {
    numero: 0,
  };

  Restart = () => {
    this.setState({
      numero: 0,
    });
  };

  Start = () => {
    const PararOStart = setInterval(() => {
      this.setState({
        numero: this.state.numero + 1,
      });
    }, 1000);

    this.Stop = () => {
      clearInterval(PararOStart);
    };
  };

  render() {
    return (
      <>
        <h2 className={styles.titulo}> {this.state.numero} </h2>
        <button className={styles.btn} onClick={this.Start}>
          {' '}
          Start{' '}
        </button>
        <button className={styles.btn} onClick={this.Restart}>
          {' '}
          Restart{' '}
        </button>
        <button className={styles.btn} onClick={this.Stop}>
          {' '}
          Stop{' '}
        </button>
      </>
    );
  }
}
