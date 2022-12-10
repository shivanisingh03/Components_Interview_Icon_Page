import './style.css'


// all icons
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscPerson } from "react-icons/vsc";
import { FaAmazonPay } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiTeapotLeaves } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";


function SideBar(){
    return(
        // Side bar code 
        <div id="SideBar">
            <div style={{marginLeft:'4vh',color:'white'}}><AiFillHome/> Dashbord</div>
            <div style={{marginLeft:'4vh',color:'white'}}><BsFillPersonFill/> Employee{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><BsFillPersonCheckFill/> Attendance{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><VscPerson/> Site/Field/Track{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><FaAmazonPay/> Payroll{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><MdWork/> Statuatory Compliances{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><GiTeapotLeaves/> Leaves{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><MdOutlineSettingsSuggest/> Asset Management{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><RiNewspaperFill/> Goals & Performance{'<'}</div>
            <div style={{marginLeft:'4vh',color:'white'}}><BsFillPersonFill/> <select style={{color:'white',border:'black',backgroundColor:'black'}}>
                <option >Recrument</option></select></div>
            <div style={{marginLeft:'8vh',color:'white'}}>Openings</div>
            <div style={{marginLeft:'8vh',color:'white'}}>Candidates</div>
            <div style={{marginLeft:'8vh',color:'white'}}>Interview Process</div>

           
            




            
        </div>
    )
}

export default SideBar