import {Redirect, withRouter} from 'react-router-dom'

import {AiOutlineSearch} from 'react-icons/ai'

import {
  HeaderContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  PostButton,
  ProfilePic,
  PostButtonProfilePicContainer,
  HeaderLogo,
  ObservationPageHeading,
} from './styledComponents'

import './index.css'

const Header = props => {
  const {logo, text, switchingTabs} = props

  const redirectingToObservations = () => {
    const {history} = props

    history.push('/observation')
  }
  const toggling = () => {
    switchingTabs()
  }

  return (
    <HeaderContainer>
      {!logo && (
        <SearchBarContainer>
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>

          <SearchInput placeholder="Search" />
        </SearchBarContainer>
      )}
      {logo && (
        <HeaderLogo
          alt="website Logo"
          src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216918/logo_3x_khkcuf.png"
        />
      )}
      <ObservationPageHeading>{text}</ObservationPageHeading>
      <PostButtonProfilePicContainer>
        <PostButton onClick={toggling}>Observations</PostButton>
        <PostButton>Write Post</PostButton>
        <ProfilePic
          alt="profilePic"
          src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216306/M_3x_czanvx.png"
        />
      </PostButtonProfilePicContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)
