import React from 'react';

let getUser = () => {
    // check if AuthKey is correct and if its still legit, if its incorrect return error and return the login button

        return {user: "sven"};
};


class Header extends React.Component {

    render() {
        
        return (
            <div className=''>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm-5 text-black-50">
                            <p className="font-weight-bold mt-1">Barbarian Assault</p>
                        </div>
                        <div className="col-sm-2">
                            {this.props.AuthKey? getUser().user : "" // checks if user is logged in
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;