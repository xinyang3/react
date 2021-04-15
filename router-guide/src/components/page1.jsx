import React, { Suspense } from 'react';

function Page1(props) {
  return <div>this is home pae1.</div>;
}

export default function (props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page1 />
    </Suspense>
  );
}
