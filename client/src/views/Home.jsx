import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
	return (
		<div className='home-body'>
			<div className='jumbo-contain'>
				<div className='jumbotron text-center'>
					<h1 className='display-2'>PodFreq</h1>
					<p className='lead'>A site for podcasters to share their passion.</p>
					<Link to="/signup"><button className='btn btn-primary btn-lg'>Sign Up</button></Link>
					<Link to="/login"><button className='btn btn-secondary btn-lg'>Log In</button></Link>
				</div>
			</div>
		</div>
	)
}

export default Home