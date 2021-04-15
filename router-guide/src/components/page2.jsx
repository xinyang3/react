import React, { Suspense } from 'react';

function Page2(props) {
  return <div>this is home pae2.</div>;
}

export default function (props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page2 />
    </Suspense>
  );
}
