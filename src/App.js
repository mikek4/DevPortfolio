import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import github from './images/iconmonstr-github-3-64.png';
import linkedin from './images/iconmonstr-linkedin-3-64.png';
import crystal from './images/crystals.JPG';
import giphy from './images/giphy.JPG';
import foodtube from './images/foodtube.JPG';
import train from './images/trains.JPG';
import phree from './images/phreedelphia.png';
import resume from './images/iconmonstr-file-22-64.png';
import ss from './images/ResumeSS.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">Michael Katz</h1>
          <p className="lead">Web Developer</p>
          <a target='_blank' className='hvr-grow' href='https://www.linkedin.com/in/michael-r-katz'><img className='linkedin' src={linkedin} alt='LinkedIn'></img></a>
          <a target='_blank' href="https://github.com/mikek4"><img src={github} alt='Github'></img></a>
          <a target='_blank' href={ss}><img className='resume' src={resume} alt='LinkedIn'></img></a>

          <hr className="my-4" />
          <h1 className='display-4'>Projects</h1>
          <div class="row">
            <div class="col-sm">
              <a target='_blank' href='https://mikek4.github.io/unit-4-game/'><img className='proj_items img-responsive' src={crystal} alt='LinkedIn'></img></a>
              <a target='_blank' href='https://github.com/mikek4/unit-4-game'><p>Repo</p></a>
            </div>
            <div class="col-sm">
              <a target='_blank' href='https://mikek4.github.io/GIPHY-API/'><img className='proj_items img-responsive' src={giphy} alt='giphy'></img></a>
              <a target='_blank' href='https://github.com/mikek4/GIPHY-API'><p>Repo</p></a>
            </div>
            <div class="col-sm">
              <a target='_blank' href='https://jondatz.github.io/project1_apis/'><img className='proj_items img-responsive' src={foodtube} alt='foodtube'></img></a>
              <a target='_blank' href='https://github.com/jonDatz/project1_apis'><p>Repo</p></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <a target='_blank' href='https://mikek4.github.io/TrainSchedule/'><img className='proj_items img-responsive' src={train} alt='foodtube'></img></a>
              <a target='_blank' href='https://github.com/mikek4/TrainSchedule'><p>Repo</p></a>

            </div>
            <div class="col-sm">
              <a target='_blank' href='http://phreeadelphia.herokuapp.com/'><img className='proj_items img-responsive' src={phree} alt='foodtube'></img></a>
              <a target='_blank' href='https://github.com/alinavo/Project2'><p>Repo</p></a>
            </div>
            <div class="col-sm">
              <a target='_blank' href=''><img className='proj_items img-responsive' src={foodtube} alt='foodtube'></img></a>
              <a target='_blank' href='https://github.com/mmooney363/MealAppeal'><p>Repo</p></a>
            </div>
          </div>
          <hr className='my-4' />
        </div>
      </div>
    );
  }
}

export default App;
