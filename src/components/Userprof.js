import React from 'react';

class Userprof extends React.Component{
    render() {
    return (
        <div className="card col-sm-6 col-md-4">
            <img className="Card-img" src={this.props.userdet.picture} alt="User"></img>
            <div className="card-body">
                <h5 className="card-title text-center">User Information</h5>
                <ul className="card-text P-0 L-t-none">
                    <li> Full Name: {this.props.userdet.name}</li>
                    <li> First Name: {this.props.userdet.given_name}</li>
                    <li> Last Name: {this.props.userdet.family_name}</li>
                    <li> Email: {this.props.userdet.email}</li>
                    <li> Locale: {this.props.userdet.locale}</li>
                    <li> Is Email Verified: <input type="checkbox" checked={this.props.userdet.email_verified} value={this.props.userdet.email_verified} disabled></input></li>
                    <li> Unique ID: {this.props.userdet.sub}</li>
                </ul>
            </div>
        </div>
    );
    }
}

export default Userprof