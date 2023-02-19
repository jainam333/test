import React from "react";

import { Img, Text, Line, SelectBox, List } from "components";
import { useNavigate } from "react-router-dom";

const PodDetailsPage = () => {
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
                </div>
                <div className="bg-teal_50 flex flex-row gap-[24px] items-center justify-start mt-[16px] pr-[134px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Line className="bg-blue_701 h-[48px] w-[5px]" />
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Pod details
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start mb-[222px] md:ml-[0] sm:ml-[0] ml-[29px] mt-[15px] md:w-[100%] sm:w-[100%] w-[33%]">
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/plandetails")}
                  >
                    Plan details
                  </Text>
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Settings
                  </Text>
                </div>
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
            <div className="flex flex-col gap-[17px] items-start justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[93%]">
              <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[47%]">
                <Text
                  className="font-medium text-gray_902 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Select Organisation:
                </Text>
                <div className="h-[39px] md:h-[auto] sm:h-[auto] relative sm:w-[100%] w-[67%]">
                  <Text
                    className="font-medium ml-[auto] mr-[62px] mt-[10px] text-gray_902 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Location:
                  </Text>
                  <SelectBox
                    className="absolute font-normal inset-[0] leading-[normal] m-[auto] not-italic sm:pr-[20px] pr-[21px] text-[16px] text-black_900 text-left w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Frame30143"
                    placeholder="Ahmedabad Airport - Domestic"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[6px] w-[11px] absolute"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder5"
                  ></SelectBox>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_301 border-solid md:h-[243px] h-[287px] sm:h-[800px] py-[16px] relative rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold ml-[auto] mr-[33px] text-black_900 text-left uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  MAnage
                </Text>
                <div className="absolute h-[243px] sm:h-[800px] md:h-[auto] inset-x-[0] mx-[auto] top-[6%] w-[100%]">
                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[3%] my-[auto] w-[75%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Pod name
                        </Text>
                        <Text
                          className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          AMD-POD1
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          AMD-POD2
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          AMD-POD3
                        </Text>
                        <Text
                          className="font-normal mt-[35px] not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          AMD-POD4
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[144px] md:gap-[40px] sm:gap-[40px] grid grid-cols-2 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                          <Text
                            className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Total Plan
                          </Text>
                          <Text
                            className="font-normal mt-[50px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            3 plans
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            2 plans
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            2 plans
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            3 plans
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
                            1st floor, AMD
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            1st floor, AMD
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Grond floor
                          </Text>
                          <Text
                            className="font-normal mt-[33px] not-italic text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Grond floor
                          </Text>
                        </div>
                      </List>
                      <div className="flex sm:flex-1 flex-col gap-[50px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left uppercase w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Details
                        </Text>
                        <div className="flex flex-col gap-[36px] items-center justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                          <a
                            className="common-pointer font-normal not-italic text-[16px] text-blue_800 text-left underline w-[auto]"
                            href="#"
                            onClick={() => navigate("/plandetails")}
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
                    </div>
                  </div>
                  <Line className="absolute bg-gray_300 h-[1px] inset-x-[0] mx-[auto] top-[14%] w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodDetailsPage;
