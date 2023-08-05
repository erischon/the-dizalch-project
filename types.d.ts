type ProjectMeta = {
  id: string;
  title: string;
  creationDate: string;
  lastUpdated: string;
  description: string;
  type: string;
  liveUrl: string;
  codeUrl: string;
  caseStudyUrl: string;
  role: string;
  featured: boolean;
  image: string;
  tags: string[];
};

type Project = {
  meta: ProjectMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
