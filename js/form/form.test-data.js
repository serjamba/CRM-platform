const ExpampData = function (name, phone, email, product, status) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.product = product;
  this.status = status;
};

const dataItem = [
  new ExpampData(
    "Сергей Константинович",
    "+7 995 375 69 02",
    "Sergey.Konst@yandex.ru",
    "course-js",
    "new"
  ),
  new ExpampData(
    "Герман Подсолнухов",
    "+7 956 435 09 23",
    "German.Podsolnuhov@yandex.ru",
    "course-vue",
    "new"
  ),
  new ExpampData(
    "Никита Москлюев",
    "+7 999 856 34 90",
    "Nikita.M@yandex.ru",
    "course-php",
    "new"
  ),
  new ExpampData(
    "Кирилл Андреев",
    "+7 910 817 34 56",
    "Kirill.Andreev@yandex.ru",
    "course-wordpress",
    "new"
  ),
  new ExpampData(
    "Алексей Ефремов",
    "+7 977 832 42 31",
    "Alex.Ef@yandex.ru",
    "course-wordpress",
    "new"
  ),
];

function randomData(max) {
  return Math.floor(Math.random() * max);
}

export default function putItem() {
  const numberRandom = randomData(dataItem.length);

  const randomItem = dataItem[numberRandom];
  return randomItem;
}

