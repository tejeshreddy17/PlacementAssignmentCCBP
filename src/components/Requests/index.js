import {Component} from 'react'

import Loader from 'react-loader-spinner'

import RequestCard from '../RequestsCardItem'

import SampleRequestCard from '../RequestsCardItem/sample'

import {
  RequestPageAppBackground,
  RequestCardsContainer,
  RequestsAndHeaderContainer,
  LoaderContainer,
  HeadingRequestsPage,
} from './styledComponents'

import {CardButton, Heading} from '../RequestsCardItem/styledComponents'

import SideBar from '../SideBar'

import Header from '../RequestHeader'

import Observations from '../Observations'

const apiStatusConstants = {
  initial: 'initial',
  success: 'success',
  failure: 'failure',
  loading: 'loading',
}

class RequestPage extends Component {
  state = {
    requests: [],
    tableView: false,
    apiLoadingStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.gettingDetails()
  }

  gettingDetails = async () => {
    this.setState({apiLoadingStatus: apiStatusConstants.loading})
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()

    const formattedData = data.map(eachData => ({
      commentsCount: eachData.comments_count,
      postContent: eachData.post_content,
      postId: eachData.post_id,
      postedAt: eachData.posted_at,
      reactions: {reactionsCount: eachData.reactions.reactions_count},
      title: eachData.title,
      postedBy: {
        profilePic: eachData.posted_by.profile_pic,
        userId: eachData.posted_by.user_id,
        username: eachData.posted_by.username,
      },
      tags: eachData.tags.map(eachTag => ({
        tagId: eachTag.tag_id,
        tagName: eachTag.tag_name,
      })),
      approvalStatus: false,
    }))
    console.log(formattedData)
    if (response.ok === true) {
      this.setState({
        requests: formattedData,
        apiLoadingStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiLoadingStatus: apiStatusConstants.failure})
    }
  }

  switchingTabs = () => {
    this.setState(prevState => ({tableView: !prevState.tableView}))
  }

  renderingLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </LoaderContainer>
  )

  renderingHomeFailureView = () => (
    <LoaderContainer>
      <img
        className="failure-view-image"
        src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1643991735/alert-triangle_wwsh5r.jpg"
        alt="failure view"
      />
      <Heading outline flexGrow="0" className="failure-view-description">
        Something went wrong. Please try again
      </Heading>
      <CardButton
        outline
        width="150px"
        onClick={this.gettingDetails}
        type="button"
      >
        Try again
      </CardButton>
    </LoaderContainer>
  )

  onApproving = postId => {
    console.log(postId)

    this.setState(prevState => ({
      requests: prevState.requests.map(eachRequest => {
        if (eachRequest.postId === postId) {
          return {...eachRequest, approvalStatus: true}
        }
        return eachRequest
      }),
    }))
  }

  renderingContent = () => {
    const {requests} = this.state
    return (
      <RequestCardsContainer>
        {requests.map(eachRequest => (
          <>
            <RequestCard
              approvingRequest={this.approvingRequest}
              key={eachRequest.postId}
              request={eachRequest}
              updatingApprovalStatus={this.updatingApprovalStatus}
              onApproving={this.onApproving}
            />
          </>
        ))}
      </RequestCardsContainer>
    )
  }

  renderingGridUI = () => {
    const {apiLoadingStatus} = this.state

    switch (apiLoadingStatus) {
      case apiStatusConstants.success:
        return this.renderingContent()
      case apiStatusConstants.failure:
        return this.renderingHomeFailureView()
      case apiStatusConstants.loading:
        return this.renderingLoader()
      default:
        return null
    }
  }

  render() {
    const {tableView, requests} = this.state
    return (
      <RequestPageAppBackground>
        <SideBar />
        <RequestsAndHeaderContainer>
          <Header switchingTabs={this.switchingTabs} />

          {tableView ? (
            <Observations onApproving={this.onApproving} requests={requests} />
          ) : (
            this.renderingGridUI()
          )}
        </RequestsAndHeaderContainer>
      </RequestPageAppBackground>
    )
  }
}

export default RequestPage
