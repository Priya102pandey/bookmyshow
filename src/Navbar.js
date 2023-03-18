import logo from './logo.png';
import icon from './icon.png'
import wishlist from './wishlist.png'
import './App.css';

function Navbar() {
    return (
        <>
            <div className='Navbar-container'>
                <div>
                    <div> <img src={logo} className="App-logo" alt="logo" /></div>
                </div>
                <div className='blank-div'></div>
                <div>
                    <div className='input-div'>
                        <input type='text' className='Search-input' placeholder='Search'/>
                        <button className='Search-btn'>Submit</button>
                    </div>
                </div>
                <div className='wishlist-div'>
                <span><img src={wishlist} className="wishlist-logo" alt="logo" /></span>
                </div>
                <div>
                    <button className='login-btn'><span><img src={icon} className="login-logo" alt="logo" /></span><span className='login'>Login</span></button>
                </div>
            </div>

        </>

    );
}

export default Navbar;