import { ServiceType } from "@/lib/data/services";

export interface Video {
  id: string;
  descriptionKey: string;
  type: ServiceType;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: "KjyyQyEjXqM",
    descriptionKey: "video1_description",
    type: ServiceType.BUSINESS,
    thumbnail: "",
  },
  {
    id: "DqmoH9LV2Dw",
    descriptionKey: "video2_description",
    type: ServiceType.RESIDENTIAL,
    thumbnail: "",
  },
  {
    id: "A0knQ9E67bc",
    descriptionKey: "video3_description",
    type: ServiceType.EVENT,
    thumbnail: "",
  },
];

export default videos;
