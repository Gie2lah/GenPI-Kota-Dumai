export interface DestinasiMetaData {
  cover: string;
  title: string;
  date: string;
  desc: string;
  tags: string;
  slug: string;
  author: string;
  maps: string;
  checkTagged?: (tag: string) => boolean;
}
