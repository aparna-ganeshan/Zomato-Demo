import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ZomatoHome() {
  return (
    <>
      <div style={{ fontFamily: 'Arial,sans-serif', padding: '20px', marginLeft: '200px' }}>
        <div style={{ boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)', width: '600px', borderRadius: '8px' }}>
          <section style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img
                src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg'
                alt='....'
                style={{ width: '600px', height: '180px', borderRadius: '8px 8px 0px 0px' }}
              />
            </div>
          </section>
          <div>
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </div>
        </div>

        <p style={{ fontSize: '2.6rem', fontWeight: '200', margin: '60px 0px 0px 0px', color: 'rgb(54,54,54)' }}>Popular localities in and around Nellore</p>
        {/* <div style={{ width: '100%', backgroundColor:'pink'}} >
            <div style={{ margin: '20px 20px 0px 0px', boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.3)', width: '20%', height: 'auto', display: 'flex', flexDirection: 'column', padding: '0px 0px 0px 40px', fontSize: '20px', backgroundColor: 'yellow' }}>
              <a href='https://www.zomato.com/nellore/nellore-locality-restaurants' style={{ textDecoration: 'none', color: '000' }} >
                <p style={{ marginRight: '10px', color: 'black' }}>Nellore Locality</p>
                <p style={{ color: '#888' }}>770 places</p>
              </a>
            </div>
            <div style={{ width: '5%', backgroundColor: 'red', }}>
                  <i class="bi bi-arrow-right" ></i>
                </div>
          </div> */}

        <div style={{ display: 'flex', flexDirection: 'row', boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.3)', height:'auto', width:'240px'}}>
          <div style={{  padding:'0px 0px 0px 6px'}}>
          <p style={{ color: 'black' }}>Nellore Locality</p>
                <p style={{ color: '#888' }}>770 places</p>

          </div>
          <div style={{ margin: '20px 0px 0px 90px' }}>
          <Link to ='login' >
          <i class="bi bi-arrow-right" ></i></Link>
          </div>
          
        </div>

      </div>

      {/* Mobeli and login form component */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(255,251,247)' }}>
        <div  >
          <img src='https://homefoodi.com/wp-content/uploads/2023/04/Untitled-1-1.png' style={{ height: '400px', margin: '0px 0px 0px 250px', boxShadow: '2px 15px 8px rgba(0, 0, 0, 0.3)' }} alt='...' />
        </div>
        <div style={{ margin: '0px 0px 0px 90px' }}>
          <p style={{ fontSize: '3.7rem', lineHeight: '5.6rem', color: 'rgb(28,28,28)', fontWeight: '400' }}> Get the Zomato app</p>
          <p style={{ fontSize: '1.3rem', color: 'rgb(54,54,54)', lineHeight: '3.2rem' }} >We will send you a link, open it on your phone to download the app.</p>
        </div>
      </div>
    </>
  )

}


export default ZomatoHome
