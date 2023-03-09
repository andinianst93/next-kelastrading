import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const TradingKayaRaya = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apakah Trading Bisa Membuat Kaya Raya Penggunanya?' />
      <Header
        title='Apakah Trading Bisa Membuat Kaya Raya Penggunanya?'
        description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='SEMUA trader pernah atau bahkan mengalami KERUGIAN.' toc2='Perdagangan forex bukan untuk kelas pengangguran atau mereka yang berpenghasilan rendah atau
                        memiliki hutang kartu kredit, tidak mampu membayar tagihan listrik atau tidak mampu membeli
                        makan' toc3='Forex trading BUKAN program cepat kaya'/>
      <div className='partcon'>
        <Section>
        <p>Sebelum melangkah lebih lanjut, kami akan jujur memberitahu Anda agar melakukan pertimbangan
                        sebelum bertrading.</p>
        </Section>
        <Section>
          <Heading number='1' heading='SEMUA trader pernah atau bahkan mengalami KERUGIAN.' />
          <p>90% trader telah atau bahkan mengalami kehilangan uang, sebagian besar karena kurangnya
                        perencanaan, pelatihan, disiplin atau pengelolaan uang yang buruk.</p>
                    <p>Jika tidak menyukai kerugian atau super perfeksionis, Anda pasti akan sulit menyesuaikan diri
                        dalam bisnis trading karena hampir semua trader mengalami kerugian di waktu tertentu.</p>
        </Section>
        <Section>
          <Heading number='2' heading='Perdagangan forex bukan untuk kelas pengangguran atau mereka yang berpenghasilan rendah atau
                        memiliki hutang kartu kredit, tidak mampu membayar tagihan listrik atau tidak mampu membeli
                        makan' />
        <p>Anda harus memiliki setidaknya $10,000 modal trading (dalam akun mini) yang bisa dijadikan
                        jaminan.</p>
                    <p>Jangan berharap akan menjadi gazillionaire hanya dengan beberapa ratus dolar dalam waktu instan.
                    </p>
                    <p>Pasar forex adalah salah satu pasar spekulasi dengan ukurannya yang sangat besar, likuiditas
                        tinggi dan kecenderungan mata uang bergerak dalam tren.</p>
                    <p>Jangan berpikir trader di seluruh dunia semuanya kaya raya, faktanya hanya beberapa persentase
                        kecil trader yang sukses.</p>
                    <p>Masalahnya, banyak trader masuk ke dunia trading ini dengan harapan yang muluk, namun
                        mengesampingkan kebenaran bahwa mereka tidak memiliki disiplin untuk benar-benar mempelajari
                        seni trading.</p>
                    <p>Seperti halnya kurang disiplin dalam menjalankan diet atau olah raga tiga kali seminggu.</p>
                    <p>Bahkan, jika tidak mau melakukan ini, bagaimana mungkin berpikir kalau Anda dapat menjadi trader
                        yang sukses?</p>
                    <p>Trading jangka pendek BUKAN untuk para amatir, bukan juga jalan untuk "cepat kaya". Anda tidak
                        akan untung besar tanpa menghadapi risiko besar.</p>
                    <p>Strategi trading yang melibatkan pengambilan tingkat risiko besar berarti menderita kinerja
                        trading yang tidak konsisten dan pasti akan mengalami kerugian besar.</p>
                    <p>Seorang trader yang melakukan ini mungkin bahkan tidak memiliki strategi trading - kecuali jika
                        Anda menyebut judi adalah strategi trading!</p>
        </Section>
        <Section>
          <Heading number='3' heading='Forex trading BUKAN program cepat kaya' />
          <p><strong>Forex trading MEMBUTUHKAN skill dengan WAKTU untuk dikuasai</strong></p>
                    <p>Para trader yang sudah ahli mampu menghasilkan uang di ranah ini. Namun, sebagaimana pekerjaan
                        atau karir sampingan, sukses tentunya tidak terjadi dalam semalam.</p>
                    <p>Forex trading tidak sesederhana yang dipikirkan.</p>
                    <p>Jika benar trading forex itu mudah, maka semua orang yang melakukan trading seharusnya sudah
                        menjadi milyuner.</p>
                    <p>Kenyataannya, bahkan trader dengan pengalaman lama sekalipun masih bisa mengalami kerugian
                        berkala.</p>
                    <p>Tanamkan hal ini di kepala anda: TIDAK ADA JALAN PINTAS DALAM TRADING.</p>
                    <p>Dibutuhkan banyak PRAKTEK dan PENGALAMAN untuk menguasainya.</p>
                    <p>Tidak ada pengganti untuk kerja keras, disiplin latihan dan ketekunan.</p>
                    <p>Belajar trading dengan AKUN DEMO sampai Anda menemukan metode yang cocok sekaligus kuasai
                        kelebihan ataupun kekurangannya hingga nyaman melakukan trading dengan analisa yang objektif.
                    </p>
        </Section>
   
      </div>
    </article>
  </Container>
  )
}

export default TradingKayaRaya
