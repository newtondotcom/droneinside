import type {ServiceType} from "@/lib/data/services"

interface Video {
    id: string;
    descriptionKey: string;
    type : ServiceType;
}

const videos: Video[] = [
    {
      id: "KjyyQyEjXqM",
      descriptionKey: "video1_description",
      type: "local-business"
    },
    {
      id: "DqmoH9LV2Dw",
      descriptionKey: "video2_description",
      type: "residential"
    },
    {
      id: "A0knQ9E67bc",
      descriptionKey: "video3_description",
      type: "event"
    },
];

export default videos;