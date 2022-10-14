import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-style: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal Sale !</Container>
  )
}
export default Announcement
