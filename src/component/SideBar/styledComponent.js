import styled from 'styled-components'

export const SidebarContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  height: 90%;
  Z-index:1;
  top: 0px;
  left:0px;
  width: 160px;
  position: fixed;
  /* border-right-color:lightgrey;
  border-right-style: groove;
  border-bottom-color:lightgrey;
  border-bottom-style: groove; */
  margin-bottom: 300px;
  /* box-shadow: 23px; */
  /* float: left; */
  
  /* background-color:pink; */
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
  margin-top: 0px;
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
  
  font-size: 12px;
  padding: 5px;
  display: inline-block;
`


export const Image=styled.img`
  height: 30px;
  width: 30px;
  padding-left: 20px;
  /* margin: 5px; */
`

export const Span=styled.span`
color:black;
font-weight: bold;
`
export const Logo=styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
 
  line-height: 0%;
  margin: 0px;
  margin-top: 10px;

`
export const Logotext=styled.h1`
 font-size: 12px;
  /* padding: 5px; */
  display: inline-block;
  color:grey;

`