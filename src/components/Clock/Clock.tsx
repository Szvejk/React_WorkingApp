import React from 'react'

interface ClockProps{
    isEnglish:boolean
}


export const Clock = ({isEnglish}:ClockProps) => {
  return (
    <div>10:10 {isEnglish ? "AM" : ""}</div>
  )
}
