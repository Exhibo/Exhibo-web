import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [["/about_us", "About Us"]];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "",
      "",
      "",
    ],
    video: highlightFirstVideo,
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: [
      "User-centric",
      "EXHIBO app provides",
      "a seamless",
      "exhibition management",
    ],
    video: highlightSecondVideo,
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: [
      " ",
      " ",
      " ",
    ],
    video: highlightThirdVideo,
    videoDuration: 3,
  },
];

export const models = [
  {
    id: 1,
    title: "Exhibo in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Exhibo in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Exhibo in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Exhibo in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'Exhibo', value: "small" },
  { label: 'Deluxe', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
];