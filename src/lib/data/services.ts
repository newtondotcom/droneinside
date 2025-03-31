export type ServiceType =
  | "residential"
  | "local-business"
  | "event"
  | "office"
  | "hostel"
  | "construction";

interface Service {
  key: ServiceType;
  price: number;
  duration: number | string;
  img: string;
}
  
const services = [
{
    key: "residential",
    price: 190,
    duration: 60,
    img: "/res.avif",
},
{
    key: "local-business",
    price: 190,
    duration: 60,
    img: "/local-business.jpeg",
},
{
    key: "event",
    price: 500,
    duration: "∞",
    img: "/event.jpeg",
},
{
    key: "office",
    price: 390,
    duration: 90,
    img: "/office.webp",
},
{
    key: "hostel",
    price: 390,
    duration: 90,
    img: "/hotel.jpeg",
},
{
    key: "construction",
    price: 290,
    duration: 60,
    img: "/construction.jpeg",
},
];

export default services;