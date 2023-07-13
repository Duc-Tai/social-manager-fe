<template>
    <div id="auth">
        Auth Layout
        <div>
            <router-view />
        </div>
    </div>
</template>
  
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AuthLayout extends Vue {
}
</script>
<style scoped></style>
  