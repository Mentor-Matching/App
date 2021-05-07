import { createContext } from 'react';

export const SignUpContext = createContext({
  currPage: 1,
  username: '',
  email: '',
  password: '',
  birthdate: '',
  phone: '',
  name: '',
  school: '',
  field: '',
  academic: '',
  interest: ''
})