import { TextArea } from "components";
export default {
  title: "urban_s_application1/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder4",
  variant: "OutlineGray300",
  size: "sm",
  placeholder: "placeholder",
};
