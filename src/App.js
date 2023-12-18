import './App.css';
import all_books from './Data/all_books';
import DisplayBook from './Component/DisplayBook';

function App() {

  

  return (
    <div className="App">
      <DisplayBook all_books = {all_books} />
    </div>
  );
}

export default App;
