import React,{useState} from "react"
import { FaRegUserCircle } from "react-icons/fa";
export default function Navbar()
{
    const[navbar,setNavbar]=useState(false);
    const changeBg=()=>{
        if(window.scrollY>=100){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBg);
    return(
        <>
        {/* <nav className="navbar navbar-expand-sm fixed-top"> */}
        <nav className={navbar ? 'navbar active navbar-expand-sm fixed-top':'navbar navbar-expand-sm fixed-top'}>
            <a href="#" className="navbar-brand"><span>E</span>asy Gym</a>
            <div >
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/schedule" className="nav-link">Schedul</a></li>
                    <li className="nav-item"><a href="/uprofile" className="nav-link"><FaRegUserCircle className="icon"/></a></li>
                    <li className="nav-item"><a href="/" className="nav-link">LogOut</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
