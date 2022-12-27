import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations/contactsOperations';
import { Appbar } from './Appbar/Appbar';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LoginForm } from './LoginForm/LoginForm';
import { fetchCurrentUser } from 'redux/authOperations/authOperations';
import { getIsLoggedIn } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Section title={'Phonebook'}>
                {isLoggedIn ? (
                  <>
                    <ContactForm />
                    <Filter />
                    <ContactsList />
                  </>
                ) : (
                  <p>Please, log in first</p>
                )}
              </Section>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <Section title={'Contacts'}>
                <Filter />
                <ContactsList />
              </Section>
            }
          ></Route>
          <Route path="registration" element={<RegistrationForm />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
