import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosPublicInstance } from "@/lib/axios";

export function ConfirmResetPassword() {
    const { t } = useTranslation();
    const { uid, token } = useParams();
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleConfirmPassword = async () => {
        if (password !== confirmPassword) {
            alert(t("confirm_reset_password.password_mismatch"));
            return;
        }

        setLoading(true);

        try {
            const response = await axiosPublicInstance.post('auth/users/reset_password_confirm/', {
                uid: uid,
                token: token,
                password: password,
                new_password: confirmPassword
            });
            console.log(response.data);
            alert(t("confirm_reset_password.success_message"));
            navigate('/');
        } catch (error) {
            console.error('Failed to reset password:', error);
            alert(t("confirm_reset_password.error_message"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen container flex items-center justify-center">
            <Card className="w-[550px]">
                <CardHeader>
                    <CardTitle>{t("confirm_reset_password.title")}</CardTitle>
                    <CardDescription>{t("confirm_reset_password.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleConfirmPassword();
                    }}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">{t("confirm_reset_password.password_label")}</Label>
                                <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder={t("confirm_reset_password.password_placeholder")}
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                    disabled={loading}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmPassword">{t("confirm_reset_password.confirm_password_label")}</Label>
                                <Input 
                                    id="confirmPassword" 
                                    type="password" 
                                    placeholder={t("confirm_reset_password.confirm_password_placeholder")}
                                    value={confirmPassword} 
                                    onChange={e => setConfirmPassword(e.target.value)} 
                                    disabled={loading} 
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button 
                        variant="outline" 
                        onClick={() => navigate('/')} 
                        disabled={loading} 
                    >
                        {t("confirm_reset_password.cancel_button")}
                    </Button>
                    <Button 
                        onClick={handleConfirmPassword} 
                        disabled={loading} 
                    >
                        {loading ? t("confirm_reset_password.loading_text") : t("confirm_reset_password.submit_button")}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
