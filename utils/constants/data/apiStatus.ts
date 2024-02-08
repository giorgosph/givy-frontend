/* -------------------------------------------------------------------------- *
*     Can be used to specify the current state of the API request.
*  -------------------------------------------------------------------------- */
export type ApiStatusType = typeof apiStatus[keyof typeof apiStatus];

export const apiStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;
