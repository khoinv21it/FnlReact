import React from 'react'
import { StyleContainer } from './style'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <StyleContainer>{children}</StyleContainer>
}

export default Container
