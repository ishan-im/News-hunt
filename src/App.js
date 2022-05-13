import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

import {
  
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {

  pageSize = 5;
  apiKey= process.env.REACT_APP_NEWS_API

  render() {
    return (

      <div>
        
      <NavBar/>
      
 {/* pageSize={this.pageSize}apiKey={this.apiKey}      */}


        <Routes>
     
          <Route path="/"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey}  category='general' key="/" country='in' />}
          />

          <Route path="/business"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} category='business' country='in' />
            } />

          <Route path="/entertainment"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="entertainment" category='entertainment' country='in' />
            } />

          <Route path="/health"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="health" category='health' country='in' />
            } />

          <Route path="/science"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="science" category='science' country='in' />
            } />

          <Route path="/sports"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="sports" category='sports' country='in' />
            } />

          <Route path="/technology"
            element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="technology" category='technology' country='in' />
            } /> 
         
        </Routes> 
         
       
        </div>
     
    )
  }
}
