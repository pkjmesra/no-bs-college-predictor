import React from 'react'

import './PredictionTable.css'
import { columns } from '../../utils/constants'
import TableFilter from '../TableFilter/TableFilter'

const PredictionTable = ({
  colleges,
  filterColleges, filters,
  setFilters,
}) => {
  const updateFilters = (key, val) => {
    const newFilters = {
      ...filters,
      [key]: val,
    }
    filterColleges(newFilters)
    setFilters(newFilters)
  }

  return (
    <div className="college-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <TableFilter
                title={col.title}
                data={col.data}
                property={col.property}
                key={col.property}
                value={filters[col.key]}
                updateFilters={updateFilters}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {(colleges || []).map((college, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`${index}-college.institute`}>
              <td title={college.institute}>{college.institute}</td>
              <td title={college.program}>{college.program}</td>
              <td title={college.quota}>{college.quota}</td>
              <td title={college.category}>{college.category}</td>
              <td title={college.seat}>{college.seat}</td>
              <td title={college.openingRank}>{college.openingRank}</td>
              <td title={college.closingRank}>{college.closingRank}</td>
              <td title={college.type}>{college.type}</td>
              <td title={college.courseDuration}>{college.courseDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PredictionTable
