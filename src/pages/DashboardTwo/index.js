import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const DashboardTwoPage = () => {
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
                  alt="Group301311"
                />
                <Text
                  className="common-pointer font-medium md:ml-[0] sm:ml-[0] ml-[29px] mt-[71px] text-black_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Text>
                <div className="bg-teal_50 flex flex-row gap-[24px] items-center justify-start mt-[16px] sm:pr-[20px] md:pr-[40px] pr-[79px] w-[100%]">
                  <Line className="bg-blue_701 h-[48px] w-[5px]" />
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Organisation details
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[222px] md:ml-[0] sm:ml-[0] ml-[29px] mt-[15px] md:w-[100%] sm:w-[100%] w-[33%]">
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/poddetails")}
                  >
                    Pod details
                  </Text>
                  <Text
                    className="common-pointer font-medium mt-[31px] text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/plandetails")}
                  >
                    Plan details
                  </Text>
                  <Text
                    className="font-medium mt-[30px] text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[26px] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-end justify-between md:w-[100%] sm:w-[100%] w-[93%]">
              <Text
                className="font-medium mt-[7px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                All Organisations
              </Text>
              <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
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
                  Urban Naps
                </Text>
                <Img
                  src="images/img_group30134.svg"
                  className="h-[5px] w-[11px]"
                  alt="Group30134"
                />
              </div>
            </div>
            <Line className="bg-gray_300 h-[1px] mt-[22px] w-[100%]" />
            <div className="flex flex-col gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[93%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                <Input
                  className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                  wrapClassName="mb-[3px] sm:w-[100%] w-[auto]"
                  name="Frame30143"
                  placeholder="Search here"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[178px] text-[14px] text-center text-white_A700 w-[auto]"
                  onClick={() => navigate("/dashboardone")}
                  shape="CircleBorder20"
                >
                  ADD ORGANISATION
                </Button>
              </div>
              <div className="bg-white_A700 border border-gray_301 border-solid sm:h-[1350px] h-[350px] md:h-[642px] py-[16px] relative rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold ml-[auto] mr-[33px] text-black_900 text-left uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  MAnage
                </Text>
                <div className="absolute sm:h-[1350px] h-[295px] md:h-[642px] inset-x-[0] mx-[auto] top-[5%] w-[100%]">
                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[3%] my-[auto] w-[83%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[55px] sm:gap-[55px] items-center justify-between w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 grid-cols-3 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            date
                          </Text>
                          <Text
                            className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            10/02/2023
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            18/04/2022
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            16/03/2022
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            26/06/2021
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            15/03/2021
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Registered organisations
                          </Text>
                          <Text
                            className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Pune - Office workspace
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Bombay Airport - International
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Organisation in France
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Ahmedabad Airport - Domestic
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            The address - co working space
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Pune, India
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Bombay, India
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            City name, France
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Ahmedabad, India
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Ahmedabad, India
                          </Text>
                        </div>
                      </List>
                      <List
                        className="sm:flex-col flex-row gap-[49px] grid grid-cols-2 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Total PODS
                          </Text>
                          <div className="flex flex-col gap-[36px] items-start justify-start md:w-[100%] sm:w-[100%] w-[13%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              3
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              2
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              3
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              5
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              2
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-black_900 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Details
                          </Text>
                          <div className="flex flex-col gap-[36px] items-center justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                            <a
                              className="font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                              href="#"
                            >
                              View
                            </a>
                            <a
                              className="font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                              href="#"
                            >
                              View
                            </a>
                            <a
                              className="font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                              href="#"
                            >
                              View
                            </a>
                            <a
                              className="font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                              href="#"
                            >
                              View
                            </a>
                            <a
                              className="font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                              href="#"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bottom-[2%] flex flex-col font-inter gap-[30px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[899px] md:w-[100%] sm:w-[100%] w-[3%]">
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
                        className="font-normal mt-[38px] not-italic text-black_900 text-left w-[auto]"
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
                      <Text
                        className="font-normal mt-[40px] not-italic text-black_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        ...
                      </Text>
                    </div>
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

export default DashboardTwoPage;
