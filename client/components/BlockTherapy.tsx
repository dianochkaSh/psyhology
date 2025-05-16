import Image from 'next/image';
import React from 'react';

const BlockTherapy: React.FC = () => {
  return (
    <div className="container-therapy">
      <div className="container-therapy-item1">
        <Image className="img-therapy" alt="therapy" src="/therapy.png" layout="fill" />
      </div>
      <div className="container-therapy-item2">
        <p>Консультация: <b>90 минут</b></p>
        <span>Очно и онлайн </span>
      </div>
    </div>
  )
}

export default BlockTherapy;