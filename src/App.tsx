import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials, logout, setUser } from './lib/slice/userSlice';
import { Login } from './app/auth/Login';
import { Register } from './app/auth/Register';
import Home from './app/home/Home';
import { axiosPrivateInstance, axiosPublicInstance } from './lib/axios';
import { APIs } from './lib/types/Api';
import { ResetPassword } from './app/auth/ResetPassword';
import { ConfirmResetPassword } from './app/auth/ResetPasswordConfirm';
import { ActivationConfirmation } from './app/auth/ActivateConfirmation';
import AuthGuard from './lib/route';
import TopNavbar from './components/navbar/top-navbar';
import Error from './app/404/Error';
import Footer from './components/footer/Footer';
import Guide from './app/guide/Guide';
import GuideActivation from './app/guide/GuideActivation';
import LoadingPage from './app/loading/LoadingPage';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axiosPrivateInstance.get(APIs.ME);
      dispatch(setUser(response.data));
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      axiosPublicInstance.post(APIs.REFRESH_TOKEN, { refresh: refreshToken })
        .then(res => {
          const newAccessToken = res.data.access;
          dispatch(setCredentials({
            accessToken: newAccessToken,
            refreshToken: refreshToken,
          }));
          localStorage.setItem('accessToken', newAccessToken);
          fetchUser();
          setLoading(false);
        })
        .catch(() => {
          dispatch(logout());
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <LoadingPage />;

  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/login" element={
          <AuthGuard requireAuth={false}>
            <Login />
          </AuthGuard>
        } />
        <Route path="/register" element={
          <AuthGuard requireAuth={false}>
            <Register />
          </AuthGuard>
        } />
        <Route path="/reset_password" element={<AuthGuard requireAuth={false}>
          <ResetPassword />
        </AuthGuard>} />
        <Route path="/password/reset/confirm/:uid/:token" element={<AuthGuard requireAuth={false}>
          <ConfirmResetPassword />
        </AuthGuard>} />
        <Route path="/activate/:uid/:token" element={<AuthGuard requireAuth={false}>
          <ActivationConfirmation />
        </AuthGuard>} />
        <Route path="/confirmation" element={<AuthGuard requireAuth={false}>
          <ActivationConfirmation />
        </AuthGuard>} />
        <Route path="/guide" element={<AuthGuard requireAuth={true}>
          <Guide />
        </AuthGuard>} />
        <Route path="/" element={
          <>
            <Home />
          </>
        } />
        <Route path="/activate-guide" element={<AuthGuard requireAuth={true}>
          <>
            <GuideActivation />
          </>
        </AuthGuard>} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
