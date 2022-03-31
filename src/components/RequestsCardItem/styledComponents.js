import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 330px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 16px;
  border-radius: 8px;
  border: 1px solid #d9e0ea;
  object-fit: contain;
  margin: 10px;
`
export const Heading = styled.h1`
  width: ${props => (props.outline ? props.width : '200px')};
  font-family: HK Grotesk;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #171f46;
  flex-grow: ${props => (props.outline ? props.flexGrow : '1')};
`
export const Description = styled.p`
  font-family: HK Grotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #171f46;
  font-weight: 500;
  flex-grow: 1;
`
export const ProfilePic = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 18px;
`
export const NoProfilePic = styled.div`
  background-color: #ffb800;
  color: white;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfilePicButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProfilePicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CardButton = styled.button`
  width: ${props => (props.outline ? props.width : '93px')};
  height: 40px;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #0b69ff;
  border: none;
  color: white;
  font-size: 14px;
  font-family: HK Grotesk;
  font-weight: 500;
  cursor: pointer;
`
export const PostUserName = styled.p`
  font-family: HK Grotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #7e858e;
  margin-left: 10px;
`

export const ReactionLabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const Labels = styled.p`
  padding: 8px 10px 8px 10px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  margin-right: 10px;
  border-radius: 5px;
`
export const ReactionIconCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ReactionsIcon = styled.img`
  height: 16px;
  margin-right: 8px;
`
export const ReactionCount = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #171f46;
  font-weight: 500;
  margin: 0px 0px 4px 0px;
`
