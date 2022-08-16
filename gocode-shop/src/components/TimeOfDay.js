import React from 'react'

const TimeOfDay = () => {
    const gender = "dasljkbfemale"
    const isMale = false
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  return (
    <div>
        <h1>good {timeOfDay} asher chiff</h1>
        {isMale ? <p>shalom gever</p> : <h3>shalom sister</h3>}
        {gender === "male" && <p>shalom gever</p>}
        {gender === "female" && <h3>shalom sister</h3>}
    </div>
  )
}

export default TimeOfDay