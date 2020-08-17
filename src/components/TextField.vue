<template>
  <div class="field">
    <label class="label">
      {{ label }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input
        ref="input"
        class="input"
        :class="violation ? 'is-danger' : 'is-success'"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="validate();$emit('input', $refs.input.value)"
      >
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span
        v-if="!violation"
        class="icon is-small is-right"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        v-else
        class="icon is-small is-right"
      >
        <i class="fas fa-times"></i>
      </span>
    </div>
    <p
      class="help"
      :class="violation ? 'is-danger' : 'is-success'"
    >
      {{ violation ? violation  : 'All Good' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      default: 'text field',
    },
    type: {
      default: 'text',
    },
    placeholder: {
      default: 'placeholder',
    },
    value: {
      default: 'value',
    },
    rules: {
      default: () => true,
    },
    helpText: {
      default: 'All good',
    },
  },
  data() {
    return {
      violation: '',
    };
  },
  methods: {
    validate() {
      const inputValue = this.$refs.input.value;
      this.violation = this.rules(inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
