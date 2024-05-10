import * as yup from 'yup';
import moment from 'moment';

import { VALIDATION_MESSAGES } from '../../constants';

const schema = yup.object().shape({
  fullName: yup.string().required(VALIDATION_MESSAGES.required),
  gender: yup.string().required(VALIDATION_MESSAGES.required),
  birthdate: yup.date()
    .max(moment().subtract(1, 'days').toDate(), VALIDATION_MESSAGES.pastDate)
    .required(VALIDATION_MESSAGES.required)
    .nullable()
    .transform((value, originalValue) =>
      moment(originalValue, 'YYYY-MM-DD').isValid() ? moment(originalValue).toDate() : null
    ),
});

export default schema;