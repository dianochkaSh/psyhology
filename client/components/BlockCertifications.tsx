import React from 'react';
import "react-multi-carousel/lib/styles.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTypedSelector } from '@/hooks/useTypedSelector';

/* constants */
import { SERVER_URL } from '@/consts/consts';

/* components */
import BlockText from '@/components/BlockText';

const BlockCertifications:React.FC = () => {
  const { certificates, error } = useTypedSelector(state => state.certificate);
  const handleDragStart = (e: any): any => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items  =  certificates.map((item) =>
    <img key={item._id} height={300} width="auto"  src={SERVER_URL + item.image}  alt={item.title} onDragStart={handleDragStart} role="presentation" />

  );
  const textTitle: string = "Сертификаты: ";
  const stylesTitle: string = "title-h1";
  return (
    <div className="container-certificates" id="certificates">
      <BlockText styles={stylesTitle} text={textTitle} />
      <AliceCarousel
        disableDotsControls={true}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}

export default BlockCertifications;