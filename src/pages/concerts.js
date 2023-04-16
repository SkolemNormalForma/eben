
import React from 'react';

const Concerts = () => {
  return (

    <div class="container" style={{ marginBottom: '20px' }}>
      <h2 class="section-title text-center">Események</h2>
      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-04-22" class="icon">
            <em>Szombat</em>
            <strong>Április</strong>
            <span>22</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Zilah <br /> <i>Vigadó</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/219797990700551?ref=newsfeed';
            }}
          > Érdekel!</button>

        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-04-23" class="icon">
            <em>Vasárnap</em>
            <strong>Április</strong>
            <span>23</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Szatmárnémeti <br /> <i>Iparos Otthon</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/170240168853809/?ref=newsfeed';
            }}
          > Érdekel!</button>
        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-04-22" class="icon">
            <em>Szombat</em>
            <strong>Április</strong>
            <span>29</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Marosvásárhely <br /> <i>Stúdió színház</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/248921047578019/?ref=newsfeed';
            }}
          > Érdekel!</button>

        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-04-23" class="icon">
            <em>Vasárnap</em>
            <strong>Április</strong>
            <span>30</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Székelyudvarhely <br /> <i>Stúdió Mozi</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/2347669288738268/?ref=newsfeed';
            }}
          > Érdekel!</button>
        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-05-06" class="icon">
            <em>Szombat</em>
            <strong>Május</strong>
            <span>6</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Kraszna <br /> <i>Focipálya</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/595638622505933/';
            }}
          > Érdekel!</button>
        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-05-13" class="icon">
            <em>Szombat</em>
            <strong>Május</strong>
            <span>13</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Nagyvárad <br /> <i>PKE díszterme</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/973771943618526/?ref=newsfeed';
            }}
          > Érdekel!</button>
        </div>
      </div>

      <div class="row eventBorder gradient1">
        <div class="col-md-2">
          <time datetime="2023-05-17" class="icon">
            <em>Csütörtök</em>
            <strong>Május</strong>
            <span>17</span>
          </time>
        </div>
        <div class="col-lg-5">
          <h2>Kolozsvár <br /> <i>Biserica Via</i></h2>
        </div>
        <div class="col-lg-3">
          <h2>18:00</h2>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.facebook.com/events/211641024843555/?ref=newsfeed';
            }}
          > Érdekel!</button>
        </div>
      </div>

    </div>
  );
};

export default Concerts;