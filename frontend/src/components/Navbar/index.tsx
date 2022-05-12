import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';


function Navbar() {

    return (
        <header>
            <nav className="container">

                <div className='dsmovie-nav-content'>
                    <h1>Fernando Venturini</h1> 

                    <div className='dsmovie-nav-content h4'>
                        <h4>Web Programmer</h4>
                    </div>

                    <a href="https://github.com/FernandoVenturini"></a>

                    <div className='dsmovie-contact-container'>
                        <GithubIcon />
                        <p className='dsmovie-contact-link'>/FernandoVenturini</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;