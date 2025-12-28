import type { IFormData } from "../../../../shared/types/formData";

export const serviceData: IFormData = {
  fields: [
    {
      title: "КАК ВАС ЗАМЕТИЛИ И ПРИВЕТСТВОВАЛИ?",
      label: "Введите оценку от 1 до 10",
      key: "greetings",
    },
    {
      title: "ОЦЕНИТЕ ИНИЦИАТИВНОСТЬ СОТРУДНИКА",
      label: "Помог ли вам сотрудник?",
      key: "initiative",
    },
    {
      title: "ВЕЖЛИВОСТЬ И КОРРЕКТНОСТЬ",
      label: "Введите оценку от 1 до 10",
      key: "politeness",
    },
  ],
};
