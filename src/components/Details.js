import React from 'react'
import { Link } from 'react-router-dom';
import { getData } from '../utils/utils';

export default class Details extends React.Component {

  constructor(props) {
    super(props)
    this.id = window.location.pathname.split('/')[2];
    this.URL = `https://jsonplaceholder.typicode.com/users/${this.id}`
    this.state = {
      loading: true,
      data: {}
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

  render() {
    console.log()
    return (
        <div className="App">
          { this.state.loading ? <div className="loading_big"></div> : null } 
          <div className='title'>Entry Details</div>
          { this.state.data !== {} ?
          <div className='container'>
            <div className='card'>
              <div className='detailRow name'>{this.state.data.name}</div>
              <div className='detailRow'>User Name: {this.state.data.username}</div>
              <div className='detailRow'>Email: {this.state.data.email}</div>
              <div className='detailRow'>City: { typeof(this.state.data.address) == "object" ? this.state.data.address.city : null }</div>
              <div className='detailRow'>Phone No: {this.state.data.phone}</div>
              <div className='detailRow '>Website: <span className='website name' onClick={()=>{ window.open('http://'+this.state.data.website,'_blank') }}>{this.state.data.website}</span></div>
              <div className='detailRow'>Company: { typeof(this.state.data.company) == "object" ? this.state.data.company.name : null}</div>
            </div>
            <Link className='btnLink' to='/home'>Back to Entry List</Link>
          </div> 
          : null }
      </div>
      );
    }
}


/* with hooks
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/utils';

function Details() { 

  const { id } = useParams(), url = `https://jsonplaceholder.typicode.com/users/${id}`, [ details, setDetails ] = useState([])

  useEffect(() => {
    getData(url,(data) => {
      setDetails(data)
    })
  },[])

  return (
    <div className="App">
      <div className='title'>Entry Details</div>
        { details !== [] ?
        <div className='container'>
          <div className='detailRow name'>{details.name}</div>
          <div className='detailRow'>User Name: {details.username}</div>
          <div className='detailRow'>Email: {details.email}</div>
          <div className='detailRow'>City: {typeof(details.address) == "object" ? details.address.city : null}</div>
          <div className='detailRow'>Phone No: {details.phone}</div>
          <div className='detailRow'>Website: <span className='website' onClick={()=>{ window.open('http://'+details.website,'_blank') }}>{details.website}</span></div>
          <div className='detailRow'>Company: {typeof(details.company) == "object" ? details.company.name : null}</div>
        </div> 
        : null }
    </div>
  );
}

export default Details
*/