export const HERO_ID = "home";
export const PLANET_ID = "planet";
export const ABOUT_ID = "sector";
export const SUCCESS_ID = "story";
export const BOOK_ID = "book";

const getId = (id) => `/#${id}`

export const NAVIGATION = [
    {name: 'Home', href: getId(HERO_ID), current: false},
    {name: 'Planets', href: getId(PLANET_ID), current: false},
    {name: 'About', href: getId(ABOUT_ID), current: false},
    {name: 'Story', href: getId(SUCCESS_ID), current: false},
    {name: 'Book', href: "/" + BOOK_ID, current: false}
]