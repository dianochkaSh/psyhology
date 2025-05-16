import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
interface IButtonLink {
  titleText: string,
  urlText: string
}
const ButtonLink :React.FC<IButtonLink> = ({titleText, urlText}) => {
  const router = useRouter();
  const handlerBt = () => {
    router.push(urlText);
  }
  return (
    <>
      <Button
        className="bt"
        onClick={handlerBt}>
         {titleText}
      </Button>
    </>
  )
}
export default ButtonLink;
