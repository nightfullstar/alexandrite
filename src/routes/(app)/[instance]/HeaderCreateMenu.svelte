<Tooltip>
	<span slot="tooltip">Oluştur</span>
	<NavDropdown showOpenIcon={false}>
		<span slot="button">
			<Icon icon="plus" />
			<span class="sr-only">Oluştur</span>
		</span>
		<div slot="menu">
			<ul>
				{#each links as link}
					{#if !link.disabled}
						<li>
							{#if link.as === 'a'}
								<a href={link.href} class="button" on:click={link.click}>
									<Icon icon={link.icon} />
									{link.text}
								</a>
							{:else if link.as === 'button'}
								<button on:click={link.click}>
									<Icon icon={link.icon} />
									{link.text}
								</button>
							{/if}
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</NavDropdown>
</Tooltip>

<script lang="ts">
	import { NavDropdown, Tooltip, Icon } from 'sheodox-ui';
	import { profile } from '$lib/profiles/profiles';

	let links: {
		as: string;
		text: string;
		icon: string;
		href?: string;
		disabled?: boolean;
		click?: (e: MouseEvent) => unknown;
	}[];

	$: links = [
		{
			text: 'Yeni Gönderi',
			icon: 'file',
			href: `/${$profile.instance}/create/post`,
			as: 'a'
		}
	];
</script>
