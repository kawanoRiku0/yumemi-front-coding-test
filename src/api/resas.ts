import { ref, watchEffect } from "vue";
import { useFetch } from "../hooks/fetcher";
import { GetPrefectures, Prefecture } from "../types/resasApi";

const requestOptions = {
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY
  }
};

// 都道府県一覧を取得する
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
