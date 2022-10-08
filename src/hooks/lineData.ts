import { ref } from "vue";
import { ChartData } from "chart.js";
import { Population, Prefecture } from "../types/resasApi";

// 総人口-都道府県のグラフデータ作成に必要な関数と変数群（hooks）
export const usePopulationByYearLineData = () => {
  const targetYears = [1980, 1990, 2000, 2010, 2020];
  const lineData = ref<ChartData<"line">>({
    labels: targetYears,
    datasets: []
  });

  const addDataset = (pref: Prefecture, populations: Population[]) => {
    const exsits = lineData.value.datasets.find(
      (dataset) => dataset.label === pref.prefName
    );
    if (!exsits) {
      const newDataset = generateDataset(pref, populations);
      lineData.value.datasets.push(newDataset);
    }
  };

  const removeDataset = (pref: Prefecture) => {
    const newDatasets = lineData.value.datasets.filter(
      (dataset) => dataset.label !== pref.prefName
    );
    lineData.value.datasets = newDatasets;
  };

  // private
  const generateDataset = (pref: Prefecture, populations: Population[]) => {
    const targetYearPopulations = populations.filter((pop) =>
      targetYears.includes(pop.year)
    );

    const newDataset = {
      label: pref.prefName,
      data: targetYearPopulations.map((pop) => pop.value),
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`
    };
    return newDataset;
  };

  return {
    lineData,
    addDataset,
    removeDataset
  };
};
