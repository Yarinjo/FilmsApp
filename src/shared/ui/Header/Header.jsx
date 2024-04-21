import React from 'react'
import { Link } from 'react-router-dom'
import Search from '/src/assets/icons/search.svg'
import Bell from '/src/assets/icons/bell.svg'
import ProfilePicture from '/src/assets/sombra2.jpg'

export const Header = () => {
  return (
	<div className="header">
		<div className="links">
			<Link className='link' to="/">Movies</Link>
			<Link className='link' to="/">Series</Link>
			<Link className='link' to="/">Documentaries</Link>
		</div>

		<div className='ml-auto'>
			<button><img src={Search} alt="search" /></button>
			<button><img src={Bell} alt="search" /></button>
			<button><img className='profilePicture' src={ProfilePicture} alt="profile" /> Tetiana</button>

		</div>






	</div>
  )
}
