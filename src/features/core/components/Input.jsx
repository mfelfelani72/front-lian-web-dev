import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import Image from "./Image.jsx";
import TypoTextInputError from "./TypoTextInputError.jsx";

// Svg

import closeSquare from "../../../../assets/icons/svg/CloseSquare.svg";
import lock from "../../../../assets/icons/svg/Lock.svg";
import message from "../../../../assets/icons/svg/Message.svg";
import call from "../../../../assets/icons/svg/Call.svg";
import show from "../../../../assets/icons/svg/show.svg";
// import hide from "../../../../assets/icons/svg/Hide.svg";
import dangerCircle from "../../../../assets/icons/svg/dc.svg";
// import calendar from "../../../../assets/icons/svg/calendar.svg";
// import search from "../../../../assets/images/search.svg";
// import plus from "../../../../assets/images/limit-order-plus.svg";
// import minus from "../../../../assets/images/limit-order-minus.svg";

// Functions

import { cn } from "../../../../utils/lib/cn.js";
import TypoTextInfo from "./TypoTextInfo.jsx";

//  --> for remove value input and disable submit Button
const handleClear = (id, first_id, secound_id, afterFunction) => {
  const Button1 = document.getElementById(first_id);
  const Button2 = document.getElementById(secound_id);
  if (Button1 && Button2) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }
  document.getElementById(id).value = "";

  if (afterFunction) {
    afterFunction();
  }
};
//  --> for toggle show/hidden password
const handleShow = (id, setIconStatus) => {
  const input = document.getElementById(id);

  if (input.type === "text") {
    input.type = "password";
    setIconStatus(show);
  } else {
    input.type = "text";
    setIconStatus(hide);
  }
};
// --> for compare ch_password and ch_confirm_password
const ComparePassword = (event, Button_id) => {
  const ch_password = document.getElementById("ch_password");
  const Button1 = document.getElementById(Button_id);
  const Button2 = document.getElementById(`${Button_id}_disable`);

  if (ch_password.value !== event.target.value) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }

  if (
    ch_password.value.slice(0, event.target.value.length) !== event.target.value
  ) {
    event.target.classList.add("!focus:border-Error/400", "!border-Error/400");
    document.getElementById("error_message").classList.remove("hidden");
  } else {
    if (ch_password.value === event.target.value) {
      Button1.classList.add("flex");
      Button1.classList.remove("hidden");
      Button2.classList.add("hidden");
      Button2.classList.remove("flex");
      document.getElementById("error_message").classList.add("hidden");
      event.target.classList.remove(
        "!focus:border-Error/400",
        "!border-Error/400"
      );
    }
  }
};

export const InputText = ({ className, ...props }) => {
  return (
    <>
      <div className="w-full relative">
        <input
          {...props}
          type="text"
          className={cn(
            "placeholder-Neutral/200 w-full px-[1rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative",
            className
          )}
        />
        {props?.disabled !== "disabled" && (
          <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center">
            <div className="p-2">
              <div className="flex" onClick={() => handleClear(props?.id)}>
                <Image
                  alt="closeSquare"
                  src={closeSquare}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const InputPassword = ({ ...props }) => {
  const { t } = useTranslation();

  // states
  const [iconStatusPassword, setIconStatusPassword] = useState(show);

  return (
    <>
      {/* password */}
      {props?.type == "password" && (
        <div className="w-full relative">
          <input
            {...props}
            type="password"
            minLength={5}
            placeholder="xxxx xxxx xxxx xxxx"
            className="peer placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
            onBlur={() => {
              document
                .getElementById("input_password_validate")
                .classList.add("hidden");
            }}
            onFocus={() => {
              document
                .getElementById("danger_password")
                .classList.add("hidden");
              document
                .getElementById("close_password")
                .classList.remove("hidden");
              document.getElementById("close_password").classList.add("flex");
            }}
          />
          <div
            id="close_password"
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center "
          >
            <div className="p-2">
              <div
                className="flex"
                onClick={() =>
                  handleClear(
                    props?.id,
                    props?.button_first_id,
                    props?.button_secound_id
                  )
                }
              >
                <Image
                  alt="closeSquare"
                  src={closeSquare}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            id="danger_password"
            className="hidden absolute top-[6px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
          >
            <div className="p-2">
              <div className="flex">
                <Image
                  className={"w-6 h-6"}
                  alt="dangerCircle"
                  src={dangerCircle}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="">
              <div className="flex">
                <Image className={"w-6 h-6"} alt="lock" src={lock} />
              </div>
            </div>
          </div>
          {/* input validate */}
          {props?.error !== "" && (
            <div
              id="input_password_validate"
              className="peer-focus:hidden absolute mt-2 mx-3"
            >
              <TypoTextInputError>{t(props?.error)}</TypoTextInputError>
            </div>
          )}
          <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
            <TypoTextInputError>
              {t("error_min_length_password")}
            </TypoTextInputError>
          </div>

          {/* input validate */}
        </div>
      )}

      {/* change_password */}
      {props?.type == "change_password" && (
        <div className="w-full relative">
          <input
            {...props}
            type="password"
            minLength={5}
            placeholder="xxxx xxxx xxxx xxxx"
            className="peer placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 invalid:focus:border-Error/400 invalid:border-Error/400 justify-between items-center relative"
          />
          <div className="peer-invalid:hidden absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center ">
            <div className="p-2">
              <div
                className="flex"
                onClick={() => handleShow("ch_password", setIconStatusPassword)}
              >
                <Image
                  alt="show"
                  src={iconStatusPassword}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="hidden peer-invalid:flex absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 items-center ">
            <div className="p-2">
              <div className="flex">
                <Image
                  className={"w-6 h-6"}
                  alt="dangerCircle"
                  src={dangerCircle}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="">
              <div className="flex">
                <Image className={"w-6 h-6"} alt="lock" src={lock} />
              </div>
            </div>
          </div>
          <div className="hidden peer-invalid:flex absolute my-2 mx-3">
            <TypoTextInputError>
              {t("error_min_length_password")}
            </TypoTextInputError>
          </div>
        </div>
      )}
    </>
  );
};
export const InputEmail = ({ className, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full relative">
        <input
          {...props}
          pattern="[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[a-zA-Z]{2,}(:[0-9]{1,5})?"
          type="email"
          className={cn(
            "peer placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400  justify-between items-center relative",
            className
          )}
          onBlur={() => {
            document
              .getElementById("input_email_validate")
              .classList.add("hidden");
          }}
          onFocus={() => {
            document.getElementById("danger_email").classList.add("hidden");
            document.getElementById("close_email").classList.remove("hidden");
            document.getElementById("close_email").classList.add("flex");
          }}
        />
        <div
          id="close_email"
          className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center"
        >
          {props?.disabled !== "disabled" && (
            <div className="p-2">
              <div
                className="flex"
                onClick={() =>
                  handleClear(
                    props?.id,
                    props?.button_first_id,
                    props?.button_secound_id
                  )
                }
              >
                <Image
                  alt="closeSquare"
                  src={closeSquare}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
        <div
          id="danger_email"
          className="hidden absolute top-[6px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
        >
          <div className="p-2">
            <div className="flex">
              <Image
                className={"w-6 h-6"}
                alt="dangerCircle"
                src={dangerCircle}
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <div className="">
            <div className="flex">
              <Image className={"w-6 h-6"} alt="message" src={message} />
            </div>
          </div>
        </div>
        {/* input validate */}
        {props?.error !== "" && (
          <div
            id="input_email_validate"
            className="peer-focus:hidden absolute mt-2 mx-3"
          >
            <TypoTextInputError>{t(props?.error)}</TypoTextInputError>
          </div>
        )}
        <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
          <TypoTextInputError>{t("error_invalid_email")}</TypoTextInputError>
        </div>

        {/* input validate */}
      </div>
    </>
  );
};
export const InputMobile = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full relative">
        <input
          {...props}
          type="tel"
          inputMode="numeric"
          pattern="^09[0-9]{9}$"
          maxLength={11}
          className="peer rtl:text-right ltr:text-left placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
          onBlur={() => {
            document
              .getElementById("input_mobile_validate")
              .classList.add("hidden");
          }}
          onFocus={() => {
            document.getElementById("danger_mobile").classList.add("hidden");
            document.getElementById("close_mobile").classList.remove("hidden");
            document.getElementById("close_mobile").classList.add("flex");
          }}
        />
        {props?.disabled !== "disabled" && (
          <div
            id="close_mobile"
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center "
          >
            <div className="p-2">
              <div
                className="flex"
                onClick={() =>
                  handleClear(
                    props?.id,
                    props?.button_first_id,
                    props?.button_secound_id
                  )
                }
              >
                <Image
                  alt="closeSquare"
                  src={closeSquare}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        <div
          id="danger_mobile"
          className="hidden absolute top-[7px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
        >
          <div className="p-2">
            <div className="flex">
              <Image
                className={"w-6 h-6"}
                alt="dangerCircle"
                src={dangerCircle}
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 ltr:pl-3 rtl:pr-3 flex items-center pointer-events-none">
          <div className="">
            <div className="flex">
              <img
                alt="call"
                src={call}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
        {/* input validate */}
        {props?.error !== "" && (
          <div
            id="input_mobile_validate"
            className="peer-focus:hidden absolute mt-2 mx-3"
          >
            <TypoTextInputError>{t(props?.error)}</TypoTextInputError>
          </div>
        )}
        <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
          <TypoTextInputError>{t("error_invalid_mobile")}</TypoTextInputError>
        </div>
      </div>
    </>
  );
};
// export const InputRePassword = ({ ...props }) => {
//   const { t } = useTranslation();
//   // states
//   const [iconStatusConfirmPassword, setIconStatusConfirmPassword] =
//     useState(show);
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           id={props?.id}
//           type="password"
//           placeholder="xxxx xxxx xxxx xxxx"
//           className="placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
//           onChange={(event) => ComparePassword(event, props?.Button_id)}
//         />
//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center ">
//           <div className="p-2">
//             <div
//               className="flex"
//               onClick={() =>
//                 handleShow("ch_confirm_password", setIconStatusConfirmPassword)
//               }
//             >
//               <Image
//                 alt="show"
//                 src={iconStatusConfirmPassword}
//                 className="w-6 h-6 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
//           <div className="">
//             <div className="flex">
//               <Image className={"w-6 h-6"} alt="lock" src={lock} />
//             </div>
//           </div>
//         </div>

//         <div id="error_message" className="hidden absolute mt-2 mx-3">
//           <TypoTextInputError>{t("error_re_password")}</TypoTextInputError>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputTelegramId = ({ ...props }) => {
//   const { t } = useTranslation();
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           {...props}
//           type="text"
//           dir="ltr"
//           pattern="^@[A-Za-z0-9_]+$"
//           className="peer rtl:text-right ltr:text-left placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 invalid:focus:border-Error/400 invalid:border-Error/400 justify-between items-center relative"
//           onBlur={() => {
//             document
//               .getElementById("input_telegram_validate")
//               .classList.add("hidden");
//           }}
//           onFocus={() => {
//             document.getElementById("danger_telegram").classList.add("hidden");
//             document
//               .getElementById("close_telegram")
//               .classList.remove("hidden");
//             document.getElementById("close_telegram").classList.add("flex");
//           }}
//         />
//         <div
//           id="close_telegram"
//           className="peer-invalid:hidden absolute inset-y-0 rtl:left-0 ltr:right-0 ltr:pr-3 rtl:pl-3 flex items-center "
//         >
//           <div className="p-2">
//             <div
//               className="flex"
//               onClick={() =>
//                 handleClear(
//                   props?.id,
//                   props?.button_first_id,
//                   props?.button_secound_id
//                 )
//               }
//             >
//               <Image
//                 alt="closeSquare"
//                 src={closeSquare}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           id="danger_telegram"
//           className="hidden peer-invalid:block absolute top-[7px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
//         >
//           <div className="p-2">
//             <div className="flex">
//               <Image alt="dangerCircle" src={dangerCircle} />
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 ltr:pl-3 rtl:pr-3 flex items-center pointer-events-none">
//           <div className="">
//             <div className="flex">
//               <img
//                 alt="call"
//                 src={call}
//                 loading="lazy"
//                 className="w-full h-full"
//               ></img>
//             </div>
//           </div>
//         </div>
//         {/* input validate */}
//         {props?.error !== "" && (
//           <div
//             id="input_telegram_validate"
//             className="peer-focus:hidden absolute mt-2 mx-3"
//           >
//             <TypoTextInputError>{t(props?.error)}</TypoTextInputError>
//           </div>
//         )}
//         <div className="hidden peer-invalid:flex absolute mt-2 mx-3">
//           <TypoTextInputError>{t("error_invalid_id")}</TypoTextInputError>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputYear = ({
//   onFocus,
//   value,
//   onChange,
//   id,
//   placeholder,
//   check,
// }) => {
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           id={id}
//           readOnly
//           placeholder={placeholder}
//           onFocus={onFocus}
//           value={value}
//           onChange={onChange}
//           className="placeholder-Neutral/200 w-full px-4 py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
//         />
//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center">
//           <div className="p-2">
//             <div
//               className="flex"
//               onClick={() => handleClear(id, "", "", check)}
//             >
//               <Image
//                 alt="closeSquare"
//                 src={closeSquare}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputMonth = ({
//   onFocus,
//   value,
//   onChange,
//   id,
//   placeholder,
//   check,
// }) => {
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           id={id}
//           readOnly
//           placeholder={placeholder}
//           onFocus={onFocus}
//           value={value}
//           onChange={onChange}
//           className="placeholder-Neutral/200 w-full px-4 py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
//         />
//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center">
//           <div className="p-2">
//             <div
//               className="flex"
//               onClick={() => {
//                 handleClear(id, "", "", check);
//               }}
//             >
//               <Image
//                 alt="closeSquare"
//                 src={closeSquare}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputDate = ({ onFocus, value, onChange, id, placeholder }) => {
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           id={id}
//           readOnly
//           placeholder={placeholder}
//           onFocus={onFocus}
//           value={value}
//           onChange={onChange}
//           className="placeholder-Neutral/200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
//         />
//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center">
//           <div className="p-2">
//             <div className="flex" onClick={() => handleClear(id)}>
//               <Image
//                 alt="closeSquare"
//                 src={closeSquare}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
//           <div className="">
//             <div className="flex">
//               <Image className={"w-6 h-6"} alt="calendar" src={calendar} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputSearch = ({ ...props }) => {
//   return (
//     <div className="w-full relative">
//       <input
//         {...props}
//         type="text"
//         className="placeholder-Neutral/200 w-full rtl:pl-[1rem] rtl:pr-[3.5rem] ltr:pr-[1rem] ltr:pl-[3.5rem] pt-3 h-11 bg-Neutral/50 rounded-2xl border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 items-center relative"
//       />

//       <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-4 ltr:pl-4 flex items-center">
//         <div className="p-2">
//           <div className="flex" onClick={() => handleClear(props?.id)}>
//             <Image alt="search" src={search} className="cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export const InputTransactionNumbers = ({ ...props }) => {
//   return (
//     <>
//       <div className="w-full relative">
//         <input
//           {...props}
//           type="number"
//           inputMode="numeric"
//           className="no-spinners w-[calc(100%-1rem)] placeholder-Neutral/200 mx-[1rem] py-3 bg-white border-none focus:outline-none focus:ring-0 justify-between items-center relative"
//         />
//         <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center bg-white">
//           <Image alt="plus" src={plus} className="w-6 h-6 cursor-pointer" />
//         </div>

//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center bg-white">
//           <div className="flex gap-2">
//             <Image alt="minus" src={minus} className="w-6 h-6 cursor-pointer" />
//             <TypoTextInfo className="text-Neutral/500 text-sm font-bold items-center pt-1">
//               {props?.text}
//             </TypoTextInfo>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export const InputRadioButton = ({ ...props }) => {
//   return (
//     <>
//       <div {...props} className="relative">
//         <input
//           id={props?.id}
//           type="radio"
//           name={props?.name}
//           className="hidden"
//         />
//         <label
//           htmlFor={props?.id}
//           className="absolute cursor-pointer bg-transparent w-full h-full z-10"
//         ></label>

//         <div className="w-8 h-8 rounded-full bg-secondary/50">
//           <div className="flex flex-col pt-1.5 items-center">
//             <div className="w-5 h-5 rounded-full border border-primary/400"></div>
//           </div>
//         </div>
//         <div
//           id={props?.id + "_tick"}
//           className={
//             props?.groupname +
//             ` ${
//               !props?.checked && "hidden"
//             }  w-3 h-3 absolute top-[10px] right-[10px] rounded-full bg-primary/400`
//           }
//         ></div>
//       </div>
//     </>
//   );
// };
// export const InputCardNumber = ({ ...props }) => {
//   // hooks
//   const { t } = useTranslation();
//   // state
//   const [bankLogo, setBankLogo] = useState("");

//   const { banks } = useCardManagementStore((state) => ({
//     banks: state.banks,
//   }));

//   // functions
//   const detectBank = (e) => {
//     if (e.target.value.slice(0, 16).length === 6) {
//       const bankDetail = BankDetection(banks, e.target.value.slice(0, 6));
//       if (bankDetail?.logo !== "") {
//         setBankLogo(bankDetail?.logo);
//         document
//           .getElementById("value-" + props?.id)
//           .setAttribute("value", bankDetail?.id);
//         e.target.classList.add("placeholder:mr-1");
//         e.target.classList.remove("px-[1rem]");
//         e.target.classList.add("px-[3rem]");
//       }
//     } else if (e.target.value.slice(0, 16).length === 5) {
//       e.target.classList.remove("placeholder:mr-1");
//       e.target.classList.add("px-[1rem]");
//       e.target.classList.remove("px-[3rem]");
//       document.getElementById("value-card_number").setAttribute("value", "");
//       setBankLogo("");
//     }
//   };

//   const handleClearInputCardNumber = () => {
//     const e = document.getElementById(props?.id);
//     e.classList.remove("placeholder:mr-1");
//     e.classList.add("px-[1rem]");
//     e.classList.remove("px-[3rem]");
//     setBankLogo("");
//     handleClear(props?.id);
//     props?.onChange();
//   };

//   const clearError = () => {
//     document.getElementById(props?.id).classList.remove("border-Error/400");
//     document.getElementById(props?.id).classList.add("border-secondary/100");
//     document
//       .getElementById(props?.id + "_error_message")
//       .classList.add("hidden");
//     document.getElementById(props?.id + "_close").classList.remove("hidden");
//     document.getElementById(props?.id + "_danger").classList.add("hidden");
//   };
//   return (
//     <>
//       <div className="w-full relative">
//         <input className="hidden" id={"value-" + props?.id} />
//         <input
//           {...props}
//           type="tel"
//           inputMode="numeric"
//           maxLength={16}
//           className="rtl:text-right ltr:text-left no-spinners placeholder-Neutral/200 w-full px-[1rem] py-3 rounded-2xl bg-secondary/50 border border-secondary/100 focus:outline-none focus:ring-0 focus:border-secondary/400 justify-between items-center relative"
//           onChange={(e) => {
//             detectBank(e);
//             props?.onChange();
//           }}
//           onFocus={() => {
//             clearError();
//           }}
//         />
//         <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center">
//           <div id={props?.id + "_close"} className="p-2">
//             <div className="flex" onClick={() => handleClearInputCardNumber()}>
//               <Image
//                 alt="closeSquare"
//                 src={closeSquare}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//           <div id={props?.id + "_danger"} className="hidden p-2">
//             <div className="flex">
//               <Image alt="dangerCircle" src={dangerCircle} />
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 pr-2.5 flex items-center">
//           <div className="p-2">
//             {bankLogo !== "" && (
//               <div className="flex">
//                 <Image
//                   alt="bank_image"
//                   src={bankLogo}
//                   className="cursor-pointer w-6 h-6"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//         <div
//           id={props?.id + "_error_message"}
//           className="hidden absolute mt-2 mx-3"
//         >
//           <TypoTextInputError>{t(props?.error)}</TypoTextInputError>
//         </div>
//       </div>
//     </>
//   );
// };
