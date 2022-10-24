import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { black } from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function LikeButton() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
       sx={{
        padding: '0',
        color: "default",
        '&.Mui-checked': {
          color: red[600],
        },
      }}
      
      />
    </div>
  );
}