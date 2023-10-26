export function addQueryParams(router: any, filters: any) {
    router.push({
        ...router,
        query: {
            ...router.query,
            ...filters
        },
    }, undefined, { shallow: true }
    );
}