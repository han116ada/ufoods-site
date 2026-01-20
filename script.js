(function(){
  const dict = {
    tr: {
      nav_products: "Ürünler",
      nav_about: "Hakkımızda",
      nav_mission: "Misyon & Vizyon",
      nav_contact: "İletişim",
      nav_yasou: "YASOU",
      nav_cta: "İletişime Geç",

      hero_tag: "UFOODS • Germany Wholesale",
      hero_title: "Germany Wholesale Ready Fine Foods",
      hero_desc: "Almanya içi toptancılar ve marketler için planlı tedarik. Güvenilir kalite, istikrarlı sevkiyat ve profesyonel iş ortaklığı.",
      chip_1: "Hedef: DE Toptancı & Market",
      chip_2: "15+ yıl deneyim",
      chip_3: "Planlı tedarik",
      btn_products: "Ürünleri Gör",
      btn_whatsapp: "WhatsApp’tan yaz",

      focus_title: "Odak Ürün",
      focus_name: "Asma Yaprağı",
      focus_desc: "Kavanoz 1062cc (454g süzme) ve vakum 350g / 700g seçenekleri.",
      focus_b1: "B2B yaklaşım",
      focus_p1: "Teklif bazlı çalışma, düzenli sevkiyat planı.",
      focus_b2: "Tutarlılık",
      focus_p2: "Standart ürün spesifikasyonu ile sürdürülebilir kalite.",

      mini_l1: "Ürün",
      mini_h1: "Çeşitlilik",
      mini_p1: "Asma yaprağı ile başladık. Kısa zamanda ürün portföyümüz genişleyecek.",
      mini_l2: "Pazar",
      mini_h2: "Almanya",
      mini_p2: "Toptancılar ve market zincirleri için uygun operasyon ve iletişim.",
      mini_l3: "İletişim",
      mini_h3: "Hızlı Teklif",
      mini_p3: "WhatsApp üzerinden hızlı fiyat ve teslimat bilgisi alın.",

      wa_title: "WhatsApp",
      wa_sub: "Hızlı iletişim",

      // products page
      pr_tag: "Ürünler",
      pr_title: "Ürün Portföyü",
      pr_desc: "Toptancılar ve marketler için planlı tedarik. Ürün çeşitliliği genişliyor.",
      pr_card1: "Asma Yaprağı — Kavanoz",
      pr_card1p: "Perakende rafları ve toptan dağıtım için uygun, standart ambalaj.",
      pr_card2: "Asma Yaprağı — Vakum Torba",
      pr_card2p: "Pratik taşıma ve esnek sevkiyat için vakum torba seçenekleri.",
      pr_more: "Yeni ürünler yakında",
      pr_morep: "YASOU markası altında farklı kategoriler için üretim & tedarik hazırlıkları sürüyor.",

      // about page
      ab_tag: "Hakkımızda",
      ab_title: "15+ Yıllık Deneyimle Güvenilir Tedarik",
      ab_desc: "Uzay Fine Foods MM GmbH, köklü üretim ve tedarik tecrübesiyle Almanya pazarına odaklanan B2B bir iş ortağıdır.",
      ab_b1: "Profesyonel operasyon",
      ab_p1: "Planlı sevkiyat, kalite kontrol ve düzenli iletişim.",
      ab_b2: "B2B odaklı",
      ab_p2: "Toptancı ve market kanallarına uygun çalışma modeli.",

      // mission page
      ms_tag: "Misyon & Vizyon",
      ms_title: "Kalite, Süreklilik ve Güven",
      ms_desc: "Hedefimiz; güvenilir ürün standardı ile Almanya’da güçlü iş ortaklıkları kurmak.",
      ms_m1: "Misyon",
      ms_m1p: "Toptancı ve marketlere istikrarlı ürün tedariki sağlamak, kaliteyi sürdürülebilir hale getirmek.",
      ms_m2: "Vizyon",
      ms_m2p: "Fine foods kategorisinde Almanya’da tercih edilen markalardan biri olmak.",
      ms_m3: "Değerler",
      ms_m3p: "Şeffaflık • Zamanında sevkiyat • Standart kalite • Profesyonel iletişim",

      // contact page
      ct_tag: "İletişim",
      ct_title: "İletişime Geçin",
      ct_desc: "Fiyat, sevkiyat ve iş birliği için bize ulaşabilirsiniz.",
      ct_k1: "Telefon",
      ct_k2: "WhatsApp",
      ct_k3: "E-posta",
      ct_k4: "Hedef Pazar",
      ct_market: "Almanya (B2B - Toptancı & Market)",

      // yasou page
      ys_tag: "Marka",
      ys_title: "YASOU",
      ys_desc: "YASOU, Uzay Fine Foods MM GmbH’nin ürün markasıdır. Ürün portföyü genişledikçe YASOU altında farklı kategoriler sunulacaktır."
    },

    en: {
      nav_products: "Products",
      nav_about: "About",
      nav_mission: "Mission & Vision",
      nav_contact: "Contact",
      nav_yasou: "YASOU",
      nav_cta: "Contact Us",

      hero_tag: "UFOODS • Germany Wholesale",
      hero_title: "Germany Wholesale Ready Fine Foods",
      hero_desc: "Planned supply for wholesalers and markets in Germany. Reliable quality, consistent logistics, professional partnership.",
      chip_1: "Target: DE Wholesale & Retail",
      chip_2: "15+ years experience",
      chip_3: "Planned supply",
      btn_products: "View Products",
      btn_whatsapp: "Message on WhatsApp",

      focus_title: "Focus Product",
      focus_name: "Grape Leaves",
      focus_desc: "Jar 1062cc (454g drained) and vacuum packs 350g / 700g.",
      focus_b1: "B2B approach",
      focus_p1: "Quote-based supply with scheduled deliveries.",
      focus_b2: "Consistency",
      focus_p2: "Sustainable quality with standard product specs.",

      mini_l1: "Product",
      mini_h1: "Variety",
      mini_p1: "Starting with grape leaves. The portfolio will expand soon.",
      mini_l2: "Market",
      mini_h2: "Germany",
      mini_p2: "Operations and communication designed for wholesalers & chains.",
      mini_l3: "Contact",
      mini_h3: "Fast Quotation",
      mini_p3: "Get pricing and delivery details via WhatsApp.",

      wa_title: "WhatsApp",
      wa_sub: "Quick contact",

      pr_tag: "Products",
      pr_title: "Product Portfolio",
      pr_desc: "Planned supply for wholesalers and markets. The portfolio is expanding.",
      pr_card1: "Grape Leaves — Jar",
      pr_card1p: "Standard packaging suitable for retail shelves and wholesale distribution.",
      pr_card2: "Grape Leaves — Vacuum Pack",
      pr_card2p: "Vacuum options for flexible shipping and practical handling.",
      pr_more: "More products soon",
      pr_morep: "New categories under YASOU are in preparation.",

      ab_tag: "About",
      ab_title: "Trusted Supply with 15+ Years of Experience",
      ab_desc: "Uzay Fine Foods MM GmbH is a B2B partner focused on Germany with strong production and supply expertise.",
      ab_b1: "Professional operations",
      ab_p1: "Planned shipments, quality control, consistent communication.",
      ab_b2: "B2B focused",
      ab_p2: "Tailored workflow for wholesale and retail chains.",

      ms_tag: "Mission & Vision",
      ms_title: "Quality, Continuity and Trust",
      ms_desc: "We aim to build strong partnerships in Germany with reliable product standards.",
      ms_m1: "Mission",
      ms_m1p: "Deliver consistent supply for wholesalers and markets while keeping quality sustainable.",
      ms_m2: "Vision",
      ms_m2p: "Become one of the preferred fine foods brands in Germany.",
      ms_m3: "Values",
      ms_m3p: "Transparency • On-time delivery • Standard quality • Professional communication",

      ct_tag: "Contact",
      ct_title: "Get in Touch",
      ct_desc: "Reach out for pricing, logistics and partnership opportunities.",
      ct_k1: "Phone",
      ct_k2: "WhatsApp",
      ct_k3: "Email",
      ct_k4: "Target Market",
      ct_market: "Germany (B2B - Wholesale & Retail)",

      ys_tag: "Brand",
      ys_title: "YASOU",
      ys_desc: "YASOU is the product brand of Uzay Fine Foods MM GmbH. As the portfolio grows, new categories will be offered under YASOU."
    },

    de: {
      nav_products: "Produkte",
      nav_about: "Über uns",
      nav_mission: "Mission & Vision",
      nav_contact: "Kontakt",
      nav_yasou: "YASOU",
      nav_cta: "Kontakt",

      hero_tag: "UFOODS • Großhandel Deutschland",
      hero_title: "Germany Wholesale Ready Fine Foods",
      hero_desc: "Geplante Belieferung für Großhändler und Märkte in Deutschland. Zuverlässige Qualität, stabile Logistik, professionelle Partnerschaft.",
      chip_1: "Ziel: DE Großhandel & Markt",
      chip_2: "15+ Jahre Erfahrung",
      chip_3: "Geplante Lieferung",
      btn_products: "Produkte ansehen",
      btn_whatsapp: "WhatsApp Nachricht",

      focus_title: "Fokusprodukt",
      focus_name: "Weinblätter",
      focus_desc: "Glas 1062cc (454g Abtropfgewicht) und Vakuumpack 350g / 700g.",
      focus_b1: "B2B Ansatz",
      focus_p1: "Angebotsbasierte Lieferung mit planbaren Sendungen.",
      focus_b2: "Konstanz",
      focus_p2: "Nachhaltige Qualität durch Standard-Spezifikationen.",

      mini_l1: "Produkt",
      mini_h1: "Vielfalt",
      mini_p1: "Start mit Weinblättern. Das Sortiment wird bald erweitert.",
      mini_l2: "Markt",
      mini_h2: "Deutschland",
      mini_p2: "Prozesse und Kommunikation für Großhandel & Ketten.",
      mini_l3: "Kontakt",
      mini_h3: "Schnelles Angebot",
      mini_p3: "Preise und Lieferung schnell per WhatsApp.",

      wa_title: "WhatsApp",
      wa_sub: "Schnellkontakt",

      pr_tag: "Produkte",
      pr_title: "Produktportfolio",
      pr_desc: "Geplante Belieferung für Großhandel und Märkte. Das Sortiment wächst.",
      pr_card1: "Weinblätter — Glas",
      pr_card1p: "Standardverpackung für Einzelhandel und Großhandel geeignet.",
      pr_card2: "Weinblätter — Vakuumbeutel",
      pr_card2p: "Vakuumoptionen für flexible Logistik und einfache Handhabung.",
      pr_more: "Weitere Produkte folgen",
      pr_morep: "Neue Kategorien unter YASOU sind in Vorbereitung.",

      ab_tag: "Über uns",
      ab_title: "Zuverlässige Lieferung mit 15+ Jahren Erfahrung",
      ab_desc: "Uzay Fine Foods MM GmbH ist ein B2B-Partner mit Fokus auf Deutschland und starker Produktions- sowie Lieferkompetenz.",
      ab_b1: "Professionelle Abläufe",
      ab_p1: "Geplante Sendungen, Qualitätskontrolle, klare Kommunikation.",
      ab_b2: "B2B Fokus",
      ab_p2: "Arbeitsmodell passend für Großhandel und Marktketten.",

      ms_tag: "Mission & Vision",
      ms_title: "Qualität, Kontinuität und Vertrauen",
      ms_desc: "Unser Ziel: starke Partnerschaften in Deutschland mit verlässlichen Standards.",
      ms_m1: "Mission",
      ms_m1p: "Stabile Belieferung für Großhandel und Märkte mit nachhaltiger Qualität.",
      ms_m2: "Vision",
      ms_m2p: "Eine der bevorzugten Fine-Foods Marken in Deutschland werden.",
      ms_m3: "Werte",
      ms_m3p: "Transparenz • Pünktliche Lieferung • Standardqualität • Professionelle Kommunikation",

      ct_tag: "Kontakt",
      ct_title: "Kontaktieren Sie uns",
      ct_desc: "Für Preise, Logistik und Zusammenarbeit erreichen Sie uns hier.",
      ct_k1: "Telefon",
      ct_k2: "WhatsApp",
      ct_k3: "E-Mail",
      ct_k4: "Zielmarkt",
      ct_market: "Deutschland (B2B - Großhandel & Markt)",

      ys_tag: "Marke",
      ys_title: "YASOU",
      ys_desc: "YASOU ist die Produktmarke von Uzay Fine Foods MM GmbH. Mit wachsendem Portfolio kommen neue Kategorien unter YASOU."
    }
  };

  function setActiveMenu(){
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".menu a").forEach(a=>{
      const href = (a.getAttribute("href") || "").toLowerCase();
      if(href === path) a.classList.add("active");
    });
  }

  function applyLang(lang){
    const t = dict[lang] || dict.tr;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(t[key]) el.textContent = t[key];
    });

    localStorage.setItem("ufoods_lang", lang);
  }

  function initLang(){
    const saved = localStorage.getItem("ufoods_lang") || "tr";
    const sel = document.getElementById("langSelect");
    if(sel){
      sel.value = saved;
      sel.addEventListener("change", e => applyLang(e.target.value));
    }
    applyLang(saved);
  }

  window.addEventListener("DOMContentLoaded", ()=>{
    setActiveMenu();
    initLang();
  });
})();
