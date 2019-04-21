import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/HomePage/ScrollToTop';
import { default as Main } from './components/Routes';

import { books } from './test';

import styles from './App.module.css';

class App extends React.Component {
  state = { list: books };

  handleSearchBook = (e) => {
    const value = e.target.value;
    let filteredList = books.filter(({ name }) => name.toLowerCase().search(value.toLowerCase()) !== -1);

    console.log(filteredList);

    this.setState({
      list: filteredList
    })
  }

  render() {
    return (
      <div>
        <Header onSearchBook={this.handleSearchBook} />
        <Main list={this.state.list} />
        <ScrollToTop className={styles.Scroll} />
        <Footer />
      </div>
    );
  }
}

export default App;
