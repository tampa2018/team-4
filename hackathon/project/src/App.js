import React, { Component } from 'react';
import image from "./100-Great-Ideas-01.png";
import  './App.css';
//import Map from './Map';


class App extends Component {

  render() {
    var bannerStyle={
        //fontSize: "20px",
        border: "2px solid black",
        backgroundColor: "blue",
        height:"100px",
        width:"100%",

    };
    var logoStyle={
        width: "15%",
        height:"100%",
        backgroundSize: "56%",
        backgroundRepeat: "no-repeat",
        backgroundImage: " url("+ image +")",
        float:"left",
    };
    var loginStyle={
        border: "2px solid black",
        backgroundColor:"yellow",
        width:"20%",
        height:"20%",
        float:"right",
        marginTop:"6%",

    };
    var titleStyle={
        fontSize:"20px",
        border: "2px ",
        borderWidth:"30%",
        borderHeight:"40%",
        width:"30%",
        height:"40%",
        //float: "center",
        marginTop:"3%",
        marginLeft:"45%",
    };
    var campaignStyle={
        border: "2px solid black",
        backgroundColor:"sliver",
        width:"20% ",
        height:"20%",
        float:"right",
        marginTop:"0%",
    };
    var campaignMenu={};


    return (
      <div className="App">
        <div style={bannerStyle}>
            <div style={loginStyle}></div>
            <div style={logoStyle}></div>
            <div style={titleStyle}>Radical Partners</div>
            <div style={campaignStyle}>Campaigns</div>
            <div style={campaignMenu}>
                <ul id="events">


                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
