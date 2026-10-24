/**
 * UI strings and prose per locale.
 * Structural data (links, dates, stack names, org names) lives in site.js and
 * is not translated, proper nouns and technology names stay as-is.
 */

export const LOCALES = ["en", "da", "ru"];

export const LOCALE_NAMES = {
  en: "English",
  da: "Dansk",
  ru: "Русский",
};

export const translations = {
  en: {
    htmlLang: "en",
    seo: {
      title: "Bruno Laizans – Software Engineer & Web Developer, Aarhus",
      description:
        "Aarhus developer building web apps and web shops in React, Next.js, TypeScript, Java and .NET. Open to a studiejob, 12-20 hours a week from February 2027.",
      h1Extra: "Software engineer and web developer in Aarhus, Denmark",
      imageAlt: "Bruno Laizans, software engineer in Aarhus, Denmark",
      jobTitle: "Software Engineer",
      serviceName: "Bruno Laizans – Software Development and Testing",
      serviceTypes: [
        "Website development",
        "Web application development",
        "E-commerce development",
        "Software testing",
      ],
      ogEyebrow: "SOFTWARE ENGINEER — AARHUS, DENMARK",
    },
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      toolset: "Toolset",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      skip: "Skip to content",
      main: "Main",
      mobile: "Mobile",
      siteMenu: "Site menu",
      language: "Language",
    },
    hero: {
      availability: "Available from February 2027",
      pitch:
        "Full-stack developer. I ship web platforms that real people use every day, and I keep them working after launch.",
      statement: "I build websites and web shops, test them before they ship, and support them after launch.",
      offer: {
        label: "What you get",
        items: [
          {
            title: "Built end to end",
            body: "Websites, web shops and web apps in Java, .NET and TypeScript. Riga Cup serves thousands of visitors.",
          },
          {
            title: "Tested before it ships",
            body: "The webshop is covered by end-to-end tests on desktop Chrome, Android and iPhone.",
          },
          {
            title: "Supported after launch",
            body: "I keep what I build running. I have maintained Riga Cup, and the webshop checks its images nightly and sends alerts.",
          },
        ],
        proofLabel: "Real work",
      },
      hiringNote: "Available 12-20 hours a week from February 2027",
      hireMe: "Hire me",
      seeWork: "See my work",
      proof: {
        nowAt: "Status",
        nowAtValue: "From February 2027",
        experience: "Experience",
        experienceValue: "4+ years building",
        focus: "Focus",
        focusValue: "Full-stack web",
        response: "Response time",
        responseValue: "Within 24 hours",
      },
      tagline: "I build and test software that holds up in production.",
      role: "Software Engineer",
      location: "Aarhus, Denmark",
      selectedWork: "Selected work",
      getInTouch: "Get in touch",
      meta: {
        company: "Company",
        focus: "Focus",
        since: "Since",
        interact: "Interact",
        interactValue: "Move your cursor",
        focusValue: "Full-stack web",
      },
    },
    capabilities: {
      eyebrow: "What I do",
      title: "Four things I get paid to be careful about.",
      items: [
        {
          title: "Frontend Development",
          body: "Production interfaces with React and Next.js. Typed, accessible, and built mobile-first, including the site you are reading.",
          flag: "Main focus",
        },
        {
          title: "Full-stack & Backend",
          body: "REST APIs and service layers in Java/Spring Boot and .NET, wired to React frontends. Relational data modelling with PostgreSQL and MySQL, containerised with Docker.",
        },
        {
          title: "Cloud & Delivery",
          body: "Deploying and operating on Azure. Scrum delivery with Jira, UML modelling, and code review as a normal part of shipping.",
        },
        {
          title: "Testing",
          body: "End-to-end tests with Playwright on desktop Chrome, Android and iPhone for the webshop, with regression checks and test design as a normal part of delivery.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "I'm better at coming back than at not falling.",
      intro:
        "Full-stack developer. I have shipped e-commerce and tournament platforms that are live and in daily use. Full-stack background across Java, .NET and TypeScript.",
      p2: "Before any of this I played football, goalkeeper until I was 14, then defender, midfielder, striker, whatever the team needed. I came up through Skonto's academy, then RFS and Riga FC at Latvia's top youth level, and at some point did the math on what Latvian football could actually pay and started learning to code instead.",
      p3: "The part that stuck with me is the adapting, not memorising one position well enough to coast, but actually being useful wherever the team was short. That's roughly how I approach a codebase too: I test what I build, and because I work across frontend and backend I can read the code instead of guessing at it. From February 2027 I am available 12-20 hours a week.",
      cta: "Start a conversation",
      photoAlt: "Bruno playing football in a competitive match in Latvia",
      stats: [
        "Years writing code",
        "Technologies used",
        "Products in production",
        "Languages spoken",
      ],
    },
    work: {
      eyebrow: "Selected work",
      poster: "Selected work",
      title: "Products built end-to-end, from data to interface.",
      rail: {
        role: "Role",
        year: "Year",
        status: "Status",
        statusValue: "Live",
        statusValueAcademic: "Bachelor project",
        statusValueInProgress: "In progress",
        statusValueReady: "Ready to launch",
      },
      placeholderLabel: "In progress",
      otherProjects: "Older course and side projects, such as Pokédex and n-Queens, are on GitHub.",
      featuresLabel: "What it does",
      builtWith: "Built with",
      allRepos: "More on GitHub",
      screenshotAlt: (name) => `Screenshot of the ${name} project`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Semester project",
        Backend: "Backend",
        Frontend: "Frontend",
        "Design & build": "Design & build",
      },
      bodies: {
        "Party App (PNTA)": "Event-discovery ecosystem built for a bachelor thesis: a React Native app for attendees, a Next.js dashboard for venue managers, a Spring Boot/PostgreSQL backend serving both, and a Python model predicting event attendance.",
        "Teamwear Webshop":
          "A multilingual, multi-currency webshop with a loyalty programme, a built-in finance dashboard and AI-written product pages. Built end to end and run as a real football teamwear business. Ready for a new business, with a new UI.",
        "Riga Cup":
          "Tournament platform for one of the largest youth football tournaments in the Baltics, schedules, results and team management serving thousands of visitors.",
      },
      links: {
        live: "Live",
        liveSite: "Live site",
        source: "Source",
        mobile: "Mobile",
        dashboard: "Dashboard",
        backend: "Backend",
        "ml model": "ML model",
        "admin demo": "Admin demo",
      },
      plateLabels: {
        dashboard: "Venue manager dashboard",
        promoSite: "Promo website",
        mobileApp: "Mobile app",
      },
      proofAlt: {
        "Riga Cup": "Bruno presenting medals to players at the Riga Cup awards ceremony, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Awards ceremony, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Reference build: football teamwear shop",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Reference storefront for a football teamwear shop: boots, a jersey and a hoodie around the headline “Your next Level.”",
      },
      // Structure is shared across locales: two ruled lists, one quality line,
      // one closing sentence and an enquiry button. Each item is a term and one
      // sentence. No prices or packages: none exist to state.
      offers: {
        "Teamwear Webshop": {
          label: "What is included",
          shoppersLabel: "For shoppers",
          ownerLabel: "For the owner",
          shoppers: [
            {
              term: "Local by default",
              body: "Opens in English, Danish or German and prices in EUR or DKK, based on the visitor's country. The choice is remembered.",
            },
            {
              term: "Correct pricing",
              body: "VAT is calculated for the shopper's country. Sale prices are clearly marked.",
            },
            {
              term: "Loyalty points",
              body: "One point per euro, redeemable as discount codes. Points are credited only after the return window closes. First-time buyers get a €10 welcome-back credit.",
            },
            {
              term: "Checkout",
              body: "Payment runs through Stripe. The cart is a drawer that opens from any page.",
            },
            {
              term: "Returns",
              body: "An online withdrawal form handles the 14-day statutory return without email back and forth.",
            },
            {
              term: "Team orders",
              body: "Clubs can request a quote for bulk orders.",
            },
            {
              term: "No dead ends",
              body: "Back-in-stock alerts, product reviews and a “for you” section of relevant products.",
            },
          ],
          owner: [
            {
              term: "Live dashboard",
              body: "Sales, orders and trends in one place, with a demo mode on sample data.",
            },
            {
              term: "Finance built in",
              body: "Revenue, costs, Stripe fees and the profit split between partners for each month. Confirmed income is kept apart from income that could still be returned.",
            },
            {
              term: "Product texts in bulk",
              body: "AI drafts descriptions in all three languages from a style guide, and every draft is checked against the rules automatically.",
            },
            {
              term: "Image checks",
              body: "Supplier images are checked every night. Products with broken photos stay out of the recommendation sections.",
            },
            {
              term: "Private alerts",
              body: "Important events go to Telegram. No personal data is included.",
            },
          ],
          qualityLabel: "Quality",
          quality:
            "Covered by automated tests, including end-to-end tests on desktop Chrome, Android and iPhone. Localised pages, brand pages and guides help it get found in search.",
          change:
            "Built as a real business and kept as a reference. A new business needs the UI changed: brand, colours, imagery and copy. The shop itself is ready.",
          cta: "Ask about Teamwear Webshop",
          subject: "Teamwear Webshop enquiry",
        },
      },
    },
    experience: {
      eyebrow: "Track record",
      title: "Where I've worked and what I studied.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      periods: {
        "2016–Now": "2016–now",
        "Until 2021": "Until 2021",
        "Expected Feb 2027": "Expected February 2027",
      },
      roles: {
        "Test Engineer": "Test Engineer",
        "Developer & Tournament Manager": "Developer & tournament manager, family-run, voluntary",
        "Student Job": "Student Job",
        "BEng Software Technology Engineering": "BEng Software Technology Engineering",
        "IT Technology": "IT Technology",
        "Secondary Education": "Secondary Education",
      },
      bodies: {
        "Riga Cup":
          "Family-run and voluntary. I build and maintain the web platform, and handle ads, scheduling and logistics.",
        "REMA 1000": "Worked alongside full-time study throughout the degree.",
        "VIA University College": "Bachelor of Engineering in software technology, Horsens.",
        "UCL Odense": "Foundation in IT technology and infrastructure.",
        "Riga Culture Secondary School": "Completed secondary education in Riga, Latvia.",
      },
    },
    toolset: {
      eyebrow: "Toolset",
      title: "The tools I reach for.",
      lead: "Grouped by what they're for, not by how proud I am of them.",
      groups: {
        Languages: "Languages",
        Frameworks: "Frameworks",
        Data: "Data",
        Infrastructure: "Infrastructure",
        Practice: "Practice",
      },
      items: {
        "Test Automation": "Test Automation",
        "Code Review": "Code Review",
      },
    },
    contact: {
      eyebrow: "Contact",
      titleLine1: "Let's build",
      titleLine2: "something solid.",
      lead: "Hiring, collaborating, or just want to compare notes on web development? The fastest way to reach me is email, I answer everything.",
    },
    footer: {
      backToTop: "Back to top",
    },
  },

  da: {
    htmlLang: "da",
    seo: {
      title: "Bruno Laizans – Softwareudvikler & webudvikler i Aarhus",
      description:
        "Softwareudvikler i Aarhus, der bygger webapps og webshops i React, Next.js, TypeScript, Java og .NET. Ledig til studiejob, 12-20 timer om ugen fra februar 2027.",
      h1Extra: "Softwareudvikler og webudvikler i Aarhus, Danmark",
      imageAlt: "Bruno Laizans, softwareudvikler i Aarhus, Danmark",
      jobTitle: "Softwareudvikler",
      serviceName: "Bruno Laizans – Softwareudvikling og test",
      serviceTypes: [
        "Udvikling af hjemmesider",
        "Udvikling af webapplikationer",
        "Udvikling af webshops",
        "Softwaretest",
      ],
      ogEyebrow: "SOFTWAREUDVIKLER — AARHUS, DANMARK",
    },
    nav: {
      work: "Projekter",
      about: "Om mig",
      experience: "Erfaring",
      toolset: "Værktøjer",
      contact: "Kontakt",
      menu: "Menu",
      close: "Luk",
      skip: "Gå til indhold",
      main: "Hoved",
      mobile: "Mobil",
      siteMenu: "Sitemenu",
      language: "Sprog",
    },
    hero: {
      availability: "Ledig fra februar 2027",
      pitch:
        "Full-stack udvikler. Jeg leverer webplatforme, som rigtige mennesker bruger hver dag, og holder dem kørende efter launch.",
      statement: "Jeg bygger hjemmesider og webshops, tester dem, før de går live, og står for support efter lancering.",
      offer: {
        label: "Det får du",
        items: [
          {
            title: "Bygget fra start til slut",
            body: "Hjemmesider, webshops og webapps i Java, .NET og TypeScript. Riga Cup har tusindvis af besøgende.",
          },
          {
            title: "Testet, før det går live",
            body: "Webshoppen er dækket af end-to-end-tests på desktop-Chrome, Android og iPhone.",
          },
          {
            title: "Support efter lancering",
            body: "Jeg holder det, jeg bygger, kørende. Jeg har vedligeholdt Riga Cup, og webshoppen tjekker sine billeder hver nat og sender alarmer.",
          },
        ],
        proofLabel: "Rigtigt arbejde",
      },
      hiringNote: "Ledig 12-20 timer om ugen fra februar 2027",
      hireMe: "Ansæt mig",
      seeWork: "Se mine projekter",
      proof: {
        nowAt: "Status",
        nowAtValue: "Fra februar 2027",
        experience: "Erfaring",
        experienceValue: "4+ års udvikling",
        focus: "Fokus",
        focusValue: "Full-stack web",
        response: "Svartid",
        responseValue: "Inden for 24 timer",
      },
      tagline: "Jeg bygger og tester software, der holder i produktion.",
      role: "Softwareingeniør",
      location: "Aarhus, Danmark",
      selectedWork: "Udvalgte projekter",
      getInTouch: "Kontakt mig",
      meta: {
        company: "Virksomhed",
        focus: "Fokus",
        since: "Siden",
        interact: "Interaktiv",
        interactValue: "Bevæg musen",
        focusValue: "Full-stack web",
      },
    },
    capabilities: {
      eyebrow: "Hvad jeg laver",
      title: "Fire ting jeg får løn for at være omhyggelig med.",
      items: [
        {
          title: "Frontend-udvikling",
          body: "Produktionsklare brugerflader med React og Next.js. Typesikre, tilgængelige og bygget mobile-first, inklusive siden du læser nu.",
          flag: "Hovedfokus",
        },
        {
          title: "Full-stack & backend",
          body: "REST API'er og servicelag i Java/Spring Boot og .NET, koblet til React-frontends. Relationel datamodellering med PostgreSQL og MySQL, containeriseret med Docker.",
        },
        {
          title: "Cloud & levering",
          body: "Deployment og drift på Azure. Scrum-levering med Jira, UML-modellering og code review som en naturlig del af arbejdet.",
        },
        {
          title: "Test",
          body: "End-to-end-tests med Playwright på desktop-Chrome, Android og iPhone til webshoppen, med regressionstjek og testdesign som en naturlig del af leveringen.",
        },
      ],
    },
    about: {
      eyebrow: "Om mig",
      title: "Jeg er bedre til at rejse mig end til slet ikke at falde.",
      intro:
        "Full-stack udvikler. Jeg har leveret e-handels- og turneringsplatforme, som er i drift og bruges dagligt. Full-stack baggrund i Java, .NET og TypeScript.",
      p2: "Før alt det her spillede jeg fodbold, målmand indtil jeg var 14, derefter forsvarsspiller, midtbane, angriber, hvad end holdet manglede. Jeg kom igennem Skontos akademi, derefter RFS og Riga FC på Letlands højeste ungdomsniveau, og på et tidspunkt regnede jeg ud, hvad lettisk fodbold reelt kunne betale, og begyndte i stedet at lære at kode.",
      p3: "Det, der blev hængende, er evnen til at tilpasse sig, ikke at lære én position så godt, at man kan læne sig tilbage, men rent faktisk gøre gavn dér, hvor holdet manglede noget. Sådan cirka griber jeg også en kodebase an: jeg tester det, jeg bygger, og fordi jeg arbejder på tværs af frontend og backend, kan jeg læse koden i stedet for at gætte. Fra februar 2027 er jeg ledig 12-20 timer om ugen.",
      cta: "Start en samtale",
      photoAlt: "Bruno spiller fodbold i en konkurrencekamp i Letland",
      stats: [
        "År med kodning",
        "Teknologier anvendt",
        "Produkter i drift",
        "Sprog jeg taler",
      ],
    },
    work: {
      eyebrow: "Udvalgte projekter",
      poster: "Udvalgte projekter",
      title: "Produkter bygget end-to-end, fra data til interface.",
      rail: {
        role: "Rolle",
        year: "År",
        status: "Status",
        statusValue: "Live",
        statusValueAcademic: "Bachelorprojekt",
        statusValueInProgress: "I gang",
        statusValueReady: "Klar til lancering",
      },
      placeholderLabel: "I gang",
      otherProjects: "Ældre kursus- og sideprojekter, som Pokédex og n-Queens, ligger på GitHub.",
      featuresLabel: "Hvad den kan",
      builtWith: "Bygget med",
      allRepos: "Mere på GitHub",
      screenshotAlt: (name) => `Skærmbillede af projektet ${name}`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Semesterprojekt",
        Backend: "Backend",
        Frontend: "Frontend",
        "Design & build": "Design & udvikling",
      },
      bodies: {
        "Party App (PNTA)": "Event-discovery-økosystem bygget til et bachelorprojekt: en React Native-app til deltagere, et Next.js-dashboard til venue-managere, en Spring Boot/PostgreSQL-backend der betjener begge, og en Python-model der forudsiger fremmøde til events.",
        "Teamwear Webshop":
          "En flersproget webshop med flere valutaer, et loyalitetsprogram, et indbygget økonomidashboard og AI-skrevne produktsider. Bygget fra start til slut og drevet som en rigtig forretning med fodboldtøj. Klar til en ny virksomhed, med en ny brugerflade.",
        "Riga Cup":
          "Turneringsplatform til en af Baltikums største ungdomsfodboldturneringer, kampprogrammer, resultater og holdadministration for tusindvis af besøgende.",
      },
      links: {
        live: "Live",
        liveSite: "Se live",
        source: "Kildekode",
        mobile: "Mobil",
        dashboard: "Dashboard",
        backend: "Backend",
        "ml model": "ML-model",
        "admin demo": "Admin-demo",
      },
      plateLabels: {
        dashboard: "Dashboard til venue-managere",
        promoSite: "Kampagnesite",
        mobileApp: "Mobilapp",
      },
      proofAlt: {
        "Riga Cup": "Bruno overrækker medaljer til spillere ved Riga Cups medaljeceremoni, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Medaljeceremoni, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Referencebuild: webshop med fodboldtøj",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Referencebutik for en webshop med fodboldtøj: støvler, en trøje og en hættetrøje omkring overskriften “Your next Level.”",
      },
      offers: {
        "Teamwear Webshop": {
          label: "Hvad er med",
          shoppersLabel: "For kunden",
          ownerLabel: "For ejeren",
          shoppers: [
            {
              term: "Lokal som standard",
              body: "Åbner på engelsk, dansk eller tysk og viser priser i EUR eller DKK ud fra den besøgendes land. Valget huskes.",
            },
            {
              term: "Korrekte priser",
              body: "Moms beregnes for kundens land. Tilbudspriser er tydeligt markeret.",
            },
            {
              term: "Loyalitetspoint",
              body: "Ét point pr. euro, som kan indløses til rabatkoder. Point krediteres først, når fortrydelsesfristen er udløbet. Førstegangskøbere får en velkomstkredit på 10 €.",
            },
            {
              term: "Betaling",
              body: "Betalingen kører via Stripe. Kurven er en skuffe, der kan åbnes fra enhver side.",
            },
            {
              term: "Returnering",
              body: "En online fortrydelsesformular håndterer den lovpligtige 14-dages fortrydelsesret uden e-mails frem og tilbage.",
            },
            {
              term: "Holdbestillinger",
              body: "Klubber kan bede om et tilbud på større ordrer.",
            },
            {
              term: "Aldrig en blindgyde",
              body: "Besked når varer er på lager igen, produktanmeldelser og en “til dig”-sektion med relevante produkter.",
            },
          ],
          owner: [
            {
              term: "Live dashboard",
              body: "Salg, ordrer og tendenser samlet ét sted, med en demotilstand på eksempeldata.",
            },
            {
              term: "Økonomi indbygget",
              body: "Omsætning, omkostninger, Stripe-gebyrer og overskudsfordelingen mellem partnere for hver måned. Bekræftet indtjening holdes adskilt fra indtjening, der stadig kan returneres.",
            },
            {
              term: "Produkttekster i bulk",
              body: "AI skriver beskrivelser på alle tre sprog ud fra en stilguide, og hvert udkast kontrolleres automatisk mod reglerne.",
            },
            {
              term: "Billedkontrol",
              body: "Leverandørbilleder tjekkes hver nat. Produkter med ødelagte billeder holdes ude af anbefalingssektionerne.",
            },
            {
              term: "Private notifikationer",
              body: "Vigtige hændelser sendes til Telegram. Der medsendes ingen persondata.",
            },
          ],
          qualityLabel: "Kvalitet",
          quality:
            "Dækket af automatiske tests, herunder end-to-end-tests på desktop-Chrome, Android og iPhone. Lokaliserede sider, mærkesider og guides gør butikken nem at finde i søgemaskiner.",
          change:
            "Bygget som en rigtig forretning og bevaret som reference. En ny virksomhed skal have ændret brugerfladen: brand, farver, billeder og tekster. Selve butikken er klar.",
          cta: "Spørg om Teamwear Webshop",
          subject: "Henvendelse om Teamwear Webshop",
        },
      },
    },
    experience: {
      eyebrow: "Baggrund",
      title: "Hvor jeg har arbejdet, og hvad jeg har studeret.",
      experienceLabel: "Erfaring",
      educationLabel: "Uddannelse",
      periods: {
        "2016–Now": "2016–nu",
        "Until 2021": "Til 2021",
        "Expected Feb 2027": "Forventet februar 2027",
      },
      roles: {
        "Test Engineer": "Testingeniør",
        "Developer & Tournament Manager": "Udvikler & turneringsleder, familiedrevet, frivilligt",
        "Student Job": "Studiejob",
        "BEng Software Technology Engineering": "Diplomingeniør i softwareteknologi",
        "IT Technology": "IT-teknologi",
        "Secondary Education": "Gymnasial uddannelse",
      },
      bodies: {
        "Riga Cup":
          "Familiedrevet og frivilligt. Jeg bygger og vedligeholder webplatformen og tager mig af annoncer, planlægning og logistik.",
        "REMA 1000": "Arbejdede sideløbende med fuldtidsstudier gennem hele uddannelsen.",
        "VIA University College": "Diplomingeniøruddannelse i softwareteknologi, Horsens.",
        "UCL Odense": "Grundforløb i IT-teknologi og infrastruktur.",
        "Riga Culture Secondary School": "Afsluttet gymnasial uddannelse i Riga, Letland.",
      },
    },
    toolset: {
      eyebrow: "Værktøjer",
      title: "De værktøjer jeg griber efter.",
      lead: "Grupperet efter hvad de bruges til, ikke efter hvor stolt jeg er af dem.",
      groups: {
        Languages: "Sprog",
        Frameworks: "Frameworks",
        Data: "Data",
        Infrastructure: "Infrastruktur",
        Practice: "Praksis",
      },
      items: {
        "Test Automation": "Testautomatisering",
        "Code Review": "Code review",
      },
    },
    contact: {
      eyebrow: "Kontakt",
      titleLine1: "Lad os bygge",
      titleLine2: "noget solidt.",
      lead: "Skal du ansætte, samarbejde eller bare vende erfaringer om webudvikling? Den hurtigste vej til mig er e-mail, jeg svarer på alt.",
    },
    footer: {
      backToTop: "Til toppen",
    },
  },

  ru: {
    htmlLang: "ru",
    seo: {
      title: "Bruno Laizans – Инженер-программист и веб-разработчик, Орхус",
      description:
        "Разработчик из Орхуса: веб-приложения и интернет-магазины на React, Next.js, TypeScript, Java и .NET. Ищу studiejob, 12-20 часов в неделю с февраля 2027.",
      h1Extra: "Инженер-программист и веб-разработчик в Орхусе, Дания",
      imageAlt: "Bruno Laizans, инженер-программист в Орхусе, Дания",
      jobTitle: "Инженер-программист",
      serviceName: "Bruno Laizans – Разработка и тестирование ПО",
      serviceTypes: [
        "Разработка сайтов",
        "Разработка веб-приложений",
        "Разработка интернет-магазинов",
        "Тестирование ПО",
      ],
      ogEyebrow: "ИНЖЕНЕР-ПРОГРАММИСТ — ОРХУС, ДАНИЯ",
    },
    nav: {
      work: "Проекты",
      about: "Обо мне",
      experience: "Опыт",
      toolset: "Инструменты",
      contact: "Контакты",
      menu: "Меню",
      close: "Закрыть",
      skip: "Перейти к содержанию",
      main: "Основное",
      mobile: "Мобильное",
      siteMenu: "Меню сайта",
      language: "Язык",
    },
    hero: {
      availability: "Доступен с февраля 2027",
      pitch:
        "Full-stack разработчик. Я выпускаю веб-платформы, которыми люди пользуются каждый день, и поддерживаю их после запуска.",
      statement: "Я делаю сайты и интернет-магазины, тестирую их до запуска и поддерживаю после запуска.",
      offer: {
        label: "Что вы получите",
        items: [
          {
            title: "Сделано от начала до конца",
            body: "Сайты, интернет-магазины и веб-приложения на Java, .NET и TypeScript. Riga Cup обслуживает тысячи посетителей.",
          },
          {
            title: "Проверено до запуска",
            body: "Магазин покрыт сквозными тестами в десктопном Chrome, Android и iPhone.",
          },
          {
            title: "Поддержка после запуска",
            body: "Я слежу за тем, что построил. Я поддерживал Riga Cup, а магазин каждую ночь проверяет изображения и шлёт уведомления.",
          },
        ],
        proofLabel: "Реальные работы",
      },
      hiringNote: "Доступен 12-20 часов в неделю с февраля 2027",
      hireMe: "Нанять меня",
      seeWork: "Мои работы",
      proof: {
        nowAt: "Статус",
        nowAtValue: "С февраля 2027",
        experience: "Опыт",
        experienceValue: "4+ года разработки",
        focus: "Направление",
        focusValue: "Full-stack веб",
        response: "Время ответа",
        responseValue: "В течение 24 часов",
      },
      tagline: "Разрабатываю и тестирую софт, который выдерживает продакшн.",
      role: "Инженер-программист",
      location: "Орхус, Дания",
      selectedWork: "Избранные работы",
      getInTouch: "Связаться",
      meta: {
        company: "Компания",
        focus: "Направление",
        since: "С",
        interact: "Интерактив",
        interactValue: "Двигайте курсор",
        focusValue: "Full-stack веб",
      },
    },
    capabilities: {
      eyebrow: "Чем я занимаюсь",
      title: "Четыре вещи, за внимательность к которым мне платят.",
      items: [
        {
          title: "Фронтенд-разработка",
          body: "Продакшн-интерфейсы на React и Next.js. Типизированные, доступные и построенные по принципу mobile-first, включая сайт, который вы читаете.",
          flag: "Основной фокус",
        },
        {
          title: "Full-stack и бэкенд",
          body: "REST API и сервисные слои на Java/Spring Boot и .NET, подключённые к React-фронтендам. Реляционное моделирование данных на PostgreSQL и MySQL, контейнеризация через Docker.",
        },
        {
          title: "Облако и поставка",
          body: "Развёртывание и эксплуатация в Azure. Работа по Scrum с Jira, моделирование UML и код-ревью как обычная часть процесса.",
        },
        {
          title: "Тестирование",
          body: "Сквозные тесты на Playwright в десктопном Chrome, Android и iPhone для интернет-магазина, плюс регрессионные проверки и тест-дизайн как обычная часть поставки.",
        },
      ],
    },
    about: {
      eyebrow: "Обо мне",
      title: "Я лучше умею возвращаться, чем не падать.",
      intro:
        "Full-stack разработчик. Я выпустил платформы для электронной коммерции и турниров, которые работают в продакшне и используются каждый день. Full-stack опыт в Java, .NET и TypeScript.",
      p2: "До всего этого я играл в футбол, вратарём лет до 14, потом защитником, полузащитником, нападающим, кем нужно было команде. Прошёл через академию Skonto, затем год в RFS и два в Riga FC на высшем юношеском уровне Латвии, а потом прикинул, сколько реально может заплатить латвийский футбол, и начал вместо этого учиться программировать.",
      p3: "Что осталось со мной, так это умение подстраиваться, не отточить одну позицию до автоматизма, а реально быть полезным там, где команде чего-то не хватало. Примерно так я подхожу и к кодовой базе: тестирую то, что строю, а поскольку я работаю и с фронтендом, и с бэкендом, я могу читать код, а не гадать. С февраля 2027 я доступен 12-20 часов в неделю.",
      cta: "Начать разговор",
      photoAlt: "Бруно играет в футбол на соревновательном матче в Латвии",
      stats: [
        "Лет пишу код",
        "Использованных технологий",
        "Продукта в проде",
        "Языков в активе",
      ],
    },
    work: {
      eyebrow: "Избранные работы",
      poster: "Избранные работы",
      title: "Продукты, построенные от данных до интерфейса.",
      rail: {
        role: "Роль",
        year: "Год",
        status: "Статус",
        statusValue: "Live",
        statusValueAcademic: "Дипломный проект",
        statusValueInProgress: "В процессе",
        statusValueReady: "Готов к запуску",
      },
      placeholderLabel: "В процессе",
      otherProjects: "Старые учебные и личные проекты, такие как Pokédex и n-Queens, лежат на GitHub.",
      featuresLabel: "Что умеет",
      builtWith: "Стек",
      allRepos: "Ещё на GitHub",
      screenshotAlt: (name) => `Скриншот проекта ${name}`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Семестровый проект",
        Backend: "Бэкенд",
        Frontend: "Фронтенд",
        "Design & build": "Дизайн и разработка",
      },
      bodies: {
        "Party App (PNTA)": "Экосистема для поиска мероприятий, созданная как дипломный проект: приложение на React Native для гостей, дашборд на Next.js для менеджеров площадок, бэкенд на Spring Boot/PostgreSQL, обслуживающий оба, и модель на Python, предсказывающая посещаемость мероприятий.",
        "Teamwear Webshop":
          "Многоязычный интернет-магазин с несколькими валютами, программой лояльности, встроенной финансовой панелью и страницами товаров, написанными ИИ. Собран от начала до конца и работал как настоящий бизнес по продаже футбольной экипировки. Готов для нового бизнеса, с новым интерфейсом.",
        "Riga Cup":
          "Платформа для одного из крупнейших юношеских футбольных турниров Балтии, расписания, результаты и управление командами для тысяч посетителей.",
      },
      links: {
        live: "Онлайн",
        liveSite: "Открыть сайт",
        source: "Исходный код",
        mobile: "Мобильное",
        dashboard: "Дашборд",
        backend: "Бэкенд",
        "ml model": "ML-модель",
        "admin demo": "Демо админки",
      },
      plateLabels: {
        dashboard: "Дашборд для менеджеров площадок",
        promoSite: "Промо-сайт",
        mobileApp: "Мобильное приложение",
      },
      proofAlt: {
        "Riga Cup": "Бруно вручает медали игрокам на церемонии награждения Riga Cup, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Церемония награждения, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Референсная сборка: магазин футбольной экипировки",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Референсная витрина магазина футбольной экипировки: бутсы, футболка и худи вокруг заголовка «Your next Level.»",
      },
      offers: {
        "Teamwear Webshop": {
          label: "Что входит",
          shoppersLabel: "Для покупателей",
          ownerLabel: "Для владельца",
          shoppers: [
            {
              term: "Свой язык и валюта",
              body: "Магазин открывается на английском, датском или немецком и показывает цены в EUR или DKK в зависимости от страны посетителя. Выбор запоминается.",
            },
            {
              term: "Верные цены",
              body: "НДС считается по стране покупателя. Цены со скидкой отмечены явно.",
            },
            {
              term: "Бонусные баллы",
              body: "Один балл за евро, баллы обмениваются на промокоды. Баллы начисляются только после окончания срока возврата. Новым покупателям полагается приветственный кредит 10 €.",
            },
            {
              term: "Оплата",
              body: "Платежи проходят через Stripe. Корзина — выдвижная панель, которая открывается с любой страницы.",
            },
            {
              term: "Возвраты",
              body: "Онлайн-форма отказа оформляет законный 14-дневный возврат без переписки по почте.",
            },
            {
              term: "Заказы для команд",
              body: "Клубы могут запросить предложение на крупный заказ.",
            },
            {
              term: "Без тупиков",
              body: "Уведомления о поступлении товара, отзывы и раздел «для вас» с подходящими товарами.",
            },
          ],
          owner: [
            {
              term: "Живая панель",
              body: "Продажи, заказы и тренды в одном месте, плюс демо-режим на примерных данных.",
            },
            {
              term: "Финансы внутри",
              body: "Выручка, расходы, комиссии Stripe и распределение прибыли между партнёрами по каждому месяцу. Подтверждённый доход отделён от дохода, который ещё могут вернуть.",
            },
            {
              term: "Описания товаров пакетом",
              body: "ИИ пишет описания на всех трёх языках по руководству по стилю, и каждый черновик автоматически проверяется на соответствие правилам.",
            },
            {
              term: "Проверка изображений",
              body: "Изображения поставщиков проверяются каждую ночь. Товары с битыми фото не попадают в блоки рекомендаций.",
            },
            {
              term: "Приватные уведомления",
              body: "Важные события приходят в Telegram. Персональные данные в них не включаются.",
            },
          ],
          qualityLabel: "Качество",
          quality:
            "Покрыт автоматическими тестами, включая сквозные тесты в десктопном Chrome, Android и iPhone. Локализованные страницы, страницы брендов и руководства помогают находить магазин в поиске.",
          change:
            "Собран как настоящий бизнес и сохранён как референс. Новому бизнесу нужно сменить интерфейс: бренд, цвета, изображения и тексты. Сам магазин готов.",
          cta: "Спросить о Teamwear Webshop",
          subject: "Запрос о Teamwear Webshop",
        },
      },
    },
    experience: {
      eyebrow: "Послужной список",
      title: "Где я работал и что изучал.",
      experienceLabel: "Опыт работы",
      educationLabel: "Образование",
      periods: {
        "2016–Now": "2016–н. в.",
        "Until 2021": "До 2021",
        "Expected Feb 2027": "Ожидается февраль 2027",
      },
      roles: {
        "Test Engineer": "Инженер по тестированию",
        "Developer & Tournament Manager": "Разработчик и руководитель турнира, семейный проект, на волонтёрской основе",
        "Student Job": "Работа во время учёбы",
        "BEng Software Technology Engineering": "Бакалавр-инженер, программная инженерия",
        "IT Technology": "IT-технологии",
        "Secondary Education": "Среднее образование",
      },
      bodies: {
        "Riga Cup":
          "Семейный проект на волонтёрской основе. Разрабатываю и поддерживаю веб-платформу, а также занимаюсь рекламой, расписанием и логистикой.",
        "REMA 1000": "Работал параллельно с очной учёбой на протяжении всей программы.",
        "VIA University College": "Степень бакалавра-инженера в области программной инженерии, Хорсенс.",
        "UCL Odense": "Базовая программа по IT-технологиям и инфраструктуре.",
        "Riga Culture Secondary School": "Окончил среднюю школу в Риге, Латвия.",
      },
    },
    toolset: {
      eyebrow: "Инструменты",
      title: "Инструменты, к которым я тянусь.",
      lead: "Сгруппированы по назначению, а не по тому, насколько я ими горжусь.",
      groups: {
        Languages: "Языки",
        Frameworks: "Фреймворки",
        Data: "Данные",
        Infrastructure: "Инфраструктура",
        Practice: "Практики",
      },
      items: {
        "Test Automation": "Автоматизация тестирования",
        "Code Review": "Код-ревью",
      },
    },
    contact: {
      eyebrow: "Контакты",
      titleLine1: "Давайте построим",
      titleLine2: "что-то надёжное.",
      lead: "Наём, сотрудничество или просто обмен опытом по веб-разработке? Быстрее всего, по почте, я отвечаю на всё.",
    },
    footer: {
      backToTop: "Наверх",
    },
  },
};
