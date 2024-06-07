export const links = [
  {
    title: "Главная",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Магазин",
    url: "/shop",
    cName: "nav-links",
  },
  {
    title: "О бренде",
    url: "/brand",
    cName: "nav-links",
  },
  {
    title: "Контакты",
    url: "/contact",
    cName: "nav-links",
  },
];

import productImg01 from '../images/product/productImage01.png'
import productImg02 from '../images/product/productImage02.png'
import productImg03 from '../images/product/productImage03.png'

export const products = [
  {
    id: 1,
    title: "Футболка USA",
    price: 129,
    image: productImg01,
    category: 't-shirt',
    count:1
  },
  {
    id: 2,
    title: "Купальник Glow",
    price: 149,
    image: productImg02,
    count:1,
    category: 'swimsuit'
  },
  {
    id: 3,
    title: "Свитшот Sweat Shot",
    price: 179,
    image: productImg03,
    count:1,
    category: 'sweetshot'
  },
  {
    id: 4,
    title: "Свитшот Sweat Shot",
    price: 379,
    image: productImg03,
    count:1,
    category: 'sweetshot'
  },
  {
    id: 5,
    title: "Свитшот Sweat Shot",
    price: 579,
    image: productImg03,
    count:1,
    category: 'sweetshot'
  },
  {
    id: 6,
    title: "Свитшот Sweat Shot",
    price: 679,
    image: productImg03,
    count:1,
    category: 'sweetshot'
  },
]

import icon01 from '../images/product/iconImage01.svg'
import icon02 from '../images/product/iconImage02.svg'
import icon03 from '../images/product/iconImage03.svg'


export const waitings = [
  {
    icon: icon01,
    name: "Качество",
    text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества"
  },
  {
    icon: icon02,
    name: "Скорость",
    text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах"
  },
  {
    icon: icon03,
    name: "Ответственность",
    text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing"
  },
]

export const filterButtons = [
  {
    id:1,
    name: "Все",
    value: "all"
  },
  {
    id:2,
    name: "Футболка",
    value: "t-shirt"
  },
  {
    id:3,
    name: "Свитшот",
    value: "sweetshot"
  },
  {
    id:4,
    name: "Купальник",
    value: "swimsuit"
  },
]