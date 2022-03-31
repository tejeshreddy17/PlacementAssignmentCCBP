import styled from 'styled-components'

export const ObservationTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 45px 20px 45px;
  align-items: flex-start;
  overflow-y: auto;
  background-color: #fbfbfb;
  flex-grow: 1;
`
export const ObservationPageAppBackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const HeadingObservations = styled.h1`
  font-family: HK Grotesk;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #0b69ff;
`
export const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid #d7dfe9;
    border-top: none;
    background-color: white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      color: #171f46;
      font-family: HK Grotesk;
      font-size: 14px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: 0.12px;

      border-top: 1px solid #d7dfe9;
      text-align: center;
      margin: 10px;
      padding: 10px;
    }
    :last-child {
      border-right: 1px solid #d7dfe9;
    }
    td {
      margin: 10px;
      padding: 0.5rem;

      border-top: 1px solid #d7dfe9;
      text-align: center;
      font-family: HK Grotesk;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      color: #7e858e;
      padding: 10px;
      font-size: 14px;
    }
  }
`
export const CellProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 170px;
`
export const ProfileNameWithoutProfilePic = styled.p`
  margin-left: 65px;
`

export const CellProfilePic = styled.img`
  height: 38px;
  width: 38px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 19px;
`
export const NoProfilePic = styled.div`
  background-color: #ffb800;
  color: white;
  height: 38px;
  width: 38px;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
  font-size: 15px;
`

export const ReactionIconCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ReactionsIcon = styled.img`
  height: 16px;
`
export const ReactionCount = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #171f46;
  font-weight: 500;
  margin: 0px 0px 4px 0px;
  background-color: red;
  height: 14px;
  width: 14px;
  border-radius: 6px;
  color: white;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  flex-grow: 1;
  align-self: stretch;
  width: 100%;
  height: 100%;
`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 70%;
`
