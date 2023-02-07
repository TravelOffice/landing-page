const Link = (props) => {
    return (
        <li><a href={props.path}>{props.path}</a></li>
    )
}

const Sitemap = () => {
    return (
        <ul>
            <Link path="/agency" />
            <Link path="/agencymodern" />
            <Link path="/appcreative" />
            <Link path="/fooddelivery" />
            <Link path="/saas" />
            <Link path="/saascreative" />

            <Link path="/agencyclassic" />
            <Link path="/app" />
            <Link path="/appcreative2" />
            <Link path="/crypto" />
            <Link path="/hosting" />
            <Link path="/interior" />

            <Link path="/saasappcreative" />
            <Link path="/saasminimal" />
            <Link path="/webapp" />
            <Link path="/agencydigital" />
            <Link path="/appblack" />
            <Link path="/appminimal" />

            <Link path="/cryptomodern" />
            <Link path="/hostingmodern" />
            <Link path="/portfolio" />
            <Link path="/saasappdark" />
            <Link path="/saasminimal2" />
            <Link path="/webappcreative" />

            <Link path="/agencyformal" />
            <Link path="/appclassic" />
            <Link path="/appmodern" />
            <Link path="/donation" />
            <Link path="/icons" />
            <Link path="/ride" />
            <Link path="/saasclassic" />
            <Link path="/saasmodern" />
            <Link path="/webappminimal" />
        </ul>
    )
};

export default Sitemap;