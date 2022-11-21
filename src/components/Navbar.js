import '../stylesheet/navstyle.css'
import { useState } from 'react'

const Navbar = () => {
    //open navigation menu event function for mobile screens
    const [menuStatus, setMenuStatus] = useState(false)
    const openMenu = () => {
        setMenuStatus(!menuStatus)
    }
    

    return ( 
        <div className="navbar">
            <h1 className="logo">Aiart</h1>

            <i className="fa-solid fa-bars menu" onClick={openMenu}></i>

            <div className="navlinks">
                <a href="/" className="link home">Home</a>
                <a href="/about" className="link">About</a>
                <a href="/generator" className="link">Generator</a>
                <a href="/developer" className="link">Developer</a>
            </div>

            <div className="navlinks" style={{display: menuStatus? 'block' : 'none'}}>
                <a href="/" className="link home">Home</a>
                <a href="/about" className="link">About</a>
                <a href="/generator" className="link">Generator</a>
                <a href="/developer" className="link">Developer</a>
            </div>
        </div>
     );
}
 
export default Navbar;