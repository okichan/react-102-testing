import React from 'react';

function handleChange(e) {
   const name = e.target.value;
   this.props.onChange(name);
 }

export const SelectName = ({name}) => {
   return (
      <form id="great-names" onChange={ handleChange }>
            <option value="Frarthur">
            Frarthur
            </option>

            <option value="Gromulus">
            Gromulus
            </option>

            <option value="Thinkpiece">
            Thinkpiece
            </option>
      </form>
   )     

}