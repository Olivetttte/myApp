import React from 'react'
import errorimage from '../Media/errorimage.jpeg'
import '../Styles/Error.css'


function Error() {
  return (
    <main>
        <div id='error'>
          <img src={errorimage} alt='errorimage' width='50%' height='30%' />
        </div>
        <div>
          <h2> </h2>
          <span>Can't see the page you are looking for? Return to Your Dashboard? <a href='/Login'>Login</a></span>
        </div>
    </main>
  )
}

export default Error