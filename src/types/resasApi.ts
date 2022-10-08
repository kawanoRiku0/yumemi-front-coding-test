export type GetPrefectures = {
  message: string | null;
  result: Prefecture[];
};

export type GetDemographics = {
  message: string | null;
  result: Demographic;
};

export type Demographic = {
  boundaryYear: number;
  data: {
    label: string;
    data: Population[];
  }[];
};

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type Population = {
  year: number;
  value: number;
  rate?: number;
};
