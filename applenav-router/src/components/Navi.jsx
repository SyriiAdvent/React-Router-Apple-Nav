import React from "react";
import { Route, Link, NavLink } from 'react-router-dom'
import './Navi.css'


const Navi = () => {
  return (
    <header className='navWrapper'>
      <NavLink className='nLink' to='/'><img src='https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg'/></NavLink>
      <NavLink className='nLink' to='/mac'>Mac</NavLink>
      <NavLink className='nLink' to='/ipad'>iPad</NavLink>
      <NavLink className='nLink' to='/iphone'>iPhone</NavLink>
      <NavLink className='nLink' to='/watch'>Watch</NavLink>
      <NavLink className='nLink' to='/tv'>TV</NavLink>
      <NavLink className='nLink' to='/music'>Music</NavLink>
      <NavLink className='nLink' to='/support'>Support</NavLink>
      <NavLink className='nLink' to='/'>Search</NavLink>
      <NavLink className='nLink' to='/shop'>Bag</NavLink>
      {/* <NavLink className='nLink-svg' to='/'><img src='https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/search/image_large.svg'/></NavLink>
      <NavLink className='nLink-svg' to='/'><img src='https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/bag/image_large.svg'/></NavLink> */}
    </header>
  )
}

export default Navi