import React from 'react'
import styled from 'styled-components'
import {categories} from '../files/Data'
import CategoryItem from '../files/CategoryItem'

const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`
const Category = () => {
  return (
    <Container>
        {categories.map(item=>(<CategoryItem item={item} key={item.id}/>))}
    </Container>
  )
}

export default Category