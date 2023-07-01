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

type FormData = {
  name: string;
  description: string;
  platforms: string;
  links: Link[];
  id_?: any;
};

type StreamerKey = keyof typeof Streamer;

type Field = 'name' | 'description' | 'platforms' | 'links';
