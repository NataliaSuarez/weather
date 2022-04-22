import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


export default styled(TextField)({
  '& input': {
    color: '#fafafaf3',
  },
  '& label': {
    color: '#fafafaf3',
  },
  '& label.Mui-focused': {
    color: '#fafafaf3',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fafafaf3',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#85c8ecd1',
    },
    '&:hover fieldset': {
      borderColor: '#85c8ecd1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#85c8ecd1',
    },
  },
});
