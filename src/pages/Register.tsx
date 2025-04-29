import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/header";
import AuthForm from "@/components/ui/auth-form";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = (data: any) => {
    console.log('Registration data:', data);
    
    // В реальном приложении здесь будет API запрос для регистрации
    // Это демонстрационная логика без бэкенда
    
    toast({
      title: "Регистрация успешна",
      description: "Ваш аккаунт создан. Теперь вы можете войти в систему.",
    });
    
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isLoggedIn={false} />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <AuthForm mode="register" onSubmit={handleRegister} />
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-gamegreen-600">
        <p>© 2025 Шахматы&Шашки. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Register;
