<style>
	.languages {
		max-height: 20rem;
		overflow: auto;
	}
	.search {
		flex-basis: 15rem;
		flex-shrink: 0;
	}
</style>

<Accordion open>
	<span slot="title">Diller</span>
	<Stack dir="c" gap={2}>
		<Alert variant="warning">Uyarı: Eğer "Belirsiz" seçeneğini seçerseniz paylaşılan içeriklerin çoğunu göremeyeceksiniz.</Alert>
		<Stack dir="r" gap={2} justify="between" align="center">
			<p class="m-0">
				{#if selectedLanguages.length}
					You use <strong>{selectedLanguages.map((lang) => lang.name).join(', ')}</strong>.
				{:else}
					Gönderi paylaştığınız ve yorum yaptığınız dili aşağıdan seçebilirsiniz.
				{/if}
			</p>
			<div class="search">
				<Search bind:value={langSearchText} label="Dilleri Ara" placeholder="Dilleri Ara" />
			</div>
		</Stack>
		<div class="languages p-2">
			{#each languageSearchResults as lang}
				<Checkbox checked={selected.includes(lang.id)} on:change={() => toggleSelected(lang.id)}>
					{lang.name}
				</Checkbox>
			{/each}
		</div>
	</Stack>
</Accordion>

<script lang="ts">
	import type { Language } from 'lemmy-js-client';
	import { Alert, Search, Checkbox, Accordion, Stack } from 'sheodox-ui';
	export let selected: number[];
	export let languages: Language[];

	let langSearchText = '';

	$: selectedLanguages = languages.filter((lang) => selected.includes(lang.id));

	$: languageSearchResults = !langSearchText
		? languages
		: languages.filter((lang) => lang.name.toLowerCase().includes(langSearchText));

	function toggleSelected(id: number) {
		if (selected.includes(id)) {
			selected.splice(selected.indexOf(id), 1);
			selected = selected;
		} else {
			selected.push(id);
			selected = selected;
		}
	}
</script>
