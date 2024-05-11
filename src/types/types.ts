export interface SelectOption {
  value: string | number;
  label: string;
}

export interface ApiConfig {
  url?: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers: {
    Accept: string;
    'Content-Type': string;
  };
}

export interface RegistrationFormSubmitData {
  fullName: string;
  gender: string;
  birthdate: Date;
  academy?: string;
  job?: string;
  jobDuties?: string;
}
