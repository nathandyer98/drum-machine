import React from 'react';
import './App.css'

const drumPads = [
  {
    keyCode: 81,
    id: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    id: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    id: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    id: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    id: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    id: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    id: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    id: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    id: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    console.log(event.key)
    drumPads.forEach((drumPad) => {
      if(drumPad.keyCode === event.key.toUpperCase().charCodeAt(0)){
        this.playSound(drumPad.id, drumPad.src)
      }
    })
  }

  getSoundName(src){
    return src.split('/').pop().split('.')[0].replace(/_/g, ' ');
  }

  displaySound(src){
    document.getElementById('display').innerText = this.getSoundName(src);
  }

  playSound(id, src) {
    const audio = document.getElementById(id);
    console.log(audio);
    audio.play();
    this.displaySound(src)
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="drum-pads">
          {drumPads.map((drumPad) => (
            <div className="drum-pad" onClick={() => {
              this.playSound(drumPad.id, drumPad.src);
            }} key={drumPad.src} id={drumPad.src}>
               {drumPad.id}
              <audio src={drumPad.src} className="clip" id={drumPad.id}></audio>
             </div>
          ))}
        </div>
        <div id="display">
        </div>
      </div>
    );
  }
}

export default App;