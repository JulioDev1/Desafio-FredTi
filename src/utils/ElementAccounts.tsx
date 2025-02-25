import React, { Suspense } from 'react';

const Login2 = React.lazy(() => import('pages/account/Login2'));
const Logout2 = React.lazy(() => import('pages/account/Logout2'));
const Confirm2 = React.lazy(() => import('pages/account/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('pages/account/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('pages/account/LockScreen2'));


const loading = () => <div className=""></div>;


type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const account = [
    { path: 'login2', element: <LoadComponent component={Login2} /> },
    { path: 'confirm2', element: <LoadComponent component={Confirm2} /> },
    { path: 'forget-password2', element: <LoadComponent component={ForgetPassword2} /> },
    { path: 'lock-screen2', element: <LoadComponent component={LockScreen2} /> },
    { path: 'logout2', element: <LoadComponent component={Logout2} /> },
]


export { account }