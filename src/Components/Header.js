import React from 'react';
let AuthKey = true;
let getUser = () => {
    // check if AuthKey is correct and if its still legit, if its incorrect return error and return the login button

        return {user: "sven"};
};
let ShowLoginButtons = () => {

return "test"
};

class Header extends React.Component {

    render() {
        
        return (
            <div className=''>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm-5 text-white">
                            <p className="font-weight-bold mt-1">Barbarian Assault</p>
                        </div>
                        <div className="col-sm-2">
                            {AuthKey? getUser().user : ShowLoginButtons() // checks if user is logged in
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;