export interface DictionaryItem {
    Hero: {
      title: string;
      description: string;
      getStartedButton: string;
      exploreButton: string;
    };
    Services: ServiceItem[];
    Navlinks: {
      home: string;
      work: string;
      prices: string;
      store: string;
      resources: string;
    };
}
export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    details: string;
}