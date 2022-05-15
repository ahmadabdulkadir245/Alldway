import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import Header from "../components/Header";
import AuthContextProvider from "../context/auth-context";
import PropertyContextProvider from "../context/property-context";

function App({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <PropertyContextProvider>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </PropertyContextProvider>
    </AuthContextProvider>
  );
}

export default App;
