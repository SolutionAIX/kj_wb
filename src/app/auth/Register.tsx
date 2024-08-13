import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosPublicInstance } from '@/lib/axios';
import { APIs } from '@/lib/types/Api';
import Meteors from '@/components/magicui/meteors';
import LoadingPage from '../loading/LoadingPage';

export function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true); // Set loading to true when starting registration
    setErrors({});

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: t('registration.password.mismatch') });
      setLoading(false); // Set loading to false if there's a validation error
      return;
    }

    if (password.length < 4) {
      setErrors({ password: t('registration.password.too_short') });
      setLoading(false); // Set loading to false if there's a validation error
      return;
    }

    try {
      const response = await axiosPublicInstance.post(APIs.REGISTRATION, {
        email,
        name,
        password,
        re_password: confirmPassword,
      });

      console.log('Registration successful', response.data);
      alert(t('registration.general.registration_successful'));
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
      setLoading(false); // Set loading to false if there's an error

      if (error.response && error.response.data) {
        const apiErrors = error.response.data;
        const newErrors = {};

        if (apiErrors.email) {
          newErrors.email = apiErrors.email[0];
        }
        if (apiErrors.name) {
          newErrors.name = apiErrors.name[0];
        }
        if (apiErrors.password) {
          newErrors.password = apiErrors.password[0];
        }
        if (apiErrors.re_password) {
          newErrors.confirmPassword = apiErrors.re_password[0];
        }
        if (apiErrors.non_field_errors) {
          newErrors.general = apiErrors.non_field_errors[0];
        }

        setErrors(newErrors);
      } else {
        setErrors({ general: t('registration.general.registration_failed') });
      }
    }
  };

  if (loading) {
    return <LoadingPage />; 
  }

  return (
    <div className="h-[75vh] container flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>{t('registration.title')}</CardTitle>
          <CardDescription>{t('registration.create_account')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t('registration.login')}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t('registration.enter_email')} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">{t('registration.name_field')}</Label>
                <Input 
                  id="username" 
                  type="text" 
                  placeholder={t('registration.enter_name')} 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">{t('registration.password_field')}</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder={t('registration.enter_password')} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">{t('registration.reenter_password')}</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder={t('registration.reenter_password')} 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  required 
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
              </div>
              {errors.general && <p className="text-red-500">{errors.general}</p>}
            </div>
            <div className="flex justify-between mt-4">
              <Button type="button" variant="outline" onClick={() => navigate('/')}>{t('registration.cancel')}</Button>
              <Button type="submit">{t('registration.register')}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
