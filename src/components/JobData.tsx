interface JobListing {
    id: number;
    title: string;
    company: string;
    location: string;
    keywords: string[];
    description: string;
}



const mockJobListings: JobListing[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Google",
        location: "Remote",
        keywords: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        company: "META",
        location: "New York",
        keywords: [
          "React",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Web Development",
          "UI/UX",
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      },
      {
        id: 3,
        title: "Data Scientist",
        company: "Data Science Inc.",
        location: "Washington D.C.",
        keywords: ["Python", "R", "SQL", "Machine Learning", "Data Analysis"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      },
      {
        id: 4,
        title: "DevOps Engineer",
        company: "Amazon",
        location: "Seattle",
        keywords: ["AWS", "Python", "Docker", "Kubernetes", "CI/CD"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      },
      {
        id: 5,
        title: "Software Engineer",
        company: "Google",
        location: "Remote",
        keywords: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",

      },
      {
        id: 6,
        title: "Software Engineer Intern",
        company: "META",
        location: "New York",
        keywords: ["React", "TypeScript", "Node.js", "JavaScript", "Web Development", "UI/UX"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",

      },
      {
        id: 7,
        title: "Data Scientist",
        company: "Data Science Inc.",
        location: "Washington D.C.",
        keywords: ["Python", "R", "SQL", "Machine Learning", "Data Analysis"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      },
      {
        id: 8,
        title: "DevOps Engineer",
        company: "Amazon",
        location: "Seattle",
        keywords: ["AWS", "Python", "Docker", "Kubernetes", "CI/CD"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      },
      {
        id: 9,
        title: "Software Engineer",
        company: "Google",
        location: "Remote",
        keywords: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vita",
      }
]


export default mockJobListings;