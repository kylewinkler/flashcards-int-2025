import type { ReactNode } from "react";
import Row, { type ColSizes } from "../elements/elements.types";
import Col from "../elements/Col";
import { Button } from "../elements/Button";

export type FormFieldValueType = string
export type FormFieldType = 'text' | 'password'

export interface FormFieldI {
  label: ReactNode | string;
  value: FormFieldValueType;
  onChange: (val: FormFieldValueType) => void;
  type?: FormFieldType;
  mdCol?: ColSizes;
}

interface FormProps {
  title?: ReactNode;
  formFields: FormFieldI[];
  onCancel?: () => void;
  onSubmit: () => void;
  buttonLabel?: string | ReactNode;
}

const Form = ({ title, formFields, onSubmit, buttonLabel }: FormProps) => {

  return (
    <div>
      {title && <h2>{title}</h2>}
      <Row>
        {formFields.map((field, i) => (
          <Col key={i} md={field.mdCol ?? 12}>
            <div>{field.label}</div>
            <input value={field.value} onChange={e => field.onChange(e.target.value)} type={field.type ?? 'text'} />
          </Col>
        ))}
      </Row>
      <Row>
        <Button onClick={onSubmit}>{buttonLabel ?? 'Submit'}</Button>
      </Row>
    </div>
  )
}

export default Form;