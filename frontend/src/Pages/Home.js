import React from 'react'
import Map from '../Media/Maps_Blog.png';
import curvedbannerup from '../Media/curved_banner-up.jpeg';
import curvedbannerdown from '../Media/curved_banner-down.jpeg';
import priceicon from '../Media/priceeicon-2.png';
import easytouseicon from '../Media/easytouseicon-1.png';
import timelydeliveryicon from '../Media/timelydeliveryicon-3.png';
import downloadicon from '../Media/download.jpg';
import proxihome3 from '../Media/proxihome3.jpeg';

function Home() {
  return (
    <main>
        <div className=''>
            <div className='row'>
                <div className='col-12'>
                <img src={Map} width="" height="600"  alt='logo' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <img src={curvedbannerup} width="1590"  alt='logo' />
                </div>
            </div>
 {/* icons */}
            <div className='row'>
                <div className='col-4'>
                <img src={priceicon} width="100"  alt='logo' style={{ marginLeft:'40px'}} /> <span style={{color:'Green', fontSize:'20px'}}> Affordable</span>
                </div>
            
          
                <div className='col-4'>
                <img src={easytouseicon} width="100"  alt='logo' /> <span style={{color:'Green', fontSize:'20px'}}> Proxzi App is Easy to Use</span>
                </div>
        
           
                <div className='col-4'>
                <img src={timelydeliveryicon} width="100"  alt='logo' /> <span style={{color:'Green', fontSize:'20px'}}> Affordable Billing</span>
                </div>
            </div>
            


            <div className='row'>
                <div className='col-12'>
                <img src={curvedbannerdown} width="1590"  alt='logo' />
                </div>
            </div>

          

            {/* Proxy Image and content */}

            <div className='row'>
                <div className='col-12'>
                <img src={proxihome3} width="400"  alt='logo' /> <span> </span>
                </div>
            
          
               
            </div>

            {/* Principal image and content */}

            <div className='row'>
                <div className='col-4'>
                </div>
            
          
                <div className='col-4'>
                <span style={{color:'Red'}}>Already have an account? <a href='/Login'>Login</a></span>
                </div>
        
           
                <div className='col-4'>
                <span style={{color:'Red'}}>Don't have an account? <a href='/Register' >Register</a></span>

                </div>
            </div>



            {/* download app */}

            <div className='row'>
                <div className='col-12'>
                <img src={downloadicon} width="" height="480"  alt='logo' style={{marginBottom:'-50px'}} />
                </div>
            </div>
                


        </div>
    </main>
  )
}

export default Home