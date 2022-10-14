import React from 'react'
import styled from 'styled-components'
import {Search ,ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container=styled.div`
height: 60px;
`;
const Wrapper = styled.div`  
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
flex: 1;
padding-top: 8px;
display: flex;
justify-content: flex-end;
`;
const Language= styled.div`
    margin-left: 5px;
    cursor: pointer; 
    font-weight:bold;
    color:orange 
`;
const SearchContainer=styled.div`
    border: 2px solid green;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 2px;
`;
const Input = styled.input`
    border: none;
    outline:none;
`;
const Logo=styled.h1`
font-weight: bold;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 15px;
`;
const NavBar = () => {
  return (
        <Container>
        <Wrapper>
         <Left>
            <Language> EN</Language>
            <SearchContainer>
                <Input />
                <Search style={{color:'orange'}}/>
            </SearchContainer>
         </Left>
         <Center>
             <Logo>MODA.</Logo>
         </Center>
         <Right>
             <MenuItem>REGISTER</MenuItem>   
             <MenuItem>SIGN IN</MenuItem> 
             <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>     
                </Badge>
             </MenuItem> 
         </Right>
        </Wrapper>
        </Container>
  )
}
export default NavBar
