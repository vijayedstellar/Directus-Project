<template>
  <div class="page-builder-interface">
    <div class="header">
      <h3>🎨 Page Builder</h3>
      <p>Visual template builder for dynamic content</p>
    </div>
    
    <div class="builder-workspace">
      <div class="sidebar">
        <h4>📦 Content Blocks</h4>
        <div class="block-item">
          <span>🦸 Hero Section</span>
        </div>
        <div class="block-item">
          <span>⊞ Course Grid</span>
        </div>
        <div class="block-item">
          <span>💰 Pricing Table</span>
        </div>
      </div>
      
      <div class="canvas">
        <h4>🎨 Template Canvas</h4>
        <textarea 
          :value="value || '{}'" 
          @input="handleChange"
          placeholder="Template JSON data will appear here..."
          rows="10">
        </textarea>
      </div>
      
      <div class="config-panel">
        <h4>⚙️ Configuration</h4>
        <p>Select a block to configure</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    function handleChange(event) {
      emit('input', event.target.value);
    }

    return {
      handleChange,
    };
  },
});
</script>

<style scoped>
.page-builder-interface {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.header h3 {
  margin: 0 0 5px 0;
}

.builder-workspace {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  min-height: 400px;
}

.sidebar, .config-panel {
  background: #f8fafc;
  padding: 15px;
  border-right: 1px solid #e2e8f0;
}

.block-item {
  padding: 8px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
}

.canvas {
  padding: 15px;
}

.canvas textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 12px;
}
</style>