<div align="center">
	<img src="static/logo.svg?sanitize=true" width="160" height="160" alt="logo">
	<h1>Alexandrite</h1>
</div>

[Alexandrite](https://alexandrite.app/) , [Fediverse](https://simple.wikipedia.org/wiki/Fediverse) için sosyal bağlantı toplayıcı ve tartışma forumu olan [Lemmy](https://join-lemmy.org/) için güzel bir masaüstü öncelikli alternatif web arayüzüdür.

Alexandrite, birçok özellik ile dolu!

- Sonsuz kaydırma
- Gönderileri bir örtü içinde veya besleme ile yan yana ikinci bir sütunda görüntüleyin, böylece yerinizi kaybetmezsiniz
- Özelleştirilebilir tema tonu
- Güçlü hesap değiştirici, aynı veya farklı oturumlar arasında farklı tarayıcı sekmelerinde aynı anda farklı hesaplara giriş yapma
- Çoğu mod araçları
- Çoğu markdown biçimlendirmesini destekler

## Gelişimi Destekleyin

Alexandrite için çok zaman ve çaba harcandı. Gelişimi desteklemek isterseniz [Buy Me a Coffee](https://www.buymeacoffee.com/sheodox) üzerinden katkıda bulunabilirsiniz. Tüm desteklerinizi gerçekten takdir ediyorum!

## Kendinize Barındırma

Alexandrite, birkaç yapılandırma seçeneği ile kendinize barındırmayı destekler. `docker`'a argüman olarak hangi seçeneklerin geçirilebileceğini görmek için [örnek ortam değişkeni yapılandırmasına](.env.example) göz atın.

### Docker Kullanarak

Alexandrite'i barındırmanın en kolay yolu, önceden oluşturulmuş bir görüntü kullanmak veya sağlanan [Dockerfile](Dockerfile) kullanarak kaynaktan inşa etmektir.

Uygulama, konteyner içinde `3000` portunu dinler ve HTTPs sağlamaz, bu nedenle muhtemelen internet ile Alexandrite arasında HTTPS sağlamak için kendi ters proxy'nizi yapılandırmak isteyeceksiniz.

Şu şekilde çalıştırın:

```bash
docker run -p 3000:3000 ghcr.io/sheodox/alexandrite:latest
