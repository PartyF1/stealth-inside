import type { IFormData } from "../../shared/types/formData";

export const offerDataField: IFormData = {
  fields: [
    {
      title: "Название",
      label: "Введите название",
      key: "name",
    },
    {
      title: "Описание",
      label: "Введите описание",
      key: "description",
    },
    {
      title: "Стоимость",
      label: "Сколько вы готовы заплатить за услугу",
      key: "cost",
    },
    {
      title: "Локация",
      label: "Введите адрес",
      key: "location",
    },
    {
      title: "Условия",
      label: "Какие условия вы готовы предоставить работнику",
      key: "conditions",
    },
  ],
};
