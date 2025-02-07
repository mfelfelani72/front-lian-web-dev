import React from "react";

// functions
import ConfirmInputControl from "../utils/lib/ConfirmInputControl.js";

const ConfirmInput = ({ setChildConfirmCode }) => {
  return (
    <>
      <div className="left-to-right grid grid-cols-5 gap-2 mt-8">
        <input
          ref={(node) => node?.focus()}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={1}
          onChange={(e) => {
            ConfirmInputControl(e, setChildConfirmCode, 1);
          }}
          className="otp-input-1 input text-center text-xl border-Tertiary/100 caret-transparent px-auto py-2 focus:outline-none focus:border focus:ring-0  focus:border-Tertiary/00 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 h-16 bg-Tertiary/50 rounded-[16px]"
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={1}
          onChange={(e) => {
            ConfirmInputControl(e, setChildConfirmCode, 2);
          }}
          className="otp-input-2 input text-center text-xl border-Tertiary/100 caret-transparent px-auto py-2 focus:outline-none focus:border focus:ring-0 focus:border-Tertiary/00 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 h-16 bg-Tertiary/50 rounded-[16px]"
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={1}
          onChange={(e) => {
            ConfirmInputControl(e, setChildConfirmCode, 3);
          }}
          className="otp-input-3 input text-center text-xl border-Tertiary/100 caret-transparent px-auto py-2 focus:outline-none focus:border focus:ring-0 focus:border-Tertiary/00 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 h-16 bg-Tertiary/50 rounded-[16px]"
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={1}
          onChange={(e) => {
            ConfirmInputControl(e, setChildConfirmCode, 4);
          }}
          className="otp-input-4 input text-center text-xl border-Tertiary/100 caret-transparent px-auto py-2 focus:outline-none focus:border focus:ring-0 focus:border-Tertiary/00 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 h-16 bg-Tertiary/50 rounded-[16px]"
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={1}
          onChange={(e) => {
            ConfirmInputControl(e, setChildConfirmCode, 5);
          }}
          className="otp-input-5 input text-center text-xl border-Tertiary/100 caret-transparent px-auto py-2 focus:outline-none focus:border focus:ring-0 focus:border-Tertiary/00 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 h-16 bg-Tertiary/50 rounded-[16px]"
        />
      </div>
    </>
  );
};

export default ConfirmInput;
