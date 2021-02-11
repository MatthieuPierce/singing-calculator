import React from 'react';
import {noteValues} from '../notevalues.json';
// import {GuitarFuzz} from '../waveTables.json';

class AudioComp extends React.Component {

//credit to MDN Documentation for AudioContext training: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext 
// credit to Joe Sullivan of http://joesul.li/van/react-and-web-audio/ for a helpful React implementation example, 
// which uses Redux rather than default React state (and some now-unsafe lifecycle methods), which would be much more efficient, but I undertook this exercise to practice state without Redux.

// credit to https://marcgg.com/blog/2016/11/01/javascript-audio/ for the note frequencies hash saved in noteValues

constructor({props}) {
  super(props);
}

componentDidMount() {
  //create base AudioContext
  this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

  //create base compressor
  this.compressor = this.audioContext.createDynamicsCompressor();

  // oscillator + gain node will connect to compressor inside processButton
  // because with multiple presses there will be multiple oscillators running at a time  

  // connect compressor to audioContext destination
  this.compressor.connect(this.audioContext.destination);
  // supply the newly-minted DynamicsCompressorNode with values
  // cribbed directly from MDN https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode
  // (decided not to use)
  // compressor.threshold.setValueAtTime(-50, this.audioContext.currentTime);
  // compressor.knee.setValueAtTime(40, this.audioContext.currentTime);
  // compressor.ratio.setValueAtTime(12, this.audioContext.currentTime);
  // compressor.attack.setValueAtTime(0, this.audioContext.currentTime);
  // compressor.release.setValueAtTime(0.25, this.audioContext.currentTime);

}

componentDidUpdate(prevProps) {
  if (this.props.lastButton !== prevProps && this.props.lastButton !== '') {
    this.processButton(this.props.lastButton);
  }
  
}

componentWillUnmount() {
  this.audioContext.close();
}

processButton(button){
  //create oscillator from the base audioContext (created in componentDidMount)
  let osc = this.audioContext.createOscillator();

  //assign frequency and type (stored in button.audioNum) to oscillator
  osc.frequency.value = this.noteStringToFrequency(button.noteString);
  osc.type = 'sine';
  
  // fun with custom wave-tables / periodic waves, declined to use in production
  // let guitarTable = this.audioContext.createPeriodicWave(GuitarFuzz.real, GuitarFuzz.imag);
  // console.log(popTable);
  // osc.setPeriodicWave(guitarTable);  
  
  // create custom GainNode from the base audioContext
  let gainNode = this.audioContext.createGain();

  //set sound duration & set gain to gracefully die with an exponential or linear ramp 
  const soundDuration = 1.8;
  gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + soundDuration);

  //connect (local) oscillator to (local) gainNode
  osc.connect(gainNode);

  //connect (local)  gainNode to base compressor
  gainNode.connect(this.compressor);

  //actually play oscillator sound
  osc.start(this.audioContext.currentTime);

  // so full audioContext connect path is:
  // this.audioContext -> processButton.oscillator -> processButton.gainNode -> this.compressor -> this.audioContext.destination

  //actually stop sound after duration (replacing sloppy setTimeout method below)
  osc.stop(this.audioContext.currentTime + soundDuration);
  

  //simple, sloppy timer to stop button sound after given interval
  // const soundTimer = () => {
  //   setTimeout( () => {
  //     osc.stop(this.audioContext.currentTime);
  //   }, 10000);
  // }
  // const timerId = soundTimer();
  // return () => {
  //   clearTimeout(timerId);
  // }
}

noteStringToFrequency(string) {
  // map human-accessible note-decriptor in button.noteString to its frequency

  return noteValues[string];
}

render() {
  return null;
}


}


export default AudioComp;