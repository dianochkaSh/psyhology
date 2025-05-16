
import React from 'react';
import Typography from '@mui/joy/Typography';
interface IBlockText {
  text: string,
  styles: string
}

const BlockText:React.FC<IBlockText> = ({ text, styles}) => {
  return (
    <Typography className={styles}>{text}</Typography>
  )
}
export default BlockText;
