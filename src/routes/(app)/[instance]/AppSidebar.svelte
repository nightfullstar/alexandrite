<style lang="scss">
	nav :global(.icon-link) {
		display: inline-grid !important;
		grid-template-columns: 2.5rem 1fr;
		align-items: center;

		:global(a) :global(*:first-child) {
			width: 2.5rem;
		}
	}
</style>

<div>
	<Stack cl="mx-4 sx-badge-gray sx-font-size-2" dir="r" align="center" gap={1}>
		<Logo size="tiny" />
		<span class="fw-normal">Powered by</span>
		<ExternalLink href="https://github.com/sheodox/alexandrite">Alexandrite</ExternalLink>
	</Stack>
	<nav class="sx-sidebar-simple-links">
		<Stack dir="c" gap={1}>
			{#each links as link}
				<a href={link.href} class="icon-link plain-link"><Icon icon={link.icon} /> <span>{link.text}</span></a>
			{/each}

			<SidebarSubscriptionList
				title="Favoriler"
				communities={favoriteCommunities.map((v) => v.community)}
				favorites={$favoriteCommunitiesIds}
				on:favorite={(e) => onFavorite(e.detail)}
			/>

			{#if $siteMeta.my_user}
				<SidebarSubscriptionList
					title="Moderasyon"
					communities={$siteMeta.my_user.moderates.map((v) => v.community)}
					favorites={$favoriteCommunitiesIds}
					on:favorite={(e) => onFavorite(e.detail)}
				/>
			{/if}

			<SidebarSubscriptionList
				title="Abonelikler"
				communities={subscriptions.map((v) => v.community)}
				favorites={$favoriteCommunitiesIds}
				on:favorite={(e) => onFavorite(e.detail)}
			/>
		</Stack>
	</nav>
</div>

<script lang="ts">
	import type { CommunityFollowerView } from 'lemmy-js-client';
	import { Stack, ExternalLink, Icon } from 'sheodox-ui';
	import SidebarSubscriptionList from './SidebarSubscriptionList.svelte';
	import { getAppContext } from '$lib/app-context';
	import { localStorageBackedStore } from '$lib/utils';
	import { profile } from '$lib/profiles/profiles';
	import Logo from '$lib/Logo.svelte';

	export let subscriptions: CommunityFollowerView[] = [];

	const { siteMeta } = getAppContext();

	const favoriteCommunitiesIds = localStorageBackedStore<number[]>('favorite-communities', []);

	$: favoriteCommunities = subscriptions.filter((sub) => $favoriteCommunitiesIds.includes(sub.community.id));

	function onFavorite({ communityId, favorite }: { communityId: number; favorite: boolean }) {
		if (favorite) {
			favoriteCommunitiesIds.update((coms) => Array.from(new Set([...coms, communityId])));
		} else {
			favoriteCommunitiesIds.update((coms) => {
				const c = new Set(coms);
				c.delete(communityId);
				return Array.from(c);
			});
		}
	}

	$: loggedIn = $profile.loggedIn;
	$: links = [
		{ href: `/${$profile.instance}`, text: 'Ana Sayfa', icon: 'home' },
		{ href: `/${$profile.instance}/search`, text: 'Ara', icon: 'magnifying-glass' },
		{ href: `/${$profile.instance}/u/${$profile.username}`, text: 'Profil', icon: 'user', disabled: !loggedIn },
		{ href: `/${$profile.instance}/communities`, text: 'Topluluklar', icon: 'users' },
		{ text: 'Ayarlar', icon: 'cog', href: `/${$profile.instance}/settings` },
		{ href: '/about', text: 'Alexandrite Hakkında', icon: 'address-card' },
		{ text: 'Yardım', icon: 'question-circle', href: '/help', as: 'a' }
	].filter((f) => !f.disabled);
</script>
