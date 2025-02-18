import { render, screen } from "@testing-library/react";
import Item from "../pages/home/Item";

// Normal şartlarda bir bileşeni prop göndererek kullanıyorsanız test
// ortmanındada normalde gönderdiğiniz proplara benzer proplar göndermeli
// ve bileşen içieriği bu proplara bağlı olarak düzgün şekilde
// güncelleniyor mu test etmeliyiz

test("Gönderilen proplar doğru şekilde kullanılıyor mu?", () => {
  // bileşenleri renderla
  render(
    <Item color="text-amber-500" text="Toplam Kritik Vaka" value="15,4M" />
  );
  // gerekli elementleri çağırırız
  const icon = screen.getByTestId("svg");

  //   color propu olarak gelen değer classname'de var mı
  expect(icon).toHaveClass("text-amber-500");

  // text propu olarak gönderdiğimiz yazı ekrana  basıldı mı ?
  screen.getByText("Toplam Kritik Vaka");

  // value propu olarak gönderdiğimiz yazı ekrana  basıldı mı ?
  screen.getByRole("heading", { name: "15,4M" });
});
