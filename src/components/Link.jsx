import React from 'react'

function Link() {
  return (
    <div>
      <div className='links'>
            <button className='link'>Twitter Link</button>
            <button id='btn__zuri' className='link'><a href="https://training.zuri.team/" target='_blank' rel="noreferrer">Zuri Team</a></button>
            <button id='books' className='link'><a href="http://books.zuri.team" target='_blank' rel="noreferrer">Zuri Books</a></button>
            <button id='book__python' className='link'><a href="https://books.zuri.team/python-for-beginners?ref_id=Anointed1" target='_blank' rel="noreferrer">Python Books</a></button>
            <button id='pitch' className='link'><a href="https://background.zuri.team" target='_blank' rel="noreferrer">Background Check for Coders</a></button>
            <button id='book__design' className='link'><a href="https://books.zuri.team/design-rules" target='_blank' rel="noreferrer">Design Books</a></button>
        </div>

        <div className='socials'>
            <img src="../images/slack.svg" alt="" />
            <img src="../images/github.svg" alt="" />
        </div>
    </div>
  )
}

export default Link
