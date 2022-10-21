import React from 'react'
import linkData from '../data'

function Link() {
  return (
    <div>
      <div className='links'>
        {
          linkData?.map((item, i) => <button key={i} id={item.id} className='link'><a href={item.link} target='_blank' rel="noreferrer">{item.title}</a></button>)
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
