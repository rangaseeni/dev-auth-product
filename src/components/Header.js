import React from 'react';

const Header = (props) => {
    // let counter = 0;
    // const [on, onSetTheme] = useState(0);
    // const onClickTheme = () => onSetTheme(count => count + 1);
    // function themeChange() {
    //     counter ++;
    //     let getCount = counter % 3;
    //     let ele = document.getElementsByClassName("navbar");
    //     if (getCount === 0) {
    //        ele[0].style.backgroundColor = "red";
    //     } else if (getCount === 1) {
    //         ele[0].style.backgroundColor = "yellow";
    //     } else if (getCount === 2) {
    //         ele[0].style.backgroundColor = "blue";
    //     }
    // }

    return (
        <nav className={`navbar navbar-expand-sm navbar-dark M-b-5 Navfix ${(props.colcnt % 3 === 0) ? 'bg-info': (props.colcnt % 3 === 1) ? 'bg-warning': 'bg-danger' }`}>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <img className="Logo-img" src={props.userdet.picture} alt="User"></img>
                </li>
                <li className="nav-item">
                    <span className="nav-link">{props.userdet.name}</span>
                </li>

                <button
                    className={`nav-item btn text-right ${(props.colcnt % 3 === 0) ? 'btn-info': (props.colcnt % 3 === 1) ? 'btn-warning': 'btn-danger' }`}
                    onClick={() => props.settheme()}>
                    Theme
                </button>
                <button
                    className={`nav-item btn btn-info text-right ${(props.colcnt % 3 === 0) ? 'btn-info': (props.colcnt % 3 === 1) ? 'btn-warning': 'btn-danger' }`}
                    onClick={() => props.loggedout()}>
                    Log Out
                </button>
            </ul>
        </nav>
    )
}

export default Header