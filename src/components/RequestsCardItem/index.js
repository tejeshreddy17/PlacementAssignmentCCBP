import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  CardContainer,
  Heading,
  Description,
  ProfilePic,
  CardButton,
  ProfilePicButtonContainer,
  ProfilePicContainer,
  PostUserName,
  ReactionsIcon,
  ReactionLabelsContainer,
  LabelsContainer,
  Labels,
  ReactionIconCountContainer,
  ReactionCount,
  NoProfilePic,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'initial',
  success: 'success',
  failure: 'failure',
  loading: 'loading',
}

class RequestCard extends Component {
  state = {loadingStatus: apiStatusConstants.initial}

  onApproving = async () => {
    this.setState({loadingStatus: apiStatusConstants.loading})
    const {request} = this.props
    const {postId, postedBy} = request
    const {userId} = postedBy

    const {onApproving} = this.props

    onApproving(postId)
    const details = {userId, postId}

    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      this.setState({
        loadingStatus: apiStatusConstants.success,
      })
    }
  }

  renderingButtonUI = () => {
    const {request} = this.props
    const {approvalStatus} = request
    const {loadingStatus} = this.state
    switch (loadingStatus) {
      case apiStatusConstants.success:
        return approvalStatus ? (
          <Labels backgroundColor="#f3fff8" color="#2dca73">
            Approved
          </Labels>
        ) : (
          <CardButton onClick={this.onApproving}>Approve</CardButton>
        )
      case apiStatusConstants.initial:
        return approvalStatus ? (
          <Labels backgroundColor="#f3fff8" color="#2dca73">
            Approved
          </Labels>
        ) : (
          <CardButton onClick={this.onApproving}>Approve</CardButton>
        )
      case apiStatusConstants.loading:
        return (
          <CardButton onClick={this.onApproving}>
            <Loader type="TailSpin" color="#ffffff" height={20} width={20} />
          </CardButton>
        )
      default:
        return null
    }
  }

  render() {
    const {request} = this.props
    const {
      commentsCount,
      postContent,

      reactions,
      title,
      postedBy,
    } = request
    const {profilePic, username} = postedBy
    const {reactionsCount} = reactions
    return (
      <CardContainer>
        <Heading>{title.slice(0, 70)}</Heading>
        {postContent.length > 70 && (
          <Description>{postContent.slice(0, 70)}... </Description>
        )}
        {postContent.length < 70 && <Description>{postContent} </Description>}

        <ReactionLabelsContainer>
          <LabelsContainer>
            <Labels backgroundColor="rgba(11, 105, 255, 0.1)" color="#0b69ff">
              uidiscuss
            </Labels>
            <Labels backgroundColor="#f3fff8" color="#2dca73">
              teamui
            </Labels>
          </LabelsContainer>
          {commentsCount > 0 && (
            <ReactionIconCountContainer>
              <ReactionsIcon src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648167458/Icon_3x_wfomlz.png" />
              <ReactionCount>{commentsCount}</ReactionCount>
            </ReactionIconCountContainer>
          )}
        </ReactionLabelsContainer>
        <ProfilePicButtonContainer>
          <ProfilePicContainer>
            {profilePic !== '' && <ProfilePic src={profilePic} />}
            {profilePic === '' && (
              <NoProfilePic>{username.slice(0, 1)}</NoProfilePic>
            )}
            <PostUserName>{username}</PostUserName>
          </ProfilePicContainer>
          {this.renderingButtonUI()}
        </ProfilePicButtonContainer>
      </CardContainer>
    )
  }
}

export default RequestCard
