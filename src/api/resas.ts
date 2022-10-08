import { ref, watchEffect } from "vue";
import { useFetch } from "../hooks/fetcher";
import { GetDemographics, GetPrefectures, Prefecture } from "../types/resasApi";

const requestOptions = {
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY
  }
};

// 都道府県一覧を取得するhooks
// https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
export const useGetPrefectures = () => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  const prefectures = ref<Prefecture[]>([]);
  const { data, loading, error } = useFetch<GetPrefectures>(
    url,
    requestOptions
  );

  watchEffect(() => {
    prefectures.value = data?.value?.result ?? [];
  });

  return {
    prefectures,
    loading,
    error
  };
};

// 指定した都道府県の人口構成を取得する関数
// https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export const getDemographics = async (prefCode: number) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;

  try {
    const res = await fetch(url, requestOptions);
    const data: Promise<GetDemographics> = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// 都道府県の人口構成をAPIから取得し、総人口の人口推移のみを返す関数
export const getTotalPopulations = async (prefCode: number) => {
  const demographic = await getDemographics(prefCode);
  const populations = demographic?.result?.data.find(
    (data) => data.label === "総人口"
  )?.data;
  return populations;
};
