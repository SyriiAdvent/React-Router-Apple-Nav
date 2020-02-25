import React from 'react'
import { Route, Link } from 'react-router-dom'


const Iphone = () => {
  return (
    <>
    <Link className='tLink' to='/iphone/:name'>iPhone 11 Pro</Link>
    <Link className='tLink' to='/iphone/:name'>iPhone 11</Link>
    <Link className='tLink' to='/iphone/:name'>iPhone XR</Link>
    <Link className='tLink' to='/iphone/:name'>iPhone 8</Link>
    <Link className='tLink' to='/iphone/:name'>Compare</Link>
    <Link className='tLink' to='/iphone/:name'>Apple Card</Link>
    <Link className='tLink' to='/iphone/:name'>AirPods</Link>
    <Link className='tLink' to='/iphone/:name'>Compare</Link>
    <Link className='tLink' to='/iphone/:name'>Accessories</Link>
    <Link className='tLink' to='/iphone/:name'>iOS 13</Link>
    </>
  )
}

export default Iphone