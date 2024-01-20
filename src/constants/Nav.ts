import { Nav } from "@/types/Common";

export const nav: Nav = {
  student: {
    id: 1,
    name: "학생관리",
    isDefault: true,
    url: "/student"
  },
  basicInfo: {
    id: 2,
    name: "기초업무관리",
    isDefault: false,
    url: "/basic-info"
  },
  staff: {
    id: 3,
    name: "교직원 관리",
    isDefault: false,
    url: "/staff"
  },
  lecture: {
    id: 4,
    name: "수업 관리",
    isDefault: false,
    url: "/lecture"
  }
}