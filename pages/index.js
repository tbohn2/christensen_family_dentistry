import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Redirecting to Hentges Dental</title>
        <meta name="description" content="Redirecting to hentgesdental.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: '#333'
      }}>
        Redirecting to hentgesdental.com
      </div>
    </>
  );
}
