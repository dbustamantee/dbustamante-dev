import en from "../src/content/en";
import es from "../src/content/es";
import enMessages from "../messages/en.json";
import esMessages from "../messages/es.json";

const strict = process.argv.includes("--strict");
let errors = 0;
let warnings = 0;

function error(msg: string) {
  console.error(`❌ ERROR: ${msg}`);
  errors++;
}

function warn(msg: string) {
  console.warn(`⚠️  WARNING: ${msg}`);
  warnings++;
}

// Check same IDs and order
function checkArrayParity(name: string, enArr: { id: string }[], esArr: { id: string }[]) {
  if (enArr.length !== esArr.length) {
    error(`${name}: different length (en: ${enArr.length}, es: ${esArr.length})`);
    return;
  }
  enArr.forEach((item, i) => {
    if (item.id !== esArr[i].id) {
      error(`${name}[${i}]: ID mismatch (en: ${item.id}, es: ${esArr[i].id})`);
    }
  });
}

// Check messages keys (deep)
function checkMessageKeys(enObj: object, esObj: object, path = "messages") {
  const enKeys = Object.keys(enObj).sort();
  const esKeys = Object.keys(esObj).sort();
  if (JSON.stringify(enKeys) !== JSON.stringify(esKeys)) {
    error(`${path}: key mismatch (en: [${enKeys}], es: [${esKeys}])`);
    return;
  }
  for (const key of enKeys) {
    const enVal = (enObj as Record<string, unknown>)[key];
    const esVal = (esObj as Record<string, unknown>)[key];
    if (typeof enVal === "object" && enVal !== null && typeof esVal === "object" && esVal !== null) {
      checkMessageKeys(enVal as object, esVal as object, `${path}.${key}`);
    }
  }
}

// Check for empty required fields
function checkNotEmpty(obj: object, path: string) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string" && value.trim() === "") {
      error(`${path}.${key}: empty string`);
    }
  }
}

// Check for TODOs
function findTodos(obj: unknown, path: string) {
  if (typeof obj === "string" && obj.includes("TODO")) {
    if (strict) error(`${path}: contains TODO`);
    else warn(`${path}: contains TODO`);
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => findTodos(item, `${path}[${i}]`));
  } else if (obj && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      findTodos(value, `${path}.${key}`);
    }
  }
}

// Validate URLs
function findUrls(obj: unknown, path: string) {
  if (typeof obj === "string" && (obj.startsWith("http://") || obj.startsWith("https://"))) {
    if (obj.includes("TODO")) return; // skip TODOs, handled separately
    try {
      new URL(obj);
    } catch {
      error(`${path}: invalid URL "${obj}"`);
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => findUrls(item, `${path}[${i}]`));
  } else if (obj && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      findUrls(value, `${path}.${key}`);
    }
  }
}

// Check nav anchors exist as section IDs in page
const NAV_SECTIONS = ["about", "experience", "projects", "skills", "education", "contact"];
function checkAnchors() {
  const enKeys = Object.keys((enMessages as Record<string, unknown>).nav || {});
  for (const key of enKeys) {
    if (!NAV_SECTIONS.includes(key)) {
      warn(`nav.${key}: no matching section ID in page`);
    }
  }
}

// Run checks
checkArrayParity("experience", en.experience, es.experience);
checkArrayParity("projects", en.projects, es.projects);
checkArrayParity("skills", en.skills, es.skills);
checkArrayParity("education", en.education, es.education);
checkMessageKeys(enMessages, esMessages);
checkNotEmpty(en.profile.contact, "en.profile.contact");
checkNotEmpty(es.profile.contact, "es.profile.contact");
findTodos(en, "en");
findTodos(es, "es");
findUrls(en, "en");
findUrls(es, "es");
checkAnchors();

// Summary
console.log(`\n${errors} errors, ${warnings} warnings`);
if (errors > 0) process.exit(1);
