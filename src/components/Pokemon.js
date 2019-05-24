import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { id, name, url, types } = this.props.item;
    return (
      <div className="pokemonCard">
        <img className="pokemonImage" src={url} alt={name} />
        <h2 className="name"> {name}</h2>
        <ul className="pokemonTypes">
          {types.map(type => {
            return (
              <li className="pokemonType" key={type + id}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
Pokemon.propTypes = {
  item: PropTypes.object
};

export default Pokemon;
