import './navbar.css'
function Navbar(){
    return(
        <div>
            <div className="header">
                <div className="logo">
                    Travel<span>AI</span>
                </div>
                <div> <a href="#"><span className='home'>Home</span></a></div>
            </div>
        </div>
    )
}
export default Navbar