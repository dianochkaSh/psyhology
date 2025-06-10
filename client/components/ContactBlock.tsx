import React from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IPerson } from '@/types/person';

const ContactBlock:React.FC = () => {
  const { person, error } = useTypedSelector(state => state.person);
  const user: IPerson | null = person[0] !== undefined ? person[0] : null;
  return (
    <section className="section-contact">
      { (user !== null && true)  &&
        <div>
          <h3>Контактная информация</h3>
          <p>Запись по телефону:</p>
          <span><b>{user.phone}</b></span>
        </div>
      }
    </section>
  )
}
export default ContactBlock;
