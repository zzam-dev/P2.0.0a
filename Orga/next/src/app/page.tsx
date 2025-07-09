"use client";

import { MainWrapper, Popup } from "@/components/wrappers";
import { MainForm, FieldConfigs } from "@/components/forms";
import { MainButton } from "@/components/buttons";

const Main = () => {
  console.log(FieldConfigs.login.fields);
  return (
    <MainWrapper>
      <Popup>
        <MainForm
          className="
        w-full
        flex
        flex-col
        justify-center
        gap-6
        "
          subhandler="hand"
          fields={FieldConfigs.register.fields}
        >
          <MainButton label="Register" />
        </MainForm>
      </Popup>
    </MainWrapper>
  );
};

export default Main;
