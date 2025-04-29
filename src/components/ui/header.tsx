import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Wallet, Trophy, Dices } from "lucide-react";

type HeaderProps = {
  isLoggedIn: boolean;
  username?: string;
  balance?: number;
};

const Header = ({ isLoggedIn, username = "", balance = 0 }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gamegreen-100 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gamegreen-700">♟️ Шахматы&Шашки</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/games" className="text-gamegreen-700 hover:text-gamegreen-500 font-medium">
            Игры
          </Link>
          <Link to="/tournaments" className="text-gamegreen-700 hover:text-gamegreen-500 font-medium">
            Турниры
          </Link>
          <Link to="/rating" className="text-gamegreen-700 hover:text-gamegreen-500 font-medium">
            Рейтинг
          </Link>
          <Link to="/how-to-play" className="text-gamegreen-700 hover:text-gamegreen-500 font-medium">
            Как играть
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="hidden md:flex items-center gap-2 text-gamegreen-700 font-medium">
                <Wallet size={18} />
                <span>{balance.toFixed(2)} ₽</span>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} alt={username} />
                      <AvatarFallback className="bg-gamegreen-200 text-gamegreen-700">
                        {username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{username}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {balance.toFixed(2)} ₽
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <Link to="/profile">Мой профиль</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Wallet className="mr-2 h-4 w-4" />
                    <Link to="/wallet">Кошелёк</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trophy className="mr-2 h-4 w-4" />
                    <Link to="/my-games">Мои игры</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-gamegreen-500 text-gamegreen-700 hover:bg-gamegreen-50">
                  Войти
                </Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button className="bg-gamegreen-600 text-white hover:bg-gamegreen-700">
                  Регистрация
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
