import React from 'react'
import Layout1 from '../Componenets/LayOut/LayOut1/Layout1'

export default function PerpageLayout() {
    return (
        <div>
            
        </div>
    )
}

PerpageLayout.getLayout = function getLayout(page) {
    return (
       <Layout1 perpage={"perpage layout"}>
           {page}
       </Layout1>
    )
  }