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

// Check messages keys
function checkMessageKeys() {
  const enKeys = Object.keys(enMessages).sort();
  const esKeys = Object.keys(esMessages).sort();
  if (JSON.stringify(enKeys) !== JSON.stringify(esKeys)) {
    error(`messages: different top-level keys (en: [${enKeys}], es: [${esKeys}])`);
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

// Run checks
checkArrayParity("experience", en.experience, es.experience);
checkArrayParity("projects", en.projects, es.projects);
checkArrayParity("skills", en.skills, es.skills);
checkMessageKeys();
checkNotEmpty(en.profile.contact, "en.profile.contact");
checkNotEmpty(es.profile.contact, "es.profile.contact");
findTodos(en, "en");
findTodos(es, "es");

// Summary
console.log(`\n${errors} errors, ${warnings} warnings`);
if (errors > 0) process.exit(1);
