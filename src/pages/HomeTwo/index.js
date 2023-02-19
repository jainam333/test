import React from "react";

import { Text, Button } from "components";

const HomeTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[143px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-gray_200 flex flex-col items-center justify-end p-[33px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[61%]">
          <div className="flex flex-col items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[97%]">
            <div className="flex sm:flex-col flex-row sm:gap-[45px] items-center justify-between w-[100%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Plan name
              </Text>
              <div className="bg-bluegray_103 h-[38px] w-[auto]"></div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between mt-[25px] w-[100%]">
              <Text
                className="font-semibold sm:mt-[0] mt-[8px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Description
              </Text>
              <div className="bg-bluegray_103 h-[86px] w-[auto]"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[25px] w-[100%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Original Price
              </Text>
              <div className="bg-bluegray_103 h-[38px] w-[auto]"></div>
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Discounted Price
              </Text>
              <div className="bg-bluegray_103 h-[38px] w-[auto]"></div>
            </div>
            <div className="flex flex-row gap-[32px] items-center justify-end ml-[auto] mt-[107px] md:w-[100%] sm:w-[100%] w-[40%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                CANCEL
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[97px] text-[18px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="FillBluegray103"
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoPage;
