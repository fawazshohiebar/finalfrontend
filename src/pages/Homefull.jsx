import React, { useState } from 'react'
import {Header, MenuBar} from '../components/Header'
import Homepage from '../components/Homepage'

function  Homefull () {
  const [menubar, setMenuBar]= useState(false);
  return (
    <div>
      <Header setMenuBar={setMenuBar} menubar={menubar}/>
      <MenuBar menubar={menubar}/>
      <Homepage/>
    </div>
  )
}

export default Homefull