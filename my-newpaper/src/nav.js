import logo from "./images/logo.png"

function Nav () {
    return(
        <nav>
          <a href=""><img class= "logo" src={logo} ></img></a>
          <ul>
              <li><a href="">Technology </a></li>
              <li><a href="">Sport</a></li>
              <li><a href="">Fashion</a></li>
                            

          </ul>
        </nav>


    )
}

export default Nav;