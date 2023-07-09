export type Blog = {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  category?: Category;
};

export type Category = {
  name: string;
};
