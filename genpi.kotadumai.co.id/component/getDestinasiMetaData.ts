import fs from "fs";
import matter from "gray-matter";
import { DestinasiMetaData } from "./DestinasiMetaData";

const getDestinasiMetaData = (): DestinasiMetaData[] => {
  // const folder = "posts/";
  const folder = "contents/destinasi";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));
  // const slug = markdownPost.map((file) => file.replace(".md", ""));
  // return slug;
  const destinasi = markdownPost.map((fileName) => {
    // const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const fileContents = fs.readFileSync(
      `contents/destinasi/${fileName}`,
      "utf-8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      cover: matterResult.data.cover,
      tags: matterResult.data.tags,
      author: matterResult.data.author,
      slug: fileName.replace(".md", ""),
      maps: matterResult.data.maps,
    };
  });
  return destinasi;
};

export default getDestinasiMetaData;
