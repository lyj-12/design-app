<script lang="ts" setup>
import { ref } from 'vue'
import ImageUploader from 'quill-image-uploader'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from 'axios'

const props = defineProps({
  details: {
    type: String,
    default: 'xingzhu editor',
    required: false,
  },
})
const emits = defineEmits(['getHtml'])
function textChanged() {
  // 向父组件传递参数
  emits('getHtml', getHtmlVal())
}

const quillEditor = ref()
const content = ref('')

function readyQuill() {
  console.log(props.details)
  content.value = props.details
  quillEditor.value.setHTML(content.value)
}

// function getHtml() {
//   content.value = getHtmlVal();
// }

function getHtmlVal() {
  return quillEditor.value.getHTML()
}

const modules = {
  name: 'imageUploader',
  module: ImageUploader,
  options: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file', file)
        axios
          .post('/upload', formData)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject('Upload failed')
            console.error('Error:', err)
          })
      })
    },
  },
}
</script>

<template>
  <div>
    <QuillEditor
      ref="quillEditor"
      v-model:content="content"
      :modules="modules"
      toolbar="full"
      style="height: 350px"
      class="quillEditor"
      @ready="readyQuill"
      @text-change="textChanged"
    />
    <!-- <n-button @click="getHtml">获取HTML</n-button> -->
  </div>
</template>

<style lang="scss" scoped></style>
