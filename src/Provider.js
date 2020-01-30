import React from 'react';
import SituationData from './situation';

export const SituationContext = React.createContext()


export default class Provider extends React.Component {

  state = { situations: [], day: '', dateList: []};
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
    this.setState({
      situations,
      dateList: situations.map((s, i) => ({ value: i, day: s.day })),
      day: _situations[0].day
    })
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


  render() {
    return (
      <SituationContext.Provider value={{
        ...this.state,
        onChangeDate: this.changeDate,
        nextDate: this.nextDate,
        prevDate: this.prevDate
      }}>
        {this.props.children}
      </SituationContext.Provider>);
  }
}