import React from 'react'

function Welcome() {
  return (
    <div id="welcome">
        <div id="maincontainer">
            <img src={require('../resources/logo-blue-transparent.png')} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et augue ullamcorper, commodo tellus ut, ullamcorper mi. Maecenas ut pellentesque lacus. Curabitur dictum, mi sit amet hendrerit vehicula, mi urna iaculis elit, in commodo nunc neque id tellus. Pellentesque imperdiet purus ac eros suscipit, sed tempor ipsum malesuada. Sed bibendum ligula quis quam convallis lacinia. Mauris sodales, ex ut vulputate ornare, augue enim vehicula erat, sit amet porttitor arcu sem sit amet mauris. Mauris hendrerit luctus urna a blandit. Aliquam varius tortor vel purus finibus, quis bibendum lorem convallis.
            </p>
        </div>
    </div>
  )
}

export default Welcome