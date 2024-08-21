import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { axiosPublicInstance } from '@/lib/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/lib/slice/userSlice';
import { APIs } from '@/lib/types/Api';

function GoogleAuth({ fetchUser }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSuccess = async (credentialResponse) => {
        try {
            const res = await axiosPublicInstance.post(APIs.GOOGLE_AUTH, {
                token: credentialResponse.credential,
            });

            const { access, refresh } = res.data;

            dispatch(setCredentials({
                accessToken: access,
                refreshToken: refresh
            }));
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            await fetchUser();
            navigate('/');
        } catch (error) {
            console.error('Login Failed:', error);
        }
    };

    const onFailure = (error) => {
        console.error('Google Sign In Failure:', error);
    };

    const onGoogleAuthFailure = (response) => {
        console.error('Google authentication failed:', response);
        // Handle failure
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
                onFailure={onGoogleAuthFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default GoogleAuth;
