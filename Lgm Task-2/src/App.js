import React from 'react';
import './App.css';
import Cards from './Cards';


function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <>
        <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <h1><b>Let's Grow More</b></h1>
      </div>
    <div className='collapse navbar-collapse navbar-btn' id='navbarNav'>
              <ul class='navbar-nav navbar-right'>
                <button className='glassButton' onClick={handleClick}>
                  GET USERS
                </button>
              </ul>
            </div>
            
  </div>
</nav>
        {/* Navbar End */}

        <div className='container'>
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className='container-fluid mid'>

               <h4><b>Click on "Get Users" button to get users.</b></h4>
              </div>
            )}
          </div>
        </div>
      {/* </section> */}
      
<div class="container foot">
      <footer>
      <hr></hr>
  <p>Author: Shreyash Gupta</p>
  <p>Contact to: <a href="mailto:hege@example.com">yash9918978801@gmail.com</a></p>
</footer>
</div>
    </>
  );
}

export default App;
