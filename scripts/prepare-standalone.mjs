import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneRoot = path.join(root, ".next", "standalone");
const standaloneNextRoot = path.join(standaloneRoot, ".next");
const staticSource = path.join(root, ".next", "static");
const staticTarget = path.join(standaloneNextRoot, "static");
const publicSource = path.join(root, "public");
const publicTarget = path.join(standaloneRoot, "public");

function copyDirectory(source, target) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true });
}

if (!fs.existsSync(standaloneRoot)) {
  throw new Error(`Standalone output missing at ${standaloneRoot}`);
}

if (!fs.existsSync(staticSource)) {
  throw new Error(`Static assets missing at ${staticSource}`);
}

copyDirectory(staticSource, staticTarget);

if (fs.existsSync(publicSource)) {
  copyDirectory(publicSource, publicTarget);
}
