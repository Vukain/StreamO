type Link = { id?: string; platform: string; link?: string };

type Streamer = {
  _id?: any;
  streamerId: number;
  name: string;
  description: string;
  score: number;
  avatarId: number;
  links: Link[];
};
