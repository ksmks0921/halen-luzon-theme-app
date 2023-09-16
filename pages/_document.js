import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-212959028-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-212959028-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://www.clickcease.com/monitor/stat.js';
script.src = target;var elem = document.head;elem.appendChild(script);`
            }}/>
<noscript dangerouslySetInnerHTML={{__html: `<a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com/stats/stats.aspx' alt='ClickCease'/></a>`}} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;