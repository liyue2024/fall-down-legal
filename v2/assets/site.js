const FALL_DOWN_LOCALES = [
  { code: "ar", name: "العربية", appName: "السقوط" },
  { code: "bn", name: "বাংলা", appName: "পড়ে যান" },
  { code: "ca", name: "Català", appName: "Caiguda" },
  { code: "zh-Hans", name: "简体中文", appName: "下落" },
  { code: "zh-Hant", name: "繁體中文", appName: "下落" },
  { code: "hr", name: "Hrvatski", appName: "Pad" },
  { code: "cs", name: "Čeština", appName: "Pád" },
  { code: "da", name: "Dansk", appName: "Fald ned" },
  { code: "nl", name: "Nederlands", appName: "Vallen" },
  { code: "en-US", name: "English", appName: "Fall Down" },
  { code: "fi", name: "Suomi", appName: "Putoaminen" },
  { code: "fr", name: "Français", appName: "Chute" },
  { code: "de", name: "Deutsch", appName: "Fallspiel" },
  { code: "el", name: "Ελληνικά", appName: "Πτώση" },
  { code: "he", name: "עברית", appName: "נפילה" },
  { code: "hi", name: "हिन्दी", appName: "गिरो" },
  { code: "hu", name: "Magyar", appName: "Zuhanás" },
  { code: "id", name: "Bahasa Indonesia", appName: "Jatuh" },
  { code: "it", name: "Italiano", appName: "Caduta" },
  { code: "ja", name: "日本語", appName: "落下" },
  { code: "ko", name: "한국어", appName: "낙하" },
  { code: "ms", name: "Bahasa Melayu", appName: "Jatuh" },
  { code: "mr", name: "मराठी", appName: "पडा" },
  { code: "nb", name: "Norsk", appName: "Fall ned" },
  { code: "pl", name: "Polski", appName: "Spadanie" },
  { code: "pt-BR", name: "Português (Brasil)", appName: "Queda" },
  { code: "pt-PT", name: "Português (Portugal)", appName: "Queda" },
  { code: "ro", name: "Română", appName: "Cădere" },
  { code: "ru", name: "Русский", appName: "Падение" },
  { code: "sk", name: "Slovenčina", appName: "Pád" },
  { code: "sl", name: "Slovenščina", appName: "Padanje" },
  { code: "es-ES", name: "Español", appName: "Caída" },
  { code: "sv", name: "Svenska", appName: "Fall" },
  { code: "ta", name: "தமிழ்", appName: "விழு" },
  { code: "te", name: "తెలుగు", appName: "పడిపో" },
  { code: "th", name: "ไทย", appName: "ร่วงลง" },
  { code: "tr", name: "Türkçe", appName: "Düşüş" },
  { code: "uk", name: "Українська", appName: "Падіння" },
  { code: "ur", name: "اردو", appName: "گرنا" },
  { code: "vi", name: "Tiếng Việt", appName: "Rơi xuống" }
];

const localeCodes = new Map(
  FALL_DOWN_LOCALES.map(({ code }) => [code.toLowerCase(), code])
);

const assetsBaseURL = new URL(".", document.currentScript.src);
const page = document.body?.dataset.page ?? "home";
const localizedPage = document.querySelector("[data-localized-page]");
const defaultPageContent = localizedPage?.innerHTML ?? "";
const defaultDocumentTitle = document.title;
const defaultDescription =
  document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
const defaultCommon = {
  navigationLabel: document.querySelector(".primary-nav")?.getAttribute("aria-label") ?? "",
  navigation: [...document.querySelectorAll(".primary-nav a")].map(
    (element) => element.textContent.trim()
  ),
  language: document.querySelector(".language-control label")?.textContent.trim() ?? "",
  languageSelectLabel:
    document.querySelector("[data-language-select]")?.getAttribute("aria-label") ?? "",
  footer: [...document.querySelectorAll(".footer-links a")]
    .filter((element) => !element.href.startsWith("mailto:"))
    .map((element) => element.textContent.trim())
};

function matchLocale(language) {
  if (!language) return null;

  const normalized = language.replaceAll("_", "-").toLowerCase();
  const exact = localeCodes.get(normalized);
  if (exact) return exact;

  if (
    normalized === "zh" ||
    normalized.startsWith("zh-cn") ||
    normalized.startsWith("zh-sg") ||
    normalized.startsWith("zh-hans")
  ) {
    return "zh-Hans";
  }

  if (
    normalized.startsWith("zh-tw") ||
    normalized.startsWith("zh-hk") ||
    normalized.startsWith("zh-mo") ||
    normalized.startsWith("zh-hant")
  ) {
    return "zh-Hant";
  }

  if (normalized === "no" || normalized.startsWith("no-") || normalized.startsWith("nn")) {
    return "nb";
  }

  if (normalized === "iw" || normalized.startsWith("iw-")) return "he";
  if (normalized === "in" || normalized.startsWith("in-")) return "id";
  if (normalized === "pt" || normalized.startsWith("pt-")) {
    return normalized.startsWith("pt-br") ? "pt-BR" : "pt-PT";
  }
  if (normalized === "es" || normalized.startsWith("es-")) return "es-ES";
  if (normalized === "en" || normalized.startsWith("en-")) return "en-US";
  if (normalized === "fr" || normalized.startsWith("fr-")) return "fr";

  return localeCodes.get(normalized.split("-")[0]) ?? null;
}

function preferredLocale() {
  const urlLocale = new URLSearchParams(window.location.search).get("lang");
  const matchedUrlLocale = matchLocale(urlLocale);
  if (matchedUrlLocale) return matchedUrlLocale;

  const browserLanguages =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const language of browserLanguages) {
    const matched = matchLocale(language);
    if (matched) return matched;
  }

  return "en-US";
}

function updateLocaleLinks(localeCode) {
  document.querySelectorAll("[data-locale-link]").forEach((link) => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("lang", localeCode);
    link.href = url.href;
  });
}

function appNameForLocale(localeCode) {
  return (
    FALL_DOWN_LOCALES.find(({ code }) => code === localeCode)?.appName ??
    FALL_DOWN_LOCALES.find(({ code }) => code === "en-US").appName
  );
}

function localizedTranslation(localeCode) {
  return window.FALL_DOWN_TRANSLATIONS?.[localeCode] ?? null;
}

function loadLocale(localeCode) {
  if (localeCode === "zh-Hans" || localizedTranslation(localeCode)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL(`locales/${localeCode}.js`, assetsBaseURL).href;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function updateCommonContent(localeCode) {
  const translation = localizedTranslation(localeCode);
  const common = translation?.common;
  const navigation = document.querySelector(".primary-nav");
  const navigationLinks = [...document.querySelectorAll(".primary-nav a")];
  const languageLabel = document.querySelector(".language-control label");
  const languageSelect = document.querySelector("[data-language-select]");
  const footerLinks = [...document.querySelectorAll(".footer-links a")].filter(
    (element) => !element.href.startsWith("mailto:")
  );

  if (navigation) {
    navigation.setAttribute(
      "aria-label",
      common?.navigationLabel ?? defaultCommon.navigationLabel
    );
  }

  navigationLinks.forEach((element, index) => {
    element.textContent = common?.navigation?.[index] ?? defaultCommon.navigation[index];
  });

  if (languageLabel) {
    languageLabel.textContent = common?.language ?? defaultCommon.language;
  }

  if (languageSelect) {
    languageSelect.setAttribute(
      "aria-label",
      common?.languageSelectLabel ?? defaultCommon.languageSelectLabel
    );
  }

  footerLinks.forEach((element, index) => {
    element.textContent = common?.footer?.[index] ?? defaultCommon.footer[index];
  });
}

function translateHTMLText(source, translations) {
  let textIndex = 0;
  const sourceWithAppPlaceholder = source.replace(
    /<span data-app-name>.*?<\/span>/g,
    "{appName}"
  );

  return sourceWithAppPlaceholder
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<") || !part.trim()) return part;

      const translated = translations[textIndex] ?? part.trim();
      textIndex += 1;
      return part.replace(part.trim(), translated);
    })
    .join("")
    .replaceAll("{appName}", "<span data-app-name>Fall Down</span>");
}

function updatePageContent(localeCode) {
  if (!localizedPage) return;

  const translation = localizedTranslation(localeCode);
  const pageTranslation = translation?.pages?.[page];

  const englishPage = localizedTranslation("en-US")?.pages?.[page];
  const translatedContent =
    pageTranslation?.content ??
    (pageTranslation?.strings && englishPage?.content
      ? translateHTMLText(englishPage.content, pageTranslation.strings)
      : null);

  localizedPage.innerHTML = translatedContent ?? defaultPageContent;
  document.title = pageTranslation?.documentTitle ?? defaultDocumentTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      pageTranslation?.metaDescription ?? defaultDescription
    );
  }
}

function updateAppName(localeCode) {
  const appName = appNameForLocale(localeCode);

  document.querySelectorAll("[data-app-name]").forEach((element) => {
    element.textContent = appName;
    element.setAttribute("lang", localeCode);
    element.setAttribute("dir", "auto");
  });

  const brand = document.querySelector(".brand");
  if (brand) {
    const translatedLabel = localizedTranslation(localeCode)?.common?.homeAriaLabel;
    brand.setAttribute(
      "aria-label",
      translatedLabel?.replaceAll("{appName}", appName) ??
        `《${appName}》法律与支持首页`
    );
  }

  document.title = document.title.replaceAll("{appName}", appName);
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      description.getAttribute("content").replaceAll("{appName}", appName)
    );
  }
}

function applyLocale(localeCode) {
  const direction = localizedTranslation(localeCode)?.dir ?? "ltr";
  updatePageContent(localeCode);
  updateCommonContent(localeCode);
  updateLocaleLinks(localeCode);
  updateAppName(localeCode);
  document.documentElement.lang = localeCode;
  document.documentElement.dir = direction;
}

async function initializeLocalePicker() {
  const localeCode = preferredLocale();
  const select = document.querySelector("[data-language-select]");

  if (select) {
    select.innerHTML = FALL_DOWN_LOCALES.map(
      ({ code, name }) =>
        `<option value="${code}"${code === localeCode ? " selected" : ""}>${name}</option>`
    ).join("");

    select.addEventListener("change", async () => {
      const nextLocale = select.value;
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("lang", nextLocale);
      window.history.replaceState({}, "", nextUrl);
      await loadLocale(nextLocale);
      applyLocale(nextLocale);
    });
  }

  await loadLocale(localeCode);
  applyLocale(localeCode);
}

initializeLocalePicker().catch(() => applyLocale("en-US"));
