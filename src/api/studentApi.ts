import axios from "axios";
import { ListParams, ListResponse, Student } from "models";

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students'
    return axios.get(url, { params })
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`
    return axios.patch(url)
  },
  add(data: Student): Promise<Student> {
    const url = '/students'
    return axios.post(url, data)
  },
  update(data: Student): Promise<Student> {
    const url = '/students'
    return axios.patch(url, data)
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`
    return axios.delete(url)
  },
}

export default studentApi