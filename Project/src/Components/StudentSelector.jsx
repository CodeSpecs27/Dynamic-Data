import React from 'react'

export const StudentSelector = ({students, selectedId, setSelectedId}) => {
  return (
    <div className = "w-full md:w-1/3">
        <label htmlFor='studentSelect' className = "lock mb-2 font-semibold">
            Select a Student :
        </label>
        <select
           id = "studentSelect" className = "w-full p-2 border rounded" value = {selectedId} onChange = { e => setSelectedId(e.target.value)}>
           <option value =  "">__Select a Billionare__</option>
           {students.map((student) => (
            <option key={student.id} value={student.id}>
                {student.id}
            </option>
           ))}
                  
        </select>
       
    </div>
  )
}


