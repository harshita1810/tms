import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({ onSelect, selectedOption }) {
  return (
    <>
      <DropdownButton
        id={`dropdown-variants-1`}
        variant="success"
        title="Rating"
        onSelect={onSelect}
        className='dropdown-item'
      >
        <Dropdown.Item eventKey="1" selectedOption = '1'>
          Weekly
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" selectedOption = '2'>
          Monthly
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DropDown;
