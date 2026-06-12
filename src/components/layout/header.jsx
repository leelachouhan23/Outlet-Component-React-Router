import { NavLink } from "react-router-dom";

export const Header = () =>{
        return(
            <>
                <header className="main-header">
                    <section className="section">
                        <div className="head-Container">
                            <div className="head-text">
                                <p>Chouhan Membership, 30 day's to go expiry</p>
                            </div>
                            <div className="sing_up_in">
                                <NavLink to="#"> SING IN</NavLink>
                                <NavLink to="#"> SING UP</NavLink>
                            </div>
                        </div>
                    </section>
                    <nav className="navbar">
                        <ul>
                            <li className="first">
                                <NavLink to="/" className="navlink">Home</NavLink>
                            </li>
                            <li className="first">
                                <NavLink to="about/" className="navlink">About</NavLink>
                            </li>
                            <li className="first">
                                <NavLink to="movies/" className="navlink">Movies</NavLink>
                            </li>
                            <li className="first">
                                <NavLink to="contact/" className="navlink">Contact</NavLink>
                            </li>
                        </ul>
                        <hr />
                    </nav>
                </header>
            </>
        )
}



// import { NavLink } from "react-router-dom"

// export const Header = () => {
//     return (
//         <>
//             <header className="section-navbar">
//                 <section  className="top-text">
//                     <div  className="head container">
//                         <div className="head_txt">
//                             <p>Get Chouhan Membership, 30-day return refund guarantee.</p>
//                         </div>
//                         <div className="sing_in_up">
//                             <NavLink to="#">SIGN IN</NavLink>
//                             <NavLink to="#">SIGN UP</NavLink>
//                         </div>
//                     </div>
//                 </section>
//                 <div className="container">
//                     <div className="navbar-brand">
//                             <NavLink to="index">
//                                 <p>ChouhanFlix</p>
//                             </NavLink>     
//                     </div>
//                     <nav className="navbar">
//                         <ul>
//                             <li className="nav-item">
//                                 <NavLink to="/" className="nav-link">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="about/">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                     <NavLink to="movies" className="nav-link">movies</NavLink>
//                             </li>
//                                <li className="nav-item">
//                                     <NavLink to="contact" className="nav-link">Contact</NavLink>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     )
// }