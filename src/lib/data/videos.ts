import { ServiceType } from "@/lib/data/services";

export interface Video {
  id: string;
  descriptionKey: string;
  type: ServiceType;
}

const videos: Video[] = [
  {
    id: "KjyyQyEjXqM",
    descriptionKey: "video1_description",
    type: ServiceType.BUSINESS,
  },
  {
    id: "DqmoH9LV2Dw",
    descriptionKey: "video2_description",
    type: ServiceType.RESIDENTIAL,
  },
  {
    id: "A0knQ9E67bc",
    descriptionKey: "video3_description",
    type: ServiceType.EVENT,
  },
];

export default videos;
