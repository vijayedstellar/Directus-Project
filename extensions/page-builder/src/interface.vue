<template>
  <div>
    <h3>🎨 Page Builder Interface</h3>
    <textarea 
      :value="value" 
      @input="$emit('input', $event.target.value)"
      placeholder="Enter template JSON here..."
      rows="5"
      style="width: 100%; padding: 10px; border: 1px solid #ccc;">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  emits: ['input']
}
</script>