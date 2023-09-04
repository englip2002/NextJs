import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    // Wrap a Component layer and return it
    return <Component {...pageProps} />;
}
