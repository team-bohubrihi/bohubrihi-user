import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <h2>This is Course Page</h2>
      <Link to="/course/learn/modern-javascript">Modern JavaScript</Link>
    </div>
  )
}

export default Courses
