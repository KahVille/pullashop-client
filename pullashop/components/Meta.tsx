import Head from "next/head";

type MetaData = {
    keywords: string,
    description: string,
    title: string
}

const Meta = (props:MetaData) => {
    return (
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
    </Head>    
    )
}

Meta.defaultProps = {
    title: 'PullaShop',
    description: 'With Pullashop you can browse the best pastries and drinks',
    keywords: 'pasteries, shop, kahville'
} as MetaData

export default Meta;