import type { IFormData } from "../../../../shared/types/formData";

export const mainData: IFormData = {
  fields: [
    {
      title: "ДАТА ВИЗИТА",
      label: "Введите дату",
      key: "date",
    },
    {
      title: "КОЛИЧЕСТВО СОТРУДНИКОВ В ЗАЛЕ",
      label: "Введите количество человек",
      key: "employees",
    },
    {
      title: "ВНЕШНИЙ ВИД ПЕРСОНАЛА",
      label: "Оцените форму персонала",
      key: "appearance",
    },
  ],
};
