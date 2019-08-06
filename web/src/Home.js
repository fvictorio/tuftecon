import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <>
      <h1>What is this?</h1>
      <p>
        I'm reading <a href="https://core-econ.org/the-economy/?lang=en">The Economy</a>,{' '}
        <a href="https://www.goodreads.com/book/show/17744.The_Visual_Display_of_Quantitative_Information">
          The Visual Display of Quantitative Information
        </a>{' '}
        and learning to do data stuff with Python, and I'm gonna use this repository to store the
        things I do as part of that learning. It's going to be a kind of collection of notes in code
        and charts.
      </p>

      <h2>Index</h2>
      <ol>
        <li>
          <Link to="/1-the-capitalist-revolution">The Capitalist Revolution</Link>
        </li>
      </ol>
    </>
  )
}
