import React, { useState, useEffect } from 'react';
import './Home.css';

// const Home = () => {
//   const [message, setMessage] = useState('Super Message!!');
//   const [count, setCount] = useState(0);
// const [test, setTest] = useState(0);

// const messageState = useState('Super Message!!');
// const message = messageState[0];
// const setMessage = messageState[1];

//Called after component is initilized AND after it is updated
//Side effect - elements of state that will cause the useEffect hook to be called when updated
//   useEffect(() => {
//     setTimeout(() => {
//       setMessage('I am updated Message!');
//     }, 1000);
//   }, []);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div className="container">
//       <h1>Home Page</h1>
//       <p>{message}</p>
//       <button onClick={increment}>Increment</button>
//       <div className="counter">{count}</div>
//       <button onClick={decrement}>Deccrement</button>
//     </div>
//   );
// };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Super Message!!!',
      count: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'I am updated Message' });
    }, 1000);
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  render() {
    const { message, count } = this.state;
    return (
      <div className="container">
        <h1>Home Page</h1>
        <p>{message}</p>
        <button onClick={this.increment}>Increment</button>
        <div className="counter">{count}</div>
        {/* <button onClick={() => this.decrement()}>Deccrement</button> */}
        {/* <button onClick={this.decrement.bind(this)}>Deccrement</button> */}
        <button onClick={this.decrement}>Deccrement</button>
      </div>
    );
  }
}

export default Home;
