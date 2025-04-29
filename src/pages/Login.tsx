import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/header";
import AuthForm from "@/components/ui/auth-form";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (data: any) => {
    console.log('Login data:', data);
    
    // В реальном приложении здесь будет API запрос для аутентификации
    // Это демонстрационная логика без бэкенда
    
    toast({
      title: "Вход выполнен успешно",
      description: "Добро пожаловать на платформу!",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isLoggedIn={false} />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <AuthForm mode="login" onSubmit={handleLogin} />
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-gamegreen-600">
        <p>© 2025 Шахматы&Шашки. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Login;
