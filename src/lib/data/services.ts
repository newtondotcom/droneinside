export enum ServiceType {
  RESIDENTIAL = "residential",
  BUSINESS = "local_business",
  EVENT = "event",
  OFFICE = "office",
  HOSTEL = "hostel",
  CONSTRUCTION = "construction",
}

interface Service {
  key: ServiceType;
  price: number;
  duration: number | string;
  img: string;
}

const services: Service[] = [
  {
    key: ServiceType.RESIDENTIAL,
    price: 190,
    duration: 60,
    img: "/res.avif",
  },
  {
    key: ServiceType.BUSINESS,
    price: 190,
    duration: 60,
    img: "/local-business.jpeg",
  },
  {
    key: ServiceType.EVENT,
    price: 500,
    duration: "∞",
    img: "/event.jpeg",
  },
  {
    key: ServiceType.OFFICE,
    price: 390,
    duration: 90,
    img: "/office.webp",
  },
  {
    key: ServiceType.HOSTEL,
    price: 390,
    duration: 90,
    img: "/hotel.jpeg",
  },
  {
    key: ServiceType.CONSTRUCTION,
    price: 290,
    duration: 60,
    img: "/construction.jpeg",
  },
];

export default services;
