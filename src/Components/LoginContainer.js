import React from 'react';
import RegisterContainer from "./RegisterContainer";


class LoginContainer extends React.Component {
    handleInputChange =(event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    constructor(props) {
        super(props);
       this.state = {

        };

        // this.handleInputChange = this.handleInputChange.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }
render() {

    return (

            <div className="card">
                <div className="card-header">
                    Sign in here!
                </div>

                <div className="card-body">
                    <form autoComplete="on" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control col-sm-10"
                                placeholder="Enter your email here!"
                                onChange={this.handleInputChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control col-sm-10"
                                placeholder="enter your password here!"
                                onChange={this.handleInputChange}
                                required/>
                        </div>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="StoreInCookies"
                                onChange={this.handleInputChange}
                                id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">remember login details!</label>
                        </div>
                        <div className="form-group text-center">
                            <input
                                type="submit"
                                className="form-control btn btn-primary col-sm-6 mx-auto"
                                placeholder={"enter your email here!"}
                                value={"Sign in here!"}
                                onChange={this.handleInputChange}
                                required/>
                        </div>
                    </form>
                </div>
            </div>

    )
}
};

export default LoginContainer;