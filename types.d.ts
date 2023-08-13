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
  client: string;
  role: string;
  featured: boolean;
  image: string;
  tags: string[];
};

type Project = {
  meta: ProjectMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

// Type for the blog post metadata
type PostMeta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};
