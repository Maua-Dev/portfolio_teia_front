/* Import images */
import one from "../assets/Cards/member/1.jpg"
import two from "../assets/Cards/member/2.jpg"
import three from "../assets/Cards/member/3.jpg"
import four from "../assets/Cards/member/4.jpg"
import five from "../assets/Cards/member/5.jpg"
import six from "../assets/Cards/member/6.jpg"
import seven from "../assets/Cards/member/7.jpg"
import eight from "../assets/Cards/member/8.jpg"
import nine from "../assets/Cards/member/9.jpg"
import ten from "../assets/Cards/member/10.jpg"
import eleven from "../assets/Cards/member/11.jpg"
import twelve from "../assets/Cards/member/12.jpg"



/* Interface */
export interface CardMember{
    id: string;
    url_image: string;
    message_hover: string;
}

// Mock repository
export const card_member = [
  {
    id: "member-1",
    url_image: one,
    message_hover: "José Silva"
  },
  {
    id: "member-2",
    url_image: two,
    message_hover: "Maria Souza"
  },
  {
    id: "member-3",
    url_image: three,
    message_hover: "Vitor Soller"
  },
  {
    id: "member-4",
    url_image: four,
    message_hover: "Ana Clara"
  },
  {
    id: "member-5",
    url_image: five,
    message_hover: "Lucas Oliveira"
  },
  {
    id: "member-6",
    url_image: six,
    message_hover: "Juliana Mendes"
  },
  {
    id: "member-7",
    url_image: seven,
    message_hover: "Gabriel Santos"
  },
  {
    id: "member-8",
    url_image: eight,
    message_hover: "Beatriz Rocha"
  },
  {
    id: "member-9",
    url_image: nine,
    message_hover: "Costa Felipe"
  },
  {
    id: "member-10",
    url_image: ten,
    message_hover: "Pedro Pedra"
  },
  {
    id: "member-11",
    url_image: eleven,
    message_hover: "Carlos Eduardo"
  },
  {
    id: "member-12",
    url_image: twelve,
    message_hover: "Petra"
  },
];