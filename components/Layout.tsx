import React, { useState } from 'react'
import { Header } from "."

const Layout = ({ children } : {children:any}) => {
  const [accounts, setAccounts] = useState([])
 
  return (
    <>
      <Header accounts={accounts} setAccounts={setAccounts} />
      {children}
    </>
  )
}

export default Layout