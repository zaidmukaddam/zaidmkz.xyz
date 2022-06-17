import {
  defineDocumentType,
  makeSource,
  ComputedFields
} from "contentlayer/source-files";

import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/*.mdx",
  bodyType: "mdx",
  fields: {
    published: { type: "boolean", required: true },
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false }
  },
  computedFields
}));

const Misc = defineDocumentType(() => ({
  name: "Misc",
  filePathPattern: "misc/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog, Misc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export default contentLayerConfig;
