
import React from 'react';
import Typography from '@mui/joy/Typography';

const BlockText:React.FC = ({ text, styles}) => {
  return (
    <Typography className={styles}>{text}</Typography>
  )
}
export default BlockText;