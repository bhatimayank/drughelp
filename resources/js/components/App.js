import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProviderList from './ProviderList'
import NewTest from './NewTest'
class App extends Component {
	      render () {
		              return (
				                <BrowserRouter>
				                  <div>
				                    <Header />
				                    <Switch>
				                      <Route exact path='/' component={ProviderList} />
				      		      <Route path='/checkfortest' component={NewTest} />
				                    </Switch>
				                  </div>
				                </BrowserRouter>
				              )
		            }
	    }

    ReactDOM.render(<App />, document.getElementById('app'))
