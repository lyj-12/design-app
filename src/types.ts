import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface PageParams {
  pageNum: number
  pageSize: number
}

export interface Page<T> {
  // 总页数
  pageTotal: number
  // 总条数
  total: number
  result: T[]
}
export interface MatericalCategory {
  id: number
  label: string
  children: MatericalCategory[]
}

export interface Materical {
  id: number
  collections: number
  likes: number
  views: number
  preview: string
  tags: string
  title: string
  userAvatar: string
  username: string
  createTime: Date
}

export interface MaterialDetail {
  id: number
  title: string
  preview: string
  details: string
  userId: number
  categoryId: number
  views: number
  likes: number
  collections: number
  tags: string
  userAvatar: string
  username: string
  createTime: Date
}

export interface MaterialComment {
  id: number
  materialId: number
  userAvatar: string
  username: string
  avatar: string
  content: string
  toCommentUserName: string
  toCommentUserAvatar: string
  likes: number
  createTime: Date
  children: MaterialComment[]
}

export interface MaterialCommentPage extends Page<MaterialComment> {}
