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
    img: "/res.jpg",
  },
  {
    key: ServiceType.BUSINESS,
    price: 190,
    duration: 60,
    img: "/local-business.jpg",
  },
  {
    key: ServiceType.HOSTEL,
    price: 390,
    duration: 90,
    img: "/hotel.jpg",
  },
  {
    key: ServiceType.OFFICE,
    price: 390,
    duration: 90,
    img: "/office.jpg",
  },
  {
    key: ServiceType.CONSTRUCTION,
    price: 290,
    duration: 60,
    img: "/construction.jpg",
  },
  {
    key: ServiceType.EVENT,
    price: 500,
    duration: "∞",
    img: "/event.jpg",
  },
];

export default services;
