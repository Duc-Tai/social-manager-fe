<template>
    <div class="home">
        <Register />
    </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Register: () => import('@/components/Auth/Register/index.vue'),
    },
})
export default class AuthRegisterPage extends Vue {

}
</script>
  