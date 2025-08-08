import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { changeEditForm, fetchPerson, fullDateFormEditPerson } from '@/store/actions-creators/person';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IPerson } from '@/types/person';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { SERVER_URL } from '@/consts/consts';
import BlockText from '@/components/BlockText';
import BlockTherapy from '@/components/BlockTherapy';
import FormEditProfile from '@/components/FormEditProfile';

/* styles */
import '../style.css';

const Profile: React.FC = () => {
  const { person, isShowEditFields } = useTypedSelector(state => state.person)
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(fetchPerson());
  }, [isShowEditFields]);


  const textTitle: string = "Обо мне: ";
  const stylesTitle: string = "title-person-block";

  const showEditForm = (isShow: boolean) => {
    dispatch(changeEditForm(isShow));
    dispatch(fullDateFormEditPerson(person));
  }

  return (
    <>
      { (person !== undefined) &&
        <section className="section-person">
          <div className="container-picture">
            <Image alt={person.name} resizeMode="contain" className="img-profile" src={SERVER_URL + person.photo} layout="fill" />
          </div>
          <div className="container-about">
            <BlockText styles={stylesTitle} text={textTitle} />
            {isShowEditFields
              ?
                <FormEditProfile isShowForm={isShowEditFields} />
              :
              <div>
                <p>Меня зовут <b>{person.name}</b>.</p>
                <BlockTherapy time={person.time_consultation} format={person.format_consultation} />
                <p className="container-about-p" dangerouslySetInnerHTML={{ __html: person.description }}></p>
                <p>Образование: {person.education}</p>
                <p>Телефон: {person.phone}</p>

              </div>
            }
            {
              !isShowEditFields && <button className="bt-blue"  onClick={() => showEditForm(true)}>Изменить</button>
            }
          </div>
        </section>
      }
    </>

  )
}

export default Profile;
