import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SesiJamBukaForex = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Sesi Jam Buka Pasar Forex dalam Trading'
        />
        <Header
          title='Sesi Jam Buka Pasar Forex dalam Trading'
          description='Ketahui sesi jam buka pasar forex dalam trading. Periksa jam buka pasar forex agar lebih mengetahui waktu yang tepat untuk transaksi Anda.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='number' toc2='number' />
        <div className='partcon'>
          <Section>
            <p>
              Penting untuk Anda mengetahui jam buka pasar. Setelah tahu apa itu
              forex, mengapa harus trading forex dan siapa yang membuat market,
              sekarang saatnya bagi Anda untuk belajar kapan melakukan trading.
              Waktunya untuk mengenal saat - saat trading forex.
            </p>

            <p>
              Market forex memang terbuka 24 jam sehari, tetapi bukan berarti
              transaksi selalu bisa dilakukan terus-menerus. Peluang
              menghasilkan uang adalah saat tren market bergerak naik atau tren
              market bergerak turun.
            </p>
            <p>
              Tapi akan mengalami kesulitan ketika tren market tidak bergerak
              sama sekali (konsolidasi). Dan percayalah, ada waktunya dimana
              market akan diam.
            </p>
            <p>
              Dan percayalah, ada waktunya dimana pasar akan diam membatu
              seperti korban-korban Medusa.
            </p>

            <p>
              Pada kelas ini, kami akan membantu Anda menentukan waktu terbaik
              untuk melakukan trading.
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Sesi Trading Forex' />
            <p>
              Sebelum melihat waktu yang tepat untuk trading, kita harus
              memahami apa yang dimaksud dengan 24 jam sehari dalam sesi forex.
              Market forex terbagi menjadi empat sesi: sesi market Sydney, sesi
              market Tokyo, sesi market London dan sesi market New York. Di
              bawah ini adalah tabel jadwal waktu buka dan waktu tutup untuk
              setiap sesi.
            </p>
            <p>
              <strong>
                Musim semi/musim panas di AS (Maret/April - Oktober/November)
              </strong>
            </p>
            <table border='0' width='525'>
              <tbody>
                <tr>
                  <th>Waktu setempat</th>
                  <th>EDT</th>
                  <th>BST (GMT+1)</th>
                </tr>
                <tr>
                  <td align='center'>
                    Sydney Buka– 7:00 AM
                    <p>Sydney Tutup – 4:00 PM</p>
                  </td>
                  <td align='center'>
                    5:00 PM
                    <p>2:00 AM</p>
                  </td>
                  <td align='center'>
                    10:00 PM
                    <p>7:00 AM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    Tokyo Buka– 9:00 AM
                    <p>Tokyo Tutup – 6:00 PM</p>
                  </td>
                  <td align='center'>
                    8:00 PM
                    <p>5:00 AM</p>
                  </td>
                  <td align='center'>
                    1:00 AM
                    <p>10:00 AM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    London Buka – 8:00 AM
                    <p>London Tutup – 4:00 PM</p>
                  </td>
                  <td align='center'>
                    3:00 AM
                    <p>11:00 AM</p>
                  </td>
                  <td align='center'>
                    8:00 AM
                    <p>4:00 PM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    New York Buka – 8:00 AM
                    <p>New York Tutup – 5:00 PM</p>
                  </td>
                  <td align='center'>
                    8:00 AM
                    <p>5:00 PM</p>
                  </td>
                  <td align='center'>
                    1:00 PM
                    <p>10:00 PM</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>
                Musim gugur/musim dingin di AS (Oktober/November - Maret/April)
              </strong>
            </p>
            <table border='0' width='525'>
              <tbody>
                <tr>
                  <th>Waktu setempat</th>
                  <th>EST</th>
                  <th>GMT</th>
                </tr>
                <tr>
                  <td align='center'>
                    Sydney Buka – 7:00 AM
                    <p>Sydney Tutup – 4:00 PM</p>
                  </td>
                  <td align='center'>
                    3:00 PM
                    <p>12:00 AM</p>
                  </td>
                  <td align='center'>
                    8:00 PM
                    <p>5:00 AM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    Tokyo Buka – 9:00 AM
                    <p>Tokyo Tutup – 6:00 PM</p>
                  </td>
                  <td align='center'>
                    7:00 PM
                    <p>4:00 AM</p>
                  </td>
                  <td align='center'>
                    12:00 AM
                    <p>9:00 AM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    London Buka – 8:00 AM
                    <p>London Tutup – 4:00 PM</p>
                  </td>
                  <td align='center'>
                    3:00 AM
                    <p>11:00 AM</p>
                  </td>
                  <td align='center'>
                    8:00 AM
                    <p>4:00 PM</p>
                  </td>
                </tr>
                <tr>
                  <td align='center'>
                    New York Buka – 8:00 AM
                    <p>New York Tutup – 5:00 PM</p>
                  </td>
                  <td align='center'>
                    8:00 AM
                    <p>5:00 PM</p>
                  </td>
                  <td align='center'>
                    1:00 PM
                    <p>10:00 PM</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Waktu buka dan waktu tutup market mengikuti jam trading,
              kebanyakan jam dagang dimulai antara jam 7-9 pagi waktu setempat.
              Waktu buka dan tutup juga berbeda di bulan Oktober/November dan
              Maret/April karena sebagian negara (seperti Amerika Serikat,
              Inggris dan Australia) bergeser ke/dari daylight savings time
              (DST).
            </p>
            <p>
              Bulan di mana suatu negara bergeser ke/dari DST juga bervariasi
              sehingga lebih membingungkan. Untungnya negeri Jepang tidak
              menerapkan sistem DST, terima kasih Jepang karena menjaganya tetap
              simple.
            </p>
            <p>
              Saat ini, Anda mungkin melihat waktu buka market Sydney dan
              bertanya-tanya mengapa bergeser dua jam di Zona Waktu Timur (EST).
              Anda akan mengira bahwa waktu buka market Sydney hanya bergerak
              satu jam ketika market AS menyesuaikan waktu standar, tetapi ingat
              bahwa ketika AS bergeser satu jam ke belakang, Sydney sebenarnya
              bergerak maju satu jam (musim berlawanan di Australia).
            </p>
            <p>
              Anda harus selalu ingat ini, jika berencana untuk trading dalam
              periode tersebut. Perhatikan juga di antara setiap sesi trading,
              terdapat dua sesi buka secara bersamaan.
            </p>
            <p>
              Selama musim panas - dari jam 3:00-4:00 pagi ET, sesi market Tokyo
              dan market London saling tumpang tindih dan selama musim panas dan
              musim dingin dari jam 8:00 AM - 12:00 PM ET, sesi market London
              dan market New York juga saling tumpang tindih.
            </p>
            <p>
              Jam-jam ini adalah waktu tersibuk sepanjang satu hari dagang
              karena terdapat lebih banyak volume ketika dua market dibuka
              bersamaan. Ini masuk akal karena pada jam-jam tersebut, para
              pelaku market menerapkan prinsip & wheelin and dealin, artinya
              akan lebih banyak uang yang ditransfer.
            </p>
            <p>
              Dan sekarang kita lihat pergerakan pip rata-rata dari pasangan
              mata uang utama dengan masing-masing sesi dagang.
            </p>
            <table border='0' width='425'>
              <tbody>
                <tr>
                  <th>PASANGAN</th>
                  <th>TOKYO</th>
                  <th>LONDON</th>
                  <th>NEW YORK</th>
                </tr>
                <tr>
                  <td align='center'>EUR/USD</td>
                  <td align='center'>76</td>
                  <td align='center'>
                    <strong>114</strong>
                  </td>
                  <td align='center'>92</td>
                </tr>
                <tr>
                  <td align='center'>GBP/USD</td>
                  <td align='center'>92</td>
                  <td align='center'>
                    <strong>127</strong>
                  </td>
                  <td align='center'>99</td>
                </tr>
                <tr>
                  <td align='center'>USD/JPY</td>
                  <td align='center'>51</td>
                  <td align='center'>
                    <strong>66</strong>
                  </td>
                  <td align='center'>59</td>
                </tr>
                <tr>
                  <td align='center'>AUD/USD</td>
                  <td align='center'>77</td>
                  <td align='center'>
                    <strong>83</strong>
                  </td>
                  <td align='center'>81</td>
                </tr>
                <tr>
                  <td align='center'>NZD/USD</td>
                  <td align='center'>62</td>
                  <td align='center'>
                    <strong>72</strong>
                  </td>
                  <td align='center'>70</td>
                </tr>
                <tr>
                  <td align='center'>USD/CAD</td>
                  <td align='center'>57</td>
                  <td align='center'>
                    <strong>96</strong>
                  </td>
                  <td align='center'>96</td>
                </tr>
                <tr>
                  <td align='center'>USD/CHF</td>
                  <td align='center'>67</td>
                  <td align='center'>
                    <strong>102</strong>
                  </td>
                  <td align='center'>83</td>
                </tr>
                <tr>
                  <td align='center'>EUR/JPY</td>
                  <td align='center'>102</td>
                  <td align='center'>
                    <strong>129</strong>
                  </td>
                  <td align='center'>107</td>
                </tr>
                <tr>
                  <td align='center'>GBP/JPY</td>
                  <td align='center'>118</td>
                  <td align='center'>
                    <strong>151</strong>
                  </td>
                  <td align='center'>132</td>
                </tr>
                <tr>
                  <td align='center'>AUD/JPY</td>
                  <td align='center'>98</td>
                  <td align='center'>
                    <strong>107</strong>
                  </td>
                  <td align='center'>103</td>
                </tr>
                <tr>
                  <td align='center'>EUR/GBP</td>
                  <td align='center'>78</td>
                  <td align='center'>
                    <strong>61</strong>
                  </td>
                  <td align='center'>47</td>
                </tr>
                <tr>
                  <td align='center'>EUR/CHF</td>
                  <td align='center'>79</td>
                  <td align='center'>
                    <strong>109</strong>
                  </td>
                  <td align='center'>84</td>
                </tr>
              </tbody>
            </table>
            <p>
              Dari tabel tersebut, bisa dilihat pada sesi pasar London memberi
              pergerakan pip terbanyak. Perhatikan bagaimana beberapa pasangan
              mata uang memiliki pergerakan pip lebih besar dari pasangan mata
              uang lainnya.
            </p>
            <p>
              <img
                class='partimg'
                alt='grafik volatilitas harian'
                src='https://www.hsb.co.id/learn/images/forex-daily-volatility.png'
              />
            </p>
            <p>
              Kita akan menilik lebih dalam setiap sesi dan jam buka pasar yang
              saling tumpang-tindih.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default SesiJamBukaForex
