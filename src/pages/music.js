
import React from 'react';
import '../index.css'

class Music extends React.Component {

    render() {
        return (
            <div class="container w-100 h-100">
                <h2 class="section-title">Zenénk</h2>
                <div class="video-wrapper">
                    <video playsinline autoPlay muted loop id="myVideo">
                        <source src={require('../images/lelekkepekvideo.webm')} type="video/webm">
                        </source>
                    </video>

                    <div class="overlay">
                        <h1 style={{ fontSize: 40, textAlign: 'center', color: 'black', marginTop: '10%', marginLeft: '10%' }}>Lélekképek</h1>

                        <h3 style={{ fontSize: 20, textAlign: 'center', color: 'black', marginTop: '40%', marginLeft: '10%' }}>
                            Várom az Urat (5:01) <br />
                            Jöjjetek, térjünk meg (4:39) <br />
                            Az Úr az én pásztorom (3:04) <br />
                            Lélek, én lelkem (5:03) <br />
                            Hontalan versekből (5:37) <br />
                            Áldom az Urat mindenkor (4:37) <br />
                            A bálványok (3:18) <br />
                            Jöjjetek, örvendezzünk (4:05) <br />
                            Mint a fű (2:44) <br />
                            A fényességes angyal (4:58) <br />
                            Hozzád kiáltok, Uram (5:20) <br />
                        </h3>


                    </div>
                    <div class="overlay" style={{ width: '50%', height: '50%', bottom: '50%', left: '50%' }}>
                        <img src={require('../images/boritokep.png')} style={{ width: '80%', height: 'auto', marginRight: '5%', marginTop: '5%' }}></img>
                    </div>

                    <div class="overlay" style={{ width: '50%', height: '25%', top: '75%', left: '50%' }}>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://distrokid.com/hyperfollow/ben61/llekkpek';
                            }}
                        > Hallgasd meg!</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Music;