import classes from './App.module.css'
// import Login from './components/Login';
import Payment from './components/Payment';

function App() {
  // const getData = (email, password) => {
    
  // }

  return (
    <div className={classes.container}>
      {/* <Login onLogin={getData} /> */}
      <Payment />
    </div>
  );
}

export default App;
