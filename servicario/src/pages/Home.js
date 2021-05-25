import React from 'react';
import './Home.css';

//Functional Components //
//1. Smaller components
// 2. Usually Presentational
// 3. In most cases, reusable components
// 4. Should focus on one responsibility

// const Home = () => {
//   return (
//     <div className="container">
//       <h1>Home Page</h1>
//     </div>
//   );
// };

//Class Components//
//1. Larger components
//2. Container components (contain other components)
//3. Easier to handle lots of state
//4. More boilerplate
//5. Access to lifecycle functions

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>I am HomePage class</h1>
      </div>
    );
  }
}

export default Home;
