import React from 'react'

export const StudentDetails = ({student}) => {
  return (
    <div className = "w-full md:w-2/3">
        {student ? (
            <div className='bg-white p-4 rounded shadow'>
                <h3 className = "text-xl font-semibold mb-2">{student.name}</h3>
                <p><strong>ID : </strong>{student.id}</p>
                <p><strong>Math : </strong>{student.grade.math}</p>
                <p><strong>Physics : </strong>{student.grade.physics}</p>
                <p><strong>Chemistry : </strong>{student.grade.chemistry}</p>
            </div>    
        ):(
            <p className = "text-gray-500">Please select a student to see details.</p>
        )}
      
    </div>
  )
}


