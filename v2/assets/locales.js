window.FALL_DOWN_TRANSLATIONS = {
  "en-US": {
    dir: "ltr",
    common: {
      homeAriaLabel: "{appName} legal and support home",
      navigationLabel: "Primary navigation",
      navigation: ["Privacy Policy", "Terms of Use", "Support"],
      language: "Language",
      languageSelectLabel: "Select display language",
      footer: ["Privacy", "Terms", "Support"]
    },
    pages: {
      home: {
        documentTitle: "{appName} | Privacy, Terms, and Support",
        metaDescription: "{appName} Privacy Policy, Terms of Use, and Support.",
        content: `
          <p class="eyebrow"><span data-app-name>Fall Down</span> · Legal &amp; Support</p>
          <h1>Clear rules. Play with confidence.</h1>
          <p class="home-lead">
            Learn how <span data-app-name>Fall Down</span> handles local game data, free play,
            and paid access; review the rules for auto-renewing subscriptions and lifetime access;
            or get help with purchases, restoration, and gameplay.
          </p>
          <div class="home-grid">
            <article class="home-card">
              <h2>Privacy Policy</h2>
              <p>Information about on-device data, app-store purchase verification, permissions, support emails, and website privacy.</p>
              <a class="button-link secondary" href="privacy/index.html" data-locale-link>View Privacy Policy</a>
            </article>
            <article class="home-card">
              <h2>Terms of Use</h2>
              <p>Rules for free play, auto-renewing subscriptions, lifetime access, cancellation, restoration, and refunds.</p>
              <a class="button-link secondary" href="terms/index.html" data-locale-link>View Terms of Use</a>
            </article>
            <article class="home-card">
              <h2>Support &amp; Contact</h2>
              <p>Common questions, official Apple and Google resources, and the public support email address.</p>
              <a class="button-link" href="support/index.html" data-locale-link>Get Support</a>
            </article>
          </div>
        `
      },
      privacy: {
        documentTitle: "Privacy Policy | {appName}",
        metaDescription: "{appName} Privacy Policy.",
        content: `
          <header class="hero">
            <p class="eyebrow">Privacy Policy</p>
            <h1>Privacy Policy</h1>
            <p class="hero-lead">
              This Policy explains how <span data-app-name>Fall Down</span> handles on-device data,
              app-store purchase information, and support emails.
            </p>
            <div class="meta-row"><span>Last updated: July 30, 2026</span></div>
          </header>
          <div class="document-layout">
            <div class="document-content">
              <section class="document-section" id="scope">
                <h2>1. Scope and contact</h2>
                <p>This Policy applies to the <span data-app-name>Fall Down</span> app for iOS, iPadOS, and Android, and to this privacy, terms, and support website.</p>
                <p>For privacy questions, email <a href="mailto:1257670186@qq.com">1257670186@qq.com</a>.</p>
              </section>
              <section class="document-section" id="app-data">
                <h2>2. App data</h2>
                <div class="callout">
                  <strong>No account, advertising, or behavioral analytics.</strong>
                  The core game runs on your device. The app does not provide accounts, cloud saves,
                  or online leaderboards; integrate advertising or behavioral analytics services;
                  or upload your personal gameplay data.
                </div>
                <p>The app stores language, music, sound, and vibration settings on your device, together with local scores, free-play usage state, and necessary entitlement state confirmed by the store. This information is used to preserve settings, display scores, and determine whether a game can be started.</p>
                <p>The app does not store your name, phone number, email address, contacts, precise location, photos, payment-card number, or app-store account password.</p>
              </section>
              <section class="document-section" id="store-services">
                <h2>3. App-store services and network access</h2>
                <p>The app uses Apple StoreKit or Google Play Billing to load products, display localized prices returned by the store, complete purchases, restore purchases, manage subscriptions, and confirm entitlements. Network access is used only for these official Apple or Google store capabilities.</p>
                <p>Apple or Google is responsible for store accounts, payments, billing, transactions, refunds, and subscription services. The app processes only the store information needed to confirm products and entitlements and does not receive or store full payment credentials.</p>
                <p>These platforms process relevant information under the <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
              </section>
              <section class="document-section" id="permissions">
                <h2>4. Permissions, advertising, and tracking</h2>
                <p>The app does not request location, contacts, photos, storage, camera, microphone, Bluetooth, or notification permission. It does not use an advertising identifier or integrate third-party advertising, analytics, attribution, or crash-reporting SDKs.</p>
                <p>On Android, network, network-state, and vibration capabilities are used only for store entitlement confirmation and game haptics. The app does not sell personal information or track you across apps or websites.</p>
                <p>The app does not integrate a third-party crash-reporting tool. Depending on your device and store settings, Apple or Google may process system diagnostic information under their respective privacy rules and provide technical information used to investigate crashes or performance issues.</p>
              </section>
              <section class="document-section" id="support-website">
                <h2>5. Support emails and website</h2>
                <p>The app does not automatically read your email information. Only when you choose to send a support email does the support channel receive your email address, message, and any screenshot, screen recording, order number, or other attachment you voluntarily provide. This information is used only to handle your request and is not used for advertising or marketing. Do not send account passwords, payment passwords, or full card numbers.</p>
                <p>This website does not set advertising or analytics cookies and does not include traffic analytics or tracking scripts.</p>
              </section>
              <section class="document-section" id="retention">
                <h2>6. Retention and deletion</h2>
                <ul>
                  <li>Delete on-device data by uninstalling the app. On Android, you can also use the system's Clear data option.</li>
                  <li>Store purchase records are managed by Apple or Google. Restorable entitlements are reconfirmed under store rules.</li>
                  <li>Support emails are retained for as long as needed to handle the request and meet necessary recordkeeping requirements. You may email us to request deletion of support correspondence we still hold.</li>
                </ul>
              </section>
              <section class="document-section" id="security">
                <h2>7. Data security</h2>
                <p>The app uses on-device processing, minimal permissions, and official app-store purchase flows to reduce unnecessary data transfers. Support emails are used only to handle incoming requests, with reasonable safeguards appropriate to the nature of the information.</p>
                <p>No device, network, or electronic storage method can be guaranteed to be completely secure. Do not include unrelated sensitive information in a support email.</p>
              </section>
              <section class="document-section" id="children">
                <h2>8. Children and teens</h2>
                <p>The app does not require an account and does not build profiles of children or other users through advertising or behavioral analytics. A parent or guardian who believes a child provided personal information through a support email may contact us to have the matter addressed.</p>
              </section>
              <section class="document-section" id="rights">
                <h2>9. Your choices and rights</h2>
                <p>You can turn off music, sound effects, and vibration; uninstall the app to delete on-device data; and request access to, correction of, or deletion of support emails you sent to us. This Policy does not limit rights available to you under applicable law.</p>
                <p>You manage on-device data through your device. Apple or Google manages store accounts and purchase records. The app cannot modify or delete transaction records held by an app store on your behalf.</p>
              </section>
              <section class="document-section" id="changes">
                <h2>10. Policy updates and contact</h2>
                <p>If the app's data practices, platform rules, or website hosting arrangements change, we will update this Policy and the date shown on this page and provide additional notice where applicable rules require it.</p>
                <p>For privacy questions, email <a href="mailto:1257670186@qq.com">1257670186@qq.com</a>.</p>
              </section>
            </div>
            <aside class="toc" aria-label="On this page">
              <p class="toc-title">On this page</p>
              <a href="#scope">Scope and contact</a>
              <a href="#app-data">App data</a>
              <a href="#store-services">Store services</a>
              <a href="#permissions">Permissions and tracking</a>
              <a href="#support-website">Email and website</a>
              <a href="#retention">Retention and deletion</a>
              <a href="#security">Data security</a>
              <a href="#children">Children and teens</a>
              <a href="#rights">Your rights</a>
              <a href="#changes">Policy updates</a>
            </aside>
          </div>
        `
      },
      terms: {
        documentTitle: "Terms of Use | {appName}",
        metaDescription: "{appName} Terms of Use.",
        content: `
          <header class="hero">
            <p class="eyebrow">Terms of Use</p>
            <h1>Terms of Use</h1>
            <p class="hero-lead">These Terms explain the rules for free play, paid access, auto-renewal, cancellation, purchase restoration, and refunds for <span data-app-name>Fall Down</span>.</p>
            <div class="meta-row"><span>Last updated: July 30, 2026</span></div>
          </header>
          <div class="document-layout">
            <div class="document-content">
              <section class="document-section" id="acceptance">
                <h2>1. Accepting these Terms and platform rules</h2>
                <p>By downloading, purchasing, or using <span data-app-name>Fall Down</span>, you agree to these Terms and to the rules that apply to you in the app store where you make a purchase. If you do not agree, do not continue to use the app or make a purchase.</p>
                <p>These Terms apply to your download, purchase, and use of the app. The iOS and iPadOS versions are also subject to <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple's Standard End User License Agreement (EULA)</a>.</p>
              </section>
              <section class="document-section" id="license">
                <h2>2. License and device requirements</h2>
                <p>Subject to these Terms and platform rules, you may install and use the app on your personal devices for personal, non-commercial purposes. This license is limited, non-exclusive, and non-transferable and does not transfer ownership of the app, software, artwork, audio, or other content.</p>
                <p>You need a supported device and operating-system version. The core game generally works without a network connection, but product loading, purchasing, purchase restoration, and subscription confirmation require an available network and app-store service.</p>
              </section>
              <section class="document-section" id="free-experience">
                <h2>3. Game and free play</h2>
                <p><span data-app-name>Fall Down</span> is an offline casual game and does not require an account. Without a valid paid entitlement, the game can be started twice for free on each device. A free use is counted when the game screen is successfully entered and is not returned because you quit, are interrupted, or receive a particular game result. After the free uses are exhausted, an active subscription or lifetime entitlement is required to start another game.</p>
              </section>
              <section class="document-section" id="products">
                <h2>4. Paid products and prices</h2>
                <p>The app offers only these three paid products:</p>
                <ul>
                  <li>a weekly auto-renewing subscription;</li>
                  <li>a monthly auto-renewing subscription; and</li>
                  <li>lifetime access, as a one-time non-consumable purchase.</li>
                </ul>
                <p>The actual price, currency, taxes, billing period, and purchase eligibility are the information displayed and confirmed in the App Store or Google Play system purchase screen. The purchasing platform charges and manages payment through your store account. The app does not offer a subscription free trial or other paid plans.</p>
                <p>An active subscription lets you start games without a limit. Lifetime access is purchased once and does not auto-renew; while the corresponding transaction remains valid and the app continues to be provided, it lets you continue to start games without a limit. The corresponding entitlement is removed if a transaction is refunded, revoked, or becomes invalid.</p>
              </section>
              <section class="document-section" id="subscriptions">
                <h2>5. Auto-renewal and cancellation</h2>
                <p>Weekly and monthly subscriptions automatically renew and are charged for the billing period shown on the system purchase screen until you cancel through the purchasing platform. Deleting <span data-app-name>Fall Down</span> does not automatically cancel a subscription. Unless the purchasing platform provides a refund or other treatment, you can continue using the subscription until the end of the current paid period after turning off auto-renewal.</p>
                <div class="link-list">
                  <a class="button-link secondary" href="https://support.apple.com/118428" target="_blank" rel="noopener noreferrer">Apple subscription cancellation instructions</a>
                  <a class="button-link secondary" href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">Google Play subscriptions center</a>
                  <a class="button-link secondary" href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener noreferrer">Google Play cancellation instructions</a>
                </div>
              </section>
              <section class="document-section" id="purchase-refund">
                <h2>6. Purchases, restoration, and refunds</h2>
                <p>Purchases and purchase restoration are completed through the official Apple or Google store. An entitlement is granted only after the store confirms a valid transaction. Canceled, failed, or pending transactions do not grant an entitlement before successful confirmation. Purchase restoration can restore lifetime access and a currently active subscription. App Store and Google Play purchases are separate and cannot be restored or transferred across platforms.</p>
                <p>Refunds are handled by the app store that completed the transaction under its rules, the purchase region, and applicable law. The corresponding entitlement is removed after the store confirms a refund, revocation, subscription expiration, or invalid transaction.</p>
                <div class="link-list">
                  <a class="button-link secondary" href="https://support.apple.com/118223" target="_blank" rel="noopener noreferrer">Request a refund from Apple</a>
                  <a class="button-link secondary" href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play refund information</a>
                </div>
              </section>
              <section class="document-section" id="offline">
                <h2>7. Offline use and availability</h2>
                <p>The core game, settings, and scores are stored on your device and can generally be used offline. Loading products, purchasing, restoring purchases, and confirming subscription status require a connection to the app store. The app does not create or extend a paid entitlement when the store is temporarily unable to confirm it.</p>
              </section>
              <section class="document-section" id="use-contact">
                <h2>8. Acceptable use and intellectual property</h2>
                <p>You must not use the app for unlawful activity; bypass purchase verification; damage the app; distribute malicious code; copy or distribute the app without permission; or infringe rights in app content or another person's intellectual property.</p>
              </section>
              <section class="document-section" id="updates-contact">
                <h2>9. Updates, stopping use, and contact</h2>
                <p>You may stop using and uninstall the app at any time. We may release updates to fix problems, support operating systems, improve stability, or meet platform requirements. Device, system, network, or store-service problems may make some features temporarily unavailable.</p>
                <p>To the extent permitted by applicable law, the app is provided as available. These Terms do not exclude liability that cannot lawfully be excluded or limit mandatory consumer rights available to you.</p>
                <p>If product features, payment methods, platform rules, or applicable law change, we may update these Terms and the date shown on this page. If a change materially affects users' rights, we will provide additional notice as required.</p>
                <p>For questions about these Terms, purchases, or use of the app, email <a href="mailto:1257670186@qq.com">1257670186@qq.com</a>.</p>
              </section>
            </div>
            <aside class="toc" aria-label="On this page">
              <p class="toc-title">On this page</p>
              <a href="#acceptance">Terms and platform rules</a>
              <a href="#license">License and device requirements</a>
              <a href="#free-experience">Game and free play</a>
              <a href="#products">Paid products and prices</a>
              <a href="#subscriptions">Auto-renewal and cancellation</a>
              <a href="#purchase-refund">Purchases, restoration, and refunds</a>
              <a href="#offline">Offline use</a>
              <a href="#use-contact">Acceptable use</a>
              <a href="#updates-contact">Updates and contact</a>
            </aside>
          </div>
        `
      },
      support: {
        documentTitle: "Support & Contact | {appName}",
        metaDescription: "{appName} support and contact information.",
        content: `
          <header class="hero">
            <p class="eyebrow">Support &amp; Contact</p>
            <h1>Need help?</h1>
            <p class="hero-lead">Start with the common questions below. If the issue remains, contact us through the support email address.</p>
            <div class="meta-row"><span>Support channel: Email</span><span>Platforms: iOS, iPadOS, Android</span></div>
          </header>
          <div class="document-layout">
            <div class="document-content">
              <section class="email-panel" id="contact">
                <div><strong><span data-app-name>Fall Down</span> support email</strong><p>Email us about gameplay, purchases, restoration, privacy, or language display.</p></div>
                <a class="button-link" href="mailto:1257670186@qq.com">1257670186@qq.com</a>
              </section>
              <section class="document-section" id="before-email">
                <h2>1. What to include in your email</h2>
                <ul>
                  <li>your platform, device model, operating-system version, and app version;</li>
                  <li>what you did before the issue, what you expected, and what actually happened; and</li>
                  <li>if needed, a screenshot or screen recording with private information concealed.</li>
                </ul>
                <p>For a purchase issue, you may include the app-store order number, but do not send your account password, payment password, or full card information.</p>
              </section>
              <section class="document-section" id="game-data">
                <h2>2. Game and local records</h2>
                <div class="support-grid">
                  <article class="support-card"><h3>Which devices are supported?</h3><p>iPhone and iPad require iOS or iPadOS 15.0 or later. Android phones and tablets require Android 8.0 or later.</p></article>
                  <article class="support-card"><h3>What if the app closes or runs slowly?</h3><p>Restart the device and confirm that the operating system and app are up to date. If the problem continues, email your device information and reproduction steps.</p></article>
                  <article class="support-card"><h3>Music, sound, or vibration is not working?</h3><p>Check the in-app switches, device silent mode, system volume, and system haptic settings.</p></article>
                  <article class="support-card"><h3>Do scores sync to another device?</h3><p>No. Settings and scores are stored only on the current device. The app does not use accounts, cloud saves, or online leaderboards. The core game generally works offline.</p></article>
                  <article class="support-card"><h3>How do I change the language?</h3><p>The app supports 40 languages and can be changed in the app's settings. If the display is incorrect, email the device language and the language selected in the app.</p></article>
                </div>
              </section>
              <section class="document-section" id="purchase">
                <h2>3. Free play and purchases</h2>
                <p>After free play is exhausted, the purchase screen appears before another game can start. You can choose a weekly auto-renewing subscription, monthly auto-renewing subscription, or one-time lifetime access. The actual price, currency, taxes, and billing period are the information shown on the App Store or Google Play system purchase screen.</p>
                <p>An entitlement is granted only after the store confirms a successful purchase. Canceled, failed, or pending transactions do not grant an entitlement before successful confirmation.</p>
                <p>If products cannot be loaded, check the network, store account, and store service, then try again. If you were charged but the entitlement is not shown, do not purchase again; try Restore Purchases first.</p>
              </section>
              <section class="document-section" id="manage-purchase">
                <h2>4. Restoration, cancellation, and refunds</h2>
                <p>To restore purchases, confirm that the device is signed in to the account used for the original purchase and that the network is working, then select Restore Purchases on the app's purchase screen. Deleting the app does not automatically cancel a subscription; manage auto-renewal through the purchasing platform.</p>
                <p>When you use the original purchasing account, restoration can reconfirm lifetime access and a currently active subscription. Local scores, settings, and free-play usage state are not transferred to another device through purchase restoration. App Store and Google Play purchases are separate and cannot be restored across platforms.</p>
                <p>Refunds are handled by the app store that completed the transaction under its rules. The corresponding entitlement is removed after the store confirms a refund, revocation, or invalid transaction.</p>
                <div class="link-list">
                  <a class="button-link secondary" href="https://support.apple.com/118428" target="_blank" rel="noopener noreferrer">Cancel an Apple subscription</a>
                  <a class="button-link secondary" href="https://support.apple.com/118223" target="_blank" rel="noopener noreferrer">Request a refund from Apple</a>
                  <a class="button-link secondary" href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">Google Play subscriptions center</a>
                  <a class="button-link secondary" href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener noreferrer">Google Play cancellation instructions</a>
                  <a class="button-link secondary" href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play refund information</a>
                </div>
              </section>
              <section class="document-section" id="privacy-help">
                <h2>5. Privacy and data deletion</h2>
                <p>The app does not provide accounts. Uninstalling the app deletes on-device settings and scores, but does not cancel a subscription or delete purchase records held by Apple or Google.</p>
                <p>To ask about or request deletion of support emails we still hold, contact us through the support email address. For details, read the <a href="../privacy/index.html" data-locale-link>Privacy Policy</a>.</p>
              </section>
            </div>
            <aside class="toc" aria-label="Quick help">
              <p class="toc-title">Quick help</p>
              <a href="#contact">Contact email</a>
              <a href="#before-email">What to include</a>
              <a href="#game-data">Game and records</a>
              <a href="#purchase">Free play and purchases</a>
              <a href="#manage-purchase">Restoration, cancellation, and refunds</a>
              <a href="#privacy-help">Privacy and deletion</a>
            </aside>
          </div>
        `
      }
    }
  }
};
