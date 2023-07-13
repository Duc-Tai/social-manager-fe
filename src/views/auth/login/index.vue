<template>
    <div class="home">
        <Login />
    </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Login: () => import('@/components/Auth/Login/index.vue'),
    },
})
export default class AuthLoginPage extends Vue {

}
</script>
  