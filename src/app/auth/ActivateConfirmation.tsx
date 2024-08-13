import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosPublicInstance } from "@/lib/axios";
import { APIs } from "@/lib/types/Api";

export function ActivationConfirmation() {
  const { t } = useTranslation();
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axiosPublicInstance.post(APIs.ACTIVATION, {
          uid,
          token
        });
        console.log(t('activation_confirmation.activation_success'), response.data);
        alert(t('activation_confirmation.activation_success'));
        navigate('/login'); // Redirect to login page or home page after successful activation
      } catch (error) {
        console.error(t('activation_confirmation.activation_error'), error);
        alert(t('activation_confirmation.activation_error'));
      }
    };

    activateAccount();
  }, [uid, token, t, navigate]);

  return (
    <div className="h-screen container flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>{t('activation_confirmation.title')}</CardTitle>
          <CardDescription>{t('activation_confirmation.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{t('activation_confirmation.content')}</p>
        </CardContent>
        <CardFooter>
          {/* Optionally, add a button or link to resend activation email or contact support */}
        </CardFooter>
      </Card>
    </div>
  );
}
