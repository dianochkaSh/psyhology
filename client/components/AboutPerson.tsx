import { useTypedSelector } from '@/hooks/useTypedSelector';
import Image from 'next/image';
import React from 'react';
import Button from '@mui/joy/Button';

/* components */
import BlockTherapy from '@/components/BlockTherapy';
import BlockText from '@/components/BlockText';

/* constants */
import { SERVER_URL } from '@/consts/consts';

/* types */
import { IPerson } from '@/types/person';

const AboutPerson:React.FC = () => {
  const { person, error} = useTypedSelector(state => state.person);
  const textTitle: string = "Обо мне: ";
  const stylesTitle: string = "title-person-block";
  const user : IPerson | null = person[0] !== undefined ? person[0] : null;
  return (
    <>
      { user!== null &&
        <section className="section-person" id="about">
          <div className="container-picture">
            <Image alt={user.name} src={SERVER_URL + user.photo} layout="fill" />
          </div>
          <div className="container-about">
            <BlockText styles={stylesTitle} text={textTitle} />
            <BlockTherapy time={user.time_consultation} format={user.format_consultation} />
            <p>Меня зовут <b>{user.name}</b>.</p>
            <p className="container-about-p">{user.description}</p>
            <p>Образование: {user.education}</p>
            <Button
              className="bt-record"
              onClick={function() {
              }}
              size="md"
              variant="soft"
            >
              Записаться на встречу
            </Button>
          </div>
        </section>
      }
    </>
  )
}

  export default AboutPerson;