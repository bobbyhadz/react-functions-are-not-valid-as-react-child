import './App.css';

const App = () => {
  const getButton = () => {
    return <button>Click</button>;
  };

  // ✅ Now returning the actual button
  // added parentheses () to call the function
  return <div>{getButton()}</div>;
};

export default App;
