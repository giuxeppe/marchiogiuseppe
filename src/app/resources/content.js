import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Giuseppe',
    lastName:  'Marchio',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Dott. in Ingegneria Informatica e Automatica',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Rome',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Italian', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/giuseppe.marchioo/',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/giuseppe_marchio/',
    },
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/giuxeppe',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/giuseppe-marchio/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Il mio sito web Portfolio che mostra il mio lavoro da ${person.role}`,
    headline: <>{person.name} - {person.role}</>,
    subline: <>Laureato triennale in Ingegneria Informatica e Automatica, studente di laurea magistrale in Computer Science in <InlineCode>SAPIENZA - UNIVERSITA' DI ROMA</InlineCode>.</>
}

const about = {
    label: 'Chi sono',
    title: `${person.name} - Chi sono`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduzione',
        description: <>Sono laureato in Ingegneria Informatica e Automatica e attualmente iscritto al corso di laurea magistrale in Computer Science - Informatica (svolto in lingua inglese) in Sapienza Università di Roma, con la passione della tecnologia, del web e del mondo IT. Ho sviluppato diversi progetti scritti in linguaggi moderni.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: '',
                timeframe: 'XXXX - Present',
                role: 'XXXX Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studi',
        institutions: [
            {
                name: 'Università degli Studi di Roma "Sapienza"',
                description: <>Laurea triennale in Ingegneria Informatica e Automatica - Votazione 100/110</>,
            },
            {
                name: 'Istituto Tecnico Industriale "E. Scalfaro" - Catanzaro',
                description: <>Diploma in Informatica - Votazione 100/100</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Progetti',
    title: `${person.name} - Progetti`,
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };