import React from 'react'
import Jobcard from './Jobcard'
import Internshipcard from './Internshipcard'

const DashHome = ({setOption}) => {
  return (
    <div className=' w-fll flex flex-col items-center'>
      <Jobcard setOption={setOption}  />
      <Internshipcard setOption={setOption} />
    </div>
  )
}

export default DashHome