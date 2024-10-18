import type { HttpError } from '@sveltejs/kit';

export const errorMessages: Record<string, string> = {
	email_not_verified: 'E-posta doğrulanmadı',
    incorrect_login: 'Kullanıcı adı/e-posta veya şifre yanlış',
    couldnt_find_community: 'Topluluk bulunamadı',
    couldnt_create_report: 'Rapor oluşturulamadı',
    community_ban: 'Bu toplulukta yasaklandınız',
    registration_application_pending: 'Kayıt başvurunuz beklemede',
    couldnt_find_post: 'Gönderi bulunamadı',
    not_an_admin: 'Bunu yapamazsınız, yönetici değilsiniz',
    invalid_password: 'Geçersiz şifre',
    email_already_exists: 'Bu e-posta ile bir hesap zaten var',
    captcha_incorrect: 'Yanlış captcha cevabı',
    invalid_name: 'Geçersiz kullanıcı adı',
    rate_limit_error: 'Çok fazla istek yaptınız, tekrar denemeden önce biraz bekleyin.',
    user_already_exists: 'Bu kullanıcı adı ile bir hesap zaten var',
    passwords_dont_match: 'Şifreler eşleşmiyor',
    downvotes_disabled: 'Aşağı oylar devre dışı'
};

const unknownError = 'Bilinmeyen hata';

export function getMessageFromError(e: unknown) {
	if (typeof e === 'string') {
		return errorMessages[e] || e || unknownError;
	}
	// else is type HttpError
	if (e && Object.getOwnPropertyDescriptor(e, 'body')) {
		const httpErr = e as HttpError;

		if (httpErr.body.lemmyError) {
			return errorMessages[httpErr.body.lemmyError] || httpErr.body.lemmyError;
		}
	}

	return e?.toString() || unknownError;
}
