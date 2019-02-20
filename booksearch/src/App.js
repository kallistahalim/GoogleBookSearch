import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import BookSearch from "./components/BookSearch";

// import Images from './components/images';
// import dogs from "./dog.json";

class App extends Component {
    render() {
        return (
                <div>
                    <NavBar />
                    <Jumbotron />
                    <BookSearch />
                </div>
        );
    };
}

                
            






export default App;
