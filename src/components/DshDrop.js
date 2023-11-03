import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({ onSelect, selected }) {
  return (
    <>
      <DropdownButton
        id={`dropdown-variants-1`}
        variant="success"
        title="Year"
        onSelect={onSelect}
        className='dropdown-item'
      >
        <Dropdown.Item eventKey="1" selected = '1'>
          2022
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" selected = '2'>
          2023
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DropDown;
