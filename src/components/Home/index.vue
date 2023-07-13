<template src="./template.html"></template>
  
<script lang="ts">
import { apiErrorHandler } from '@/utils/apiHanlers';
import { languageKey } from '@/utils/common';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
        DefaultLayout: () => import("@/layouts/DefaultLayout.vue")
    }
})
export default class HomeComponent extends Vue {
    onChangeLanguage(language: string) {
        this.$i18n.locale = language
        localStorage.setItem(languageKey, language)
        this.$store.commit("site/setLanguage", language)
    }

    onPustToastification(type: string) {
        if (type === 'success') this.$pushNotification.success(`${this.$t("success")}`)
        else this.$pushNotification.error(`${this.$t("fail")}`)
    }
}
</script>
<style scoped></style>
  