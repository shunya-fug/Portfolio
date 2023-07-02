export type Blog = {
  id: string;
  title: string;
  content: string;
  category?: Category;
};

export type Category = {
  name: string;
};
