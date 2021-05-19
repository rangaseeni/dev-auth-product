import React from 'react'
import Userprof from './Userprof'
import KeyPairComp from './KeyPairComp'
import AddProduct from './AddProduct'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

const Routenav = (props) => {
    return (
        <>
            <div className={`Sidenav ${(props.colcnt % 3 === 0) ? 'Side-info': (props.colcnt % 3 === 1) ? 'Side-warning': 'Side-danger'}`}>
                <NavLink to="/userprofile" activeClassName={(props.colcnt % 3 === 0) ? 'Active-info': (props.colcnt % 3 === 1) ? 'Active-warning': 'Active-danger'}> User Profile</NavLink >
                <NavLink to="/keypair" activeClassName={(props.colcnt % 3 === 0) ? 'Active-info': (props.colcnt % 3 === 1) ? 'Active-warning': 'Active-danger'}> Key pair </NavLink >
                <NavLink to="/addproduct" activeClassName={(props.colcnt % 3 === 0) ? 'Active-info': (props.colcnt % 3 === 1) ? 'Active-warning': 'Active-danger'}> Add Product </NavLink >
            </div>
            <div className="ContentRight">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/userprofile"></Redirect>
                    </Route>
                    <Route exact path="/userprofile">
                        <Userprof userdet={props.userdet}/>
                    </Route>
                    <Route exact path="/keypair">
                        <KeyPairComp />
                    </Route>
                    <Route exact path="/addproduct">
                        <AddProduct />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Routenav
