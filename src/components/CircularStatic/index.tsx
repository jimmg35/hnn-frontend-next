import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { onPredictAprChange } from '@/store/slice/apr';
import { selectApr } from '@/store/slice/apr'
import { useContext } from 'react';
import ResultContext from '@/containers/ResultContainer/ResultContext';

function CircularProgressWithLabel (
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} color='info' />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: 'white' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic () {
  const router = useRouter()
  const dispatch = useDispatch()
  const { selectedApr } = useContext(ResultContext)
  const [progress, setProgress] = React.useState(10)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 800);

    if (progress >= 100) {
      clearInterval(timer);
      dispatch(onPredictAprChange(selectedApr))
      router.push('/predict')
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return <CircularProgressWithLabel value={progress} />;
}
