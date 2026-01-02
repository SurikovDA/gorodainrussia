export interface City {
  slug: string;
  name: string;
  region: string;
  shortDescription: string;
  population: number;
  avgSalary: number;
  rent1k: number;
  industrialFacilities: string[];
  majorEmployers: string[];
  topHighPaid: { title: string; salary: number }[];
  topLowPaid: { title: string; salary: number }[];
  rentPrices: { studio: number | null; one: number | null; two: number | null; three: number | null };
  buyPrices: { studio: number | null; one: number | null; two: number | null; three: number | null };
  goodDistricts: string[];
  badDistricts: string[];
  universities: string[];
  relocationTips: string[];
}

export const cities: City[] = [
  {
    slug: "moscow",
    name: "Москва",
    region: "Московская область",
    shortDescription: "Столица России с развитой инфраструктурой и множеством возможностей для карьеры",
    population: 12600000,
    avgSalary: 120000,
    rent1k: 55000,
    industrialFacilities: ["IT-кластеры", "Финансовый центр", "Медиа-индустрия", "Логистические хабы", "Фармацевтика"],
    majorEmployers: ["Сбербанк", "Яндекс", "Mail.ru Group", "Газпром", "Роснефть", "МТС"],
    topHighPaid: [
      { title: "IT-директор", salary: 450000 },
      { title: "Финансовый директор", salary: 380000 },
      { title: "Data Scientist", salary: 280000 }
    ],
    topLowPaid: [
      { title: "Курьер", salary: 45000 },
      { title: "Продавец", salary: 50000 },
      { title: "Уборщик", salary: 40000 }
    ],
    rentPrices: { studio: 45000, one: 55000, two: 75000, three: 100000 },
    buyPrices: { studio: 8500000, one: 12000000, two: 18000000, three: 28000000 },
    goodDistricts: ["Хамовники", "Арбат", "Басманный", "Якиманка", "Замоскворечье"],
    badDistricts: ["Капотня", "Бирюлёво", "Гольяново", "Некрасовка"],
    universities: ["МГУ", "МГТУ им. Баумана", "НИУ ВШЭ", "МГИМО", "РАНХиГС"],
    relocationTips: [
      "Заранее найдите жильё через проверенные агентства",
      "Оформите временную регистрацию в течение 90 дней",
      "Изучите транспортную доступность района перед выбором жилья",
      "Подготовьте финансовую подушку на 3-4 месяца"
    ]
  },
  {
    slug: "spb",
    name: "Санкт-Петербург",
    region: "Ленинградская область",
    shortDescription: "Культурная столица с европейской архитектурой и богатой историей",
    population: 5350000,
    avgSalary: 85000,
    rent1k: 35000,
    industrialFacilities: ["Судостроение", "Автомобилестроение", "IT-сектор", "Туризм", "Порт"],
    majorEmployers: ["Газпром Нефть", "JetBrains", "Тинькофф", "Балтика", "Силовые машины"],
    topHighPaid: [
      { title: "Разработчик ПО", salary: 220000 },
      { title: "Руководитель проекта", salary: 180000 },
      { title: "Аналитик данных", salary: 150000 }
    ],
    topLowPaid: [
      { title: "Официант", salary: 35000 },
      { title: "Кассир", salary: 38000 },
      { title: "Охранник", salary: 42000 }
    ],
    rentPrices: { studio: 28000, one: 35000, two: 50000, three: 70000 },
    buyPrices: { studio: 5500000, one: 7500000, two: 11000000, three: 16000000 },
    goodDistricts: ["Центральный", "Петроградский", "Василеостровский", "Адмиралтейский"],
    badDistricts: ["Красносельский", "Колпино", "Металлострой"],
    universities: ["СПбГУ", "ИТМО", "СПбПУ", "ЛЭТИ", "Горный университет"],
    relocationTips: [
      "Подготовьтесь к влажному климату и перепадам погоды",
      "Выбирайте жильё ближе к метро для удобства передвижения",
      "Изучите разводку мостов, если живёте на островах",
      "Рассмотрите спальные районы для экономии на аренде"
    ]
  },
  {
    slug: "novosibirsk",
    name: "Новосибирск",
    region: "Новосибирская область",
    shortDescription: "Научный и промышленный центр Сибири с динамичной экономикой",
    population: 1620000,
    avgSalary: 58000,
    rent1k: 22000,
    industrialFacilities: ["Академгородок", "Машиностроение", "Металлургия", "Пищевая промышленность"],
    majorEmployers: ["2ГИС", "Новосибирский авиазавод", "НЭВЗ", "Лиотех", "Академпарк"],
    topHighPaid: [
      { title: "Программист", salary: 140000 },
      { title: "Научный сотрудник", salary: 95000 },
      { title: "Инженер", salary: 85000 }
    ],
    topLowPaid: [
      { title: "Разнорабочий", salary: 32000 },
      { title: "Продавец", salary: 35000 },
      { title: "Водитель", salary: 45000 }
    ],
    rentPrices: { studio: 18000, one: 22000, two: 32000, three: 45000 },
    buyPrices: { studio: 3200000, one: 4500000, two: 6500000, three: 9000000 },
    goodDistricts: ["Академгородок", "Центральный", "Железнодорожный"],
    badDistricts: ["Кировский", "Ленинский"],
    universities: ["НГУ", "НГТУ", "СибГУТИ", "НГПУ"],
    relocationTips: [
      "Учитывайте суровые зимы при планировании переезда",
      "Рассмотрите Академгородок для научной работы",
      "Развитая IT-инфраструктура для удалённой работы",
      "Хорошее транспортное сообщение с другими сибирскими городами"
    ]
  },
  {
    slug: "ekaterinburg",
    name: "Екатеринбург",
    region: "Свердловская область",
    shortDescription: "Крупный деловой центр Урала с развитой промышленностью",
    population: 1490000,
    avgSalary: 62000,
    rent1k: 25000,
    industrialFacilities: ["Металлургия", "Машиностроение", "IT-кластер", "Ювелирная промышленность"],
    majorEmployers: ["СКБ Контур", "УГМК", "Уралвагонзавод", "Евраз", "Уральский банк"],
    topHighPaid: [
      { title: "Разработчик", salary: 160000 },
      { title: "Финансист", salary: 120000 },
      { title: "Металлург", salary: 95000 }
    ],
    topLowPaid: [
      { title: "Грузчик", salary: 35000 },
      { title: "Уборщик", salary: 30000 },
      { title: "Кассир", salary: 38000 }
    ],
    rentPrices: { studio: 20000, one: 25000, two: 38000, three: 55000 },
    buyPrices: { studio: 3500000, one: 5000000, two: 7500000, three: 11000000 },
    goodDistricts: ["Центр", "Ботанический", "Академический"],
    badDistricts: ["Уралмаш", "Эльмаш", "Сортировка"],
    universities: ["УрФУ", "УрГЭУ", "УрГЮА", "Горный университет"],
    relocationTips: [
      "Город с хорошими карьерными возможностями в IT",
      "Доступное жильё по сравнению с Москвой",
      "Развитая культурная жизнь и инфраструктура",
      "Удобное географическое положение для путешествий"
    ]
  },
  {
    slug: "kazan",
    name: "Казань",
    region: "Республика Татарстан",
    shortDescription: "Современный мультикультурный город с высоким качеством жизни",
    population: 1260000,
    avgSalary: 55000,
    rent1k: 23000,
    industrialFacilities: ["Нефтехимия", "Авиастроение", "IT-парк", "Пищевая промышленность"],
    majorEmployers: ["Татнефть", "КАМАЗ", "Казаньоргсинтез", "Ак Барс Банк", "ICL"],
    topHighPaid: [
      { title: "IT-специалист", salary: 130000 },
      { title: "Нефтехимик", salary: 110000 },
      { title: "Менеджер", salary: 90000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 30000 },
      { title: "Официант", salary: 32000 },
      { title: "Курьер", salary: 40000 }
    ],
    rentPrices: { studio: 18000, one: 23000, two: 35000, three: 50000 },
    buyPrices: { studio: 3800000, one: 5200000, two: 7800000, three: 11500000 },
    goodDistricts: ["Вахитовский", "Ново-Савиновский", "Советский"],
    badDistricts: ["Кировский", "Авиастроительный"],
    universities: ["КФУ", "КНИТУ-КАИ", "КГАСУ", "Казанский медицинский"],
    relocationTips: [
      "Один из лучших городов России по качеству жизни",
      "Развитый IT-сектор с поддержкой государства",
      "Отличная инфраструктура после Универсиады",
      "Богатая культурная жизнь и гостеприимство"
    ]
  },
  {
    slug: "nizhniy-novgorod",
    name: "Нижний Новгород",
    region: "Нижегородская область",
    shortDescription: "Исторический торговый центр с развитой IT-индустрией",
    population: 1250000,
    avgSalary: 52000,
    rent1k: 20000,
    industrialFacilities: ["Автомобилестроение", "IT-кластер", "Судостроение", "Атомная промышленность"],
    majorEmployers: ["ГАЗ", "Intel", "Сбербанк", "Атомэнергопроект", "Теле2"],
    topHighPaid: [
      { title: "Программист", salary: 150000 },
      { title: "Инженер-атомщик", salary: 120000 },
      { title: "Менеджер продаж", salary: 85000 }
    ],
    topLowPaid: [
      { title: "Рабочий завода", salary: 35000 },
      { title: "Продавец", salary: 32000 },
      { title: "Водитель", salary: 45000 }
    ],
    rentPrices: { studio: 16000, one: 20000, two: 30000, three: 42000 },
    buyPrices: { studio: 2800000, one: 4000000, two: 6000000, three: 8500000 },
    goodDistricts: ["Нижегородский", "Советский", "Приокский"],
    badDistricts: ["Автозаводский", "Сормовский"],
    universities: ["ННГУ", "НГТУ", "Мининский университет", "Медицинская академия"],
    relocationTips: [
      "Хорошие перспективы в IT-секторе",
      "Красивый исторический центр",
      "Близость к Москве (4 часа на поезде)",
      "Доступная стоимость жизни"
    ]
  },
  {
    slug: "samara",
    name: "Самара",
    region: "Самарская область",
    shortDescription: "Промышленный центр Поволжья на берегу Волги",
    population: 1150000,
    avgSalary: 48000,
    rent1k: 18000,
    industrialFacilities: ["Космическая промышленность", "Нефтепереработка", "Автомобилестроение", "Авиация"],
    majorEmployers: ["Роскосмос", "Роснефть", "АвтоВАЗ", "Кузнецов", "Самаранефтегаз"],
    topHighPaid: [
      { title: "Инженер-конструктор", salary: 110000 },
      { title: "Нефтяник", salary: 95000 },
      { title: "Программист", salary: 120000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 28000 },
      { title: "Охранник", salary: 32000 },
      { title: "Кассир", salary: 30000 }
    ],
    rentPrices: { studio: 14000, one: 18000, two: 28000, three: 40000 },
    buyPrices: { studio: 2500000, one: 3500000, two: 5200000, three: 7500000 },
    goodDistricts: ["Центр", "Октябрьский", "Самарский"],
    badDistricts: ["Кировский", "Красноглинский"],
    universities: ["СамГУ", "СГАУ", "СамГТУ", "Самарский медицинский"],
    relocationTips: [
      "Отличный город для любителей пляжного отдыха",
      "Развитая космическая отрасль",
      "Доступные цены на жильё",
      "Живописная набережная Волги"
    ]
  },
  {
    slug: "omsk",
    name: "Омск",
    region: "Омская область",
    shortDescription: "Крупный промышленный центр Западной Сибири",
    population: 1140000,
    avgSalary: 45000,
    rent1k: 16000,
    industrialFacilities: ["Нефтепереработка", "Машиностроение", "Химическая промышленность", "Пищевая промышленность"],
    majorEmployers: ["Газпром нефть", "Омский НПЗ", "Полёт", "Омсктехуглерод"],
    topHighPaid: [
      { title: "Нефтехимик", salary: 95000 },
      { title: "Инженер", salary: 75000 },
      { title: "IT-специалист", salary: 90000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 26000 },
      { title: "Рабочий", salary: 30000 },
      { title: "Водитель", salary: 38000 }
    ],
    rentPrices: { studio: 12000, one: 16000, two: 24000, three: 35000 },
    buyPrices: { studio: 2000000, one: 2800000, two: 4200000, three: 6000000 },
    goodDistricts: ["Центральный", "Советский", "Кировский"],
    badDistricts: ["Ленинский", "Октябрьский"],
    universities: ["ОмГУ", "ОмГТУ", "ОмГАУ", "Омский медицинский"],
    relocationTips: [
      "Очень доступная стоимость жизни",
      "Развитая нефтехимическая отрасль",
      "Суровый континентальный климат",
      "Хорошие перспективы в промышленности"
    ]
  },
  {
    slug: "chelyabinsk",
    name: "Челябинск",
    region: "Челябинская область",
    shortDescription: "Металлургический центр Урала с промышленным характером",
    population: 1190000,
    avgSalary: 50000,
    rent1k: 17000,
    industrialFacilities: ["Металлургия", "Машиностроение", "Оборонная промышленность", "Трубопрокат"],
    majorEmployers: ["ММК", "ЧМК", "ЧТЗ", "Мечел", "Южуралзолото"],
    topHighPaid: [
      { title: "Металлург", salary: 90000 },
      { title: "Инженер", salary: 75000 },
      { title: "IT-специалист", salary: 100000 }
    ],
    topLowPaid: [
      { title: "Рабочий", salary: 32000 },
      { title: "Продавец", salary: 28000 },
      { title: "Охранник", salary: 30000 }
    ],
    rentPrices: { studio: 13000, one: 17000, two: 26000, three: 38000 },
    buyPrices: { studio: 2200000, one: 3100000, two: 4600000, three: 6800000 },
    goodDistricts: ["Центральный", "Советский", "Калининский"],
    badDistricts: ["Металлургический", "Тракторозаводский"],
    universities: ["ЧелГУ", "ЮУрГУ", "ЧГИК", "Медицинский университет"],
    relocationTips: [
      "Стабильная работа в металлургии",
      "Доступное жильё",
      "Близость к природным озёрам",
      "Развитая спортивная инфраструктура"
    ]
  },
  {
    slug: "rostov-na-donu",
    name: "Ростов-на-Дону",
    region: "Ростовская область",
    shortDescription: "Южный форпост России с мягким климатом и развитой торговлей",
    population: 1130000,
    avgSalary: 48000,
    rent1k: 20000,
    industrialFacilities: ["Сельхозмашиностроение", "Пищевая промышленность", "Логистика", "IT"],
    majorEmployers: ["Ростсельмаш", "Донской табак", "Глория Джинс", "Магнит"],
    topHighPaid: [
      { title: "IT-разработчик", salary: 110000 },
      { title: "Агроном", salary: 70000 },
      { title: "Логист", salary: 65000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 28000 },
      { title: "Официант", salary: 30000 },
      { title: "Водитель", salary: 40000 }
    ],
    rentPrices: { studio: 16000, one: 20000, two: 32000, three: 45000 },
    buyPrices: { studio: 2800000, one: 4000000, two: 6000000, three: 8500000 },
    goodDistricts: ["Центр", "Ворошиловский", "Октябрьский"],
    badDistricts: ["Железнодорожный", "Первомайский"],
    universities: ["ЮФУ", "ДГТУ", "РГЭУ", "РостГМУ"],
    relocationTips: [
      "Отличный климат для жизни",
      "Близость к морю (Азовское, Чёрное)",
      "Развитая сфера услуг и торговли",
      "Гостеприимная южная культура"
    ]
  },
  {
    slug: "ufa",
    name: "Уфа",
    region: "Республика Башкортостан",
    shortDescription: "Нефтехимическая столица с многонациональной культурой",
    population: 1130000,
    avgSalary: 52000,
    rent1k: 18000,
    industrialFacilities: ["Нефтепереработка", "Нефтехимия", "Машиностроение", "Авиадвигателестроение"],
    majorEmployers: ["Башнефть", "УМПО", "Башкирская содовая компания", "Уфимский НПЗ"],
    topHighPaid: [
      { title: "Нефтяник", salary: 100000 },
      { title: "Инженер", salary: 80000 },
      { title: "IT-специалист", salary: 95000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 28000 },
      { title: "Рабочий", salary: 32000 },
      { title: "Охранник", salary: 30000 }
    ],
    rentPrices: { studio: 14000, one: 18000, two: 28000, three: 40000 },
    buyPrices: { studio: 2600000, one: 3600000, two: 5400000, three: 7800000 },
    goodDistricts: ["Октябрьский", "Советский", "Кировский"],
    badDistricts: ["Орджоникидзевский", "Калининский"],
    universities: ["БашГУ", "УГАТУ", "УГНТУ", "Башкирский медицинский"],
    relocationTips: [
      "Стабильная работа в нефтехимии",
      "Красивая природа Башкирии",
      "Развитая медицинская инфраструктура",
      "Мультикультурный город"
    ]
  },
  {
    slug: "krasnoyarsk",
    name: "Красноярск",
    region: "Красноярский край",
    shortDescription: "Крупнейший город Восточной Сибири с мощной промышленностью",
    population: 1090000,
    avgSalary: 55000,
    rent1k: 20000,
    industrialFacilities: ["Алюминиевая промышленность", "Энергетика", "Машиностроение", "Деревообработка"],
    majorEmployers: ["Русал", "Норникель", "Красмаш", "РусГидро"],
    topHighPaid: [
      { title: "Металлург", salary: 110000 },
      { title: "Энергетик", salary: 90000 },
      { title: "IT-специалист", salary: 105000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 30000 },
      { title: "Рабочий", salary: 35000 },
      { title: "Водитель", salary: 45000 }
    ],
    rentPrices: { studio: 16000, one: 20000, two: 32000, three: 45000 },
    buyPrices: { studio: 2800000, one: 4000000, two: 6000000, three: 8500000 },
    goodDistricts: ["Центральный", "Советский", "Октябрьский"],
    badDistricts: ["Ленинский", "Кировский"],
    universities: ["СФУ", "СибГТУ", "Красноярский медицинский", "Аграрный университет"],
    relocationTips: [
      "Высокие зарплаты в промышленности",
      "Красивейшая природа (заповедник Столбы)",
      "Суровый, но сухой климат",
      "Развитый город после Универсиады"
    ]
  },
  {
    slug: "perm",
    name: "Пермь",
    region: "Пермский край",
    shortDescription: "Культурная столица Урала с развитой химической промышленностью",
    population: 1050000,
    avgSalary: 50000,
    rent1k: 17000,
    industrialFacilities: ["Химическая промышленность", "Нефтепереработка", "Машиностроение", "Авиадвигатели"],
    majorEmployers: ["Лукойл-Пермь", "Уралкалий", "Пермские моторы", "Пермнефтеоргсинтез"],
    topHighPaid: [
      { title: "Химик", salary: 85000 },
      { title: "Инженер", salary: 75000 },
      { title: "Программист", salary: 100000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 27000 },
      { title: "Охранник", salary: 30000 },
      { title: "Рабочий", salary: 32000 }
    ],
    rentPrices: { studio: 13000, one: 17000, two: 26000, three: 38000 },
    buyPrices: { studio: 2200000, one: 3100000, two: 4600000, three: 6800000 },
    goodDistricts: ["Ленинский", "Свердловский", "Индустриальный"],
    badDistricts: ["Мотовилихинский", "Орджоникидзевский"],
    universities: ["ПГНИУ", "ПНИПУ", "ПГГПУ", "Пермский медицинский"],
    relocationTips: [
      "Богатая культурная жизнь",
      "Доступное жильё",
      "Хорошие перспективы в химической отрасли",
      "Красивая природа Пермского края"
    ]
  },
  {
    slug: "voronezh",
    name: "Воронеж",
    region: "Воронежская область",
    shortDescription: "Авиационная столица Черноземья с развитым IT-сектором",
    population: 1050000,
    avgSalary: 45000,
    rent1k: 18000,
    industrialFacilities: ["Авиастроение", "Электроника", "Пищевая промышленность", "IT-кластер"],
    majorEmployers: ["ВАСО", "Концерн Созвездие", "DataArt", "Netcracker"],
    topHighPaid: [
      { title: "IT-разработчик", salary: 120000 },
      { title: "Авиаинженер", salary: 85000 },
      { title: "Менеджер", salary: 70000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 26000 },
      { title: "Рабочий", salary: 30000 },
      { title: "Официант", salary: 28000 }
    ],
    rentPrices: { studio: 14000, one: 18000, two: 28000, three: 40000 },
    buyPrices: { studio: 2500000, one: 3500000, two: 5200000, three: 7500000 },
    goodDistricts: ["Центральный", "Коминтерновский", "Советский"],
    badDistricts: ["Левобережный", "Железнодорожный"],
    universities: ["ВГУ", "ВГТУ", "ВГАУ", "Воронежский медицинский"],
    relocationTips: [
      "Активно развивающийся IT-сектор",
      "Мягкий климат Черноземья",
      "Доступная стоимость жизни",
      "Хорошие университеты"
    ]
  },
  {
    slug: "volgograd",
    name: "Волгоград",
    region: "Волгоградская область",
    shortDescription: "Город-герой на Волге с богатой историей",
    population: 1010000,
    avgSalary: 42000,
    rent1k: 15000,
    industrialFacilities: ["Металлургия", "Машиностроение", "Нефтепереработка", "Химическая промышленность"],
    majorEmployers: ["Красный Октябрь", "Волгоградский НПЗ", "Каустик", "Тракторный завод"],
    topHighPaid: [
      { title: "Нефтехимик", salary: 80000 },
      { title: "Металлург", salary: 70000 },
      { title: "Инженер", salary: 65000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 25000 },
      { title: "Рабочий", salary: 28000 },
      { title: "Охранник", salary: 27000 }
    ],
    rentPrices: { studio: 12000, one: 15000, two: 23000, three: 32000 },
    buyPrices: { studio: 2000000, one: 2800000, two: 4200000, three: 6000000 },
    goodDistricts: ["Центральный", "Ворошиловский", "Дзержинский"],
    badDistricts: ["Красноармейский", "Кировский"],
    universities: ["ВолГУ", "ВолгГТУ", "ВолгГМУ", "Аграрный университет"],
    relocationTips: [
      "Очень доступная стоимость жизни",
      "Богатая история и достопримечательности",
      "Жаркое лето, мягкая зима",
      "Близость к Волге для отдыха"
    ]
  },
  {
    slug: "krasnodar",
    name: "Краснодар",
    region: "Краснодарский край",
    shortDescription: "Южная столица России с лучшим климатом для жизни",
    population: 930000,
    avgSalary: 52000,
    rent1k: 25000,
    industrialFacilities: ["Агропромышленность", "Пищевая промышленность", "Торговля", "IT-сектор"],
    majorEmployers: ["Магнит", "Тандер", "Claas", "Кубаньэнерго"],
    topHighPaid: [
      { title: "IT-специалист", salary: 110000 },
      { title: "Агроном", salary: 75000 },
      { title: "Менеджер", salary: 70000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 30000 },
      { title: "Официант", salary: 32000 },
      { title: "Рабочий", salary: 35000 }
    ],
    rentPrices: { studio: 20000, one: 25000, two: 38000, three: 55000 },
    buyPrices: { studio: 4000000, one: 5500000, two: 8000000, three: 12000000 },
    goodDistricts: ["Центральный", "Западный", "Юбилейный"],
    badDistricts: ["Комсомольский", "Славянский"],
    universities: ["КубГУ", "КубГТУ", "КубГМУ", "КубГАУ"],
    relocationTips: [
      "Лучший климат в России",
      "Близость к морю (1.5 часа)",
      "Активно растущий город",
      "Высокий спрос на жильё — ищите заранее"
    ]
  },
  {
    slug: "tyumen",
    name: "Тюмень",
    region: "Тюменская область",
    shortDescription: "Нефтегазовая столица с высоким уровнем жизни",
    population: 820000,
    avgSalary: 68000,
    rent1k: 22000,
    industrialFacilities: ["Нефтегазовая промышленность", "Машиностроение", "Строительство", "Логистика"],
    majorEmployers: ["Роснефть", "ЛУКОЙЛ", "Газпром", "Сургутнефтегаз", "Транснефть"],
    topHighPaid: [
      { title: "Нефтяник", salary: 150000 },
      { title: "Инженер", salary: 100000 },
      { title: "IT-специалист", salary: 110000 }
    ],
    topLowPaid: [
      { title: "Продавец", salary: 35000 },
      { title: "Водитель", salary: 50000 },
      { title: "Охранник", salary: 38000 }
    ],
    rentPrices: { studio: 18000, one: 22000, two: 35000, three: 50000 },
    buyPrices: { studio: 3500000, one: 4800000, two: 7200000, three: 10500000 },
    goodDistricts: ["Центральный", "Калининский", "Восточный"],
    badDistricts: ["Ленинский", "Заречный"],
    universities: ["ТюмГУ", "ТИУ", "ТюмГМУ", "ГАУСЗ"],
    relocationTips: [
      "Одни из самых высоких зарплат в России",
      "Современная инфраструктура",
      "Хорошие условия для семей",
      "Суровая, но короткая зима"
    ]
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const searchCities = (query: string): City[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return cities;
  
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.region.toLowerCase().includes(lowerQuery)
  );
};
