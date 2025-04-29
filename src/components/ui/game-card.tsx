import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Bot } from "lucide-react";

type GameCardProps = {
  id: string;
  title: string;
  type: "chess" | "checkers";
  mode: "money" | "training";
  minBet?: number;
  maxBet?: number;
  players?: number;
  imageUrl: string;
};

const GameCard = ({
  id,
  title,
  type,
  mode,
  minBet,
  maxBet,
  players,
  imageUrl,
}: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-gamegreen-100">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-gamegreen-600 hover:bg-gamegreen-700">
          {type === "chess" ? "Шахматы" : "Шашки"}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-gamegreen-800">{title}</CardTitle>
        <CardDescription>
          {mode === "money" ? (
            <div className="flex items-center gap-1 text-gamegreen-600">
              <DollarSign size={16} />
              <span>Игра на деньги</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-gamegreen-600">
              <Bot size={16} />
              <span>Тренировка</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {mode === "money" && minBet && maxBet && (
          <div className="text-sm text-gamegreen-700 mb-2">
            Ставки: от {minBet} ₽ до {maxBet} ₽
          </div>
        )}
        {players !== undefined && (
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <Users size={16} />
            <span>Онлайн: {players}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/game/${type}/${id}`} className="w-full">
          <Button className="w-full bg-gamegreen-600 hover:bg-gamegreen-700">
            {mode === "money" ? "Играть на деньги" : "Тренировка"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
