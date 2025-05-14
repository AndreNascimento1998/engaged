type Episodes = {
  id: string;
  name: string;
  __typename: string;
};

export type Character = {
  episode: Episodes[];
  id: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  __typename: string;
};

export type PaginationInfo = {
  count: number;
  next: number;
  pages: number;
  prev: number;
  __typename: string;
};
