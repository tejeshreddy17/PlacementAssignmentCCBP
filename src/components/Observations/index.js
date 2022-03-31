import React, {useState, useEffect} from 'react'

import {useTable, useSortBy} from 'react-table'

import Select from 'react-select'

import makeAnimated from 'react-select/animated'

import Loader from 'react-loader-spinner'

import {CardButton} from '../RequestsCardItem/styledComponents'

import Header from '../RequestHeader'

import './index.css'

import {
  ObservationTableContainer,
  ObservationPageAppBackground,
  HeadingObservations,
  Styles,
  CellProfileContainer,
  CellProfilePic,
  ReactionIconCountContainer,
  ReactionCount,
  ReactionsIcon,
  Labels,
  LoaderContainer,
  ProfileNameWithoutProfilePic,
  NoProfilePic,
  SelectContainer,
} from './styledComponents'

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  )
  const renderingSorting = arg1 => (arg1.isSortedDesc ? ' 🔽' : ' 🔼')

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>{column.isSorted ? renderingSorting(column) : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Observations = props => {
  const {requests, onApproving} = props

  const [loading, setLoading] = useState(false)

  const [category, setCategory] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },

      {
        Header: 'Reported at',
        accessor: 'postedAt',
      },
      {
        Header: 'Reported By',
        accessor: 'postedBy',
        Cell: cell => {
          const {value} = cell
          const {username, profilePic} = value
          const [firstName, Lastname] = username.split(' ')

          const firstFirstLetter = firstName.slice(0, 1)
          const displayedFirstName = firstFirstLetter
            .toUpperCase()
            .concat(firstName.slice(1))

          const displayedLastName =
            Lastname !== undefined
              ? Lastname.slice(0, 1).toUpperCase().concat(Lastname.slice(1))
              : ''
          const displayedName =
            Lastname !== undefined
              ? displayedFirstName.concat(' ', displayedLastName)
              : displayedFirstName

          return (
            <CellProfileContainer>
              {profilePic !== '' && (
                <>
                  <CellProfilePic src={profilePic} />
                  <p>{username}</p>
                </>
              )}
              {profilePic === '' && (
                <>
                  <NoProfilePic>{username.slice(0, 1)}</NoProfilePic>
                  <p>{username}</p>
                </>
              )}
            </CellProfileContainer>
          )
        },
      },
      {Header: 'Comments Count', accessor: 'commentsCount'},
      {
        Header: 'Reactions',
        accessor: 'reactions.reactionsCount',
        Cell: cell => {
          const {value} = cell
          return (
            <ReactionIconCountContainer>
              <ReactionsIcon src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648167458/Icon_3x_wfomlz.png" />
              <ReactionCount>{value}</ReactionCount>
            </ReactionIconCountContainer>
          )
        },
      },

      {
        Header: 'Approval Status',
        accessor: 'approvalStatus',
        Cell: cell => {
          const {value, row} = cell

          const {original} = row
          const {postId, approvalStatus} = original
          const onClickingApprovingButton = () => {
            onApproving(postId)
          }

          return value ? (
            <Labels backgroundColor="#f3fff8" color="#2dca73">
              Approved
            </Labels>
          ) : (
            <CardButton onClick={onClickingApprovingButton}>Approve</CardButton>
          )
        },
      },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: cell => {
          const {value} = cell
          return value.map(eachTag => (
            <Labels
              key={eachTag.tagId}
              backgroundColor="#f3fff8"
              color="#2dca73"
            >
              {eachTag.tagName}
            </Labels>
          ))
        },
      },
    ],
    [],
  )
  const options = [
    {value: 'tag', label: 'tag'},
    {value: 'taga', label: 'tasg'},
  ]

  return (
    <ObservationPageAppBackground>
      <ObservationTableContainer>
        <HeadingObservations>Observations Assigned to me</HeadingObservations>
        <SelectContainer>
          <Select
            className="selectComponent"
            placeholder="category"
            isSearchable
            options={options}
            onChange={setCategory}
            noOptionsMessage={() => 'No Categories Left'}
          />
          <Select
            className="selectComponent selectComponent2"
            placeholder="category"
            isSearchable
            components={makeAnimated()}
            options={options}
            isMulti
            onChange={setCategory}
            noOptionsMessage={() => 'No Categories Left'}
          />
          <CardButton>Search</CardButton>
        </SelectContainer>
        {loading ? (
          <LoaderContainer>
            <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
          </LoaderContainer>
        ) : (
          <Styles>
            <Table columns={columns} data={requests} />
          </Styles>
        )}
      </ObservationTableContainer>
    </ObservationPageAppBackground>
  )
}

export default Observations
