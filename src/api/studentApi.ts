import axiosClient from "./axiosClient";
import { ListParams, ListResponse, Student } from "models";

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students'
    return axiosClient.get(url, { params })
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`
    return axiosClient.patch(url)
  },
  add(data: Student): Promise<Student> {
    const url = '/students'
    return axiosClient.post(url, data)
  },
  update(data: Student): Promise<Student> {
    const url = `/students/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`
    return axiosClient.delete(url)
  },
}

export default studentApi