import './style.css'

import { CgProfile } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";



function Header(){
    return(
        <div id="Header">
            <h1 id="Headerh1">INTERVIEW PROCESS</h1>
            <h1 id="Headericon"><CgProfile/></h1>
            <h1 id='colse'><AiFillCloseCircle/></h1>
        </div>
    )
}

export default Header




