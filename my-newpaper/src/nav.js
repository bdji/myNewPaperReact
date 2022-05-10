import logo from "./images/logo1.png"

function Nav () {
    return(
        <nav>
          <a href=""><img class= "logo" src={logo} ></img></a>
          <ul>
              <li><a href="">Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
              <li><a href="">Sport &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
              <li><a href="">Fashion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                            

          </ul>
        </nav>


    )
}

export default Nav;