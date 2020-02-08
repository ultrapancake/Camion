import React, { Component } from 'react';
import Navbar from '../components/navLogin';
import Jumbotron from '../components/splashHero';
import Clients from '../components/splashClients';
import Works from '../components/splashWorks';
import Footer from '../components/footer';

class Splash extends Component {
    render() {
        return (
            <div>
                {/*<Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />*/}
                <Jumbotron />
                <Clients />
                <Works />
                <Footer />
            </div>
        )
    }
}

export default Splash;