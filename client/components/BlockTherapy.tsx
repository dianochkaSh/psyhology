import Image from 'next/image';
import React from 'react';
interface IBlockTherapy {
  time: string,
  format: string
}

const BlockTherapy: React.FC<IBlockTherapy> = ({time, format}) => {
  return (
    <div className="container-therapy">
      <div className="container-therapy-item1">
        <Image className="img-therapy" alt="therapy" src="/therapy.png" layout="fill" />
      </div>
      <div className="container-therapy-item2">
        <p>Консультация: <b>{time}</b></p>
        <span>{format} </span>
      </div>
    </div>
  )
}

export default BlockTherapy;