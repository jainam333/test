import React from "react";

import { Img, Text, Line, SelectBox, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const PlanDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-proximanova items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[232px]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col items-start justify-start py-[77px] shadow-bs1 w-[100%]">
                <Img
                  src="images/img_group301311.png"
                  className="h-[65px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[51px] object-cover sm:w-[100%] w-[auto]"
                  alt="Group30131"
                />
                <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[29px] mt-[70px] md:w-[100%] sm:w-[100%] w-[55%]">
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Text>
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/dashboardtwo")}
                  >
                    Organisation details
                  </Text>
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/poddetails")}
                  >
                    Pod details
                  </Text>
                </div>
                <div className="bg-teal_50 flex flex-row gap-[24px] items-center justify-start mt-[16px] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Line className="bg-blue_701 h-[48px] w-[5px]" />
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Plan details
                  </Text>
                </div>
                <Text
                  className="font-medium mb-[222px] md:ml-[0] sm:ml-[0] ml-[29px] mt-[14px] text-black_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Settings
                </Text>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-end justify-start md:mt-[0] sm:mt-[0] mt-[26px] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-row gap-[9px] items-center justify-start ml-[auto] w-[auto]">
              <Img
                src="images/img_user.svg"
                className="h-[29px] w-[29px]"
                alt="user"
              />
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Jainam Mehta
              </Text>
              <Img
                src="images/img_group30134.svg"
                className="h-[5px] w-[11px]"
                alt="Group30134"
              />
            </div>
            <Line className="bg-gray_300 h-[1px] mt-[22px] w-[100%]" />
            <div className="flex flex-col gap-[14px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[93%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_902 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Select Pod:
                </Text>
                <SelectBox
                  className="sm:flex-1 font-normal leading-[normal] sm:ml-[0] ml-[12px] not-italic pr-[13px] text-[16px] text-gray_902 text-left sm:w-[100%] w-[16%]"
                  placeholderClassName="text-gray_902"
                  name="price"
                  placeholder="AMD-POD1"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[6px] w-[11px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                ></SelectBox>
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[114px] sm:ml-[0] ml-[610px] text-[14px] text-center text-white_A700 w-[auto]"
                  onClick={() => navigate("/addplan")}
                  shape="CircleBorder20"
                >
                  ADD PLAN
                </Button>
              </div>
              <div className="h-[235px] md:h-[847px] sm:h-[847px] relative w-[100%]">
                <div className="h-[235px] md:h-[847px] sm:h-[847px] m-[auto] w-[100%]">
                  <div className="absolute bg-white_A700 border border-gray_301 border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[18px] rounded-radius4 w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[11%]">
                        <Text
                          className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          PLAN name
                        </Text>
                        <Text
                          className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          MICRO
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          MINI
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          POWER
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[52px] md:w-[100%] sm:w-[100%] w-[23%]">
                        <Text
                          className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          DESCRIPTION
                        </Text>
                        <Text
                          className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          20 minutes of rest and relax
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          10 minutes of rest and relax
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          60 minutes of rest and relax
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[53px] grid grid-cols-2 md:ml-[0] sm:ml-[0] ml-[46px] md:w-[100%] sm:w-[100%] w-[30%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ORIGINAL PRICE
                          </Text>
                          <div className="flex flex-col gap-[33px] items-center justify-start md:w-[100%] sm:w-[100%] w-[27%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $39
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $29
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $49
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_902 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            DISCOUNTED
                          </Text>
                          <div className="flex flex-col gap-[33px] items-center justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $19
                            </Text>
                            <Text
                              className="font-normal h-[19px] not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $9
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $29
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col gap-[49px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[200px] md:w-[100%] sm:w-[100%] w-[7%]">
                        <Text
                          className="font-semibold text-gray_902 text-left uppercase w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MANAGE
                        </Text>
                        <div className="flex flex-col font-inter items-center justify-start md:w-[100%] sm:w-[100%] w-[25%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            ...
                          </Text>
                          <Text
                            className="font-normal mt-[37px] not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            ...
                          </Text>
                          <Text
                            className="font-normal mt-[34px] not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            ...
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-gray_300 h-[1px] inset-x-[0] mx-[auto] top-[23%] w-[100%]" />
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[15%] w-[11%]">
                  <Text
                    className="font-semibold text-gray_902 text-left uppercase w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    PLAN STATUS
                  </Text>
                  <div className="bg-green_A100 border border-green_400 border-solid flex flex-row gap-[6px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[9px] mt-[46px] px-[11px] py-[5px] rounded-radius13 w-[auto]">
                    <div className="bg-green_700 h-[8px] rounded-radius50 w-[8px]"></div>
                    <Text
                      className="font-semibold text-green_701 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ACTIVE
                    </Text>
                  </div>
                  <div className="bg-green_A100 border border-green_400 border-solid flex flex-row gap-[6px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[9px] mt-[25px] px-[11px] py-[5px] rounded-radius13 w-[auto]">
                    <div className="bg-green_700 h-[8px] rounded-radius50 w-[8px]"></div>
                    <Text
                      className="font-semibold text-green_701 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ACTIVE
                    </Text>
                  </div>
                  <div className="bg-red_100 border border-red_300 border-solid flex flex-row gap-[6px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[22px] px-[11px] py-[5px] rounded-radius13 w-[auto]">
                    <div className="bg-red_600 h-[8px] rounded-radius50 w-[8px]"></div>
                    <Text
                      className="font-semibold text-left text-red_601 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      INACTIVE
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetailsPage;
