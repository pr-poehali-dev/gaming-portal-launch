import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Reviews = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const gameReviews = [
    {
      title: "People Playground",
      rating: 9.3,
      genre: "Симулятор",
      image: "https://cdn.poehali.dev/files/b1da5fe9-d1a3-44cb-99fb-e23db2b26423.jpg",
      description: "Подробный обзор самого безумного симулятора физики. Экспериментируй с ragdoll персонажами!",
      videoUrl: "https://rutube.ru/video/6376135964f54a3b4f6d2d9c3240d670/?r=plwm",
      steamUrl: "https://store.steampowered.com/app/1118200/People_Playground/",
      publishDate: "15 июля 2024",
      views: "12.5K",
      status: "Новый обзор"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <Icon name="Gamepad2" size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            SediGame
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-orange-400 transition-colors">Главная</a>
          <a href="/reviews" className="text-orange-400">Обзоры игр</a>
          <a href="https://t.me/yariktyt5" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Telegram</a>
        </nav>

        <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
          <Icon name="Menu" size={20} className="md:hidden" />
          <span className="hidden md:inline">Подписаться</span>
        </Button>
      </header>

      {/* Page Title */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Обзоры игр
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Честные и подробные обзоры самых интересных игр Steam от SediGame
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300">
            <a href="/">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад на главную
            </a>
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameReviews.map((review, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    {review.status}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-lg flex items-center">
                    <Icon name="Star" size={14} className="text-yellow-400 mr-1 fill-current" />
                    <span className="text-white text-sm font-semibold">{review.rating}</span>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                    {review.title}
                  </CardTitle>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {review.genre}
                  </Badge>
                </div>
                
                <CardDescription className="text-gray-300 line-clamp-3 mb-4">
                  {review.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {review.publishDate}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Eye" size={14} className="mr-1" />
                    {review.views} просмотров
                  </span>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Открыть игру
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-800 border-gray-700 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-orange-400">
                        {review.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-300">
                        Выберите, что хотите посмотреть
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex flex-col gap-4 mt-6">
                      <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                        <a href={review.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Icon name="Play" size={20} className="mr-2" />
                          Смотреть обзор на Rutube
                        </a>
                      </Button>
                      
                      <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                        <a href={review.steamUrl} target="_blank" rel="noopener noreferrer">
                          <Icon name="ExternalLink" size={20} className="mr-2" />
                          Открыть в Steam
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-800/30 border-gray-700 inline-block">
            <CardContent className="p-8">
              <Icon name="Clock" size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold mb-2">Больше обзоров скоро!</h3>
              <p className="text-gray-400">
                Работаем над новыми обзорами популярных игр Steam
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center">
          <CardContent className="p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Не пропускай новые обзоры!</h3>
              <p className="text-xl text-gray-300 mb-8">
                Подписывайся на наш Telegram канал и получай уведомления о новых видео
              </p>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
                <a href="https://t.me/yariktyt5" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Подписаться на канал
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-orange-400">SediGame</h4>
            </div>
            <p className="text-gray-400">
              Лучший контент о играх для настоящих геймеров.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">Навигация</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Главная</a></li>
              <li><a href="/reviews" className="hover:text-orange-400 transition-colors">Обзоры</a></li>
              <li><a href="https://t.me/yariktyt5" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Telegram</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">Платформы</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Steam</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Epic Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">PlayStation</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4">Социальные сети</h5>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SediGame. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;