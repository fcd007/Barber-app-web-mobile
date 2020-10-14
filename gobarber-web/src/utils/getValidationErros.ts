import { ValidationError } from 'yup';

interface errorValidationProps {
  [key: string]: string;
}

export default function getValitdationErros(
  err: ValidationError,
): errorValidationProps {
  const validationErrors: errorValidationProps = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
