import '../stylesheet/navstyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //open navigation menu event function for mobile screens
    const [menuStatus, setMenuStatus] = useState(false)
    const openMenu = () => {
        setMenuStatus(!menuStatus)
    }
    

    return ( 
        <div className="navbar">
            <Link to="/" className='logo'><h1 className="logo">Aiart</h1></Link>

            <i className="fa-solid fa-bars menu" onClick={openMenu}></i>

            <div className="navlinks">
                <Link to="/" className="link home">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/generator" className="link">Generator</Link>
                <a href="https://www.linkedin.com/in/mike-lead/" target="_blank" rel="noopener noreferrer" className="link">Developer</a>
            </div>

            <div className="navlinks" style={{display: menuStatus? 'block' : 'none'}}>
                <Link to="/" className="link home" onClick={() => setMenuStatus(!menuStatus)}>Home</Link>
                <Link to="/about" className="link" onClick={() => setMenuStatus(!menuStatus)}>About</Link>
                <Link to="/generator" className="link" onClick={() => setMenuStatus(!menuStatus)}>Generator</Link>
                <a href="https://www.linkedin.com/in/mike-lead/" target="_blank" rel="noopener noreferrer" className="link" onClick={() => setMenuStatus(!menuStatus)}>Developer</a>
            </div>
        </div>
     );
}
 
export default Navbar;