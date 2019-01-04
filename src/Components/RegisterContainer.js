import React from 'react';
import Axios from "axios";

class RegisterContainer extends React.Component{
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit =(event) => {

        event.preventDefault();
        console.log(this.state);
        Axios.post("localhost/api/register",this.state).then(response =>
        {
         console.log(response);
        }).catch(e => {
            console.error(e);
        });
    }

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Register here!
                    </div>
                    <div className="card-body">
                        <form autoComplete="on" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name={"username"}
                                    className="form-control col-sm-10"
                                    placeholder={"Enter your username here!"}
                                    onChange={this.handleInputChange}
                                    required/>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name={"email"}
                                    className="form-control col-sm-10"
                                    placeholder="Enter your email here!"
                                    onChange={this.handleInputChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name={"password"}
                                    className="form-control col-sm-10"
                                    placeholder={"Enter your password here!"}
                                    onChange={this.handleInputChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name={"confirm_password"}
                                    className="form-control col-sm-10"
                                    placeholder={"Confirm your password here!"}
                                    onChange={this.handleInputChange}
                                    required/>
                            </div>
                            <div className="form-group text-center">
                                <input
                                    type="submit"
                                    className="form-control btn btn-primary col-sm-6"
                                    placeholder={"enter your email here!"}
                                    onChange={this.handleInputChange}
                                    value={"Sign up!"}/>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
        )
    }
};

export default RegisterContainer;