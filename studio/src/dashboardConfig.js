export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612b3bac5b7167bd5a85d660",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ah5k781x",
                  apiId: "ece324c9-7f94-4c16-bdbf-5dbd8a824bc8",
                },
                {
                  buildHookId: "612b3bad85fac4c6654b7201",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pzar4pp5",
                  apiId: "98b0fac8-d47d-4945-a5e1-e8c685496d24",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dayanibrar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pzar4pp5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
