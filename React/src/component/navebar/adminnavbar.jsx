import React,{useState} from "react"
export default function Navbar()
{
    const[navbar,setNavbar]=useState(false);
    const changeBg=()=>{
        if(window.scrollY>=0){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBg);
    return(
        <>
        {/* <nav className="navbar navbar-expand-sm fixed-top"> */}
        <nav className={navbar ? 'navbar active navbar-expand-sm bg-dark':'navbar navbar-expand-sm bg-dark'}>
            <a href="#" className="navbar-brand"><span>E</span>asy Gym</a>
            <div >
                <ul className="navbar-nav">
                    
                    <li className="nav-item"><a href="/admin" className="nav-link">Add Schedule</a></li>
                    <li className="nav-item"><a href="/viewshedule" className="nav-link">View Schedule</a></li>
                    <li className="nav-item"><a href="/add" className="nav-link">Add Attendace</a></li>
                    <li className="nav-item"><a href="/view" className="nav-link">View Attendace</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

