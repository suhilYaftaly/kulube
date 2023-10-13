import {createSlice} from '@reduxjs/toolkit';

const menuItems = [
  {
    id: 1,
    category: 'Appetizers',
    menuItems: [
      {
        id: 1,
        name: 'Bonjan Salad',
        description:
          "Bonjan salad is a flavorful and healthy appetizer from Afghanistan. Slices of eggplant are first fried and then poured over with a tomato sauce that's spiced with red pepper flakes, pepper, and cinnamon. The coated eggplants are usually left to cool in the refrigerator anywhere from a few hours to overnight, and are then served at room temperature, preferably with Afghan flatbread or a cup of yogurt.",
        price: 24.51,
        img: require('../resources/images/menuItems/bonjanSalad.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 2,
        name: 'Badenjan Burani',
        description:
          'Badenjan-burani is a delicious Afghan dip made by blending fried or roasted eggplants, garlic, yogurt, and olive oil. The eggplants are traditionally fried, but most recipes suggest roasting or baking them. The dip is seasoned with fresh or dried mint, and it is typically eaten as an appetizer that is paired with lavash or Afghan flatbread. An almost identical version of this dip can be found in Persian cuisine where additional ingredients may include walnuts, rose petals, and saffron.',
        price: 13.99,
        img: require('../resources/images/menuItems/badenjanBurani.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 3,
        name: 'Osh Pyozee',
        description:
          'Osh pyozee, meaning stuffed onions, is an Afghan specialty made with onions filled with rice, ground meat, feta cheese, and prunes. Layers of boiled yellow onions are topped with a mixture of cooked rice, ground lamb, feta, prunes, and sautéed garlic with cumin seeds. The onion layers are tightly folded around the filling, drizzled with oil, and then baked until nicely browned and fragrant. This savory treat is usually consumed as an appetizer, but it can also be served as a main dish or an accompaniment to various Afghan dishes.',
        price: 19.99,
        img: require('../resources/images/menuItems/bonjanSalad.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 4,
        name: 'Badenjan Burani',
        description:
          'Badenjan-burani is a delicious Afghan dip made by blending fried or roasted eggplants, garlic, yogurt, and olive oil. The eggplants are traditionally fried, but most recipes suggest roasting or baking them. The dip is seasoned with fresh or dried mint, and it is typically eaten as an appetizer that is paired with lavash or Afghan flatbread. An almost identical version of this dip can be found in Persian cuisine where additional ingredients may include walnuts, rose petals, and saffron.',
        price: 13.99,
        img: require('../resources/images/menuItems/badenjanBurani.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
    ],
  },
  {
    id: 2,
    category: 'Main Dishes',
    menuItems: [
      {
        id: 11,
        name: 'Kabuli Pulao',
        description:
          "Kabuli pulao, commonly known as the crown of Afghan cuisine, is a dish eaten by the upper-class families of Kabul. The word 'Kabuli' is taken from 'Kabul' which is the capital of Afghanistan. This traditional dish is prepared with steamed rice that is mixed with various dry fruits including raisins and almonds, caramelized carrots and a range of sweet spices. The steamed rice platter is served with large chunks of lamb meat.",
        price: 24.5,
        img: require('../resources/images/menuItems/kabuliPulao.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 22,
        name: 'Ashak Dumplings',
        description:
          'Ashak or simply leek and scallion dumplings is an Afghan meal that is usually served on special occasions or holidays. These delicious dumplings are filled with leek and chopped spring onions. This dish is generally served with minced lamb or beef. Tomato sauce and dried mint are also served with it to enhance its flavor.',
        price: 18.5,
        img: require('../resources/images/menuItems/ashakDumplings.jpeg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 33,
        name: 'Mantu',
        description:
          'Mantu (or Mantoo) is similar to the popular Chinese dim sum. The only difference between Mantu and dim sum is that Mantu is prepared with lots of Afghani spices. Mantu is basically a dumpling wrapper which is filled with spicy minced meat. The dumpling is then steamed until it is cooked completely. It is a favorite healthy snack as it is made with little oil and is gluten-free. This amazing dumpling dish is served with tomato or yogurt dip and sometimes with Quroot, which is a sour cheese sauce.',
        price: 19.99,
        img: require('../resources/images/menuItems/mantu.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 44,
        name: 'Chopan Kabob',
        description:
          'Chopan kabob is a Pashtun delicacy consisting of skewered and grilled lamb meat. The meat is marinated with onion juice, ginger, salt, garlic, and yogurt before being grilled over a traditional Afghan charcoal brazier called mankal.',
        price: 23.99,
        img: require('../resources/images/menuItems/chopanKabob.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
    ],
  },
  {
    id: 3,
    category: 'Drinks',
    menuItems: [
      {
        id: 111,
        name: 'Dough',
        description:
          "Dough is one drink which will be always on the menu in any Afghan/Persian restaurants. It's a yogurt drink very similar to salted lassi, the difference is that in dough you also add cucumber and mint leaves",
        price: 5.99,
        img: require('../resources/images/menuItems/Dough.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 222,
        name: 'Ginger Tea',
        description:
          "Chai-E-Zanjafeel is brewed with green tea, ginger and walnuts. It has a spicy, invigorating taste. It's used as a home remedy for indigestion, nausea, and to ward off colds, flu, and sore throats.",
        price: 2.99,
        img: require('../resources/images/menuItems/gingerTea.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
      {
        id: 333,
        name: 'Mango Juice',
        description:
          "Mango juice! Like the World's best mango market in a glass! Full of refreshing fruity flavors, little tangy & sweet, this homemade truly tropical mango juice is the best you can make this summer! If you have never had homemade mango juice made from real fresh mangoes, you are in for a real treat! Though in a pinch frozen or mango pulp works, fresh mangoes are the best and taste delicious if harvested during the peak season.",
        price: 6.99,
        img: require('../resources/images/menuItems/nangoJuice.jpg'),
        qty: 0,
        total: 0,
        note: '',
      },
    ],
  },
];

const slice = createSlice({
  name: 'menu',
  initialState: {data: menuItems},
  reducers: {
    getMenu: menu => {},
  },
});

export const {getMenu} = slice.actions;
export default slice.reducer;
