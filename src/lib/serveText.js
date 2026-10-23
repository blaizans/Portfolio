/**
 * Builds a getServerSideProps that answers with a raw text document
 * (robots.txt, sitemap.xml, llms.txt) so the hostname comes from one place
 * (src/data/seo.js) instead of being copied into static files.
 */
export function serveText(contentType, buildBody) {
  return async function getServerSideProps({ res }) {
    res.setHeader("Content-Type", `${contentType}; charset=utf-8`);
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
    res.write(buildBody());
    res.end();
    return { props: {} };
  };
}

/** Page component is never rendered; the response is written above. */
export function EmptyPage() {
  return null;
}
