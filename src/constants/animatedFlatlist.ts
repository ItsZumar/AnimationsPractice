export const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];
export const lastNames: string[] = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
];

export const jobTitles = [
  'Software Engineer',
  'Data Analyst',
  'Marketing Manager',
  'Graphic Designer',
  'Sales Representative',
];

export const email: string = `____@example.com`;

export const FLATLIST_DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: i.toString(),
    image: `https://randomuser.me/api/portraits/women/${i}.jpg`,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
    jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)],
    email: 'example01@gmail.com',
  };
});

export const ITEM_SPACING = 20;
export const AVATAR_SIZE = 70;
export const ITEM_SIZE = AVATAR_SIZE + ITEM_SPACING * 3;

export const BG_IMG =
  'https://images.pexels.com/photos/19557055/pexels-photo-19557055/free-photo-of-snowy-peak-of-the-pic-du-midi-dossau-mountain.jpeg?auto=compress&cs=tinysrgb&w=600';
