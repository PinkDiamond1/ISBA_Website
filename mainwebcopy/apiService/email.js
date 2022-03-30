import { WEBAPI_URL } from './api';

export const requestableFiles = {
  pChainWhitepaper: 'ParallelChain White Paper',
  adlReport: 'ADL Report',
};

export function forwardContactRequest(
  title, firstName, lastName, organization, email, inquiry, requestedFiles,
) {
  const requestMessage = requestedFiles
    ? `
  (
  Visitor is requesting
  ${(() => {
    let stringBuilder = '';
    Object.keys(requestedFiles).forEach((reqFile) => {
      if (requestedFiles[reqFile]) {
        stringBuilder = stringBuilder.concat(`${requestableFiles[reqFile]}, `);
      }
    });
    return stringBuilder;
  })()}
  )
  `
    : '';

  return fetch(`${WEBAPI_URL}/contact-us`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeString: (new Date()).toString(),
      title,
      firstName,
      lastName,
      organization,
      email,
      inquiry: `${requestMessage}${inquiry}`,
    }),
  });
}

export function forwardParallelChainExperienceRequest(
  title, firstName, lastName, organization, jobTitle, location, workEmail, phoneNumber, inquiry,
) {
  return fetch(`${WEBAPI_URL}/parallelchain-experience/application`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeString: ((new Date()).getTime() / 1000).toFixed(0),
      title,
      firstName,
      lastName,
      organization,
      jobTitle,
      location,
      workEmail,
      phoneNumber,
      inquiry,
    }),
  });
}
