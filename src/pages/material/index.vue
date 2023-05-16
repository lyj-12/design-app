<script lang='ts' setup>
import { getMaterialDetails } from '~/api/material'

function init() {
  const res = getMaterialDetails(1)
  console.log(res)
}
init()
</script>

<template>
  <div> material </div>
</template>

<style lang='scss' scoped>

</style>
