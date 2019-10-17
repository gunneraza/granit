module.exports = {
  logo: {
    icon: "crane",
    slogan: "Доставка нерудных материалов",
    title: "Granit"
  },
  inStock: [
    {
      title: "Песок речной",
      description:
        "Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов",
      price: "от 330 р./т",
      img: "/assets/img/products/pesok.png"
    },
    {
      title: "Щебень",
      description:
        "Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.",
      price: "от 330 р./т",
      img: "/assets/img/products/sheben.png"
    },
    {
      title: "Грунт",
      description: "Мелкий речной песок повышает прочность, долговечность",
      price: "от 330 р./т",
      img: "/assets/img/products/grunt.png"
    }
  ],
  copyright: "© Все права защищены",
  nav: {
    desktop: [
      {
        label: "Главная",
        href: "#"
      },
      {
        label: "Каталог",
        href: "#section-catalog"
      },
      {
        label: "Услуги",
        href: "#section-services"
      },
      {
        label: "Доставка",
        href: "#section-delivery"
      },
      {
        label: "О компании",
        href: "#section-about"
      },
      {
        label: "Контакты",
        href: "#section-contacts"
      }
    ],

    mobile: [
      {
        label: "Главная",
        href: "#",
        icon: "home_filled"
      },
      {
        label: "Каталог",
        href: "#section-catalog",
        icon: "local_grocery_storeshopping_cart"
      },
      {
        label: "Услуги",
        href: "#section-services",
        icon: "grid_view"
      },
      {
        label: "В наличии",
        href: "#section-stock",
        icon: "local_shipping"
      },
      {
        label: "Преимущества",
        href: "#section-advantages",
        icon: "thumb_up_alt"
      },
      {
        label: "Контакты",
        href: "#section-contacts",
        icon: "call"
      }
    ]
  },

  phones: ["8 800 342-13-33", "8 800 342-13-33", "8 495 034-23-34"],

  emails: ["Info@stroika.ru"],

  address: ["Московская обл. г. Балашиха, пер. Столовой, д.23, кор. 34"],

  products: [
    {
      title: "Гранитный щебень",
      price: "1 350 р./т",
      oldPrice: "1 500 р./т",
      size: "5-20 мм",
      isDiscount: true,
      img: "/assets/img/textures/sheben.png"
    },
    {
      title: "Гранитный щебень",
      price: "1 350 р./т",
      oldPrice: "1 500 р./т",
      size: "5-20 мм",
      isDiscount: true,
      img: "/assets/img/textures/sheben_2.png"
    },
    {
      title: "Гранитный щебень",
      price: "1 350 р./т",
      size: "0-5 мм (отсев)",
      isDiscount: false,
      img: "/assets/img/textures/sheben_3.png"
    },
    {
      title: "Гранитный щебень",
      price: "1 350 р./т",
      size: "5-20 мм",
      isDiscount: false,
      img: "/assets/img/textures/sheben_4.png"
    }
  ],

  cars: [
    {
      title: "Аренда самосвала",
      img: "#truck"
    },
    {
      title: "Аренда спецтехники",
      img: "#delivery-truck"
    },
    {
      title: "Рытье траншеи",
      img: "#excavator"
    }
  ],

  advantages: [
    {
      title: "Низкая цена",
      description: `Мы сотрудничаем напрямую с производителем, поэтому можем гарантировать самую низкую цену.`,
      icon: "piggy-bank"
    },
    {
      title: "Быстрая доставка",
      description: `Весь товар уже находится на нашем складе. Нам остается только погрузить его и в путь!`,
      icon: "trucking"
    },
    {
      title: "Индивидуальный подход",
      description: `Вам нужны бесперебойные поставки или большая партия товара со скидкой? Мы найдем решение! `,
      icon: "wheelbarrow"
    }
  ]
};
