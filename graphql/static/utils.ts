export const mapQueriesToProps = async (queries: any) =>
  await (async () => {
    const data = await queries.reduce(
      async (acc, queryObj) => {
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
            error: e.message,
          };
        }
      },
      { props: {} }
    );
    return data;
  })();
