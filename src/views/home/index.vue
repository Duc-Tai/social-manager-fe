<template>
    <div class="home">
        <Home msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Home: () => import('@/components/Home/index.vue'),
    },
})
export default class HomePage extends Vue {
    async mounted() {
        try {
            await this.$api.authApi.login({ email: "tain e" })
        } catch (error) {
        }
    }
}
</script>
  