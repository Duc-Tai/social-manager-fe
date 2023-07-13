<template>
	<div>
		<p class="description">{{ description }}</p>
		<div class="bg-icon"></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({
	components: {},
	// props: ["icon", "description"],
})
export default class Success extends Vue {
	@Prop() icon!: string
	@Prop() description!: string
}
</script>

<style scoped src="./styles.css"></style>
