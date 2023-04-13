import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

interface IDefaultTemplate {
}

const DefaultTemplate = ({

}: IDefaultTemplate) => {

  return (
    <Box sx={{ width: '450px', height: '300px' }}>
      <Box component={Paper} sx={{ width: '100%', height: '100%' }}>

      </Box>
    </Box>
  )
}

export default DefaultTemplate