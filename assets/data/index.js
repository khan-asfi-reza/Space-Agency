export const HERO_ID = "hero";
export const ABOUT_ID = "about";
export const SECTOR_ID = "sector";
export const GALLERY_ID = "gallery";
export const CONTACT_ID = "contactus";

const getId = (id) => `#${id}`

export const NAVIGATION = [
    {name: 'Home', href: getId(HERO_ID), current: false},
    {name: 'About', href: getId(ABOUT_ID), current: false},
    {name: 'Sectors', href: getId(SECTOR_ID), current: false},
    {name: 'Gallery', href: getId(GALLERY_ID), current: false},
    {name: 'Contact', href: getId(CONTACT_ID), current: false}
]