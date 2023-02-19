import React from "react";

import { Img, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const OTPScreenPage = () => {
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
      <div className="bg-gray_100 flex flex-col font-proximanova items-center justify-end mx-[auto] p-[117px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] md:px-[20px] sm:px-[20px] rounded-radius6 shadow-bs md:w-[100%] sm:w-[100%] w-[45%]">
          <div className="flex flex-col justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[93%]">
            <Img
              src="images/img_arrowleft.svg"
              className="h-[24px] w-[24px]"
              alt="arrowleft"
            />
            <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[134px] mt-[6px] md:w-[100%] sm:w-[100%] w-[34%]">
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
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[64px] mt-[9px] text-gray_800 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              We sent a 4 digit code to +91 (**********)
            </Text>
            <div className="flex flex-row gap-[12px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[86px] mt-[22px] md:w-[100%] sm:w-[100%] w-[59%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[47px]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineLightblue600"
              >
                6
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[47px]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineLightblue600"
              >
                3
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[47px]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineLightblue600"
              >
                4
              </Button>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[52px] md:h-[auto] sm:h-[auto] items-center justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[11px] rounded-radius5 w-[48px]">
                <Line className="bg-black_900 h-[20px] w-[2px]" />
              </div>
            </div>
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[99px] mt-[20px] text-gray_800 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              <span className="text-gray_800 text-[14px] font-proximanova">
                Didn’t receive code?{" "}
              </span>
              <a
                href="javascript:"
                className="text-light_blue_600 text-[14px] font-proximanova font-semibold underline"
              >
                Send again
              </a>
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[137px] md:ml-[0] sm:ml-[0] ml-[130px] mr-[116px] mt-[11px] text-[14px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/dashboard")}
              shape="CircleBorder20"
            >
              SIGN IN
            </Button>
            <div className="flex flex-col gap-[12px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[12px] mt-[12px] md:w-[100%] sm:w-[100%] w-[97%]">
              <div className="flex flex-row gap-[11px] items-center justify-start w-[auto]">
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
                className="common-pointer bg-white_A700 border border-bluegray_101 border-solid flex flex-row items-center justify-center p-[4px] rounded-radius18 w-[100%]"
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

export default OTPScreenPage;
