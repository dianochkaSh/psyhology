import Image from 'next/image';


const BigImage = () => {
  return (
    <section className="big-image-section">
      <Image width="1920" height="680" src="/big-img.jpg" alt="" />
    </section>
  )
}
export  default BigImage;