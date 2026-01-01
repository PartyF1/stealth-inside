import api from "../../../shared/lib/axios";
import type { IReport } from "../../../shared/types/report";

export const createReport = async (form: IReport, chatId: string) => {
  const { id, currentStep, ...rightForm } = form;
  const response = await api.post("/reports", {
    chatId,
    ...rightForm,
  });
  return response.data;
};

export const getReportByChatId = async (chatId: string) => {
  return await api.get(`/reports?chatId=${chatId}`);
};

export const getReportById = async (reportId: string) => {
  return await api.get(`/reports/${reportId}`);
};
