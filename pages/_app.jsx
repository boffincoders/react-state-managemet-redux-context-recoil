import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import TodoContextProvider from "../contextState";
import "../styles/globals.css";
import store from "../utils/store";
import { useRouter } from "next/router";
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/dashboard");
    }
  }, []);

  
  
  return (
    <Provider store={store}>
      <RecoilRoot>
        <TodoContextProvider>
          <Component {...pageProps} />
        </TodoContextProvider>
      </RecoilRoot>
    </Provider>
  );
};
export default MyApp;
