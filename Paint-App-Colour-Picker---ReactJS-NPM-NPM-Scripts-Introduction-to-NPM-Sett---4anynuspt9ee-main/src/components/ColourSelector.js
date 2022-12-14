import React from 'react';
import '../styles/App.css';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background} = config;
  //console.log("ColourSelector:", selectNextBackground)
 
  return (
    <button className={config.classname} onClick={() =>selectNextBackground({background: background})}>
     {config.label}
    </button>
  )
}
export default ColourSelector;


