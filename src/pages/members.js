
import React from 'react';
import '../index.css'


class Members extends React.Component {

    state = {
        active: 1
    };

    selectMember = (e) => {
        this.setState({ active: e });
        console.log(e);
    }

    render() {
        return (
            <div class="container portfolio-section">
                <h2 class="section-title text-center">A zenekar tagjai</h2>
                <div class="filters">
                    <a onClick={() => this.selectMember(1)} className={this.state.active == 1 ? "active" : ""}>
                        Bántó-Tamás Szilveszter
                    </a>
                    <a onClick={() => this.selectMember(2)} className={this.state.active == 2 ? "active" : ""}>
                        Debre Tihamér
                    </a>
                    <a onClick={() => this.selectMember(3)} className={this.state.active == 3 ? "active" : ""}>
                        Dobai István
                    </a>
                    <a onClick={() => this.selectMember(4)} className={this.state.active == 4 ? "active" : ""}>
                        Dobai Zsolt
                    </a>
                    <a onClick={() => this.selectMember(5)} className={this.state.active == 5 ? "active" : ""}>
                        Domahidi Kata
                    </a>
                    <a onClick={() => this.selectMember(6)} className={this.state.active == 6 ? "active" : ""}>
                        Fazakas Dávid
                    </a>
                    <a onClick={() => this.selectMember(7)} className={this.state.active == 7 ? "active" : ""}>
                        Fazakas Péter
                    </a>
                    <a onClick={() => this.selectMember(8)} className={this.state.active == 8 ? "active" : ""}>
                        Márton Beáta
                    </a>
                </div>
                <div class="container">
                    <div class="row justify-content-between" style={{ display: this.state.active == 1 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-3.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>BÁNTÓ-TAMÁS SZILVESZTER</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>akusztikus gitár, ének</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 2 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-8.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>DEBRE TIHAMÉR</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>basszusgitár</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 3 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-1.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>DOBAI ISTVÁN</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>billentyű, ének</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 4 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-4.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>DOBAI ZSOLT</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>dob</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 5 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-2.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>DOMAHIDI KATA</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>cselló, ének</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 6 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-3.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>FAZAKAS DÁVID</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>hangtechnika</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 7 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-6.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>FAZAKAS PÉTER</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>elektromos gitár</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row justify-content-between" style={{ display: this.state.active == 8 ? 'flex' : 'none' }}>
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={require('../images/BW-White-5.jpg')} class="w-75 h-75 shadow-sm center"></img>
                                <div class="content-holder">
                                    <div class="text-holder">
                                        <h2 class="title" style={{ fontSize: 25, textAlign: 'center' }}>MÁRTON BEÁTA</h2>
                                        <p class="subtitle" style={{ fontSize: 25, textAlign: 'right' }}>ének</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Members;