import React from 'react'
import { Link } from 'react-router-dom';
import { getData } from '../utils/utils';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.URL = 'https://jsonplaceholder.typicode.com/users'
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    getData(this.URL,(data) => {
      this.setState({
        loading: false,
        data: data
      })
    })
  }

  showRows = () => {
    let rows = this.state.data.map((row,index) => {
      let route = `/details/${row.id}`
      return <Link key={index} className='link' to={route}>
                <div className='data'>{row.username}</div>
                <div className='data'>{row.email}</div>
                <div className='data'>{row.name}</div>
                <div className='data'>{row.website}</div>
              </Link>
    })
    return rows
  }

  render() {
    return (
        <div className="App">
          { this.state.loading ? <div className="loading_big"></div> : null } 
          <div className='title'>Entry List</div>
          <div className='container'>
            <div className='tableHeader'>
              <div className='headerCell'>User Name</div>
              <div className='headerCell'>Email</div>
              <div className='headerCell'>Name</div>
              <div className='headerCell'>Website URL</div>
            </div>
            { this.state.data ? this.showRows() : null }
          </div>
        </div>
      );
    }
}
