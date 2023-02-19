import React from "react";

import { Text, SelectBox, Img, Button, List } from "components";

const HomeOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[25px] items-start justify-between max-w-[1251px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden w-[232px]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-bluegray_102 flex flex-col items-start justify-start pb-[481px] w-[100%]">
                <div className="bg-gray_400 flex flex-col items-center justify-end p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <Text
                    className="font-semibold mt-[23px] text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    URBANNAPS
                  </Text>
                </div>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[30px] mt-[28px] not-italic text-black_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Pod details
                </Text>
                <Text
                  className="bg-gray_400 font-normal h-[48px] mt-[10px] not-italic pl-[30px] pr-[35px] sm:px-[20px] py-[13px] text-black_900 text-left w-[232px]"
                  as="h2"
                  variant="h2"
                >
                  Plan details
                </Text>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[66px] w-[100%]">
            <Text
              className="font-semibold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Location: XYZ Airport / 1st floor, AMD
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[64px] w-[100%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                POD:
              </Text>
              <SelectBox
                className="sm:flex-1 font-semibold leading-[normal] sm:ml-[0] ml-[11px] text-[18px] text-black_900 text-left sm:w-[100%] w-[16%]"
                placeholderClassName="text-black_900"
                name="GroupTwentyFive"
                placeholder="POD1"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="h-[8px] mr-[15px] w-[17px]"
                    alt="arrow_down"
                  />
                }
                variant="FillBluegray102"
              ></SelectBox>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[152px] sm:ml-[0] ml-[635px] text-[18px] text-black_900 text-center w-[auto]"
                variant="FillBluegray102"
              >
                ADD PLAN
              </Button>
            </div>
            <div className="bg-gray_200 flex flex-col items-center justify-start mt-[20px] p-[27px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[11px] md:w-[100%] sm:w-[100%] w-[98%]">
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Plan name
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[79px] text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Plan desc
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[252px] text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Plan price
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[98px] text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Plan status
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[53px] text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Manage
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mr-[29px] my-[0] md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Micro
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[122px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      10 minutes of rest and relax
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[101px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $19
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[153px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Active
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[123px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      ...
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mr-[29px] my-[0] md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Mini
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[134px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      10 minutes of rest and relax
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[101px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $29
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[151px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Active
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[123px] md:mt-[0] sm:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      ...
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mr-[29px] my-[0] md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Power
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      10 minutes of rest and relax
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[101px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $39
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[150px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Inactive
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[110px] md:mt-[0] sm:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      ...
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOnePage;
