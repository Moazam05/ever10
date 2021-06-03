import React from 'react';

import border from '../../../../static/img/realign/border.png';
import one from '../../../../static/img/realign/one.png';

const HowItWorks = () => (
  <>
  <div className="faizan">
  <img className='faizan-img' src={require('../../../../static/img/realign/faizan.png')} alt='faizan first step' />


  <div className="manan">

 <img className='manan-img' src={require('../../../../static/img/realign/afnan.png')} alt='mobile first step' />

   <section id='splittable-how-it-works-section-realign'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 splittable-how-it-works-content-rea text-center'>
          <header>
            <h1>How it works?</h1>
            <img src={border} alt='Works img' />
          </header>
          <img className='first-step' src={one} alt='first step' />
          <img className='mobile-first-step' src={require('../../../../static/img/realign/mobile1.png')} alt='mobile first step' />
          <p className='capture-rea'>Capture your posture</p>
        </div>
      </div>

      <div className='row mt-5 justify-content-center'>
        <div className='col-lg-2 splittable-how-to-work-process text-center p-0'>
          <img
            className='img-fluid kk'
            src={require('../../../../static/img/realign/selfie.png')}
            alt='Selfi Icon'
            />
        </div>

        <div className='col-lg-4 text-center splittable-how-to-work-process-arrow'>
          <h3 className='howjasy-selfie'>Selfie mode</h3>
          <ul className='selfie-rea'>
            <li> Rest your phone vertically, or use stand</li>
            <li>Stand in front of the phone</li>
            <li>
              Listen to the voice prompts & rotate when prompted to capture your
              front, right side, posterior and left side
            </li>
          </ul>
        </div>

        <div className='col-lg-2 splittable-how-to-work-process text-center p-0'>
  <div className="jj">
          <img
            
            className='img-fluid jj'
            src={require('../../../../static/img/realign/Person.png')}
            alt='Selfi Icon'
            />
            </div>
        </div>

        <div className='col-lg-4 text-center splittable-how-to-work-process-arrow'>
          <h3 className='howjasy-selfie'>Assisted mode</h3>
          <ul className='selfie-rea'>
            <li>
              Ask someone to capture your posture from the front, right side,
              posterior and left side
            </li>
          </ul>
        </div>

        <div className='row'>
          <div className='col-12 mt-5 splittable-how-it-works-content-rea text-center mbr'>
            <img className="second-step"
              src={require('../../../../static/img/realign/two.png')}
              alt='second step'
              />
              <img className="mobile-second-step"
              src={require('../../../../static/img/realign/mobile2.png')}
              alt='mobile second step'
              />
            <p className='capture-rea'>Analyse your results</p>
            <div className='exercise-rea'>
              <img
                src={require('../../../../static/img/realign/analyse.png')}
                alt='Analyse'
                />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mt-5 splittable-how-it-works-content-rea text-center'>
            <img
            className="third-step"
            src={require('../../../../static/img/realign/three.png')}
            alt='third step'
            />
              <img
            className="mobile-third-step"
            src={require('../../../../static/img/realign/mobile3.png')}
            alt='mobile third step'
            />

            <p className='capture-rea'>Trak your progress</p>
            <div className='exercise-rea'>
              <img
                src={require('../../../../static/img/realign/progress.png')}
                alt='Progress'
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  </div>
  </>
               
);

export default HowItWorks;
