import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
 
class App extends React.Component {
  render() {
    return (
        <div className='container'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));