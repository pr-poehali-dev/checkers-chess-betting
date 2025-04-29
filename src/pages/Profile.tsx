import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wallet, Trophy, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

// Демо-данные пользователя
const userData = {
  username: "ШахматныйМастер",
  email: "chess@example.com",
  balance: 2450,
  rating: {
    chess: 1850,
    checkers: 1620
  },
  stats: {
    total: {
      played: 215,
      won: 148,
      lost: 57,
      draw: 10
    },
    chess: {
      played: 157,
      won: 108,
      lost: 42,
      draw: 7
    },
    checkers: {
      played: 58,
      won: 40,
      lost: 15,
      draw: 3
    }
  },
  winRate: 68.8,
  transactions: [
    { id: 1, type: "deposit", amount: 1000, date: "2025-04-25", status: "completed" },
    { id: 2, type: "win", amount: 500, date: "2025-04-26", status: "completed" },
    { id: 3, type: "loss", amount: -200, date: "2025-04-27", status: "completed" },
    { id: 4, type: "win", amount: 1200, date: "2025-04-28", status: "completed" },
    { id: 5, type: "withdrawal", amount: -500, date: "2025-04-28", status: "pending" }
  ],
  recentGames: [
    { id: 1, type: "chess", opponent: "Гроссмейстер94", result: "win", bet: 200, date: "2025-04-28" },
    { id: 2, type: "chess", opponent: "КорольШахмат", result: "loss", bet: 100, date: "2025-04-27" },
    { id: 3, type: "checkers", opponent: "ЛогикШашек", result: "win", bet: 300, date: "2025-04-26" },
    { id: 4, type: "chess", opponent: "Стратег2000", result: "draw", bet: 150, date: "2025-04-25" }
  ]
};

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isLoggedIn={true} username={userData.username} balance={userData.balance} />
      
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Профиль и статистика */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.username}`} />
                      <AvatarFallback className="text-xl">{userData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl">{userData.username}</CardTitle>
                      <CardDescription>{userData.email}</CardDescription>
                      <div className="flex space-x-2 mt-1">
                        <Badge className="bg-gamegreen-600">Уровень 12</Badge>
                        <Badge variant="outline" className="border-gamegreen-200 text-gamegreen-700">Активный игрок</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-5 w-5 text-gamegreen-600" />
                      <span className="font-medium">Баланс:</span>
                    </div>
                    <span className="text-xl font-bold text-gamegreen-700">{userData.balance.toFixed(2)} ₽</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/deposit">
                      <Button className="w-full bg-gamegreen-600 hover:bg-gamegreen-700">Пополнить</Button>
                    </Link>
                    <Link to="/withdraw">
                      <Button variant="outline" className="w-full border-gamegreen-500 text-gamegreen-700 hover:bg-gamegreen-50">Вывести</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-gamegreen-600" />
                    Статистика игрока
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Винрейт</span>
                      <span className="text-sm font-medium">{userData.winRate}%</span>
                    </div>
                    <Progress value={userData.winRate} className="h-2 bg-gamegreen-100" indicatorClassName="bg-gamegreen-600" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gamegreen-50 p-2 rounded">
                      <div className="text-2xl font-bold text-gamegreen-700">{userData.stats.total.played}</div>
                      <div className="text-xs text-gamegreen-600">Сыграно</div>
                    </div>
                    <div className="bg-gamegreen-50 p-2 rounded">
                      <div className="text-2xl font-bold text-gamegreen-700">{userData.stats.total.won}</div>
                      <div className="text-xs text-gamegreen-600">Победы</div>
                    </div>
                    <div className="bg-gamegreen-50 p-2 rounded">
                      <div className="text-2xl font-bold text-gamegreen-700">{userData.stats.total.lost}</div>
                      <div className="text-xs text-gamegreen-600">Поражения</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Шахматы</span>
                        <Badge variant="outline" className="border-gamegreen-200 text-gamegreen-700">
                          Рейтинг: {userData.rating.chess}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-xs text-gamegreen-700">
                        <span>Игр: {userData.stats.chess.played}</span>
                        <span>Побед: {userData.stats.chess.won}</span>
                        <span>Поражений: {userData.stats.chess.lost}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Шашки</span>
                        <Badge variant="outline" className="border-gamegreen-200 text-gamegreen-700">
                          Рейтинг: {userData.rating.checkers}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-xs text-gamegreen-700">
                        <span>Игр: {userData.stats.checkers.played}</span>
                        <span>Побед: {userData.stats.checkers.won}</span>
                        <span>Поражений: {userData.stats.checkers.lost}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Основной контент */}
            <div className="md:col-span-2">
              <Tabs defaultValue="games">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="games">Недавние игры</TabsTrigger>
                  <TabsTrigger value="transactions">Транзакции</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                </TabsList>
                
                <TabsContent value="games" className="space-y-4 pt-6">
                  <h3 className="text-xl font-bold">Последние матчи</h3>
                  <div className="space-y-3">
                    {userData.recentGames.map(game => (
                      <Card key={game.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex items-center border-l-4 border-gamegreen-600 pl-4 pr-6 py-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {game.type === "chess" ? (
                                  <span className="text-lg">♟️</span>
                                ) : (
                                  <span className="text-lg">⛀</span>
                                )}
                                <span className="font-medium">{game.type === "chess" ? "Шахматы" : "Шашки"}</span>
                                <Badge 
                                  className={
                                    game.result === "win" 
                                      ? "bg-green-500" 
                                      : game.result === "loss" 
                                        ? "bg-red-500" 
                                        : "bg-yellow-500"
                                  }
                                >
                                  {game.result === "win" 
                                    ? "Победа" 
                                    : game.result === "loss" 
                                      ? "Поражение" 
                                      : "Ничья"}
                                </Badge>
                              </div>
                              <div className="mt-1 text-sm text-gamegreen-700">
                                Соперник: {game.opponent}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <Clock className="mr-1 h-4 w-4" />
                                {game.date}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-lg font-bold ${
                                game.result === "win" 
                                  ? "text-green-500" 
                                  : game.result === "loss" 
                                    ? "text-red-500" 
                                    : "text-yellow-500"
                              }`}>
                                {game.result === "win" 
                                  ? `+${game.bet}` 
                                  : game.result === "loss" 
                                    ? `-${game.bet}` 
                                    : `±0`} ₽
                              </div>
                              <div className="text-sm text-gray-500">
                                Ставка: {game.bet} ₽
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link to="/my-games">
                      <Button variant="outline" className="border-gamegreen-500 text-gamegreen-700 hover:bg-gamegreen-50">
                        Смотреть все игры
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions" className="space-y-4 pt-6">
                  <h3 className="text-xl font-bold">История транзакций</h3>
                  <div className="space-y-3">
                    {userData.transactions.map(transaction => (
                      <Card key={transaction.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex items-center pl-4 pr-6 py-4">
                            <div className={`mr-4 rounded-full p-2 ${
                              transaction.type === "deposit" || transaction.type === "win"
                                ? "bg-green-100" 
                                : "bg-red-100"
                            }`}>
                              {transaction.type === "deposit" || transaction.type === "win" ? (
                                <ArrowUpRight className={`h-5 w-5 ${
                                  transaction.type === "deposit" || transaction.type === "win"
                                    ? "text-green-600" 
                                    : "text-red-600"
                                }`} />
                              ) : (
                                <ArrowDownRight className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">
                                {transaction.type === "deposit" && "Пополнение счета"}
                                {transaction.type === "withdrawal" && "Вывод средств"}
                                {transaction.type === "win" && "Выигрыш"}
                                {transaction.type === "loss" && "Проигрыш"}
                              </div>
                              <div className="text-sm text-gray-500">{transaction.date}</div>
                            </div>
                            <div>
                              <div className={`text-lg font-bold ${
                                transaction.amount > 0 
                                  ? "text-green-600" 
                                  : "text-red-600"
                              }`}>
                                {transaction.amount > 0 ? "+" : ""}{transaction.amount} ₽
                              </div>
                              <Badge 
                                variant={transaction.status === "completed" ? "default" : "outline"} 
                                className={
                                  transaction.status === "completed" 
                                    ? "bg-gamegreen-600" 
                                    : "border-yellow-500 text-yellow-700"
                                }
                              >
                                {transaction.status === "completed" ? "Завершено" : "В обработке"}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link to="/transactions">
                      <Button variant="outline" className="border-gamegreen-500 text-gamegreen-700 hover:bg-gamegreen-50">
                        Смотреть все транзакции
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-6 pt-6">
                  <h3 className="text-xl font-bold">Настройки аккаунта</h3>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Личные данные</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя пользователя</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gamegreen-500"
                          value={userData.username}
                          readOnly
                        />
                        <p className="text-xs text-gray-500">Имя пользователя нельзя изменить</p>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gamegreen-500"
                          value={userData.email}
                        />
                      </div>
                      
                      <Button className="bg-gamegreen-600 hover:bg-gamegreen-700">Сохранить изменения</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Безопасность</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Текущий пароль</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gamegreen-500"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Новый пароль</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gamegreen-500"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Подтвердите новый пароль</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gamegreen-500"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <Button className="bg-gamegreen-600 hover:bg-gamegreen-700">Изменить пароль</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки уведомлений</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Email-уведомления</label>
                        <input type="checkbox" className="h-5 w-5 text-gamegreen-600 rounded" checked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Уведомления о новых турнирах</label>
                        <input type="checkbox" className="h-5 w-5 text-gamegreen-600 rounded" checked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Уведомления о выводе средств</label>
                        <input type="checkbox" className="h-5 w-5 text-gamegreen-600 rounded" checked />
                      </div>
                      
                      <Button className="bg-gamegreen-600 hover:bg-gamegreen-700">Сохранить настройки</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-gamegreen-600">
        <p>© 2025 Шахматы&Шашки. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Profile;
