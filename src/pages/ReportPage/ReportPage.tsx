import { memo, useCallback, useEffect, useMemo, useState } from "react";
import TemplatePage from "../TemplatePage";
import { REPORT_STEPS } from "../../shared/types/enums";
import { SideMenu } from "../../shared/ui/Menu";
import type { IReport } from "../../shared/types/report";
import { useMainInfo } from "./steps/MainInfo/MainInfo";
import { useServiceQuality } from "./steps/ServiceQuality/ServiceQuality";
import { useGeneralImpressions } from "./steps/GeneralImpressions/GeneralImpressions";
import { useNavigate, useParams } from "react-router-dom";
import {
  createReport as createReportApi,
  getReportById,
} from "./service/ReportService";

export const ReportPage = memo(() => {
  const { chatId, reportId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<IReport>({
    id: "",
    date: "",
    employees: "",
    appearance: "",
    greetings: "",
    initiative: "",
    politeness: "",
    observations: "",
    currentStep: REPORT_STEPS.MAIN_INFO,
  });

  const createReport = async () => {
    if (chatId) {
      const response = await createReportApi(form, chatId);
      if (response) {
        navigate(`/orders/${chatId}`);
      }
    }
  };

  const getReport = async () => {
    if (reportId) {
      setForm({ ...form, ...(await getReportById(reportId)).data });
    }
  };

  const mainInfo = useMainInfo({ form, onChange: setForm });
  const serviceQuality = useServiceQuality({ form, onChange: setForm });
  const generalImpressions = useGeneralImpressions({
    form,
    onChange: setForm,
    createReport,
  });

  const mainContent = useMemo(() => {
    switch (form.currentStep) {
      case REPORT_STEPS.SERVICE_QUALITY:
        return serviceQuality;
      case REPORT_STEPS.GENERAL_IMPRESSIONS:
        return generalImpressions;
      default:
        return mainInfo;
    }
  }, [form, setForm, mainInfo, serviceQuality, generalImpressions]);

  useEffect(() => {
    getReport();
  }, []);

  const sideContent = useMemo(() => {
    return (
      <SideMenu
        activeElement={form.currentStep}
        onClick={(id) => setForm({ ...form, currentStep: id as REPORT_STEPS })}
        clickable
        elements={[
          { id: REPORT_STEPS.MAIN_INFO, title: "ОБЩИЕ СВЕДЕНИЯ" },
          { id: REPORT_STEPS.SERVICE_QUALITY, title: "КАЧЕСТВО СЕРВИСА" },
          { id: REPORT_STEPS.GENERAL_IMPRESSIONS, title: "ОБЩИЕ ВПЕЧАТЛЕНИЯ" },
        ]}
      />
    );
  }, [form]);

  return (
    <TemplatePage
      sideContent={{
        header: <></>,
        content: sideContent,
      }}
      mainContent={mainContent}
    />
  );
});

export default ReportPage;
