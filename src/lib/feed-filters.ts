export type FeedType = 'top' | 'community' | 'user';

export interface FilterOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export const NormalFeedTypeOptions = [
    {
        value: 'Posts',
        label: 'Gönderiler'
    },
    {
        value: 'Comments',
        label: 'Yorumlar'
    }
];
export const UserFeedTypeOptions = (isMe: boolean) => {
    const baseTypes = [
        {
            value: 'Overview',
            label: 'Genel Bakış'
        },
        {
            value: 'Comments',
            label: 'Yorumlar'
        },
        {
            value: 'Posts',
            label: 'Gönderiler'
        }
    ];
    return !isMe
        ? baseTypes
        : [
                ...baseTypes,
                {
                    value: 'Saved',
                    label: 'Kaydedilenler'
                }
          ];
};
export const ReportFeedStateOptions = [
    {
        value: 'Unread',
        label: 'Okunmamış'
    },
    {
        value: 'All',
        label: 'Tümü'
    }
];
export const ReportFeedTypeOptions = [
    {
        value: 'All',
        label: 'Tümü'
    },
    {
        value: 'Posts',
        label: 'Gönderiler'
    },
    {
        value: 'Comments',
        label: 'Yorumlar'
    }
];

export const SearchTypeOptions = [
    {
        value: 'All',
        label: 'Tümü'
    },
    {
        value: 'Posts',
        label: 'Gönderiler'
    },
    {
        value: 'Comments',
        label: 'Yorumlar'
    },
    {
        value: 'Communities',
        label: 'Topluluklar'
    },
    {
        value: 'Users',
        label: 'Kullanıcılar'
    },
    {
        value: 'Url',
        label: 'URL'
    }
];

export const ListingOptions = (loggedIn: boolean) => [
    {
        value: 'Subscribed',
        label: 'Abonelikler',
        disabled: !loggedIn
    },
    {
        value: 'Local',
        label: 'Yerel'
    },
    {
        value: 'All',
        label: 'Tümü'
    }
];

export const PostSortOptions = [
    {
        value: 'Hot',
        label: 'Popüler'
    },
    {
        value: 'Active',
        label: 'Aktif'
    },
    {
        value: 'Scaled',
        label: 'Ölçeklenmiş'
    },
    {
        value: 'New',
        label: 'Yeni'
    },
    {
        value: 'Old',
        label: 'Eski'
    },
    {
        value: 'MostComments',
        label: 'En Çok Yorum'
    },
    {
        value: 'NewComments',
        label: 'Yeni Yorumlar'
    },
	{
        value: 'TopHour',
        label: 'Saatin En İyisi'
    },
    {
        value: 'TopSixHour',
        label: 'Son 6 Saatin En İyisi'
    },
    {
        value: 'TopTwelveHour',
        label: 'Son 12 Saatin En İyisi'
    },
    {
        value: 'TopDay',
        label: 'Günün En İyisi'
    },
    {
        value: 'TopWeek',
        label: 'Haftanın En İyisi'
    },
    {
        value: 'TopMonth',
        label: 'Ayın En İyisi'
    },
    {
        value: 'TopYear',
        label: 'Yılın En İyisi'
    },
    {
        value: 'TopAll',
        label: 'Tüm Zamanların En İyisi'
    }
];

export const CommentFeedSortOptions = [
    {
        value: 'New',
        label: 'Yeni'
    },
    {
        value: 'Old',
        label: 'Eski'
    },
	{
        value: 'TopHour',
        label: 'Saatin En İyisi'
    },
    {
        value: 'TopSixHour',
        label: 'Son 6 Saatin En İyisi'
    },
    {
        value: 'TopTwelveHour',
        label: 'Son 12 Saatin En İyisi'
    },
    {
        value: 'TopDay',
        label: 'Günün En İyisi'
    },
    {
        value: 'TopWeek',
        label: 'Haftanın En İyisi'
    },
    {
        value: 'TopMonth',
        label: 'Ayın En İyisi'
    },
    {
        value: 'TopYear',
        label: 'Yılın En İyisi'
    },
    {
        value: 'TopAll',
        label: 'Tüm Zamanların En İyisi'
    }
];

export const SearchSortOptions = CommentFeedSortOptions;

export const InboxTypes = [
    { value: 'Unread', label: 'Okunmamış' },
    { value: 'All', label: 'Tümü' }
];

export const InboxListings = [
    { value: 'All', label: 'Tümü' },
    { value: 'Replies', label: 'Yanıtlar' },
    { value: 'Mentions', label: 'Bahsedilenler' },
    { value: 'Messages', label: 'Mesajlar' }
];
export const InboxSortOptions = [
    {
        value: 'Hot',
        label: 'Popüler'
    },
    {
        value: 'Top',
        label: 'En İyi'
    },
    {
        value: 'New',
        label: 'Yeni'
    },
    {
        value: 'Old',
        label: 'Eski'
    }
];

export const CommentSortOptions = [
    {
        value: 'Hot',
        label: 'Popüler'
    },
    {
        value: 'Top',
        label: 'En İyi'
    },
    {
        value: 'New',
        label: 'Yeni'
    },
    {
        value: 'Old',
        label: 'Eski'
    }
];

export const UserSortOptions = [
    {
        value: 'New',
        label: 'Yeni'
    },
    {
        value: 'Old',
        label: 'Eski'
    },
    {
        value: 'TopHour',
        label: 'Saatin En İyisi'
    },
    {
        value: 'TopSixHour',
        label: 'Son 6 Saatin En İyisi'
    },
    {
        value: 'TopTwelveHour',
        label: 'Son 12 Saatin En İyisi'
    },
    {
        value: 'TopDay',
        label: 'Günün En İyisi'
    },
    {
        value: 'TopWeek',
        label: 'Haftanın En İyisi'
    },
    {
        value: 'TopMonth',
        label: 'Ayın En İyisi'
    },
    {
        value: 'TopYear',
        label: 'Yılın En İyisi'
    },
    {
        value: 'TopAll',
        label: 'Tüm Zamanların En İyisi'
    }
];