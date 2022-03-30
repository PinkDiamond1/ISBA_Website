/* eslint-disable import/prefer-default-export */
import { WEBAPI_URL, CMS_URL } from './api';

export function forwardParallelChainExperienceBooking(ticket, date, startTime) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  return fetch(`${WEBAPI_URL}/parallelchain-experience/booking`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ticket,
      year,
      monthIndex,
      day,
      startTime,
    }),
  });
}

export function getBookedSlotsBetweenDays(startDate, endDate) {
  // Create start and end dates in UTC to define a range (no time offset)
  const startRange = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(),
    startDate.getDate(), 0, 0, 0));
  const endRange = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(),
    endDate.getDate(), 23, 59, 0));

  return fetch(`
    ${CMS_URL}/parallel-chain-experience-bookings?startTime_gte=${startRange.toISOString()}&endTime_lte=${endRange.toISOString()}`)
    .then((res) => res.json());
}
