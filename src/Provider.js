import React from 'react';
import SituationData from './situation';

export const SituationContext = React.createContext()


export default class Provider extends React.Component {
  state = { situations: [], day: SituationData.situations[0].day};
  changeDate = day => {
    this.setState({day});
  };

  componentDidMount() {
    // join place data
    const situations = SituationData.situations.map(data => {
      const areas = data.areas.map(area => {
        const place = SituationData.places.find(p => p.id === area.placeId)
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
      situations
    })
  }
  render() {
    return (
      <SituationContext.Provider value={{
        ...this.state,
        onChangeDate: this.changeDate,
      }}>
        {this.props.children}
      </SituationContext.Provider>);
  }
}