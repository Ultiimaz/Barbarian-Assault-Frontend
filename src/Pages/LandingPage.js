import React, { Component } from 'react';
import Header from '../Components/Header.js';
import SignUpContainer from "../Components/SignUpContainer";

let AuthKey = false;
class LandingPage extends Component {
    showName = () =>
    {
        return(
            <div>

            </div>
        ); // will return data about the user if it exists!
    };
    handleStateChangeEvent(e)
    {
        e.preventDefault();

    };
  render() {
    return (
    <div className="h-100 bg-light">
         <Header authKey={AuthKey}/>
         <div className="container-fluid">

        <div className="row">
            <div className="col-sm-4">
                <SignUpContainer />
            </div>
        <div className="col-sm-8 flex-column">
            <div className="card">
                <div className="card-header">
                    <label className={"float-right"}>{"5 minutes ago!"}</label>
                    Current news comes here!
                </div>
                <div className="card-body">
                    Today we will build our new game!
                </div>
            </div>
        </div>

        </div>
    </div>
</div>)
  }
}

export default LandingPage;
