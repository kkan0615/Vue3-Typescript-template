<template>
  <div>
    <label>
      <input
        v-model="data.messageInReactive"
      >
    </label>
    <br>
    <label>
      <input
        ref="messageInReactiveInputElement"
        v-model="refMessage"
      >
    </label>
    <br>
    This is Test Page
    <br>
    reactive: {{ data.messageInReactive }}
    <br>
    ref: {{ refMessage }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Test',
  props: {
    propsMessage: {
      type: String,
      default: 'props message'
    }
  },
  setup (props) {
    console.log(props)

    const data = reactive({
      messageInReactive: 'hello messageInReactive'
    })

    const refMessage = ref('ref message')
    const messageInReactiveInputElement = ref() as Ref<HTMLInputElement>

    onMounted(() => {
      /* Focus on input */
      messageInReactiveInputElement.value.focus()
    })
    return { data, refMessage, messageInReactiveInputElement }
  }
})
</script>
