import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SimulasiTrading = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Simulasi Trading Forex dengan Akun Demo Gratis' />
      <Header
        title='Simulasi Trading Forex dengan Akun Demo Gratis'
        description='Pelajari cara melakukan simulasi trading forex dengan akun demo gratis untuk meningkatkan keterampilan trading Anda tanpa harus mengambil risiko kehilangan uang sungguhan.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='“JANGAN MEMBUANG UANG ANDA SIA-SIA”' toc2='Fokus hanya pada SATU pasangan mata uang utama.' />
      <div className='partcon'>
        <Section>
        <p>Nasabah dapat membuka akun demo melalui platform aplikasi secara GRATIS. Akun simulasi ini
                        memiliki kemampuan yang sama dengan akun riil.</p>
                    <p>kok gratis?</p>
                    <p>Itu karena broker ingin Nasabah mempelajari seluk beluk platform dan meningkatkan pengalaman
                        trading.</p>
                    <p>Akun demo MEMBERI EDUKASI tentang mekanisme perdagangan forex dengan menguji keterampilan trading
                        dan proses transaksi tanpa risiko.</p>
                    <p>Risiko=Nol!</p>
                    <p>SELALU GUNAKAN AKUN DEMO SAMPAI MENGUASAI SISTEM TRADING YANG LAYAK SEBELUM MEMIKIRKAN UNTUK
                        DEPOSIT DENGAN UANG NYATA.</p>
                    <p>KAMI ULANGI…</p>
                    <p>ANDA HARUS MENGGUNAKAN AKUN DEMO SAMPAI MENGUASAI SISTEM TRADING YANG LAYAK DAN MENGUNTUNGKAN
                        SEBELUM MEMIKIRKAN UNTUK DEPOSIT DENGAN UANG NYATA.</p>
        </Section>
        <Section>
          <Heading number='1' heading='“JANGAN MEMBUANG UANG ANDA SIA-SIA”' />
          <p>Sekarang, letakkan tangan di atas dada dan berkata kepada diri sendiri:</p>
                    <p><strong>“Saya akan trading dengan akun demo sampai mampu mengembangkan keahlian trading yang
                            layak sebelum menggunakan uang sungguhan”</strong></p>
                    <p>Sekarang sentuh kepala Anda dengan jari telunjuk dan berkata ...</p>
                    <p><strong>"Saya seorang trader forex yang cerdas dan sabar!"</strong></p>
                    <p><strong>JANGAN membuka akun riil sampai Anda KONSISTEN melakukan trading yang MENGUNTUNGKAN di
                            akun demo.</strong></p>
                    <p>Jika sulit menunggu sampai mendapat untung di akun demo, maka tidak akan ada kemungkinan untuk
                        meraih profit meskipun telah membuat akun riil.</p>
                    <p>Setidaknya lakukan simulasi trading selama TIGA hingga DUA BELAS bulan.</p>
                    <p>Hei, setidaknya ini bisa menahan kehilangan uang selama setahun. Jika tidak mampu bertahan,
                        sumbangkan saja uang itu ke yayasan amal atau berikan kepada Orang tua. Tunjukkan rasa peduli
                        Anda pada keluarga.</p>
        </Section>
        <Section>
          <Heading number='2' heading='Fokus hanya pada SATU pasangan mata uang utama.' />
          <p>Terlalu rumit untuk mengawasi pasangan mata uang lebih dari satu ketika pertama kali memulai
                        trading.</p>
                    <p>Fokus saja dengan SALAH SATU major currency karena mereka paling likuid dengan spread rendah dan
                        kecil kemungkinan slippage.</p>
                    <p>Fokus waktu Anda pada peningkatan proses trading dan menciptakan kebiasaan analisa yang baik.</p>
                    <p>Anda juga perlu merasakan lingkungan pasar yang berbeda dan mempelajari cara untuk menyesuaikan
                        metode dan strategi seiring perubahan pergerakan pasar.</p>
                    <p>Anda bisa menjadi trader profesional, namun selayaknya hal dengan aspek kehidupan lainnya, untuk
                        mencapai titik tersebut dibutuhkan kerja keras, dedikasi, sedikit keberuntungan dan banyak
                        kesabaran dalam menilai.</p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default SimulasiTrading
