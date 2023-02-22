const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Red Hot Chili Peppers Live',
        description:
            "Acclaimed rock band Red Hot Chili Peppers announced their 2023 Tour, in support of their two #1 studio albums that were released in 2022, Unlimited Love and Return of the Dream Canteen.",
        location: 'BC place, Vancouver',
        date: '2023-03-29',
        image: 'images/chilli.avif',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e4',
        title: 'Blink 182 Live',
        description:
            "Since their humble beginnings nearly thirty years ago, when they started playing in a San Diego garage, 'blink-182' have sold over fifty-million albums worldwide and rocked audiences from Adelaide to Zurich having become one of the defining rock bands of their generation",
        location: 'Rogers Arena, Vancouver, BC',
        date: '2023-06-27',
        image: 'images/blinnk.webp',
        isFeatured: true,
    },
    {
        id: 'e5',
        title: 'Networking for introverts',
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e6',
        title: 'Madonna Live',
        description:
            "Madonna launched her debut tour in 1985 — The Virgin Tour — in the United States and Canada. Shortly thereafter, she toured the world for the first time, embarking in 1987 in support of Who's That Girl.",
        location: 'Rogers Arena, Vancouver, BC',
        date: '2023-07-12',
        image: 'images/madonna.jpg',
        isFeatured: false,
    },
    {
        id: 'e7',
        title: 'Foo Fighters Live',
        description:
            "The American rock band formed in Seattle in 1994. Foo Fighters was initially formed as a one-man project by former Nirvana drummer Dave Grohl. ",
        location: 'Asbury Park, NJ',
        date: '2021-09-16',
        image: 'images/foo.jpg',
        isFeatured: true,
    },
    {
        id: 'e8',
        title: 'Green Day Live',
        description:
            "Green Day the hugely popular and influential American punk rock band that have grown to become one of the most successful modern rock bands of their generation, hailing from East Bay, California.",
        location: 'Tempe Beach Park, Tempe, AZ',
        date: '2023-02-25',
        image: 'images/green.webp',
        isFeatured: true,
    },

];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}