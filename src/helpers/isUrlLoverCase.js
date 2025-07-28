/**
 * Checks if the resolved URL is in all lowercase, and if not, redirects the request to the lowercase version of the URL.
 *
 * @param {string} resolvedUrl - The resolved URL to check.
 * @param {http.ServerResponse} res - The HTTP response object to use for the redirect.
 * @returns {object} - An object with a `props` property containing the string `"not found"` if the URL was not in lowercase.
 */
//if url uppercase make them lowercase
export const isUrlLoverCase = (resolvedUrl, res) => {
    const lowerCaseUrl = resolvedUrl.toLowerCase();
    if (resolvedUrl !== lowerCaseUrl) {
        res.setHeader('Location', lowerCaseUrl);
        res.statusCode = 301;
        res.end();
        return { props: { data: "not found" } };
    }
}