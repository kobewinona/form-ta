import * as yup from 'yup';
import moment from 'moment';

import { FORM_VALIDATION_MESSAGES } from '../../constants';

const schema = yup.object().shape({
  fullName: yup.string().required(FORM_VALIDATION_MESSAGES.required).trim(),
  gender: yup.string().required(FORM_VALIDATION_MESSAGES.required),
  birthdate: yup.date()
    .max(moment().subtract(1, 'days').toDate(), FORM_VALIDATION_MESSAGES.pastDate)
    .required(FORM_VALIDATION_MESSAGES.required)
    .nullable()
    .transform((value, originalValue) =>
      moment(originalValue, 'YYYY-MM-DD').isValid() ? moment(originalValue).toDate() : null
    ),
});

export default schema;