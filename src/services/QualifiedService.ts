import { axiosBackInstance } from "@/axios/AxiosInstance";
import { Paths } from "@/constants/Paths";
import { QualifiedRegisterType } from "@/types/domain/Qualified";

export const QualifiedService = {
  bulkRegister: async (sendData: QualifiedRegisterType[]): Promise<void> => {
    try {
      await axiosBackInstance.post(Paths.qualified.bulkRegister, sendData);
    } catch (e) {
      throw e;
    }
  },
};
