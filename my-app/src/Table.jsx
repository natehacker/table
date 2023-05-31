import React from 'react'

export const Table = ({data}) => {
  return (
    <table id="customers">
       <tbody>
        <tr>
            <th>State</th>
            <th>State Epi</th>
            <th>Email</th>
        </tr>
        {data.map((item)=>(
        <tr key ={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
        </tr>
         ))}
       </tbody>
    </table>
  )
}
