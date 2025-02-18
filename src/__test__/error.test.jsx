import { fireEvent, render, screen } from "@testing-library/react";
import Error from "./../components/error/index";

it("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error info="İnternetiniz çok yavaş" />);
  screen.getByText(/İnternetiniz çok yavaş/g);
});

// bileşen fonksiyon propu alıyorsa ve bu fonksiyon bileşen içinde kullanılıyorsa
// test aşamasında gerçek fonksiyonu gönderme şansımız olmadığından dolayı sahte
// bir fonksiyon gönderip doğru zamanda doğru parametrelerle tetikleniyor mu testi yaparız.

it("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  // jest ile sahte fonksiyon oluşturulur
  const mockFn = jest.fn();
  // prop olarak sahte fonksiyonu gönder
  render(<Error info="İnternetiniz çok yavaş" retry={mockFn} />);
  // tekrar dene butonuna tıkla
  fireEvent.click(screen.getByRole("button"));

  // jest ile oluşturulan mock fonksiyonlar test edilebilir
  // fonksiyon çağrıldı mı testi yaptık
  expect(mockFn).toHaveBeenCalled();
});
