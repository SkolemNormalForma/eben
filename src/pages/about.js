
import React from 'react';
import '../index.css'

const About = () => {
  return (
    <div class="container">
          <h2 class="section-title">Rólunk</h2>
      <div class="row justify-content-between">
        <div class="col-lg-7 pr-lg-5 mb-4 mb-md-0">
          <p style={{ fontSize: 30 }}>"A király az ébenfából lépcsőket készíttetett az ÚR házába és a királyi palotába, s az énekeseknek citerákat és lantokat." </p>
          <p style={{ fontSize: 25, textAlign: 'right' }}><i>2 Krónikák 9, 11</i></p>
          <img src={require('../images/csoport.jpg')} class="w-100 mt-8 shadow-sm"></img>
        </div>

          <div class="col-md-5 pl-md-5">
              <p style={{ fontSize: 24 }} class="align-center">Az Ében együttes története néhány lelkes fiatal zenélgetésével kezdődött körülbelül 9-10 évvel ezelőtt Zilahon. Az Ében név jelentése egy fatípust takar: Salamon király idejében ébenfából készítettek hangszereket, illetve ilyen fából készültek a jeruzsálemi templomban található oszlopok és lépcsők is. A sok megtapasztalt áldáson, közös éneklésen keresztül közeledhetünk Istenhez: így tehát az Ében számunkra egyfajta lépcső. Legfőbb vágyunk pedig, hogy az Ő kezében lehessünk ébenfából készült hangszerek.</p>
              <p style={{ fontSize: 30 }}><b>Idén tavasszal elkészült az első lemezünk, melynek címe Lélekképek.</b></p>
          </div>
        </div>

    </div>
  );
};

export default About;