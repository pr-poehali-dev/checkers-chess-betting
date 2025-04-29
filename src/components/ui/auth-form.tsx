import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthFormProps = {
  mode: "login" | "register";
  onSubmit: (data: any) => void;
};

const AuthForm = ({ mode, onSubmit }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при вводе
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (mode === "register" && !formData.username.trim()) {
      newErrors.username = "Введите имя пользователя";
      isValid = false;
    }

    if (mode === "register" && !formData.email.trim()) {
      newErrors.email = "Введите email";
      isValid = false;
    } else if (mode === "register" && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Введите пароль";
      isValid = false;
    } else if (mode === "register" && formData.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
      isValid = false;
    }

    if (mode === "register" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-gamegreen-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gamegreen-700">
          {mode === "login" ? "Вход в аккаунт" : "Регистрация"}
        </CardTitle>
        <CardDescription className="text-center">
          {mode === "login" 
            ? "Введите ваши данные для входа в аккаунт"
            : "Создайте новый аккаунт для игры на нашей платформе"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {mode === "register" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="username">Имя пользователя</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? "border-red-500" : ""}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </>
          )}
          {mode === "login" && (
            <div className="space-y-2">
              <Label htmlFor="email">Email или имя пользователя</Label>
              <Input
                id="email"
                name="email"
                placeholder="email@example.com или username"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          )}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Пароль</Label>
              {mode === "login" && (
                <Link to="/forgot-password" className="text-sm text-gamegreen-600 hover:text-gamegreen-700">
                  Забыли пароль?
                </Link>
              )}
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button 
            type="submit" 
            className="w-full bg-gamegreen-600 hover:bg-gamegreen-700"
          >
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </Button>
          <div className="text-center text-sm">
            {mode === "login" ? (
              <span>
                Нет аккаунта?{" "}
                <Link to="/register" className="text-gamegreen-600 hover:text-gamegreen-700 font-medium">
                  Зарегистрироваться
                </Link>
              </span>
            ) : (
              <span>
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-gamegreen-600 hover:text-gamegreen-700 font-medium">
                  Войти
                </Link>
              </span>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
