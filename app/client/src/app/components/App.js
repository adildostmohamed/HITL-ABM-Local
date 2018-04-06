import React, { Component } from 'react'
import Header from './Header'
import Model from './Model'
import Form from './Form'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-md-4'>
              <Form />
            </div>
            <div className='col col-12 col-md-8'>
              <Model />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
