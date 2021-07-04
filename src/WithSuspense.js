import  { Suspense } from 'react';
import Loading from './Loading';

const withSuspense=(el)=>{
    return <Suspense fallback={<Loading></Loading>}>{el}</Suspense>
}

export default withSuspense