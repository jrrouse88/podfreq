import React from 'react'

const Home = (props) => {
	return (
		<div className='home-body'>
			<div className='jumbo-contain'>
				<div className='jumbotron text-center'>
					<h1 className='display-2'>PodFreq</h1>
					<p className='lead'>A site for podcasters to share their passion.</p>
					<button className='btn btn-primary btn-lg'>Sign Up</button>
					<button className='btn btn-secondary btn-lg'>Log In</button>
				</div>
			</div>
		</div>
	)
}

export default Home