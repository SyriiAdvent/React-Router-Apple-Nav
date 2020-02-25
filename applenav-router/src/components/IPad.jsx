import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Ipad.css'


const Ipad = () => {
  return (
    <>
    <Link className='tLink' to='/ipad/:name'>iPad Pro</Link>
    <Link className='tLink' to='/ipad/:name'>iPad Air</Link>
    <Link className='tLink' to='/ipad/:name'>iPad</Link>
    <Link className='tLink' to='/ipad/:name'>iipad</Link>
    <Link className='tLink' to='/ipad/:name'>iPad Mini</Link>
    <Link className='tLink' to='/ipad/:name'>Compare</Link>
    <Link className='tLink' to='/ipad/:name'>ipad Mini</Link>
    <Link className='tLink' to='/ipad/:name'>Apple Pencil</Link>
    <Link className='tLink' to='/ipad/:name'>Smart Keyboard</Link>
    <Link className='tLink' to='/ipad/:name'>AirPods</Link>
    <Link className='tLink' to='/ipad/:name'>Accessories</Link>
    <Link className='tLink' to='/ipad/:name'>iPadOS</Link>
    </>
  )
}

export default Ipad