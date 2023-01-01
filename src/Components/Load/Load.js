import "./Load.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Load() {
  return (
    <Box className="ab_load">
      <CircularProgress />
    </Box>
  );
}