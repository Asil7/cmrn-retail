import cherry from "../images/cherry.png";
import nectarine from "../images/nectarine.png";
import nectarineFrame from "../images/nectarineFrame.svg";
import apricot from "../images/apricot.png";
import apricotFrame from "../images/apricotFrame.svg";
import cherryFrame from "../images/cherryFrame.svg";

const fruitsData = {
  products: [
    {
      id: 1,
      name: "Абрикос",
      varieties: ["ШАЛАХ"],
      photo: [apricot],
      frame: apricotFrame,
      description: {
        season: ["МАЙ", "ИЮН"],
        packaging: {
          types: ["Пластиковые ящики", "Картонные коробки"],
          weight_range_kg: "6-8 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Упаковка может быть выполнена в соответствии с требованиями клиента.",
        },
        characteristics: [
          "Крупные, овальные и слегка плоские",
          "Средний вес плодов абрикоса 50-65 граммов",
          "Кожура и мякоть плода светло-желтого цвета",
          "Плоды сладкие, мякоть средней жесткости",
          "Ранний сорт",
        ],
      },
    },
    {
      id: 2,
      name: "Вишня",
      varieties: ["ВАЛОВАЯ", "ЗИРААТ", "БАХОР"],
      photo: [cherry, nectarine],
      frame: cherryFrame,
      description: {
        season: ["МАЙ", "ИЮН", "ИЮЛ"],
        packaging: {
          types: ["Пластиковые ящики", "Картонные коробки"],
          weight_range_kg: "5-7 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Упаковка может быть выполнена в соответствии с требованиями клиента.",
        },
        characteristics: [
          "Крупная, твердая, сладкая",
          "Цвет бордовый",
          "Долгий срок хранения",
          "Устойчивая к трещинам от дождя",
          "Зеленая и крепкая ножка",
        ],
      },
    },
    {
      id: 3,
      name: "Нектарин",
      varieties: ["ОКТЯБРЬ"],
      photo: [nectarine],
      frame: nectarineFrame,
      description: {
        season: ["АВГ", "СЕН"],
        packaging: {
          types: ["Пластиковые ящики"],
          weight_range_kg: "7-10 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Упаковка может быть выполнена в соответствии с требованиями клиента.",
        },
        characteristics: [
          "Нектарин круглой и гладкой формы",
          "Внешняя часть плода ярко-красная, мякоть желто-красная",
          "Нектарины имеют довольно жесткую структуру",
          "Мякоть плода ароматная, сладкая на вкус",
          "Средний вес нектарина составляет 200 граммов",
        ],
      },
    },
  ],
};

export default fruitsData;
