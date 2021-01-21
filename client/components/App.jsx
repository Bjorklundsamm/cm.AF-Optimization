import React, { Fragment } from 'react';
import currency from 'currency-formatter';
// import Axios from 'axios';
import dbOps from '../../lib/databaseOperations.js';


import GlobalStyles from '../global_styles/GlobalStyles.jsx';

import Head from './Head.jsx';
import Form from './Form.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home: null,
      homePrice: null,
      // downPayment: null,
      // interestRate: null,
    };

    // this.getRandomHouse = this.getRandomHouse.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    dbOps.getRandomHome()
      .then((home) => {
        this.setState({
          home: home,
          homePrice: home.price,
        });
        console.log(currency.format(home.price, { code: 'USD' }));
      });
  }

  // convertToCurrency(num) {
  //   currency.format(num, { code: 'USD' });
  // }

  render() {
    // console.log(this.state.house);
    return (
      <>
        <GlobalStyles />
        <div className="main-content">
          <div className="page-layout">
            <div className="affordability-container">
              <Head />
              <Form house={this.state.home} homePrice={this.state.homePrice} />
              <Results />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
