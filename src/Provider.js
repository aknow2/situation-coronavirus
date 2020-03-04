import React from 'react';
import SituationData from './situation';

export const SituationContext = React.createContext()

const DisplaySize = {
  desktop: 'desktop',
  mobile: 'mobile'
}

const getDisplaySize = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const maxWidth = 800;
  const maxHeight = 550;
  if (w < maxWidth || h < maxHeight) {
    return DisplaySize.mobile;
  } else {
    return DisplaySize.desktop;
  }
}

export default class Provider extends React.Component {

  state = { situations: [], day: '', dateList: [], displaySize: DisplaySize.desktop, playing: false };
  componentDidMount() {
    const _situations = SituationData.situations
    const _places = SituationData.places;
    // join place data
    const situations = _situations.map(data => {
      const areas = data.areas.map(area => {
        const place = _places.find(p => p.id === area.placeId)
        return {
          ...area,
          ...place
        }
      });
      return {
        ...data,
        areas
      }
    })
    const displaySize = getDisplaySize();
    this.setState({
      situations,
      displaySize,
      dateList: situations.map((s, i) => ({ value: i, day: s.day })),
      day: _situations[_situations.length - 1].day,
    })
    window.addEventListener('resize', () => {
      const size = getDisplaySize();
      this.setState({
        displaySize: size,
      });
    });
  }

  doAnimation = () => {
 
  }

  changeDate = day => {
    this.setState({day});
  };

  nextDate = () => {
   const { day, situations } = this.state
   const nextIndex = situations.findIndex((s) => s.day === day) + 1;
   let next = situations[nextIndex]
   next = next !== undefined ? next : situations[0];
   this.setState({
     day: next.day
   })
  }
  prevDate = () => {
   const { day, situations } = this.state
   const prevIdex = situations.findIndex((s) => s.day === day) - 1;
   let prev = situations[prevIdex]
   prev = prev !== undefined ? prev : situations[situations.length - 1];
   this.setState({
     day: prev.day
   })
  }

  play = () => {
    this.setState({ playing: true})
    let base = Date.now()
    const animation = () => {
      const current = Date.now();
      if (this.state.playing ) {
        if (current - base > 350) {
          base = current
          this.nextDate();
        }
        requestAnimationFrame(animation)
      }
    }
    requestAnimationFrame(animation)
  }
  pause = () => {
    this.setState({ playing: false})
  }

  render() {
    return (
      <SituationContext.Provider value={{
        ...this.state,
        onChangeDate: this.changeDate,
        nextDate: this.nextDate,
        prevDate: this.prevDate,
        play: this.play,
        pause: this.pause
      }}>
        {this.props.children}
      </SituationContext.Provider>);
  }
}