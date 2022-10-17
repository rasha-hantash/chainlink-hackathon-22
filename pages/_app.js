import '../styles/globals.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
import { setupIonicReact } from '@ionic/react'

setupIonicReact()
import NoSSRWrapper from '../components/NoSSRWrapper'

function MyApp({ Component, pageProps }) {
  return (<NoSSRWrapper><Component {...pageProps} /></NoSSRWrapper>)
}

export default MyApp
