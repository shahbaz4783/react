import React from 'react'

export const Button = ({ label, onSelect }) => {
  return <button onClick={onSelect}>{label}</button>;
}
