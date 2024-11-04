import '../styles/nav.css'
import '../styles/globalstyles.css'

const Nav: React.FC= () => {
    return(
       <>
       <header className='header'>
            <nav className='navbar'>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
       </header>
       </>
    );
};

export default Nav;