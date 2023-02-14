import Link from 'next/link';
import Head from 'next/head';

function about() {
    return (
    <>    
    <Head>
        <title>About Black Biz API</title>
    </Head>
    <section className="about_us">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-7">
                    <div className="content">
                        <div className="title">
                            <h2>Discover & Grow with the Black Biz API</h2>
                        </div>
                            <p>The API provides a RESTful interface that allows developers to access a wide range of business information, including names, categories, addresses, and more. This makes it a powerful tool for businesses to reach a wider audience, increase visibility, and build stronger relationships with customers.</p>
                            <p>In addition, the API provides accurate, up-to-date information, helping businesses connect with potential customers and grow their customer base. By supporting black-owned businesses, we aim to create a more equitable and inclusive economy.</p>
                            <p>With Black Biz API, you have the opportunity to play a role in this mission. On this page, you'll find a button to make a donation, which will help us continue to provide this valuable resource to the community.</p>
                            <div className="cta-holder d-flex w-100 justify-content-center align-items-center">
                            <Link href="/" className="mx-5 bg_btn_color">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default about;