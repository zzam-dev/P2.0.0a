
import { Popup } from "@/components/wrappers";
import { MainForm, FieldConfigs } from "@/components/forms";
import { ReactNode } from "react";



const LoginPage = (): ReactNode => (
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
      </MainForm>
    </Popup>
);


export default LoginPage