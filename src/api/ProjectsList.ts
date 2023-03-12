//INTERFACE DEFINITIONS
export interface IProjects {
  headerText: string;
  bodyText: string;
  url?: string;
  image?: string;
  stack?: string[];
}

export const ProjectsList: IProjects[] = [
  {
    headerText: "Toy Robot",
    bodyText:
      "Sample project built for exhibition purposes. Features a basic adventure game with your trusty robot.",
  },
  {
    headerText: "Restaurant",
    bodyText:
      "Sample project built for exhibition purposes. Features a store and checkout system with user authentication.",
  },
  {
    headerText: "Client Portfolio",
    bodyText:
      "Sample project built for exhibition purposes. A portfolio website for client featuring the most aethetically pleasing UI.",
  },
  {
    headerText: "Map",
    bodyText:
      "Sample project built for exhibition purposes. The map highlights locations including local stores and pubs near you at first glance!",
  },
];
