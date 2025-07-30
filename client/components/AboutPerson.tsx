import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/joy/Button';

/* components */
import BlockTherapy from '@/components/BlockTherapy';
import BlockText from '@/components/BlockText';
import ModalWindow from '@/components/ModalWindow';
import NotificationsModalWindow from '@/components/NotificationsModalWindow';

/* constants */
import { SERVER_URL } from '@/consts/consts';

/* action */
import { openModal } from '@/store/actions-creators/modalRecord';

/* hooks */
import { useTypedSelector } from '@/hooks/useTypedSelector';


const AboutPerson:React.FC = () => {
  const { person, error} = useTypedSelector(state => state.person);
  const textTitle: string = "Обо мне: ";
  const stylesTitle: string = "title-person-block";
  const dispatch= useDispatch();
  const notification: string = "Ваши данные отправлены. \n В ближайшее время мы свяжемся с вами";

  const openModalWindow = () => {
    dispatch(openModal());

  }

  return (
    <>
      { person!== null &&
        <section className="section-person" id="about">
          <div className="container-picture">
            <Image alt={person.name} src={SERVER_URL + person.photo} layout="fill" />
          </div>
          <div className="container-about">
            <BlockText styles={stylesTitle} text={textTitle} />
            <BlockTherapy time={person.time_consultation} format={person.format_consultation} />
            <p>Меня зовут <b>{person.name}</b>.</p>
            <p className="container-about-p">{person.description}</p>
            <p>Образование: {person.education}</p>
            <Button
              className="bt-record"
              onClick={() => openModalWindow()}
              size="md"
              variant="soft"
            >
              Записаться на встречу
            </Button>
            <ModalWindow />
            <NotificationsModalWindow textNotifications={notification} />
          </div>
        </section>
      }
    </>
  )
}

  export default AboutPerson;
