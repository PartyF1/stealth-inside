import { DefaultContent } from "../../../components/DefaultContent";
import type { IFormData } from "../../types/formData";
import { Input } from "../Input";

export interface IDefaultFormProps<T> {
  formData: IFormData;
  onChange: (value: T) => void;
  form: T;
}

export const DefaultForm = <T,>({
  formData,
  onChange,
  form,
}: IDefaultFormProps<T>) => {
  const handleOnChange = (value: string, key: string) => {
    onChange({
      ...(form as T & Record<string, unknown>),
      [key]: value,
    } as T);
  };

  return (
    <DefaultContent title={formData.title}>
      {formData.fields.map((field) => (
        <Input
          key={field.key}
          onChange={(value) => handleOnChange(value, field.key)}
          value={String((form as Record<string, unknown>)?.[field.key] ?? "")}
          placeholder={field.label}
          type={field?.type}
        />
      ))}
    </DefaultContent>
  );
};
