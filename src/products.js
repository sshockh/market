const data = [
    {
        id: 1,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 2,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 3,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 4,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 5,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 6,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 7,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 8,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 9,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 10,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 11,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 12,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 13,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 14,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 15,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 16,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 17,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 18,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 24,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 25,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 31,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 32,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 33,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 34,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 35,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 41,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 42,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 43,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 44,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 45,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 51,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 52,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 53,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 54,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 55,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 61,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 62,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 63,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 64,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 65,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 71,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 72,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 73,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 74,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 75,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 81,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 82,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 83,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 84,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 85,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    },
    {
        id: 91,
        availableCount: 99,
        category: "Спорт и отдых",
        desc: "Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака",
        img: "/lodka_pvh.jpg",
        name: "Лодка ПВХ",
        price: 4000
    },
    {
        id: 92,
        availableCount: 7,
        category: "Спорт и отдых",
        desc: "Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками",
        img: "/river-3400-1.jpg",
        name: "Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор",
        price: 39170
    },
    {
        id: 93,
        availableCount: 5,
        category: "Спорт и отдых",
        desc: "Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья",
        img: "/dragon-330-classic-base-1.jpg",
        name: "Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах",
        price: 31990
    },
    {
        id: 94,
        availableCount: 2,
        category: "Спорт и отдых",
        desc: "Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником",
        img: "/1698_2.jpg",
        name: "Лодка ПВХ Аква 2800 надувная под мотор",
        price: 16520
    },
    {
        id: 95,
        availableCount: 999,
        category: "Одежда",
        desc: "Zoooooooo",
        img: "/zo.jpg",
        name: "Фирменная футболка ZoMarket",
        price: 2999.99
    }
];

export default data;