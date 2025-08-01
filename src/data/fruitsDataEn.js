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
      name: "Apricot",
      varieties: ["SHALAH"],
      photo: [apricot],
      frame: apricotFrame,
      description: {
        season: ["MAY", "JUN"],
        packaging: {
          types: ["Plastic boxes", "Carton boxes"],
          weight_range_kg: "6-8 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Packaging is made according to customer demands.",
        },
        characteristics: [
          "Large, oval, and slightly flat in shape",
          "The average weight of apricot fruits is 50-65 grams",
          "The peel and pulp of the fruit are light yellow in color",
          "The fruits are sweet and the pulp is of medium hardness",
          "Early variety",
        ],
      },
    },
    {
      id: 2,
      name: "Cherry",
      varieties: ["VALOVAYA", "ZIRAAT", "BAHOR"],
      photo: [cherry, nectarine],
      frame: cherryFrame,
      description: {
        season: ["MAY", "JUN", "JUL"],
        packaging: {
          types: ["Plastic boxes", "Carton boxes"],
          weight_range_kg: "5-7 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Packaging is made according to customer demands.",
        },
        characteristics: [
          "Large, firm, juicy sweet, and bordeaux color",
          "Long shelf and storage life",
          "Resistant to rain cracking",
          "Adaptable to grow in different altitudes, latitude and different climates",
          "Green and strong stem retention",
        ],
      },
    },
    {
      id: 3,
      name: "Nectarine",
      varieties: ["OCTOBER"],
      photo: [nectarine],
      frame: nectarineFrame,
      description: {
        season: ["AUG", "SEP"],
        packaging: {
          types: ["Plastic box"],
          weight_range_kg: "7-10 kg",
          custom_packaging: true,
          custom_packaging_value:
            "Packaging is made according to customer demands.",
        },
        characteristics: [
          "Nectarine Luciana are rounded and smooth in shape",
          "The outer part of the fruit is bright red, and the flesh is yellow-red",
          "Nectarines have a rather rigid structure",
          "The fruit flesh is fragrant, tastes sweet",
          "The average weight of nectarine is 200 grams",
        ],
      },
    },
  ],
};

export default fruitsData;
