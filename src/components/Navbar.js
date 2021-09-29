import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../redux/actions';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
    const { location } = props;
    console.log(location);

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const NavItems = () => {
        return (
            <ul className="navbar-nav ml-auto mr-5 mt-2 mt-lg-0">
                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/contactus">Contact us</Link>
                </li>
                {
                    user
                        ?
                        <li className="nav-item">
                            <button type="button" className="btn btn-sm btn-danger text-white nav-link" onClick={() => dispatch(signOut())}>Sign out</button>
                        </li>
                        :
                        <div className="d-flex">
                            <li className="nav-item mr-5">
                                <Link className="nav-link" to="/signup">Sign up <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign in</Link>
                            </li>
                        </div>
                }
            </ul>
        )


    }


    if (location.pathname.match(/signin|signup/)) {
        return null;
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">React</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <NavItems />
                </div>
            </nav>
        </div>
    )

}

export default withRouter(Navbar)
