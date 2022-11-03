import React from 'react'
import { Link } from "react-router-dom";
import linkData from '../data'

function Links() {
  return (
    <div>
      <div className='links'>
        {
          linkData?.map((item, i) => <a href={item.link} id={item.id} className='link-button' key={i} target='_blank' rel="noreferrer">{item.title}</a>)
        }
        <Link to="/contact" id='contact' className='link-button'>Contact Me</Link>
      </div>

        <div className='socials'>
            <img src="../images/slack.svg" alt="" />
            <a href="https://github.com/anointedosara"><img src="../images/github.svg" alt="" /></a>
        </div>
    </div>
  )
}

export default Links
