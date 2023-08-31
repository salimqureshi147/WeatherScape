import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('InValid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, 'InValid Required'),
});
export const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('InValid email')
    .required('Please enter your email address'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Please enter your phone number'),
  password: Yup.string()
    .required('Please enter your password.')
    .min(8, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain min 8 characters uppercase,lowercase,number and special symbol',
    ),

  // confirmPassword: Yup.string()
  //   .required('No Confirm Password provided.')
  //   .label('Confirm Password')
  //   .oneOf([Yup.ref('password')], 'Passwords does not match'),
});
export const updateProfileSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
  // phoneNumber: Yup.string().required('Please enter your Phone Number'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Please enter your phone number'),
});
export const addRecordValidationSchema = Yup.object().shape({
  amount: Yup.string().required('Amount is required').max(10, 'Too Long!'),
  // category: Yup.string().required('Category is Required'),
  // date: Yup.string().required('Date is required!!'),
  // time: Yup.string().required('Time is required!!'),
});
export const addShopValidationSchema = Yup.object().shape({
  prdtitle: Yup.string().required('Product Title is required!!'),
  Loctn: Yup.string().required('Location is required field!!'),
  price: Yup.string().required('Price is required field!!'),

  desrptn: Yup.string().required('Please provide description about Product!!'),
});
export const forgotPasValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
});
export const resetPasValidationSchema = Yup.object().shape({
  password: Yup.string().required('Reset Password is required!'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number',
  // ),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  newPassword: Yup.string()
    .required('No new password provided.')
    .min(8, 'New Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string()
    .required()
    .label('Confirm Password')
    .oneOf([Yup.ref('newPassword')], 'Passwords does not match'),
});
export const paymentCardValidationSchema = Yup.object().shape({
  card: Yup.string().required('Please select a card.'),
  cardId: Yup.string()
    .required('Card number is required.')
    .matches(/^\d{16}$/, 'Card number must be 16 digits.'),
  // cardHolderName: Yup.string().required('Card holder name is required.'),
  ex_Day: Yup.string()
    .required('Expiration day is required.')
    .matches(/^(0?[1-9]|[12]\d|3[01])$/, 'Invalid expiration day.'),
  ex_Year: Yup.string().required('Expiration year is required.'),
  // .matches(/^\d{2}$/, 'Invalid expiration year. Use YY format.'),
  cvc: Yup.string()
    .required('CVC is required.')
    .matches(/^\d{3,4}$/, 'Invalid CVC. It should be 3 or 4 digits.'),
});
