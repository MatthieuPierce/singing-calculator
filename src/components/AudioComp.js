import React from 'react';

class AudioComp extends React.Component {

//credit to MDN Documentation for AudioContext training: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext 

// credit to Joe Sullivan of http://joesul.li/van/react-and-web-audio/ for a helpful React implementation example
// Joe uses Redux rather than default React state, which would be much more efficient, but I undertook this exercise to practice state without Redux.

constructor({props}) {
  super(props);
}


componentDidMount() {
  this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

componentDidUpdate(prevProps) {
  console.log(`AudioComp componentDidUpdate, sees this.props.lastButton as:`);
  console.log(this.props.lastButton);
  console.log(`next up is processButton forEach playingButton`);
  if (this.props.lastButton !== prevProps) {
    this.processButton(this.props.lastButton);
    // this.props.lastButton.processButton.bind(this);
  }
  
}

componentWillUnmount() {
  this.audioContext.close();
}

processButton(button){
  let osc = this.audioContext.createOscillator();
  osc.frequency.value = this.noteNumberToFrequency(button.audioNum);
  osc.start(this.audioContext.currentTime);
  osc.type = 'triangle';
  osc.connect(this.audioContext.destination);

  //simple timer to stop button sound after given interval
  const soundTimer = () => {
    setTimeout( () => {
      osc.stop(this.audioContext.currentTime);
    }, 200);
  }
  const timerId = soundTimer();
  return () => {
    clearTimeout(timerId);
  }


}

noteNumberToFrequency(num) {
  // from https://github.com/danigb/midi-freq via http://joesul.li/van/react-and-web-audio/ 
  return Math.pow(2, (num - 69) / 12) * 440;
}

render() {
  // console.log('AudioComp rendered');
  return null;
}


}


export default AudioComp;