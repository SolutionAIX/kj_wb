import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { axiosPrivateInstance, axiosPublicInstance } from '@/lib/axios';
import { logout, setCredentials, setUser } from '../../lib/slice/userSlice';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { APIs } from '@/lib/types/Api';
import { BorderBeam } from './BorderBeam';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Meteors from '@/components/magicui/meteors';
import LoadingPage from '../loading/LoadingPage';

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
    general: ''
  });

  const fetchUser = async () => {
    try {
      const response = await axiosPrivateInstance.get(APIs.ME);
      dispatch(setUser(response.data));
    } catch (error) {
      console.error(t('login.errors.general_error'), error);
      dispatch(logout());
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ email: '', password: '', general: '' });

    try {
      const response = await axiosPublicInstance.post(APIs.CREATE_JWT, {
        email: email,
        password: password
      });
      const { access, refresh } = response.data;

      dispatch(setCredentials({
        accessToken: access,
        refreshToken: refresh
      }));
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      await fetchUser();
      navigate('/');
      console.log(t('login.login_successful'), response.data);
    } catch (error) {
      console.error(t('login.errors.general_error'), error);
      setLoading(false);
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.email) {
          setError(prevState => ({ ...prevState, email: t('login.errors.invalid_credentials') }));
        }
        if (errorData.password) {
          setError(prevState => ({ ...prevState, password: t('login.errors.invalid_credentials') }));
        }
        if (errorData.detail) {
          setError(prevState => ({ ...prevState, general: t('login.errors.invalid_credentials') }));
        }
      } else {
        setError(prevState => ({ ...prevState, general: t('login.errors.general_error') }));
      }
    }
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-[75vh] container flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>{t('login.title')}</CardTitle>
          <CardDescription>{t('login.description')}</CardDescription>
        </CardHeader>
        <CardContent className='p-6'>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t('login.email_label')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('login.enter_email')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">{t('login.password_label')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('login.enter_password')}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                {error.password && <p className="text-red-500">{error.password}</p>}
              </div>
              {error.general && <p className="text-red-500">{error.general}</p>}
              <a href='/reset_password' className="self-end">{t('login.forgot_password')}</a>
            </div>
            <CardFooter className="flex justify-between pt-6" style={{ paddingLeft: 0, paddingBottom: 0, paddingRight: 0 }}>
              <Button variant="outline" type="button" onClick={() => navigate('/register')}>{t('login.registration_button')}</Button>
              <Button type="submit">{t('login.login_button')}</Button>
            </CardFooter>
          </form>

        </CardContent>
      </Card>
    </div>
  );
}
