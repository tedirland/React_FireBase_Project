import React, { useState, useEffect } from 'react';
import './Home.css';

//Functional Components //
//1. Smaller components
// 2. Usually Presentational
// 3. In most cases, reusable components
// 4. Should focus on one responsibility

const Home = () => {
  const [message, setMessage] = useState('Super Message!!');
  // const messageState = useState('Super Message!!');
  // const message = messageState[0];
  // const setMessage = messageState[1];

  //Called after component is initilized AND after it is updated
  //Side effect - elements of state that will cause the useEffect hook to be called when updated
  useEffect(() => {
    setTimeout(() => {
      setMessage('I am updated Message!');
    }, 1000);
  }, [message]);
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};

//Class Components//
//1. Larger components
//2. Container components (contain other components)
//3. Easier to handle lots of state
//4. More boilerplate
//5. Access to lifecycle functions

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Super Message!!!',
//     };
//   }
//   // state = {
//   //   message: 'Super Message !!!',
//   // };

//   // Lifecycle function
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ message: 'I am updated Message' });
//     }, 1000);
//   }
//   // Lifecycle function
//   //Render is called every time the state is updated
//   render() {
//     const { message } = this.state;
//     return (
//       <div className="container">
//         <h1>I am HomePage class</h1>
//         <p>{message}</p>
//       </div>
//     );
//   }
// }

export default Home;
