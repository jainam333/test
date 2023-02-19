import { SelectBox } from "components";
export default {
  title: "urban_s_application1/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder5",
  variant: "OutlineGray300",
  size: "sm",
  className: "w-[300px]",
};
