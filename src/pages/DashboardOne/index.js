import React from "react";

import { Img, Text, Line, Input, TextArea, Button } from "components";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-proximanova items-center justify-start mx-[auto] pb-[145px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-start mb-[333px] md:px-[20px] sm:px-[20px] py-[77px] shadow-bs1 md:w-[100%] sm:w-[100%] w-[19%]">
            <Img
              src="images/img_group301311.png"
              className="h-[65px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[51px] object-cover sm:w-[100%] w-[auto]"
              alt="Group301311"
            />
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[29px] mt-[71px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
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
          <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[26px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[82%]">
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
            <div className="flex flex-col gap-[21px] items-start justify-start mt-[44px] md:w-[100%] sm:w-[100%] w-[93%]">
              <div
                className="common-pointer flex flex-row gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[8%]"
                onClick={() => navigate("/dashboardtwo")}
              >
                <Img
                  src="images/img_arrowleft_gray_902.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowleft"
                />
                <Text
                  className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  back
                </Text>
              </div>
              <div className="bg-white_A700 border border-gray_301 border-solid flex flex-col items-center justify-start py-[22px] rounded-radius4 w-[100%]">
                <div className="flex flex-col gap-[14px] justify-start mb-[2px] w-[100%]">
                  <Text
                    className="font-semibold md:ml-[0] sm:ml-[0] ml-[31px] text-gray_901 text-left uppercase w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    organisation Info
                  </Text>
                  <div className="flex flex-col justify-start w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[31px] mt-[24px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Name
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[456px]"
                        type="text"
                        name="Frame30143"
                        placeholder="Organisation name"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[89px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[31px] mt-[14px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold sm:mt-[0] mt-[8px] text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Description
                      </Text>
                      <TextArea
                        className="font-normal gap-[35px] h-[96px] leading-[normal] not-italic text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[456px]"
                        name="Frame30149"
                        placeholder="Write short description"
                      ></TextArea>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[31px] mt-[30px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        type
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[456px]"
                        name="Frame30144"
                        placeholder="Ex. Business, Airport etc"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[31px] mt-[18px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        location
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[456px]"
                        name="Frame30145"
                        placeholder="Write here"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] mt-[20px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        admin name
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="ml-[91px] sm:ml-[0] sm:w-[100%] w-[218px]"
                        type="text"
                        name="Frame30146"
                        placeholder="First name"
                      ></Input>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="ml-[20px] sm:ml-[0] sm:w-[100%] w-[218px]"
                        type="text"
                        name="Frame30147"
                        placeholder="Last name"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] mt-[18px] md:w-[100%] sm:w-[100%] w-[67%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        email & Phone no
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="ml-[47px] sm:ml-[0] sm:w-[100%] w-[218px]"
                        type="email"
                        name="Frame30148"
                        placeholder="Email ID"
                      ></Input>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="ml-[20px] sm:ml-[0] sm:w-[100%] w-[218px]"
                        type="number"
                        name="Frame30150"
                        placeholder="Phone no"
                      ></Input>
                    </div>
                    <Line className="bg-gray_300 h-[1px] mt-[45px] w-[100%]" />
                    <div className="flex flex-row gap-[96px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] mt-[33px] md:w-[100%] sm:w-[100%] w-[42%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Total pods
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="w-[218px]"
                        type="number"
                        name="Frame30151"
                        placeholder="Enter number"
                      ></Input>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[31px] mt-[22px] md:w-[100%] sm:w-[100%] w-[42%]">
                      <Text
                        className="font-semibold text-gray_901 text-left uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Pods plan
                      </Text>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_900_5b text-gray_900_5b text-left w-[100%]"
                        wrapClassName="w-[218px]"
                        name="Frame30152"
                        placeholder="Select here"
                      ></Input>
                    </div>
                    <div className="bg-white_A700 border border-gray_300 border-solid flex flex-col h-[128px] md:h-[auto] sm:h-[auto] items-center justify-start md:ml-[0] sm:ml-[0] ml-[216px] mr-[532px] mt-[7px] pl-[13px] pr-[113px] sm:pr-[20px] md:pr-[40px] py-[10px] rounded-radius4 w-[218px]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[91%]">
                        <div className="flex flex-col gap-[12px] items-center justify-start w-[21%]">
                          <div className="border border-black_900 border-solid h-[17px] w-[17px]"></div>
                          <div className="border border-black_900 border-solid h-[17px] w-[17px]"></div>
                          <div className="border border-black_900 border-solid h-[17px] w-[17px]"></div>
                          <div className="border border-black_900 border-solid h-[17px] w-[17px]"></div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[69%]">
                          <Text
                            className="font-normal not-italic text-gray_902 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Select all
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_902 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mirco
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_902 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mini
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_902 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Power
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_300 h-[1px] mt-[31px] w-[100%]" />
                    <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] mt-[20px] md:w-[100%] sm:w-[100%] w-[24%]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[106px] text-[14px] text-center text-gray_500 w-[auto]"
                        shape="CircleBorder20"
                        variant="OutlineGray500"
                      >
                        CANCEL
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[106px] text-[14px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder20"
                      >
                        SAVE
                      </Button>
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

export default DashboardOnePage;
