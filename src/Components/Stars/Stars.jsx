import React from 'react'
import './Stars.css'

function Stars({ top, left }) {
  return (
    <div className='stars-container' style={{ top, left }}>
        <div className='4-Pointed'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
         <path d="M0.0400391 0.366531C0.0400391 0.366531 5.70837 6.10828 10.3144 6.14947C14.995 6.19132 20.8074 0.366531 20.8074 0.366531C20.8074 0.366531 15.4895 6.31986 15.4516 10.9504C15.4131 15.6571 20.8074 21.7525 20.8074 21.7525C20.8074 21.7525 14.9544 16.1471 10.3144 16.1878C5.74968 16.2278 0.0400391 21.7525 0.0400391 21.7525C0.0400391 21.7525 5.32439 15.6384 5.28653 10.9504C5.24928 6.33891 0.0400391 0.366531 0.0400391 0.366531Z" fill="#F2BB78"/>
        </svg>
        </div>
    </div>
  )
}

export default Stars