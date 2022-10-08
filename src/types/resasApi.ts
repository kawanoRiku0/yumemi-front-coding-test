export type GetPrefectures = {
  message: string | null;
  result: Prefecture[];
};

export type Prefecture = {
  prefCode: number;
  prefName: string;
};
