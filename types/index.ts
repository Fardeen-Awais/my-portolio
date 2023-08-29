export interface HeroProps {
    Herodata: {
      title: string;
      description: string;
      getStartedButton: string;
      exploreButton: string;
    };
}

export interface ServiceProps {
  servicejson: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
}