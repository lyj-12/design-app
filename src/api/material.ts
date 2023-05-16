import type { MaterialCommentPage, MaterialDetail, MatericalCategory } from '~/types'
import request from '~/composables/request'
/**
 *
 * @returns 素材二级分类
 */
export function getMaterialCategory() {
  return request.get<MatericalCategory[]>('/material/category')
}

// export function getHotMaterials(page: PageParams) {
//   return request.get<Page<Materical>[]>('/material/show/pages', { ...page })
// }

export function getMaterialDetails(id: any) {
  return request.get<MaterialDetail>(`/material/show/detail/${id}`)
}

export function getMaterialComments(id: any) {
  return request.get<MaterialCommentPage>(`/material/comment/${id}`)
}
