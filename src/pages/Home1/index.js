import React from "react";

import { Text, List } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[25px] items-start justify-between max-w-[1251px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden w-[232px]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-bluegray_102 flex flex-col items-start justify-start pb-[494px] w-[100%]">
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
                  className="bg-gray_400 font-normal h-[48px] mt-[16px] not-italic pl-[30px] pr-[35px] sm:px-[20px] py-[13px] text-black_900 text-left w-[232px]"
                  as="h2"
                  variant="h2"
                >
                  Pod details
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[30px] mt-[9px] not-italic text-black_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Plan details
                </Text>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[37px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[66px] w-[100%]">
            <Text
              className="font-semibold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Location: XYZ Airport
            </Text>
            <div className="bg-gray_200 flex flex-col items-start justify-start p-[25px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-start justify-start mb-[13px] mt-[2px] md:w-[100%] sm:w-[100%] w-[63%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Pod name
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[92px] text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Total Plan
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[78px] text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Location
                  </Text>
                </div>
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      POD1
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[133px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      3 plans
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[102px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      1st floor, AMD
                    </Text>
                    <a
                      className="font-normal sm:ml-[0] ml-[85px] not-italic text-[18px] text-black_900 text-left underline w-[auto]"
                      href="#"
                    >
                      View
                    </a>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      POD2
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[130px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      2 plans
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[102px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      3rd floor, AMD
                    </Text>
                    <a
                      className="font-normal sm:ml-[0] ml-[80px] not-italic text-[18px] text-black_900 text-left underline w-[auto]"
                      href="#"
                    >
                      View
                    </a>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      POD3
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[129px] sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      2 plans
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[102px] sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      2nd floor, AMD
                    </Text>
                    <a
                      className="font-normal mb-[4px] sm:ml-[0] ml-[77px] not-italic text-[18px] text-black_900 text-left underline w-[auto]"
                      href="#"
                    >
                      View
                    </a>
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

export default Home1Page;
