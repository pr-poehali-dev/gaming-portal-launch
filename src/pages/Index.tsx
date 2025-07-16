import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredGames = [
    {
      title: "Cyberpunk 2077",
      rating: 9.1,
      genre: "RPG",
      price: "1999₽",
      image: "/placeholder.svg",
      status: "Новый обзор"
    },
    {
      title: "Baldur's Gate 3",
      rating: 9.8,
      genre: "RPG",
      price: "2499₽",
      image: "/placeholder.svg",
      status: "Топ"
    },
    {
      title: "Counter-Strike 2",
      rating: 8.7,
      genre: "Шутер",
      price: "Бесплатно",
      image: "/placeholder.svg",
      status: "Популярно"
    },
    {
      title: "People Playground",
      rating: 9.3,
      genre: "Симулятор",
      price: "429₽",
      image: "/placeholder.svg",
      status: "Хит"
    }
  ];

  const reviews = [
    {
      title: "Обзор Starfield: космическая одиссея",
      excerpt: "Подробный разбор новой игры от Bethesda. Что получилось, а что нет?",
      date: "15 июля",
      readTime: "8 мин"
    },
    {
      title: "Топ-10 инди-игр 2024 года",
      excerpt: "Лучшие независимые проекты, которые стоит попробовать каждому геймеру.",
      date: "12 июля", 
      readTime: "12 мин"
    },
    {
      title: "Genshin Impact: гайд для новичков",
      excerpt: "Всё что нужно знать начинающему путешественнику в мире Тейвата.",
      date: "10 июля",
      readTime: "15 мин"
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
          <a href="#" className="hover:text-orange-400 transition-colors">Главная</a>
          <a href="#reviews" className="hover:text-orange-400 transition-colors">Обзоры игр</a>
          <a href="#telegram" className="hover:text-orange-400 transition-colors">Telegram</a>
        </nav>

        <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
          <Icon name="Menu" size={20} className="md:hidden" />
          <span className="hidden md:inline">Подписаться</span>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/img/e0015dd8-fc47-4f8d-b5d9-2983f8fe698c.jpg" 
              alt="Gaming Setup" 
              className="w-full h-96 object-cover rounded-2xl mb-8 opacity-80"
            />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Мир Steam Games
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Честные обзоры, актуальные новости и лучшие игры в одном месте
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть обзоры
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram канал
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold">Топ игры Steam</h3>
          <Button variant="ghost" className="text-orange-400 hover:text-orange-300">
            Все игры <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    {game.status}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-lg flex items-center">
                    <Icon name="Star" size={14} className="text-yellow-400 mr-1 fill-current" />
                    <span className="text-white text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                    {game.title}
                  </CardTitle>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {game.genre}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-400">{game.price}</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Icon name="ExternalLink" size={14} className="mr-1" />
                    Steam
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold">Последние обзоры</h3>
          <Button variant="ghost" className="text-orange-400 hover:text-orange-300">
            Все обзоры <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{review.date}</span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {review.readTime}
                  </span>
                </div>
                <CardTitle className="text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                  {review.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 line-clamp-3 mb-4">
                  {review.excerpt}
                </CardDescription>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                  Читать далее <Icon name="ArrowRight" size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Telegram Section */}
      <section id="telegram" className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center">
          <CardContent className="p-12">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Присоединяйся к нашему Telegram</h3>
              <p className="text-xl text-gray-300 mb-8">
                Получай эксклюзивные обзоры, новости игровой индустрии и скидки Steam первым!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Подписаться на канал
                </Button>
                <div className="flex items-center text-gray-300">
                  <Icon name="Users" size={20} className="mr-2" />
                  <span>2.4K подписчиков</span>
                </div>
              </div>
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
              <li><a href="#" className="hover:text-orange-400 transition-colors">Главная</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition-colors">Обзоры</a></li>
              <li><a href="#telegram" className="hover:text-orange-400 transition-colors">Telegram</a></li>
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

export default Index;