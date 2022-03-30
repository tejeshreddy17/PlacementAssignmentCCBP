import React, {useState, useEffect} from 'react'

import {useTable} from 'react-table'

import Loader from 'react-loader-spinner'

import {CardButton} from '../RequestsCardItem/styledComponents'

import Header from '../RequestHeader'

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
} from './styledComponents'

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
          return (
            <CellProfileContainer>
              <CellProfilePic src={profilePic} />
              <p>{username}</p>
            </CellProfileContainer>
          )
        },
      },
      {Header: 'Comments Count', accessor: 'commentsCount'},
      {Header: 'Post Content', accessor: 'postContent'},
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
          console.log(approvalStatus)
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
              key={eachTag.tagName}
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
  console.log('rerendering')

  return (
    <ObservationPageAppBackground>
      <ObservationTableContainer>
        <HeadingObservations>Observations Assigned to me</HeadingObservations>
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
