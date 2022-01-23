import React from 'react'
import {LoaderWrapper} from './styled'

const Loader:React.FC = () =>{
    return <LoaderWrapper >
    <div className='blob-loader'>
  Loading...
</div>
  </LoaderWrapper>
}

export default Loader

