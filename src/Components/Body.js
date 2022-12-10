import './style.css'

import { RiDeleteBin7Line } from "react-icons/ri";


function Body() {
    return (
        <div id='body'>
            <p style={{ marginLeft: '2vh', marginTop: '4vh' }}> Name <span id='star'>*</span></p>
            <p style={{ marginLeft: '2vh', marginTop: '-2.5vh' }}>Business Devlopment Executive</p>

            <hr
                style={{
                    background: 'blue',
                    width: '17vw',
                    height: '1px',
                    marginTop: '-2vh',

                    marginLeft: '2vh'
                }} />
            
            <p style={{ marginLeft: '2vh', marginTop: '4vh',color:'blue' }}>Interview Process Rounds</p>

            <div id="Bodygrid">
            <div id="Bodygrid1"><p style={{ marginLeft: '6vh', marginTop: '-0px' }}> Level <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>1</h3><hr style={{ background: 'blue',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
                <div id="Bodygrid1"><p style={{ marginLeft: '1vh', marginTop: '-0vh' }}> Name <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>Telephonic Round</h3><hr style={{ background: 'blue',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
                <div id="Bodygrid1"><p style={{ marginLeft: '1vh', marginTop: '-0vh' }}> select Interviewer <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>GIRISHPRASAD KS</h3><hr style={{ background: 'gray',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
                <div id="Bodygrid1"><p style={{ marginLeft: '6vh', marginTop: '-0px' }}> Level <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>1</h3><hr style={{ background: 'blue',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
                <div id="Bodygrid1"><p style={{ marginLeft: '1vh', marginTop: '-0vh' }}> Name <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>Telephonic Round</h3><hr style={{ background: 'blue',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
                <div id="Bodygrid1"><p style={{ marginLeft: '1vh', marginTop: '-0vh' }}> select Interviewer <span id='star'>*</span><h3 style={{marginTop:'-0.5vh'}}>RAKESH APPAJI</h3><hr style={{ background: 'gray',height:'0.5',marginTop:'-2.8vh'}}/></p></div> 
              



                
               
            </div>

            <div id="black">
                <div id="black1" style={{backgroundColor:'black'}}><button style={{marginTop:'2vh',background:'gray'}}>1</button>  </div>
                <div id="black1" style={{backgroundColor:'red'}}><div style={{marginTop:'2vh',color:'white',marginLeft:'0.5vh'}}>< RiDeleteBin7Line/></div></div> 
                <div id="black1" style={{backgroundColor:'black'}}><button style={{marginTop:'2vh',background:'gray'}}>2</button> </div>
                <div id="black1" style={{backgroundColor:'red'}}><div style={{marginTop:'2vh',color:'white',marginLeft:'0.5vh'}}>< RiDeleteBin7Line/></div></div>
               
            </div>

            <button style={{borderRadius:'5px',backgroundColor:'blue',border:'blue',color:'white',marginLeft:"61.2vw",marginTop:'3vh'}}>ADD NEW </button>
            <button style={{backgroundColor:'blue',color:'white',marginLeft:'25vw',width:'10vw',height:'5vh',borderRadius:'5px',border:'blue',marginTop:'3vh'}}>UPDATE</button>  <button style={{width:'10vw',height:'5vh',borderRadius:'5px',border:'blue'}}>CANCEL</button>







        </div>
    )
}
export default Body