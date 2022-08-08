import * as Tone from "tone"

const chorus = new Tone.Chorus(1, 3, 15).start().toDestination()
const reverb = new Tone.Reverb(3).toDestination()
const delay = new Tone.PingPongDelay(0.2, 0.2).toDestination()
const distortion = new Tone.Distortion(1).toDestination()
const phaser = new Tone.Phaser(8, 8, 100).toDestination()

export const startEffects = (synth: Tone.PolySynth) => {
  return synth.chain(
    phaser,
    delay,
    distortion,
    reverb,
    chorus,
    Tone.Destination,
  )
}

export const updateEffects = (synth: Tone.PolySynth) => {
  return synth.chain(
    phaser,
    delay,
    distortion,
    reverb,
    chorus,
    Tone.Destination,
  )
}

export const setChorusOff = () => {
  chorus.wet.value = 0
}
export const setChorusOn = () => {
  chorus.wet.value = 1
}

export const setReverbOn = () => {
  reverb.wet.value = 1
}
export const setReverbOff = () => {
  reverb.wet.value = 0
}

export const setDelayOn = () => {
  delay.wet.value = 1
}
export const setDelayOff = () => {
  delay.wet.value = 0
}

export const setDistortionOn = () => {
  distortion.wet.value = 1
}
export const setDistortionOff = () => {
  distortion.wet.value = 0
}

export const setPhaserOn = () => {
  phaser.wet.value = 1
}
export const setPhaserOff = () => {
  phaser.wet.value = 0
}
