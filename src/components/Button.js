import React from 'react'

const Button = ({name,id,onSubmit,label}) => {
  return (
    <div key={name + id}>
      <button onSubmit={onSubmit}>{label}</button>
    </div>
  )
}

export default Button