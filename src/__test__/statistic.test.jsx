import { render, screen, waitFor } from "@testing-library/react";
import Statistic from "../pages/home/Statistic";
import api from "../api";
import millify from "millify";

// testler api isteklerine bağlı olmamalı apiden gelen cevap testin geçip
// geçmeme durumunu etkilememeli. api modülünü(axios olsa axios modülü)
// mocklayıp göndereceği cevapların sahte versiyonunu göndereceğiz ve gerçekten
// api modülünü beklemek yerine sahte verilerle test yapacağız.

// API mock dosyasını import et
// gerçek yol verilir.
jest.mock("../api");

describe("istatistik componentinin testleri", () => {
  // her testen önce mock fonksiyonunu temizler

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir.", async () => {
    //
    api.get.mockResolvedValueOnce({ data: [] });

    // Bileşeni renderla
    render(<Statistic />);
    // elementi çağırma aynı zamanda ekranda mı testini yaparız ayrıca toBeInTheDocument testi yapılmaz.
    screen.getByTestId("home-loader");
  });

  test("Loader'ın ardından ekrana istatistikler gelir", async () => {
    //mocklanmış veri
    const totals = {
      confirmed: 701166431,
      recovered: 590451974,
      critical: 2877,
      deaths: 7014639,
      lastChange: "2024-06-04T00:28:51+00:00",
      lastUpdate: "2024-10-16T00:11:54+00:00",
    };

    // API isteği atılınca olumlu cevap gitmesini ve gidecek cevabın içeriği belirledik
    api.get.mockResolvedValueOnce({ data: [totals] });
    // Bileşeni renderla
    render(<Statistic />);
    // belirli bir sürenin ardından ekranda loader yoktur
    // waitfor ile loader ekrandan gidene kadar bekle diyoruz
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );

    // ekranda toplam vaka başlığı ve sayısı yazıyor mu?
    expect(screen.getByText(/toplam vaka/i));
    expect(screen.getByText(millify(totals.confirmed)));

    // ekranda toplam iyileşen başlığı ve sayısı yazıyor mu?
    expect(screen.getByText("Toplam İyileşen"));
    expect(screen.getByText(millify(totals.recovered)));

    // ekranda toplam vefat başlığı ve sayısı yazıyor mu?
    expect(screen.getByText(/toplam vefat/i));
    expect(screen.getByText(millify(totals.deaths)));
  });

  test("Eğer api isteği başarısızsa hata mesajı görüntülenir.", async () => {
    // API isteği başarısız olması için mocklanmış hata verir
    api.get.mockRejectedValueOnce(new Error("Zaman aşımına uğradı"));
    // Bileşeni renderla
    render(<Statistic />);
    // belirli bir sürenin ardından ekranda loader gider
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );
    // toplam vaka başlığı ekranda yoktur
    expect(screen.queryByText("Toplam Vaka")).not.toBeInTheDocument();

    // ekranda hata mesajı görüntülenir
    screen.getByText("İstatistikler alınamıyor...");
  });
});

/* 
  ! Seçiciler
 1) Method  Tipi | 2) All İfadesi | 3) Seçici Method

 * get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa hata verir

 * query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır | elementi bulamazsa hata vermez

 * find > elementin ekrana basılmasının asenkron olduğu durumlarda kullanılır
 * not: find methodu promise döndürdüğü için async await ile kullanılmalı
 
 * eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir
 * not: all kullanıırsa dönen cevapta 1 eleman olsa bile dizi döner
 * not: all kullanılmzsa ama ekranda koşula uyan 1den fazla eleman varsa hatat verir  

 */

// describe("istatistik componentinin testleri", () => {
//   beforeAll(() => {
//     console.log("Hepsinden önce 1 kere çalışır");
//   });
//   beforeEach(() => {
//     console.log("Her testten önce 1 kere çalışır");
//   });
//   // Testler
//   test("x", () => {});
//   test("y", () => {});
//   test("z", () => {});
//   //
//   afterAll(() => {
//     console.log("Hepsinden sonra 1 kere çalışır");
//   });
//   afterEach(() => {
//     console.log("Her testten sonra 1 kere çalışır");
//   });
// });
