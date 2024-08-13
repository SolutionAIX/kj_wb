import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosPublicInstance } from "@/lib/axios";
import { useNavigate } from "react-router-dom";

export function ResetPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false); // Add loading state
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      const response = await axiosPublicInstance.post("auth/users/reset_password/", {
        email: email,
      });
      console.log("Reset password link sent:", response.data);
      alert(t("reset_password.success_message"));
      setLoading(false); // Set loading to false after request is complete
    } catch (error) {
      console.error("Failed to send reset password link:", error);
      alert(t("reset_password.error_message"));
      setLoading(false); // Set loading to false if there's an error
    }
  };

  return (
    <div className="h-screen container flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>{t("reset_password.title")}</CardTitle>
          <CardDescription>{t("reset_password.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleResetPassword();
          }}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t("reset_password.email_label")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("reset_password.email_placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading} // Disable input while loading
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                disabled={loading} // Disable button while loading
              >
                {t("reset_password.cancel_button")}
              </Button>
              <Button 
                type="submit" 
                disabled={loading} // Disable button while loading
              >
                {loading ? t("reset_password.loading_button") : t("reset_password.submit_button")}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
