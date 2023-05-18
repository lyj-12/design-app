<script lang="ts" setup>
import type { PropType } from 'vue'
import type { MaterialComment } from '~/types'

const props = defineProps({
  comment: {
    type: Array as PropType<MaterialComment[]>,
    required: true,
  },
})
const { comment } = toRefs(props)
</script>

<template>
  <div>
    <div class="publish-comment">
      <el-avatar class="publish-item publish-avatar" src="https://lionkliu-typore.oss-cn-shanghai.aliyuncs.com/blog-img/202209292253360.png" />
      <el-input class="publish-item publish-input" />
      <el-button type="primary" class="publish-item publish-btn">
        发布
      </el-button>
    </div>
    <div v-for="item in comment" :key="item.id" class="comment">
      <div class="comment-avatar">
        <el-avatar class="comment_avatar" :src="item.avatar" />
      </div>
      <div class="content-wrap">
        <div class="comment-username">
          {{ item.username }}
        </div>
        <div class="comment-content">
          {{ item?.content }}
        </div>
        <div class="comment-time">
          <span> {{ item?.createTime.toString().substring(0, 16) }}</span>
        </div>
        <div class="i-ant-design:like-outlined h-8 w-8 text-gray-300 hover:text-yellow-300" />

        <div v-if="item.children.length !== 0" class="reply-wrap">
          <div v-for="child in item.children" :key="child.id" class="reply-content">
            <el-avatar class="comment_avatar" :src="child.avatar" />
            <div class="content-wrap">
              <div class="comment-username">
                {{ child.username }}
              </div>
              <div class="comment-content">
                {{ child?.content }}
              </div>
              <div class="comment-time">
                {{ child?.createTime.toString().substring(0, 16) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.publish-comment{
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .publish-input{
    margin: 0 10px;

  }
  .publish-btn{
    padding: 0 10px;
    width: 80px;
  }

}
.comment{
  display: flex;
  margin: 10px 0;
  .content-wrap{
    width: 100%;
    margin-left: 10px;
    .comment-username{
      margin-right: 5px;
      color: #61666d;
      cursor: pointer;
  }
  .comment-content{
    color: #18191c;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
    line-height: 24px;
    vertical-align: baseline;
  }
  .comment-time{
    color: $color-time;
  }
  .reply-wrap{
    padding: 10px 0 0 0;
    width: 100%;

    .reply-content{
      display: flex;
      padding: 10px 0;

    }
  }
}

}
</style>
