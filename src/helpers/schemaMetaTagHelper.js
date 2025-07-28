export const createMetaTagElementsClientSide = (metaTags) => {

    if (metaTags.length > 0) {
        return metaTags.map((tagString, index) => {

            // Match meta tags in the provided strings
            const matches = tagString.match(/<meta [^>]+>/g);
            if (matches) {
                return matches.map((metaTag, idx) => {
                    const props = {};
                    metaTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                        props[key] = value;
                        return m;
                    });
                    return <meta {...props} key={`meta-${index}-${idx}`} />;
                });
            }
            // Match meta tags in the provided strings   For link tags  
            const linkMatches = tagString.match(/<link [^>]+>/g);
            if (linkMatches) {
                return linkMatches.map((linkTag, idx) => {
                    const props = {};
                    linkTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                        props[key] = value;
                        return m;
                    });
                    return <link {...props} key={`link-${index}-${idx}`} />;
                });
            }
            return null;
        });
    }
}


export const renderSchemaScriptsClientSide = (schemas) => {
    return schemas?.length > 0 && schemas.map((schema, index) => (
        <script
            strategy='beforeInteractive'
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    ));
}