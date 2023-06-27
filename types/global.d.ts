type Link = {
    platform: string,
    link: string
};

type Streamer = {
    _id: number,
    name: string,
    description: string,
    score: number,
    links: Link[]
};

