import './App.css';
import Header from './Components/Header'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import AddBook from './Components/AddBook';
import Books from './Components/Book/Books';
import About from './Components/About';
import BookDetail from './Components/Book/BookDetail'

function App() {

  return (
    <div className = "App">

      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Navigate replace to="/books" />} />

          <Route exact path = '/add_book' element = {<AddBook />} />
          <Route exact path = '/books' element = {<Books />} />
          <Route exact path = '/about' element = {<About />} />
          <Route exact path = '/books/:id' element = {<BookDetail />} />




        </Routes>
      </main>
    </div>
  );
}

export default App;
