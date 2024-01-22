import { axiosBackInstance } from "@/axios/AxiosInstance";
import { Paths } from "@/constants/Paths";
import { PositionBulkRegisterType } from "@/types/domain/Position";

export const PositionService = {
  bulkRegister: async (sendData: PositionBulkRegisterType[]): Promise<void> => {
    try {
      await axiosBackInstance.post(Paths.position.bulkRegister, sendData);
    } catch (e) {
      throw e;
    }
  },
};
