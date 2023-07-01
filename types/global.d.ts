type Link = { id?: string; platform: string; link?: string };

type Streamer = {
  streamerId: number;
  name: string;
  description: string;
  score: number;
  avatarId: number;
  links: Link[];
};
