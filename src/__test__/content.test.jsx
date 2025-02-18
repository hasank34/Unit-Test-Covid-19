import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "./../pages/detail/Content";
import { data } from "./../constants";

// sahte store oluşturma
const mockStore = configureStore({ thunk });

test("Store yüklenme durumundaykene ekrana loader gelir.", () => {
  // sahte store
  const store = mockStore({
    covidSlice: { isLoading: true, error: null, data: null },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // loaderların ekrana gelmesi
  screen.getAllByTestId("card-loader");
});
test("Store hata durumundaykene ekrana error gelir.", () => {
  // sahte store
  const store = mockStore({
    covidSlice: {
      isLoading: false,
      error: "Bağlantı zaman aşımına uğradı",
      data: null,
    },
  });
  // bileşen renderlanır
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  // error mesajının ekrana gelmesi
  screen.getByTestId("error");
});
test("Store veri geldiği durumundaykene ekrana nesenedeki her bir değer için kart basılır.", () => {
  // sahte store
  const store = mockStore({
    covidSlice: {
      isLoading: false,
      error: null,
      data: data,
    },
  });
  // bileşen renderlanır
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini key ve valuelardan oluşan bir diziye çevir
  const arr = Object.entries(data);
  // dizideki her bir eleman için ekrana kartlar basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri geldi mi ?
    screen.getByText(item[0]);
    // ekrana item'ın value değeri null ise bilinmiyor değilse value değerinin kendisi geldi mi ?
    screen.getAllByText(!item[1] ? "Bilinmiyor" : item[1]);
  });
});
