import React from 'react';

export default function Loading(settings) {
  if (settings.error) {
    return <div>Error!</div>;
  } else if (settings.timedOut) {
    return <div>Taking a long time...</div>;
  }
  // else if (settings.pastDelay) {
  //   return <div>Loading...</div>;
  // }
  return <div>Loading...</div>;
  // return null;
}

