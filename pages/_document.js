import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <div>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>AdminLTE 3 | Dashboard 3</title>
                        {/* Google Font: Source Sans Pro */}
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                        {/* Font Awesome Icons */}
                        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
                        {/* IonIcons */}
                        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                        {/* Theme style */}
                        <link rel="stylesheet" href="dist/css/adminlte.min.css" />
                    </div>
                </Head>
                <body className="hold-transition sidebar-mini">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}