import React from "react";
import { useFormikContext } from "formik";

import Button from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
