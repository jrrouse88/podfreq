import React from 'react'

const Home = (props) => {
	return (
		<div className='container'>
			<div className='jumbotron text-center'>
				<h1 className='display-3'>PodFreq</h1>
				<p className='lead'>A site for podcasters to share their passion.</p>
				<button className='btn btn-primary btn-lg'>Sign Up</button>
				<button className='btn btn-secondary btn-lg'>Log In</button>
			</div>
		</div>
	)
}

export default Home