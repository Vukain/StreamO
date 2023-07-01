type Platform = 'kick' | 'rumble' | 'tiktok' | 'twitch' | 'youtube';

type Field = 'name' | 'description' | 'platforms' | 'links';

type Link = { id?: string; platform: Platform; link?: string };

type Streamer = {
  _id?: any;
  streamerId: number;
  name: string;
  description: string;
  score: number;
  avatarId: number;
  links: Link[];
};

type StreamerKey = keyof typeof Streamer;
