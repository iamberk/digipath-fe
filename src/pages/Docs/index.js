import React from 'react'
import Header from '../../components/Header'
import WorkOnProgress from '../../components/workOnProgress'
import { useSelector } from 'react-redux'
import Profile from '../profile'

export default function Docs() {

  const count = useSelector(state => state.counter.value)

  return (
    <div>
      <Header/>
      <Profile></Profile>
      <WorkOnProgress></WorkOnProgress>
    </div>
  )
}
