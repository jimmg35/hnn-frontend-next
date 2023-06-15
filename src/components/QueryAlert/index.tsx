
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useContext } from 'react'
import QueryContext from '@/containers/QueryContainer/QueryContext'


const QueryAlert = () => {
  const {
    alertOpen, alertMsg, onAlert
  } = useContext(QueryContext)
  return (
    <Collapse in={alertOpen} sx={{ position: 'absolute', zIndex: 5, width: '100%' }}>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => { onAlert('', false) }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }>{alertMsg}
      </Alert>
    </Collapse>
  )
}

export default QueryAlert
