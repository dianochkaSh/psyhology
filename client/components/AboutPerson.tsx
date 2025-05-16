import { useTypedSelector } from '@/hooks/useTypedSelector';
import Image from 'next/image';
import BlockText from '@/components/BlockText';
import React from 'react';
import Button from '@mui/joy/Button';
import BlockTherapy from '@/components/BlockTherapy';

const AboutPerson:React.FC = () => {
  const { person, error} = useTypedSelector(state => state.person);
  const textTitle: string = "Обо мне: ";
  const stylesTitle: string = "title-person-block";
  return (
    <section className="section-person">
      <div className="container-picture">
        <Image alt={person[0].name} src="/nata.jpg" layout="fill" />
      </div>
      <div className="container-about">
        <BlockText styles={stylesTitle} text={textTitle} />
        <BlockTherapy />
        <p>Меня зовут <b>{person[0].name}</b>.</p>
        <p> Я {person[0].description}</p>
        <p>Образование {person[0].education}</p>
        <Button
          className="bt-record"
          onClick={function(){}}
          size="md"
          variant="soft"
        >
          Записаться на встречу
        </Button>
      </div>
    </section>
  )
}

export default AboutPerson;