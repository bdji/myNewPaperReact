import logo from "./images/logo1.png"
import background from"./images/dark.jpg"

function Footer () {
    return(
        <footer class = "grid-footer" style = {{ backgroundImage: `url(${background})`}}>
          <article>  
          <a href=""><img class= "logo1" src={logo} ></img></a>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut aliquid laudantium voluptatem velit rerum sit! Quo cum quam, necessitatibus aut atque culpa molestiae totam quaerat ut asperiores, consequatur incidunt.
            </p>
        </article>  
         <article>
         <h3>Sign Up for our Newsletter</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorum incidunt ad explicabo tempore, accusamus ex sint ducimus dignissimos totam animi aliquam quo fuga voluptas sapiente, error non inventore eius.
            </p>

            <p>
                <form action="">
                    <div>
                    <label for="Newsletter"><b></b></label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email"/>
                     </div>   
                </form>
            </p>
         </article>

            
             
          </footer>


    )
}

export default Footer