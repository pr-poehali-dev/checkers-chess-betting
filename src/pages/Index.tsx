import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import GameCard from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Это демонстрационные данные, обычно они бы приходили с бэкенда
  const isLoggedIn = false;
  const username = "Игрок";
  const balance = 1000;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isLoggedIn={isLoggedIn} username={username} balance={balance} />
      
      {/* Hero секция */}
      <section className="relative bg-gradient-to-b from-gamegreen-50 to-white py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gamegreen-800 tracking-tighter">
                Шахматы и шашки <span className="text-gamegreen-600">на деньги</span>
              </h1>
              <p className="text-lg text-gamegreen-700 max-w-md">
                Играйте в классические настольные игры против реальных соперников 
                и выигрывайте реальные деньги, или тренируйтесь с нашими ботами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gamegreen-600 hover:bg-gamegreen-700 text-lg">
                    Начать игру
                  </Button>
                </Link>
                <Link to="/how-to-play">
                  <Button size="lg" variant="outline" className="border-gamegreen-500 text-gamegreen-700 hover:bg-gamegreen-50 text-lg">
                    Как играть
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gamegreen-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gamegreen-700">Безопасные платежи</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gamegreen-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gamegreen-700">Честная игра</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop" 
                alt="Шахматы и шашки"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gamegreen-700 font-bold">Игроки онлайн: 1,328</p>
                <p className="text-sm text-gamegreen-600">Турниров сегодня: 15</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с играми */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gamegreen-800 mb-12">
            Выберите свою игру
          </h2>
          
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все игры</TabsTrigger>
              <TabsTrigger value="chess">Шахматы</TabsTrigger>
              <TabsTrigger value="checkers">Шашки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameCard 
                  id="chess-money"
                  title="Шахматы на деньги"
                  type="chess"
                  mode="money"
                  minBet={50}
                  maxBet={5000}
                  players={843}
                  imageUrl="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1958&auto=format&fit=crop"
                />
                <GameCard 
                  id="checkers-money"
                  title="Шашки на деньги"
                  type="checkers"
                  mode="money"
                  minBet={30}
                  maxBet={2000}
                  players={562}
                  imageUrl="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1964&auto=format&fit=crop"
                />
                <GameCard 
                  id="chess-training"
                  title="Шахматы: тренировка"
                  type="chess"
                  mode="training"
                  players={211}
                  imageUrl="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop"
                />
                <GameCard 
                  id="checkers-training"
                  title="Шашки: тренировка"
                  type="checkers"
                  mode="training"
                  players={104}
                  imageUrl="https://images.unsplash.com/photo-1591084728795-1149f32d5cf3?q=80&w=2064&auto=format&fit=crop"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="chess" className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameCard 
                  id="chess-money"
                  title="Шахматы на деньги"
                  type="chess"
                  mode="money"
                  minBet={50}
                  maxBet={5000}
                  players={843}
                  imageUrl="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1958&auto=format&fit=crop"
                />
                <GameCard 
                  id="chess-training"
                  title="Шахматы: тренировка"
                  type="chess"
                  mode="training"
                  players={211}
                  imageUrl="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="checkers" className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameCard 
                  id="checkers-money"
                  title="Шашки на деньги"
                  type="checkers"
                  mode="money"
                  minBet={30}
                  maxBet={2000}
                  players={562}
                  imageUrl="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1964&auto=format&fit=crop"
                />
                <GameCard 
                  id="checkers-training"
                  title="Шашки: тренировка"
                  type="checkers"
                  mode="training"
                  players={104}
                  imageUrl="https://images.unsplash.com/photo-1591084728795-1149f32d5cf3?q=80&w=2064&auto=format&fit=crop"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Секция "Как это работает" */}
      <section className="py-16 bg-gamegreen-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gamegreen-800 mb-12">
            Как это работает
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gamegreen-100">
              <div className="w-12 h-12 bg-gamegreen-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gamegreen-800 mb-2">1. Регистрация</h3>
              <p className="text-gamegreen-700">
                Создайте аккаунт, пополните счет через СБП и начните играть прямо сейчас.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gamegreen-100">
              <div className="w-12 h-12 bg-gamegreen-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 12-4-4-4 4"></path>
                  <path d="M12 16V8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gamegreen-800 mb-2">2. Выбор игры</h3>
              <p className="text-gamegreen-700">
                Выберите шахматы или шашки, режим игры и сделайте ставку на победу.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gamegreen-100">
              <div className="w-12 h-12 bg-gamegreen-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                  <path d="M12 2v6.5l3-3"></path>
                  <path d="M18.96 11.13a7.5 7.5 0 1 0-1.72 8.16l.5.47"></path>
                  <path d="M22 22v-4h-4"></path>
                  <path d="M18 13 v.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gamegreen-800 mb-2">3. Игра и выплаты</h3>
              <p className="text-gamegreen-700">
                Играйте против реальных соперников и выводите выигрыш через СБП за несколько минут.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с преимуществами */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560174971-443de64be852?q=80&w=1964&auto=format&fit=crop" 
                alt="Игра в шахматы"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gamegreen-800">
                Наши преимущества
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gamegreen-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gamegreen-800">Быстрые выплаты</h3>
                    <p className="text-gamegreen-700">Выводите выигрыш на карту через СБП за 5 минут</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gamegreen-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gamegreen-800">Защита от мошенничества</h3>
                    <p className="text-gamegreen-700">Система анти-чит и контроль честной игры</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gamegreen-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gamegreen-700">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gamegreen-800">Тренировочный режим</h3>
                    <p className="text-gamegreen-700">Практикуйтесь бесплатно с ботами разной сложности</p>
                  </div>
                </div>
              </div>
              
              <Link to="/register">
                <Button size="lg" className="bg-gamegreen-600 hover:bg-gamegreen-700">
                  Начать играть
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-gamegreen-800 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">♟️ Шахматы&Шашки</h3>
              <p className="text-gamegreen-100 text-sm">
                Играйте в классические игры на деньги с реальными противниками или тренируйтесь с ботами.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Игры</h3>
              <ul className="space-y-2 text-gamegreen-100">
                <li><Link to="/game/chess/money" className="hover:text-white">Шахматы на деньги</Link></li>
                <li><Link to="/game/checkers/money" className="hover:text-white">Шашки на деньги</Link></li>
                <li><Link to="/game/chess/training" className="hover:text-white">Тренировка по шахматам</Link></li>
                <li><Link to="/game/checkers/training" className="hover:text-white">Тренировка по шашкам</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-gamegreen-100">
                <li><Link to="/how-to-play" className="hover:text-white">Как играть</Link></li>
                <li><Link to="/terms" className="hover:text-white">Правила</Link></li>
                <li><Link to="/faq" className="hover:text-white">Частые вопросы</Link></li>
                <li><Link to="/support" className="hover:text-white">Поддержка</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gamegreen-100">
                <li>Email: support@chessmoney.ru</li>
                <li>Telegram: @chessmoney</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gamegreen-700 mt-8 pt-8 text-center text-gamegreen-200 text-sm">
            <p>© 2025 Шахматы&Шашки. Все права защищены.</p>
            <p className="mt-2">Игра на деньги доступна для лиц старше 18 лет.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
