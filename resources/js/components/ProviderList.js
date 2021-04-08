import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class ProviderList extends Component {
	          constructor () {
			          super()
			          this.state = {
					            providers: []
					          }
			        }

	          componentDidMount () {
			          axios.get('/api/providers').then(response => {
					            this.setState({
							                providers: response.data
							              })
					          })
			        }

	          render () {
			          const { providers } = this.state
			          return (
					            <div className='container py-4'>
					              <div className='row justify-content-center'>
					                <div className='col-md-8'>
					                  <div className='card'>
					                    <div className='card-header'>All providers</div>
					                    <div className='card-body'>
					                      <Link className='btn btn-primary btn-sm mb-3' to='/checkfortest'>
					                        Click Here For Test
					                      </Link>
					  			<ul className='list-group list-group-flush'>
					                        {providers.map(provider => (
									                        <Link
									                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
									                          to={`/${provider.id}`}
									                          key={provider.id}
									                        >
									                          {provider.name}
									                          <span column-gap="40px" className='badge badge-primary badge-pill'>
									                            {provider.city}
									                          </span>
												  <span column-gap="40px" className='badge badge-primary badge-pill'>
									                            {provider.state}
									                          </span>
												  <span className='badge badge-primary badge-pill'>
									                            {provider.speciality}
									                          </span>
									                        </Link>
									                      ))}
					                      </ul>
					                    </div>
					                  </div>
					                </div>
					              </div>
					            </div>
					          )
			        }
	        }

    export default ProviderList
