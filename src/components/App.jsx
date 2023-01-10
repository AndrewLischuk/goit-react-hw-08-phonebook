import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from '../pages/Contacts/ContactsList';
import { Section } from './Section/Section';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LoginForm } from './LoginForm/LoginForm';
import { fetchCurrentUser } from 'redux/authOperations/authOperations';
import { Home } from 'pages/Home/Home';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { PublicRoute } from 'Routes/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Section title={'Your personal Phonebook'}>
                <Home />
              </Section>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute
                component={
                  <Section title={'Contacts'}>
                    <Filter />
                    <ContactsList />
                  </Section>
                }
                redirectTo={'/login'}
              />
            }
          />

          <Route
            path="add-contact"
            element={
              <PrivateRoute component={<ContactForm />} redirectTo={'/login'} />
            }
          />

          <Route
            path="registration"
            element={
              <PublicRoute
                component={<RegistrationForm />}
                restricted
                redirectTo={'/'}
              />
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute
                component={<LoginForm />}
                restricted
                redirectTo={'/'}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
