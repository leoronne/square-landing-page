/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TextField, ButtonOutlined } from '../../styles/MaterialUI';

import { Container } from './styles';

const SupportForm: React.FC = () => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef(null);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().trim(t('validname')).nullable(false).required(t('requiredname')),
    email: Yup.string().email(t('validmail')).trim(t('validmail')).nullable(false).required(t('requiredmail')),
    subject: Yup.string().trim(t('validsubject')).nullable(false).required(t('requiredsubject')),
    message: Yup.string().trim(t('validmessage')).nullable(false).required(t('requiredmessage')),
  });

  const handleClickVariant = useCallback(
    (variant: 'default' | 'error' | 'success' | 'warning' | 'info', message: string) => {
      enqueueSnackbar(message, { variant });
    },
    [enqueueSnackbar]
  );

  const sendForm = useCallback(
    (send: () => void) => {
      try {
        setLoading(true);
      } catch (err) {
        handleClickVariant('success', err.message);
      } finally {
        setTimeout(() => {
          handleClickVariant('success', t('messagesent'));
          setLoading(false);
          send();
        }, 2500);
      }
    },
    [handleClickVariant, t]
  );
  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await sendForm(resetForm);
          setSubmitting(false);
        }}
      >
        {}
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="field">
              <TextField
                error={!!(touched.name && errors.name)}
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                required
                label={`${t('your')} ${t('name')}`}
                helperText={touched.name && errors.name ? errors.name : ''}
              />
            </div>

            <div className="field">
              <TextField
                error={!!(touched.email && errors.email)}
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
                label={`${t('your')} ${t('email')}`}
                helperText={touched.email && errors.email ? errors.email : ''}
              />
            </div>

            <div className="field">
              <TextField
                error={!!(touched.subject && errors.subject)}
                name="subject"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                required
                label={t('subject')}
                helperText={touched.subject && errors.subject ? errors.subject : ''}
              />
            </div>

            <div className="field">
              <TextField
                error={!!(touched.message && errors.message)}
                name="message"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                required
                multiline
                label={t('message')}
                helperText={touched.message && errors.message ? errors.message : ''}
              />
            </div>

            <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading}>
              {loading ? (
                <div>
                  <CircularProgress size={15} style={{ color: '#ccc' }} />
                </div>
              ) : (
                <span>{t('submit')}</span>
              )}
            </ButtonOutlined>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default SupportForm;
