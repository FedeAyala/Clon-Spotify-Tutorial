import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: "7",
    albumId: 7,
    title: "Oppais",
    color: colors.emerald,
    cover: "https://i.scdn.co/image/ab6761610000e5eb8297dd316462373a9a2cb27a",
    artists: ["Digimon", "Pokemon", "Slayer", "Shaman King"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 1,
    title: "Urban Echoes",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 4,
    title: "Lunar",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 7,
    title: "Las Aventuras Johto",
    image: "https://i1.sndcdn.com/artworks-000127795708-7ei4vj-t500x500.jpg",
    artists: ["Anime Opening"],
    album: "Pokémon",
    duration: "1:02",
  },
  {
    id: 2,
    albumId: 7,
    title: "La resurrección",
    image:
      "https://static.wikia.nocookie.net/shamanking/images/a/ae/SK_Comics_Image_Album.jpg",
    artists: ["Anime Opening"],
    album: "Shaman King",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 7,
    title: "The Biggest Dreamer",
    image:
      "https://i.pinimg.com/474x/fb/22/b7/fb22b718a78b04315587c2aaca972b69.jpg",
    artists: ["Anime Opening"],
    album: "Digimon Tamers",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 7,
    title: "Butterfly",
    image:
      "https://pics.filmaffinity.com/Digimon_Adventure_tri_Our_Future-117411291-large.jpg",
    artists: ["Anime Opening"],
    album: "Digimon Adventure",
    duration: "1:35",
  },
  {
    id: 5,
    albumId: 7,
    title: "Slayers",
    image:
      "https://static.wikia.nocookie.net/kanzaka/images/9/92/Slayers_treasure.jpg",
    artists: ["Anime Opening"],
    album: "Slayer",
    duration: "1:32",
  },
];
