import React from 'react'
import RestaurantCards from './RestaurantCards'

const Login = () => {
  return (
    <>
    {/* <div>
        <img src="https://ik.imagekit.io/boqy81wxll/wp-content/uploads/2023/07/png-transparent-zomato-logo-removebg-preview.png" height={'80px'} width={'120px'}/>
    </div>
    <div className="search-bar"> */}
        
          {/* <i class="bi bi-search" style={{color:'yellow'}}></i> */}
        {/* <input type="text" className="search-bar" placeholder="Search..." /> */}
        {/* <i class="bi bi-search icon" style={{fontSize:'30px'}}></i>
        <input className="input-field" type="text" />
        </div> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

   <div style={{margin:'0px 0px 0px 250px'}}>
        <img src="https://ik.imagekit.io/boqy81wxll/wp-content/uploads/2023/07/png-transparent-zomato-logo-removebg-preview.png" height={'80px'} width={'120px'} alt='....'/>
    </div>
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex" role="search" style={{margin:"0px 0px 0px 100px",  width:'550px'}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav"  style={{fontSize:'18px'}}>
        
        <li class="nav-item" style={{marginLeft:'50px'}}>
          <a class="nav-link" href="#">Log in</a>
        </li>

        <li class="nav-item" style={{marginLeft:'80px'}}>
          <a class="nav-link" href="#">Sign up</a>
        </li>
        
        
      </ul>
    </div>

    </div>
  </div>
</nav>
<div>
    <RestaurantCards/>
</div>
    </>
  )
}

export default Login
