import pkg from "../package.json";

const manifest = {
  background: {
    service_worker: "src/entries/background/main.ts",
  },
  content_scripts: [
    {
      matches: ['https://www.linkedin.com/*'],
      js: ["src/entries/contentScript/primary/main.ts"],
    },
  ],
  host_permissions: ["*://*/*"],
  icons: {
    256: "icons/thumbs-down-o.256x256.png"
  },
};

export function getManifest(): chrome.runtime.ManifestV3 {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 3,
    ...manifest,
  };
}
