export type TeamInfoType = {
  id: string;
  name: string;
  title: string;
  imgSrc: string;
  bio: string[];
  whyTitle: string;
  whyText: string;
};

export const nunoInfo: TeamInfoType = {
  id: "nuno",
  name: "Nuno Moura Santos",
  title: "Drummer / CEO",
  imgSrc:
    "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-nuno_pkx9b6.png",
  bio: [
    "I’m a musician, songwriter, computer engineer, \
        and entrepreneur, driven by a passion for technology \
        and a lifelong love of music. I studied jazz at the \
        Hot Club in Lisbon, met my first band in the registration \
        office of FCUL (my computer engineering university), \
        and worked as a session drummer for countless gigs and recording sessions.",
    "I’m also a founding member of the bands Os Golpes, The Mighty Terns, João Só e \
    os Abandonados, Madrepaz, and Quarter Swiss. In 2017, \
    I launched Faniak, my first music startup.",
  ],
  whyTitle: "Band logistics and copyrights management",
  whyText:
    "One of my bands ended in a clash of egos. All the others because of the amount \
  of management work no one had time (or wanted really!) to do. We don’t promise to make \
  management as fun as making music... but we’ll try!",
};

export const alejoInfo: TeamInfoType = {
  id: "alejo",
  name: "Alejandro Forero",
  title: "Keys / CTO",
  imgSrc:
    "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-alejandro_zuq8oz.png",
  bio: [
    "I’m a musician from Bogotá, Colombia, and the founder of La Distritofónica, a music collective \
    that has released around 40 albums. I’m also a member of the internationally acclaimed Meridian Brothers. \
    Throughout my career, I’ve navigated the complexities of managing bands and collectives—handling schedules, \
    logistics, copyrights, and endless administrative tasks that often take me away from the creative process.",
    "Looking for a way to solve these challenges, I turned to web development, building tools to streamline the \
    management side of my music projects. What began as a necessity evolved into a passion—I’m now a dedicated \
    software developer, creating solutions that help independent musicians overcome the daily struggles of managing \
    their careers.",
  ],
  whyTitle: "Creative Freedom",
  whyText:
    "As an experimental jazz musician at the beginning of my career, there were no managers, nor was I interested \
    in working with them. I took on the task of managing myself, but I never imagined it would involve so much \
    work. With the help of AI, it is now possible to handle this work in a timely manner without abandoning the creative side.",
};

export const garryInfo: TeamInfoType = {
  id: "garry",
  name: "Garry McLanachan",
  title: "Bass Guitar / CCO",
  imgSrc:
    "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-garry_dwji3r.png",
  bio: [
    "For over 20 years, I’ve worked across diverse areas of design, from animation and illustration to branding, \
    advertising, and even postage stamps. As a lifelong musician, I’ve always written songs and riffs, but recently \
    began performing with Quarter Swiss, a band I co-founded with my partner Anna and friend/business partner \
    Nuno. I’m passionate about creative expression and driven to create.",
  ],
  whyTitle: "A centralised hub.",
  whyText:
    "I need a place where myself, my band members and any contributors can plan out our bands next moves. Where \
    guidance is available and boring tasks are taken care of so I can carry on with the creative side of being a musician.",
};
