import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://docs.coreola.com';
const appDirectory = path.join(process.cwd(), 'app');

export const dynamic = 'force-static';

function getMdxPageRoutes(directory = appDirectory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getMdxPageRoutes(fullPath);
    }

    if (!entry.isFile() || entry.name !== 'page.mdx') {
      return [];
    }

    const relativeDirectory = path.relative(appDirectory, directory);
    const route = relativeDirectory ? `/${relativeDirectory.replaceAll(path.sep, '/')}` : '/';

    return [
      {
        route,
        modifiedTime: statSync(fullPath).mtime,
      },
    ];
  });
}

export default function sitemap() {
  return getMdxPageRoutes()
    .sort((first, second) => first.route.localeCompare(second.route))
    .map(({ route, modifiedTime }) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified: modifiedTime,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1 : 0.7,
    }));
}
