import type { ReactNode } from "react";
import styled from "styled-components"
import Row, { type ColSizes } from "../elements/elements.types";
import Col from "../elements/Col";
import { Button } from "../elements/Button";

const FormContainer = styled.div`
  // display: flex;
  max-width: 800px;
`;

export type FormFielValueType = string

export interface FormFieldI {
  label: ReactNode | string;
  value: FormFielValueType;
  onChange: (val: FormFielValueType) => void;
  mdCol?: ColSizes;
}

interface FormProps {
  title?: ReactNode;
  formFields: FormFieldI[];
  onCancel?: () => void;
  onSubmit: () => void;
}

const Form = ({ title, formFields, onSubmit }: FormProps) => {

  return (
    <FormContainer>
      {title && <h2>{title}</h2>}
      <Row>
        {formFields.map((field, i) => (
          <Col key={i} md={field.mdCol ?? 12}>
            <div>{field.label}</div>
            <input value={field.value} onChange={e => field.onChange(e.target.value)} />
          </Col>
        ))}
      </Row>
      <Row>
        <Button onClick={onSubmit}>Submit</Button>
      </Row>
    </FormContainer>
  )
}

export default Form;