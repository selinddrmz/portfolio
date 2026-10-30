export const metadata = {
  title: "İstanbul Su Durumu | Vaka Çalışması",
  description: "İBB tarihsel baraj verileri ve ayrı canlı veri kaynağıyla geliştirilen editoryal veri ürünü.",
};

const liveUrl = "https://istanbul-su-durumu-ivbw.vercel.app";
const repoUrl = "https://github.com/selinddrmz/istanbul-su-durumu";

export default function IstanbulWaterCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#20251f]">
      <header className="border-b border-stone-300 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <a href="/#projects" className="text-sm font-semibold text-emerald-800 underline">← Portfolyoya dön</a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.22em] text-emerald-800">Vaka çalışması · Canlı veri ürünü</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold leading-tight sm:text-7xl">İstanbul Su Durumu</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">Baraj doluluk verilerini günlük olarak takip etmek, tarihsel örüntüleri keşfetmek ve belirsizliği görünür kılmak için tasarlanmış editoryal veri ürünü.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white">Canlı ürünü aç ↗</a>
            <a href={repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-stone-400 px-5 py-3 text-sm font-semibold">GitHub deposu ↗</a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)]">
        <article className="space-y-12">
          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">01 · PROBLEM</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Veriyi yalnızca göstermek değil, keşfedilebilir kılmak</h2>
            <p className="mt-4 leading-7 text-stone-700">Bir çevre haber sitesindeki muhabir ve okurların İstanbul barajlarının durumunu anlaması, geçmiş dönemleri karşılaştırması ve verinin sınırlarını görebilmesi hedeflendi. Ürün kurgusal bir müşteri senaryosu için geliştirildi; herhangi bir kurumla resmî iş birliği olduğu iddia edilmez.</p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">02 · KULLANICI VE İHTİYAÇ</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Muhabir ve meraklı okur</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-stone-700">
              <li>Son ölçümün tarihini ve kaynağını hızla bulmak.</li>
              <li>Barajlar ve yıllar arasında filtreleme yaparak eğilimleri incelemek.</li>
              <li>Mevsimsel tahminin belirsizliğini ve yöntem sınırlarını anlamak.</li>
            </ul>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">03 · VERİ HATTI VE MİMARİ</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Tarihsel ve canlı kaynakları ayrı tutmak</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-stone-300 bg-white p-4"><b>İBB Açık Veri Portalı</b><p className="mt-2 text-sm text-stone-600">Tarihsel günlük kayıtlar; dosyadaki son tarih 19.02.2024.</p></div>
              <div className="rounded-xl border border-stone-300 bg-white p-4"><b>Canlı veri API'si</b><p className="mt-2 text-sm text-stone-600">İSKİ uç noktası denenir; erişilemezse kaynak atfı belirtilen yedek uç nokta kullanılır.</p></div>
              <div className="rounded-xl border border-stone-300 bg-white p-4"><b>Next.js API route</b><p className="mt-2 text-sm text-stone-600">Canlı kaynak isteğini sunucu tarafında yönetir ve kaynağı yanıtla birlikte bildirir.</p></div>
              <div className="rounded-xl border border-stone-300 bg-white p-4"><b>Vercel + tarayıcı</b><p className="mt-2 text-sm text-stone-600">Uygulamayı yayınlar; grafikler ve filtreler istemci tarafında çalışır.</p></div>
            </div>
            <p className="mt-4 text-sm leading-6 text-stone-600">Tarihsel dosya güncel ölçüm değildir. Canlı gösterge ayrı kaynaktan gelir; ölçüm tarihi ve kaynak atfı kartta gösterilir.</p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">04 · ARAYÜZ VE ETKİLEŞİM</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">KPI → grafik → tablo</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-stone-700">
              <li>Üçten fazla KPI, tarihsel ana grafik ve aylık mevsimsellik grafiği.</li>
              <li>Baraj ve yıl aralığı kontrolleri; tarih ve doluluk aralığı filtreleri; sıralanabilir ayrıntı tablosu.</li>
              <li>Her grafik için kısa açıklama ve veriyi tablo olarak görme seçeneği.</li>
              <li>Canlı ölçüm kartı tarihsel seriyle karıştırılmayacak biçimde ayrıştırılır.</li>
            </ul>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">05 · ZORUNLU İLERİ ÖZELLİK</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">12 aylık mevsimsel tahmin ve belirsizlik</h2>
            <p className="mt-4 leading-7 text-stone-700">Her gelecek ay için seçilen tarih aralığındaki aynı takvim aylarının tarihsel ortalaması hesaplanır. Gölgelendirilmiş bant ortalama ±1 örnek standart sapmasını temsil eder; sınırlar yüzde 0–100 aralığında tutulur. Aynı takvim gününün tarihsel veri setinde bulunan son 10 yıllık kayıtları ayrıca karşılaştırılır.</p>
            <p className="mt-3 leading-7 text-stone-700">Bu basit yöntem yağış, buharlaşma, tüketim, su transferi, hava durumu veya işletme kararlarını modellemez. Resmî tahmin değildir; veri setinde bulunmayan tarihler gösterilmez.</p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">06 · DAYANIKLILIK VE ERİŞİLEBİLİRLİK</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Hata ve boş durumları görünür kılmak</h2>
            <p className="mt-4 leading-7 text-stone-700">Arayüzde yükleniyor, boş sonuç ve canlı API hatası için ayrı durumlar bulunur. Grafiklerin metinsel özeti ve tablo alternatifi vardır; filtreler klavyeyle kullanılabilir. Mobil görünüm tarayıcının duyarlı cihaz modunda kontrol edilmiştir. Lighthouse puanları, ölçüm tamamlandıktan sonra bu sayfaya eklenmelidir.</p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">07 · KULLANICI TESTİ</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Test bulguları</h2>
            <p className="mt-4 leading-7 text-stone-700">İlk katılımcıyla mobil cihazda üç görev tamamlandı. Katılımcı, en az %90 doluluk filtresini yaklaşık 1 saniyede uyguladı ve işlemi kolay buldu. Tahmin grafiğindeki belirsizlik bandını doğru açıkladı; aynı gün karşılaştırması bölümünü de buldu.</p>
            <div className="mt-4 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="border-b border-stone-300"><th className="py-2 pr-4">Görev</th><th className="py-2 pr-4">Sonuç</th><th className="py-2">Gözlem</th></tr></thead><tbody><tr className="border-b border-stone-200"><td className="py-2 pr-4">En az %90 doluluk filtresi</td><td className="py-2 pr-4">Başarılı</td><td className="py-2">Yaklaşık 1 saniye; kolay</td></tr><tr className="border-b border-stone-200"><td className="py-2 pr-4">Tahmin belirsizlik bandını açıklama</td><td className="py-2 pr-4">Başarılı</td><td className="py-2">Katılımcı doğru açıkladı</td></tr><tr><td className="py-2 pr-4">Aynı gün karşılaştırmasını bulma</td><td className="py-2 pr-4">Başarılı</td><td className="py-2">Bölümü buldu</td></tr></tbody></table></div>
            <p className="mt-3 text-sm text-stone-600">Katılımcı 1: iPhone, mobil tarayıcı. Katılımcı 2 testi henüz yapılmadı; en az iki katılımcı şartını tamamlamak için ikinci test eklenmelidir. Test görevleri: doluluk filtresi, tahmin ve belirsizlik bandını açıklama, aynı gün geçmiş karşılaştırmasını bulma.</p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-widest text-emerald-800">08 · SONUÇ VE SONRAKİ ADIM</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Bir haftam daha olsaydı…</h2>
            <p className="mt-4 leading-7 text-stone-700">Günlük tarihsel snapshot biriktirerek uzun dönemli canlı zaman serisi kurar, tahmin yöntemini daha güçlü bir modelle karşılaştırır, iki veya daha fazla kullanıcıyla görev bazlı testleri tamamlar ve Lighthouse ölçümlerine göre performans/erişilebilirlik iyileştirmeleri yapardım.</p>
          </section>

          <section className="rounded-xl border border-dashed border-stone-400 bg-white p-5">
            <p className="text-xs font-bold tracking-widest text-emerald-800">09 · DEMO VİDEOSU</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">60–90 saniyelik ürün turu</h2>
            <p className="mt-3 leading-7 text-stone-700">Demo kaydı tamamlandığında video bağlantısı veya gömme kodu buraya eklenecek. Henüz kaydedilmemiş bir video varmış gibi gösterilmez.</p>
          </section>
        </article>

        <aside className="h-fit space-y-5 lg:sticky lg:top-8">
          <div className="rounded-xl border border-stone-300 bg-white p-5">
            <p className="text-xs font-bold tracking-widest text-emerald-800">TEKNOLOJİLER</p>
            <p className="mt-3 leading-7 text-stone-700">Next.js · React · TypeScript · Recharts · GitHub · Vercel</p>
          </div>
          <div className="rounded-xl border border-stone-300 bg-white p-5">
            <p className="text-xs font-bold tracking-widest text-emerald-800">PROJE BAĞLANTILARI</p>
            <p className="mt-3"><a className="font-semibold text-emerald-800 underline" href={liveUrl} target="_blank" rel="noreferrer">Canlı ürünü aç ↗</a></p>
            <p className="mt-2"><a className="font-semibold text-emerald-800 underline" href={repoUrl} target="_blank" rel="noreferrer">GitHub deposu ↗</a></p>
          </div>
          <div className="rounded-xl border border-stone-300 bg-white p-5">
            <p className="text-xs font-bold tracking-widest text-emerald-800">CV CÜMLESİ</p>
            <p className="mt-3 text-sm leading-6 text-stone-700">Next.js ve TypeScript ile İBB tarihsel verisi ve canlı kaynak kullanan; filtrelenebilir grafikler, 12 aylık mevsimsel tahmin ve belirsizlik bandı sunan İstanbul Su Durumu veri ürününü geliştirdim.</p>
          </div>
        </aside>
      </div>
      <footer className="border-t border-stone-300 px-6 py-8 text-center text-sm text-stone-600">Selin Durmaz · İstanbul Su Durumu</footer>
    </main>
  );
}
