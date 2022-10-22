import React from 'react'
import linkData from '../data'

function Link() {
  return (
    <div>
      <div className='links'>
        {
          linkData?.map((item, i) => <a href={item.link} key={i} target='_blank' rel="noreferrer"><button id={item.id} className='link'>{item.title}</button></a>)
        }
      </div>

        <div className='socials'>
            <img src="../images/slack.svg" alt="" />
            <img src="../images/github.svg" alt="" />
        </div>
    </div>
  )
}

export default Link
