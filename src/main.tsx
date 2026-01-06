import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import "./Index.scss"
import "./Responsive.scss"
import SplashLoader from './components/shared/Loader/SplashLoader'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from './utils/theme-provider'


const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SplashLoader />}>
      <Component {...props} />
    </Suspense>
  );

const App = Loader(lazy(() => import("./App")));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <BrowserRouter>
              <App />
          </BrowserRouter>
        </ThemeProvider>
    </Provider>;
  </StrictMode>,
)
