import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export type NSFWImageHandling = 'HIDE' | 'SHOW' | 'BLUR';

export const NSFWHandlingOptions: { value: NSFWImageHandling; label: string; description: string }[] = [
	{
		value: 'HIDE',
		label: 'Gizle',
		description: 'NSFW küçük resimleri tıklanmadıkça yüklenmez ve varsayılan olarak NSFW gönderi içeriklerini gizler.'
	},
	{
		value: 'BLUR',
		label: 'Bulanıklaştır',
		description: 'NSFW küçük resimlerini ve görüntülerini üzerine gelinmedikçe bulanıklaştırır ve varsayılan olarak NSFW gönderi içeriklerini gizler.'
	},
	{
		value: 'SHOW',
		label: 'Göster',
		description: 'NSFW görüntülerini her zaman gösterir.'
	}
	];

export type FeedLayout = 'AUTO' | 'OVERLAY' | 'COLUMNS';

export const FeedLayoutOptions: { value: FeedLayout; label: string; description: string }[] = [
	{
		value: 'AUTO',
		label: 'Otomatik',
		description: 'Akış düzeniniz ekran boyutunuza göre otomatik olarak seçilir.'
	},
	{
		value: 'OVERLAY',
		label: 'Kaplama',
		description: 'Gönderileri akışın üzerinde gösterilen bir kaplamada görüntüleyebilirsiniz. Dar ekranlar için iyi.'
	},
	{
		value: 'COLUMNS',
		label: 'Sütunlar',
		description: 'Akışı ve bir gönderiyi yan yana görüntüleyin. Çoklu görev yapmanızı sağlar.'
	}
	];

export type PostPreviewLayout = 'LIST' | 'COMPACT' | 'CARD';

export const PostPreviewLayoutOptions: {
	value: PostPreviewLayout;
	label: string;
	description: string;
	icon: string;
}[] = [
	{
		value: 'LIST',
		label: 'Liste',
		description: 'Tüm gönderilerin küçük resimlerinin listelendiği bir liste',
		icon: 'list'
	},
	{
		value: 'COMPACT',
		label: 'Kompakt',
		description: 'Liste stiline benzer, ancak daha yoğun.',
		icon: 'compress'
	},
	{
		value: 'CARD',
		label: 'Kartlar',
		description: 'Büyük resimler ve gönderi metni önizlemeleri, gönderiyi açmadan içeriği anlayın.',
		icon: 'rectangle-list'
	}
	];

export interface AlexandriteSettings {
	//theme options
	colorScheme: 'light' | 'dark' | null;
	themeHue: number;
	linkHue: number;
	upvoteHue: number;
	downvoteHue: number;
	themeSaturation: number;
	//other options
	nsfwImageHandling: NSFWImageHandling;
	sidebarVisible: boolean;
	navSidebarDocked: boolean;
	loadImagesAsWebp: boolean;
	feedLayout: FeedLayout;
	postPreviewLayout: PostPreviewLayout;
	postListLayoutContentPreview: boolean;
	// whether to show a confirm page before showing the actual modlog
	showModlogWarning: boolean;
	// same as above, but for communities the user is responsible for
	showModlogWarningModerated: boolean;
}

const probablyMobile = window.innerWidth < 800;

export const AlexandriteSettingsDefaults: AlexandriteSettings = {
	// null uses the system default
	colorScheme: null,
	themeHue: 280,
	linkHue: 197,
	upvoteHue: 298,
	downvoteHue: 212,
	themeSaturation: 1,
	nsfwImageHandling: 'HIDE',
	sidebarVisible: !probablyMobile,
	navSidebarDocked: false,
	loadImagesAsWebp: true,
	// todo check if this is a good breakpoint
	feedLayout: 'AUTO',
	postPreviewLayout: probablyMobile ? 'CARD' : 'LIST',
	postListLayoutContentPreview: false,
	showModlogWarning: true,
	showModlogWarningModerated: true
};

export type AlexandriteSettingsStores = {
	[K in keyof AlexandriteSettings]: Writable<AlexandriteSettings[K]>;
};

export const SETTINGS_CONTEXT_KEY = '__SX_SETTINGS_CONTEXT__';

// default settings, when used outside of a valid context, like on `/(meta)`
const defaultSettingsStore: AlexandriteSettingsStores = Object.entries(AlexandriteSettingsDefaults).reduce(
	(stores, v) => {
		const [key, val] = v;
		stores[key as keyof AlexandriteSettingsStores] = writable(val);
		return stores;
	},
	{} as AlexandriteSettingsStores
);

export const getSettingsContext = () => {
	return getContext<AlexandriteSettingsStores>(SETTINGS_CONTEXT_KEY) ?? defaultSettingsStore;
};

export const setSettingsContext = (ctx: AlexandriteSettingsStores) => {
	return setContext<AlexandriteSettingsStores>(SETTINGS_CONTEXT_KEY, ctx);
};
