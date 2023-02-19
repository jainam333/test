import React from "react";

import { Img, Line, Text, List } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-proximanova items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[232px]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col justify-start py-[77px] shadow-bs1 w-[100%]">
                <Img
                  src="images/img_group301311.png"
                  className="h-[65px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[51px] object-cover sm:w-[100%] w-[auto]"
                  alt="Group301311"
                />
                <div className="bg-teal_50 flex flex-row gap-[24px] items-center justify-start mt-[56px] pr-[135px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Line className="bg-blue_701 h-[48px] w-[5px]" />
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[222px] md:ml-[0] sm:ml-[0] ml-[29px] mt-[15px] md:w-[100%] sm:w-[100%] w-[55%]">
                  <Text
                    className="common-pointer font-medium text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/dashboardtwo")}
                  >
                    Organisation details
                  </Text>
                  <Text
                    className="common-pointer font-medium mt-[31px] text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/poddetails")}
                  >
                    Pod details
                  </Text>
                  <Text
                    className="font-medium mt-[31px] text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
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
                className="font-medium mt-[6px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Dashboard analytics
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
            <List
              className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[41px] md:w-[100%] sm:w-[100%] w-[93%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 border border-gray_301 border-solid flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold mb-[136px] mt-[5px] text-gray_901 text-left uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Active plans
                </Text>
              </div>
              <div className="bg-white_A700 border border-gray_301 border-solid flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold mb-[136px] mt-[5px] text-gray_901 text-left uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  most used plans
                </Text>
              </div>
              <div className="bg-white_A700 border border-gray_301 border-solid flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold mb-[136px] mt-[5px] text-gray_901 text-left uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Total hours used
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
