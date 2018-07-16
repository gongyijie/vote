<template>
    <div class="content">
        <mt-radio
          title="单选框列表"
          v-model="value"
          :options="['选项A', '选项B', '选项C']">
        </mt-radio>
    </div>
</template>

<script>

import { Radio } from 'mint-ui';

export default {
  name: 'ExampleOne',
  components: {
      Radio
  },

  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>
    h1{
        font-size: 10%;
        text-align: center;
    }
    .content{
        margin: 20px 0 0 0;
        width: 340px;
        height: 350px;
        border: 1px solid #eee;
        border-radius: 4%;
    }
</style>
