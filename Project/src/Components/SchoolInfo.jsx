import React from 'react'

export const SchoolInfo = ({info}) => {
  return (
    <div className = "bg-gray-100 p-4 rounded-xl shadow-md mb-6">
      <p><strong>President : </strong>{info.president}</p>
      <p><strong>Address : </strong>{info.address}</p>
      <p><strong>Email : </strong>{info.contacts.email}</p>
      <p><strong>Tel : </strong>{info.contacts.tel}</p>
    </div>
  )
}


