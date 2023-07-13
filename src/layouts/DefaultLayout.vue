<template>
    <div id="home">
        Default Layout
        <div>
            <!-- <slot /> -->
            <router-view />
        </div>
    </div>
</template>
  
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {
}
</script>
<style scoped></style>
  