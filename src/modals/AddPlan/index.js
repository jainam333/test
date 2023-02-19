import React from "react";
import ModalProvider from "react-modal";

import { Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const AddPlanModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[37%]"
        overlayClassName="bg-black_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mb-[31px] md:px-[20px] sm:px-[20px] py-[20px] rounded-radius10 w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="font-semibold text-gray_902 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Add plan details
              </Text>
              <Line className="bg-gray_300 h-[1px] mt-[13px] w-[100%]" />
              <div className="flex flex-col items-start justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[88%]">
                <div className="flex sm:flex-col flex-row gap-[28px] items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-gray_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Plan name:
                  </Text>
                  <Input
                    className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[312px]"
                    name="FrameOne"
                    placeholder="Write here"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[97px] mt-[5px] text-gray_701 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  No more than 10 character
                </Text>
                <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-between mt-[26px] w-[100%]">
                  <Text
                    className="font-medium sm:mt-[0] mt-[10px] text-gray_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Description:
                  </Text>
                  <Input
                    className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[312px]"
                    name="FrameTwo"
                    placeholder="Write here"
                    size="md"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[97px] mt-[5px] text-gray_701 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  No more than 40 character
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[31px] w-[100%]">
                  <Text
                    className="font-medium text-gray_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Original price:
                  </Text>
                  <Input
                    className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[auto]"
                    name="FrameThree"
                    placeholder="Enter here"
                    variant="OutlineBluegray100"
                  ></Input>
                  <Text
                    className="font-medium text-gray_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Discounted:
                  </Text>
                  <Input
                    className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[auto]"
                    name="FrameFour"
                    placeholder="Enter here"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-row gap-[28px] items-center justify-end ml-[auto] mt-[41px] md:w-[100%] sm:w-[100%] w-[47%]">
                  <Text
                    className="common-pointer font-medium text-gray_902 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                    onClick={() => navigate("/plandetails")}
                  >
                    Cancel
                  </Text>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[114px] text-[14px] text-center text-white_A700 w-[auto]"
                    shape="CircleBorder20"
                  >
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddPlanModal;
