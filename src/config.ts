export const SITE = {
  website: "https://masani-dev.workers.dev/", // TODO: replace with custom domain in STEP 4
  author: "masani",
  profile: "https://masani-dev.workers.dev/",
  desc: "masani のポートフォリオ兼ブログサイト",
  title: "masani-dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja",
  timezone: "Asia/Tokyo",
} as const;
