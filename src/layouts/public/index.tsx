import React from 'react'


const PublicLayout:React.FC = props =>{
  const {children} = props
  return(
    <>
    <div className="mwd-login--signup">
      {children}
    </div>
    </>
  )
}

export default PublicLayout