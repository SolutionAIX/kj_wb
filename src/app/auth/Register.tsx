import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosPrivateInstance, axiosPublicInstance } from '@/lib/axios';
import { APIs } from '@/lib/types/Api';
import Meteors from '@/components/magicui/meteors';
import LoadingPage from '../loading/LoadingPage';
import GoogleAuth from './GoogleAuth';
import { useDispatch } from 'react-redux';
import { logout, setUser } from '@/lib/slice/userSlice';
import TermsService from '../ppandtm/TermsService';
import PrivacyPolicyModal from '../ppandtm/PrivacyPolicy';

export function Register() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const fetchUser = async () => {
    try {
      const response = await axiosPrivateInstance.get(APIs.ME);
      dispatch(setUser(response.data));
    } catch (error) {
      console.error(t('login.errors.general_error'), error);
      dispatch(logout());
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-[90vh] text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-gray-800 dark:text-white">
              {t('registration.title')}
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <GoogleAuth fetchUser={fetchUser} />
              </div>

              <div className="my-12 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 dark:text-gray-200 tracking-wide font-medium bg-background transform translate-y-1/2">
                  {t('login.sign_in_with_email')}
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5 text-gray-800 dark:text-white">
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
                    <div className="flex flex-col space-y-1.5 text-gray-800 dark:text-white">
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
                    <div className="flex flex-col space-y-1.5 text-gray-800 dark:text-white">
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
                    <div className="flex flex-col space-y-1.5 text-gray-800 dark:text-white">
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
                    <a href='/reset_password' className="self-end text-gray-800 dark:text-white">{t('login.forgot_password')}</a>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button type="button" className='text-gray-800 dark:text-gray-200' variant="outline" onClick={() => navigate('/')}>{t('registration.cancel')}</Button>
                    <Button type="submit">{t('registration.register')}</Button>
                  </div>
                </form>
                <p className="mt-6 text-xs text-center text-gray-600 dark:text-gray-400">
                  I agree to the <TermsService /> and <PrivacyPolicyModal />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 rounded-xl dark:bg-background text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`
            }}>
          </div>
        </div>
      </div>
    </div>
    // <div className="h-[75vh] container flex items-center justify-center">
    //   <Card className="w-[550px]">
    //     <CardHeader>
    //       <CardTitle>{t('registration.title')}</CardTitle>
    //       <CardDescription>{t('registration.create_account')}</CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={(e) => {
    //         e.preventDefault();
    //         handleRegister();
    //       }}>
    //         <div className="grid w-full items-center gap-4">
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="email">{t('registration.login')}</Label>
    //             <Input 
    //               id="email" 
    //               type="email" 
    //               placeholder={t('registration.enter_email')} 
    //               value={email} 
    //               onChange={(e) => setEmail(e.target.value)} 
    //               required 
    //             />
    //             {errors.email && <p className="text-red-500">{errors.email}</p>}
    //           </div>
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="username">{t('registration.name_field')}</Label>
    //             <Input 
    //               id="username" 
    //               type="text" 
    //               placeholder={t('registration.enter_name')} 
    //               value={name} 
    //               onChange={(e) => setName(e.target.value)} 
    //               required 
    //             />
    //             {errors.name && <p className="text-red-500">{errors.name}</p>}
    //           </div>
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="password">{t('registration.password_field')}</Label>
    //             <Input 
    //               id="password" 
    //               type="password" 
    //               placeholder={t('registration.enter_password')} 
    //               value={password} 
    //               onChange={(e) => setPassword(e.target.value)} 
    //               required 
    //             />
    //             {errors.password && <p className="text-red-500">{errors.password}</p>}
    //           </div>
    //           <div className="flex flex-col space-y-1.5">
    //             <Label htmlFor="confirmPassword">{t('registration.reenter_password')}</Label>
    //             <Input 
    //               id="confirmPassword" 
    //               type="password" 
    //               placeholder={t('registration.reenter_password')} 
    //               value={confirmPassword} 
    //               onChange={(e) => setConfirmPassword(e.target.value)} 
    //               required 
    //             />
    //             {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
    //           </div>
    //           {errors.general && <p className="text-red-500">{errors.general}</p>}
    //         </div>
    //         <div className="flex justify-between mt-4">
    //           <Button type="button" variant="outline" onClick={() => navigate('/')}>{t('registration.cancel')}</Button>
    //           <Button type="submit">{t('registration.register')}</Button>
    //         </div>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
