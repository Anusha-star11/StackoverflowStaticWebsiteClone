import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */
  height: 40px;
  width: 85%;
  margin-left: 160px;
  top: 0;
  padding-right:10px;
  /* background-color: yellow; */
  
`

export const ProfileImage = styled.img`
  height: 20px;
  width: 20px;
  padding: 3px;
`



export const Listitem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  line-height: 0%;
  margin: 0px;
 
`
export const Itemtext = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  padding: 5px;
  display: inline-block;
`