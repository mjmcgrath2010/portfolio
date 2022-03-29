/*
 * Example usage:
 *   export const getStaticProps = () => mapQueriesToProps([{ posts: getPosts }]);
 */
type QueryProps = {
  props: Object;
};

export const mapQueriesToProps = async (queries: any) =>
  await (async () => {
    const data = await queries.reduce(
      async (acc: QueryProps, queryObj: Function) => {
        const [prop, fn] = Object.entries(queryObj)[0];
        try {
          const { props } = acc;
          const data = await fn();
          return {
            props: {
              ...props,
              [prop]: data,
            },
          };
        } catch (e) {
          return {
            props: {
              error: "Oops, something went wrong",
            },
          };
        }
      },
      { props: {} }
    );
    return data;
  })();
