import React from 'react'
import { Box } from '@mui/material'

const BaseLayout = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Component {...props} />
      </Box>
    )
  }
  return wrappedComponent
}

export default BaseLayout
