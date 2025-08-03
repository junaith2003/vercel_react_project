import React from 'react'
import { FaBatteryHalf, FaFire, FaUser, FaUserCircle, FaUserNinja } from 'react-icons/fa'



const tableHeading = [
  {
    colName: "Avatar",
    icon: <FaUser />

  },
  {
    colName: "  Name",
    icon: <FaFire />

  },
  {
    colName: "Status",
    icon: <FaBatteryHalf />

  }
]
const tableData = [
  {
    avatar: <FaUserCircle />,
    name: "Junaith",
    status: "Active"
  },
  {
    avatar: <FaUserCircle />,
    name: "Akther",
    status: "InActive"
  }
]
const Table = () => {

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>User Data</h2>
      <table className='border border-collapse min-w-full'>
        <thead>
          <tr>
            {
              tableHeading.map((heading) => (
                <th key={heading.colName} className='border border-gray-600 px-4 py-2 bg-gray-300'>
                  <div className='flex items-center'>
                    {heading.icon}
                    {heading.colName}
                  </div>
                </th>

              ))}

          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (

            <tr key={index}>
              <td className='border border-gray-300 px-4 py-4 pr-2 pl-2'>
                <div className='flex items-center gap-2'>
                  <div className='text-3xl text-gray-600'>{user.avatar}</div>
                </div>
              </td>
              <td className='border border-gray-300 px-4 py-4 pr-2 pl-2'>{user.name}</td>
              <td className={`border border-gray-300 px-4 py-4 pr-2 pl-2 ${user.status == "Active" ? `text-green-600`:`text-red-600`}`}>{user.status}</td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Table