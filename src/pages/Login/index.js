import React from "react";

import { Img, Text, SelectBox, Input, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-proximanova items-center justify-end mx-[auto] p-[123px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-end mt-[6px] p-[38px] md:px-[20px] sm:px-[20px] rounded-radius6 shadow-bs md:w-[100%] sm:w-[100%] w-[469px]">
          <div className="flex flex-col gap-[9px] items-center justify-start mt-[25px] md:w-[100%] sm:w-[100%] w-[95%]">
            <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[35%]">
              <Img
                src="images/img_group301311.png"
                className="h-[65px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="Group301311"
              />
              <Text
                className="text-gray_800 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Welcome
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="font-medium text-gray_800 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Enter your mobile number to get one-time password.
              </Text>
              <div className="flex flex-row gap-[8px] items-center justify-between mt-[30px] md:w-[100%] sm:w-[100%] w-[98%]">
                <SelectBox
                  className="font-normal leading-[normal] not-italic sm:pr-[20px] md:pr-[40px] pr-[77px] text-[14px] text-gray_600 text-left w-[auto]"
                  placeholderClassName="text-gray_600"
                  name="FrameThree"
                  placeholder="+91"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600.svg"
                      className="h-[5px] w-[11px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  variant="OutlineBluegray100"
                ></SelectBox>
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="w-[286px]"
                  type="number"
                  name="FrameOne"
                  placeholder="Enter mobile number"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[137px] mt-[20px] text-[14px] text-center text-white_A700 w-[auto]"
                onClick={() => navigate("/otpscreen")}
                shape="CircleBorder20"
              >
                SEND OTP
              </Button>
              <div className="flex flex-row gap-[11px] items-center justify-start mt-[20px] w-[auto]">
                <Line className="bg-black_900_2d h-[1px] w-[45%]" />
                <Text
                  className="font-medium h-[15px] text-gray_800 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  or
                </Text>
                <Line className="bg-black_900_2d h-[1px] w-[45%]" />
              </div>
              <div
                className="common-pointer bg-white_A700 border border-bluegray_101 border-solid flex flex-row items-center justify-center mt-[9px] p-[4px] rounded-radius18 w-[100%]"
                onClick={googleSignIn}
              >
                <Img
                  src="images/img_76117701.png"
                  className="h-[30px] md:h-[auto] sm:h-[auto] ml-[95px] object-cover w-[30px]"
                  alt="76117701"
                />
                <Text
                  className="font-medium ml-[5px] mr-[112px] text-bluegray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Sign in with Google
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
