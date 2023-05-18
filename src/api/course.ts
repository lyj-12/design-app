import request from '~/composables/request'
import type { Course, Page, PageParams } from '~/types'

export function getCourseList(page: PageParams) {
  return request.get<Page<Course>[]>('/material/show/pages',
    { ...page })
}

export function getCourseDetail(id: string) {
  return request.get<Course>(`/course/${id}`)
}
