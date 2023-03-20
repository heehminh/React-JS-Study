import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
console.log("process.cwd()", process.cwd());
// .../next-blog-app
console.log("postDirectory", postsDirectory);
// .../next-blog-app/posts

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log("fileNames", fileNames);
  // fileNames [ "pre-rendering.md", "ssg-ssr.md"]

  const allPostData = fileNames.map((fileName) => {
    // Remove ".md"
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // Sort posts by date
  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
