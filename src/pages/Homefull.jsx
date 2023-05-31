import React, { useState } from 'react'
import {Header, MenuBar} from '../components/Header'
import Homepage from '../components/Homepage'
import Head from '../components/Head';

function  Homefull () {
  const [menubar, setMenuBar]= useState(false);
  return (
    <div>
      {/* <Header setMenuBar={setMenuBar} menubar={menubar}/>
      <MenuBar menubar={menubar}/> */}
      <Head/>
      <Homepage/>
    </div>
  )
}

export default Homefull