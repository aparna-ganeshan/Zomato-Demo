import 'bootstrap-icons/font/bootstrap-icons.css';


const SearchBar = () => {
    return (
      <center>
        <div className="zm-name"><b>ZOMATO</b></div>
        <div  className="zm-name" style={{marginBottom:"15px "}}><i>Discover the best food & drinks in Nellore</i></div>
        <div className="search-bar">
        
          {/* <i class="bi bi-search" style={{color:'yellow'}}></i> */}
        {/* <input type="text" className="search-bar" placeholder="Search..." /> */}
        <i class="bi bi-search icon" style={{fontSize:'30px'}}></i>
        <input className="input-field" type="text" />
        </div>
      
      </center>
    );
  };
  
  export default SearchBar;