import { AxiosError } from 'axios';

export const handleAxiosError = (
  error: AxiosError
): { status: number; message: string } => {
  let errorMessage = 'An error occurred';
  let errorStatus = 500;

  if (error.response) {
    errorMessage = JSON.stringify(error.response.data);
    errorStatus = error.response.status;
  } else if (error.request) {
    errorMessage = 'No response received';
  } else {
    errorMessage = error.message;
  }

  return { status: errorStatus, message: errorMessage };
};
