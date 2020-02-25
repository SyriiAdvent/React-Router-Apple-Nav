import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Mac.css'


const Mac = () => {
  return (
    <>
    <Link className='tLink' to='/mac/:name'>MacBook Air</Link>
    <Link className='tLink' to='/mac/:name'>MacBook Pro 13"</Link>
    <Link className='tLink' to='/mac/:name'>macBook Pro 16"</Link>
    <Link className='tLink' to='/mac/:name'>iMac</Link>
    <Link className='tLink' to='/mac/:name'>iMac Pro</Link>
    <Link className='tLink' to='/mac/:name'>Mac Pro</Link>
    <Link className='tLink' to='/mac/:name'>Mac Mini</Link>
    <Link className='tLink' to='/mac/:name'>Compare</Link>
    <Link className='tLink' to='/mac/:name'>Pro Display XDR</Link>
    <Link className='tLink' to='/mac/:name'>Accessories</Link>
    <Link className='tLink' to='/mac/:name'>Catalina</Link>
    </>
  )
}

export default Mac