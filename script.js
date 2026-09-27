// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close menu when a nav link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});


/* ------------------------------------------------------------------ */
/*  i18n — Greek (default) / English                                  */
/* ------------------------------------------------------------------ */

const translations = {
  el: {
    'meta.title': 'STATIKΩN — Υπηρεσίες Πολιτικού Μηχανικού',
    'meta.desc': 'Η STATIKΩN προσφέρει επαγγελματικές υπηρεσίες πολιτικού μηχανικού, στατικές μελέτες και συμβουλευτική έργων. Ζητήστε προσφορά σήμερα.',

    'nav.services': 'Υπηρεσίες',
    'nav.portfolio': 'Έργα',
    'nav.quote': 'Ζητήστε Προσφορά',
    'nav.contact': 'Επικοινωνία',

    'hero.title': 'Στατικές Μελέτες<br />με Ακρίβεια και Ευθύνη',
    'hero.subtitle': 'Η STATIKΩN παρέχει υπηρεσίες στατικών και αντισεισμικών μελετών, αποτίμησης και ενίσχυσης υφιστάμενων κατασκευών, τεχνικής συμβουλευτικής, επιμετρήσεων και υποστήριξης έργων στην Κύπρο.',
    'hero.cta1': 'Ζητήστε Προσφορά',
    'hero.cta2': 'Δείτε τα Έργα',

    'services.title': 'Υπηρεσίες',
    'services.subtitle': 'Τεχνικές υπηρεσίες με έμφαση στην ασφάλεια, την αξιοπιστία και την πρακτική εφαρμογή στο εργοτάξιο.',

    'svc.struct.title': 'Στατικές & Αντισεισμικές Μελέτες',
    'svc.struct.desc': 'Μελέτη και σχεδιασμός φέροντα οργανισμού για κατοικίες, προσθήκες, εμπορικά και ειδικά έργα από οπλισμένο σκυρόδεμα ή μεταλλικές κατασκευές.',

    'svc.consult.title': 'Τεχνική Συμβουλευτική',
    'svc.consult.desc': 'Υποστήριξη σε θέματα επιλογής στατικής λύσης, κανονισμών, υλικών, κόστους και κατασκευασιμότητας.',

    'svc.superv.title': 'Επίβλεψη & Υποστήριξη Έργου',
    'svc.superv.desc': 'Τεχνική παρακολούθηση, έλεγχος εφαρμογής της μελέτης και υποστήριξη κατά τη διάρκεια της κατασκευής.',

    'svc.inspect.title': 'Αποτίμηση Υφιστάμενων Κτιρίων',
    'svc.inspect.desc': 'Έλεγχος υφιστάμενων κατασκευών, αξιολόγηση φέρουσας ικανότητας και τεχνική τεκμηρίωση για προσθήκες, αλλαγές ή επεμβάσεις.',

    'svc.permit.title': 'Σχέδια, Άδειες & Τεκμηρίωση',
    'svc.permit.desc': 'Προετοιμασία στατικών σχεδίων, τεχνικών εγγράφων και απαιτούμενων στοιχείων για αδειοδοτήσεις και συντονισμό μελετών.',

    'svc.renov.title': 'Ενίσχυση & Αναβάθμιση Κατασκευών',
    'svc.renov.desc': 'Προτάσεις ενίσχυσης για υφιστάμενα κτίρια, ανακαινίσεις/προσθήκες, επεκτάσεις και βελτίωση της σεισμικής συμπεριφοράς.',

    'portfolio.label': 'PORTFOLIO',
    'portfolio.title': 'Επιλεγμένα Έργα',
    'portfolio.subtitle': 'Μια επιλογή από στατικές μελέτες, αποτιμήσεις, ενισχύσεις και υπηρεσίες επιμέτρησης.',

    'portfolio.filter.all': 'Όλα',
    'portfolio.filter.residential': 'Κατοικίες',
    'portfolio.filter.existing': 'Υφιστάμενα Κτίρια',
    'portfolio.filter.strengthening': 'Ενισχύσεις',
    'portfolio.filter.qs': 'Quantity Surveying',

    'portfolio.view': 'Προβολή Έργου',
    'portfolio.overview': 'Περιγραφή Έργου',
    'portfolio.services': 'Υπηρεσίες',

    'proj.1.title': 'Πολυκατοικία',
    'proj.1.desc': 'Τριώροφη οικιστική ανάπτυξη με δώμα, ιδιωτικά μπαλκόνια και καλυμμένο χώρο στάθμευσης στο ισόγειο.',

    'proj.2.title': 'Μοντέρνες Διπλοκατοικίες',
    'proj.2.desc': 'Ζεύγος σύγχρονων διώροφων κατοικιών με γλυπτικές όψεις, πλαισιωμένα ανοίγματα και διαμορφωμένους κήπους.',

    'proj.3.title': 'Πολυώροφη Πολυκατοικία',
    'proj.3.desc': 'Πολυώροφο κτίριο διαμερισμάτων με προβόλους μπαλκονιών και κομψό κατακόρυφο πυρήνα κυκλοφορίας.',

    'proj.4.title': 'Μονοκατοικία',
    'proj.4.desc': 'Μονοκατοικία με εμφανές σκυρόδεμα, καμπύλους τοίχους και υαλοστάσια από δάπεδο έως οροφή.',

    'quote.title': 'Ζητήστε Προσφορά',
    'quote.subtitle': 'Πείτε μας για το έργο σας και θα επικοινωνήσουμε μαζί σας με μια εκτίμηση.',

    'form.name': 'Ονοματεπώνυμο *',
    'form.email': 'Email *',
    'form.phone': 'Τηλέφωνο',
    'form.ptype': 'Τύπος Έργου',
    'form.select': 'Επιλέξτε…',

    'form.opt.struct': 'Στατική / Αντισεισμική Μελέτη',
    'form.opt.consult': 'Τεχνική Συμβουλευτική',
    'form.opt.inspect': 'Αποτίμηση / Έλεγχος Υφιστάμενου Κτιρίου',
    'form.opt.renov': 'Ενίσχυση / Αναβάθμιση Κατασκευής',
    'form.opt.extension': 'Προσθήκη / Επέκταση Υφιστάμενου Κτιρίου',
    'form.opt.drawings': 'Στατικά Σχέδια / Τεκμηρίωση για Άδεια',
    'form.opt.boq': 'Επιμετρήσεις / Πίνακες Οπλισμού / BBS',
    'form.opt.supervision': 'Επίβλεψη / Τεχνική Υποστήριξη Έργου',
    'form.opt.other': 'Άλλο',

    'form.details': 'Λεπτομέρειες Έργου *',
    'form.details.ph': 'Περιγράψτε το έργο σας, την τοποθεσία, το αντικείμενο και το χρονοδιάγραμμα…',
    'form.submit': 'Αποστολή Αιτήματος',
    'form.sending': 'Αποστολή…',
    'form.success': 'Ευχαριστούμε! Το αίτημά σας στάλθηκε.',
    'form.error': 'Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε μας email απευθείας.',
    'form.neterr': 'Σφάλμα δικτύου. Δοκιμάστε ξανά αργότερα.',

    'contact.title': 'Επικοινωνία',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.office': 'Γραφείο',
    'contact.addr1': 'Ιωνίας 3, 8016',
    'contact.addr2': 'Πάφος, Κύπρος',

    'footer.tagline': 'Υπηρεσίες Πολιτικού Μηχανικού & Στατικών Μελετών',
    'footer.copy': '© {year} STATIKΩN. Με την επιφύλαξη παντός δικαιώματος.'
  },

  en: {
    'meta.title': 'STATIKΩN — Civil Engineering Services',
    'meta.desc': 'STATIKΩN provides professional civil engineering services, structural design, and project consulting. Request a quote today.',

    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.quote': 'Get a Quote',
    'nav.contact': 'Contact',

    'hero.title': 'Structural Design<br />with Precision and Responsibility',
    'hero.subtitle': 'STATIKΩN provides structural and seismic design, assessment and strengthening of existing structures, technical consulting, quantity surveying, and project support across Cyprus.',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'View Projects',

    'services.title': 'Services',
    'services.subtitle': 'Technical services focused on safety, reliability, and practical on-site application.',

    'svc.struct.title': 'Structural & Seismic Design',
    'svc.struct.desc': 'Design of the load-bearing structure for homes, additions, commercial and special projects in reinforced concrete or steel.',

    'svc.consult.title': 'Technical Consulting',
    'svc.consult.desc': 'Support on structural approach, code compliance, materials, cost, and constructability.',

    'svc.superv.title': 'Supervision & Project Support',
    'svc.superv.desc': 'Technical monitoring, verification that construction follows the design, and support throughout the build.',

    'svc.inspect.title': 'Assessment of Existing Buildings',
    'svc.inspect.desc': 'Inspection of existing structures, evaluation of load-bearing capacity, and technical documentation for additions, changes, or interventions.',

    'svc.permit.title': 'Drawings, Permits & Documentation',
    'svc.permit.desc': 'Preparation of structural drawings, technical documents, and information required for permits and coordination of studies.',

    'svc.renov.title': 'Strengthening & Structural Upgrading',
    'svc.renov.desc': 'Strengthening proposals for existing buildings, renovations/additions, extensions, and improved seismic performance.',

    'portfolio.label': 'PORTFOLIO',
    'portfolio.title': 'Selected Projects',
    'portfolio.subtitle': 'A selection of structural design, assessment, strengthening and quantity surveying projects.',

    'portfolio.filter.all': 'All Projects',
    'portfolio.filter.residential': 'Residential',
    'portfolio.filter.existing': 'Existing Structures',
    'portfolio.filter.strengthening': 'Strengthening',
    'portfolio.filter.qs': 'Quantity Surveying',

    'portfolio.view': 'View Project',
    'portfolio.overview': 'Project Overview',
    'portfolio.services': 'Services Provided',

    'proj.1.title': 'Residential Apartment Building',
    'proj.1.desc': 'Three-storey residential development with rooftop terrace, private balconies, and covered ground-floor parking.',

    'proj.2.title': 'Modern Semi-Detached Houses',
    'proj.2.desc': 'Pair of contemporary two-storey homes with sculpted façades, framed openings, and landscaped front gardens.',

    'proj.3.title': 'Multi-Storey Apartment Block',
    'proj.3.desc': 'Multi-storey apartment building with cantilevered balconies and a sleek vertical circulation core.',

    'proj.4.title': 'Detached Villa',
    'proj.4.desc': 'Single-family villa featuring board-formed concrete, curved walls, and floor-to-ceiling glazing.',

    'quote.title': 'Request a Quote',
    'quote.subtitle': "Tell us about your project and we'll get back to you with an estimate.",

    'form.name': 'Full Name *',
    'form.email': 'Email *',
    'form.phone': 'Phone',
    'form.ptype': 'Project Type',
    'form.select': 'Select…',

    'form.opt.struct': 'Structural / Seismic Design',
    'form.opt.consult': 'Technical Consulting',
    'form.opt.inspect': 'Assessment / Inspection of Existing Building',
    'form.opt.renov': 'Strengthening / Structural Upgrade',
    'form.opt.extension': 'Addition / Extension of Existing Building',
    'form.opt.drawings': 'Structural Drawings / Permit Documentation',
    'form.opt.boq': 'Quantity Take-off / Rebar Schedules / BBS',
    'form.opt.supervision': 'Supervision / Technical Project Support',
    'form.opt.other': 'Other',

    'form.details': 'Project Details *',
    'form.details.ph': 'Describe your project, location, scope, and timeline…',
    'form.submit': 'Send Request',
    'form.sending': 'Sending…',
    'form.success': 'Thank you! Your request has been sent.',
    'form.error': 'Something went wrong. Please try again or email us directly.',
    'form.neterr': 'Network error. Please try again later.',

    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.office': 'Office',
    'contact.addr1': 'Ionias 3, 8016',
    'contact.addr2': 'Paphos, Cyprus',

    'footer.tagline': 'Civil & Structural Engineering Services',
    'footer.copy': '© {year} STATIKΩN. All rights reserved.'
  }
};


const SUPPORTED = ['el', 'en'];
const DEFAULT_LANG = 'el';
let currentLang = DEFAULT_LANG;


// Modules can register here to be re-rendered whenever language changes
const langListeners = [];


function t(key) {
  const dict = translations[currentLang] || translations[DEFAULT_LANG];
  return key in dict ? dict[key] : key;
}


function applyLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;

  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute(
      'placeholder',
      t(el.getAttribute('data-i18n-placeholder'))
    );
  });

  document.documentElement.lang = lang;
  document.title = t('meta.title');

  const metaDesc = document.querySelector('meta[name="description"]');

  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta.desc'));
  }

  const copy = document.getElementById('footerCopy');

  if (copy) {
    copy.textContent = t('footer.copy')
      .replace('{year}', new Date().getFullYear());
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;

    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}

  langListeners.forEach(fn => {
    try {
      fn(currentLang);
    } catch (e) {}
  });
}


// Language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
  });
});


// Initial language
let initial = DEFAULT_LANG;

try {
  const saved = localStorage.getItem('lang');

  if (saved && SUPPORTED.includes(saved)) {
    initial = saved;
  }
} catch (e) {}

applyLanguage(initial);



/* ------------------------------------------------------------------ */
/*  Quote form                                                        */
/* ------------------------------------------------------------------ */

const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  note.textContent = t('form.sending');
  note.className = 'form-note';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      form.reset();

      note.textContent = t('form.success');
      note.className = 'form-note success';

    } else {
      note.textContent = t('form.error');
      note.className = 'form-note error';
    }

  } catch {
    note.textContent = t('form.neterr');
    note.className = 'form-note error';
  }
});



/* ------------------------------------------------------------------ */
/*  Portfolio: project cards + filters + project modal                */
/* ------------------------------------------------------------------ */

/*
Optional fields που μπορείς αργότερα να προσθέσεις στο gallery.json:

"category": "residential",

"categoryLabel": {
  "el": "Στατική Μελέτη",
  "en": "Structural Design"
},

"location": {
  "el": "Πάφος, Κύπρος",
  "en": "Paphos, Cyprus"
},

"description": {
  "el": "Περιγραφή έργου",
  "en": "Project description"
},

"services": {
  "el": [
    "Στατική Μελέτη",
    "Αντισεισμικός Σχεδιασμός"
  ],
  "en": [
    "Structural Design",
    "Seismic Design"
  ]
}

Allowed categories:

residential
existing
strengthening
qs
*/


let galleryGroups = [];

let activeGroup = 0;
let activeIndex = 0;
let activeFilter = 'all';


const groupsContainer = document.getElementById('galleryGroups');

const filterButtons =
  document.querySelectorAll('.filter-btn');


const projectModal =
  document.getElementById('projectModal');

const modalOverlay =
  document.getElementById('modalOverlay');

const modalClose =
  document.getElementById('modalClose');

const modalCategory =
  document.getElementById('modalCategory');

const modalTitle =
  document.getElementById('modalTitle');

const modalLocation =
  document.getElementById('modalLocation');

const modalImage =
  document.getElementById('modalImage');

const modalDescription =
  document.getElementById('modalDescription');

const modalServices =
  document.getElementById('modalServices');

const modalThumbs =
  document.getElementById('modalThumbs');

const modalPrev =
  document.getElementById('modalPrev');

const modalNext =
  document.getElementById('modalNext');

const modalStage =
  document.querySelector('.modal-stage');



function tr(obj) {

  if (typeof obj === 'string') {
    return obj;
  }

  return (
    obj &&
    (obj[currentLang] || obj[DEFAULT_LANG])
  ) || '';
}



function getProjectCategory(group) {

  return String(
    group.category || 'all'
  )
  .toLowerCase()
  .trim();

}



function getCategoryLabel(group) {

  if (group.categoryLabel) {
    return tr(group.categoryLabel);
  }

  const category = getProjectCategory(group);

  const labels = {

    residential: {
      el: 'Στατική & Αντισεισμική Μελέτη',
      en: 'Structural & Seismic Design'
    },

    existing: {
      el: 'Αποτίμηση Υφιστάμενου',
      en: 'Existing Structure Assessment'
    },

    strengthening: {
      el: 'Ενίσχυση Κατασκευής',
      en: 'Structural Strengthening'
    },

    qs: {
      el: 'Επιμετρήσεις & BBS',
      en: 'Quantity Surveying & BBS'
    }

  };

  return labels[category]
    ? tr(labels[category])
    : '';

}



function getProjectDescription(group) {

  if (group.description) {
    return tr(group.description);
  }

  const firstImage =
    Array.isArray(group.images)
      ? group.images[0]
      : null;

  return firstImage && firstImage.desc
    ? tr(firstImage.desc)
    : '';

}



function getProjectServices(group) {

  if (!group.services) {
    return '';
  }


  if (Array.isArray(group.services)) {
    return group.services.join(' · ');
  }


  const translated =
    group.services[currentLang] ||
    group.services[DEFAULT_LANG];


  if (Array.isArray(translated)) {
    return translated.join(' · ');
  }


  return translated || '';

}



function getProjectLocation(group) {

  return group.location
    ? tr(group.location)
    : '';

}



function projectMatchesFilter(group, filter) {

  if (filter === 'all') {
    return true;
  }

  const category =
    getProjectCategory(group);

  return category
    .split(/\s+/)
    .includes(filter);

}



async function loadGallery() {

  try {

    const res =
      await fetch(
        'gallery.json',
        {
          cache: 'no-cache'
        }
      );


    if (res.ok) {

      galleryGroups =
        await res.json();

    } else {

      console.warn(
        'gallery.json not found'
      );

    }

  } catch (e) {

    console.warn(
      'Could not load gallery.json:',
      e
    );

  }


  renderGroups();

}



/* --------------------------- */
/* PROJECT CARDS               */
/* --------------------------- */

function renderGroups() {

  if (!groupsContainer) {
    return;
  }


  groupsContainer.innerHTML = '';


  const visibleGroups =
    galleryGroups

      .map(
        (group, index) => ({
          group,
          index
        })
      )

      .filter(
        ({ group }) =>
          projectMatchesFilter(
            group,
            activeFilter
          )
      );


  visibleGroups.forEach(
    ({ group, index: gi }) => {

      const card =
        document.createElement(
          'article'
        );


      card.className =
        'project-card';


      card.tabIndex = 0;


      card.setAttribute(
        'role',
        'button'
      );


      card.setAttribute(
        'aria-label',
        tr(group.title)
      );


      const cover =
        group.cover ||
        (
          group.images &&
          group.images[0]
            ? group.images[0].src
            : ''
        );


      const categoryLabel =
        getCategoryLabel(group);


      const location =
        getProjectLocation(group);


      card.innerHTML = `

        <div class="project-image">

          <img
            src="${cover}"
            alt="${tr(group.title)}"
            loading="lazy"
          />

          <div class="project-overlay">
            <span>
              ${t('portfolio.view')}
            </span>
          </div>

        </div>


        <div class="project-info">

          ${
            categoryLabel
              ? `
                <span class="project-category">
                  ${categoryLabel}
                </span>
              `
              : ''
          }

          <h3>
            ${tr(group.title)}
          </h3>

          ${
            location
              ? `
                <p>
                  ${location}
                </p>
              `
              : ''
          }

        </div>

      `;


      const open =
        () => openProject(gi, 0);


      card.addEventListener(
        'click',
        open
      );


      card.addEventListener(
        'keydown',
        (e) => {

          if (
            e.key === 'Enter' ||
            e.key === ' '
          ) {

            e.preventDefault();

            open();

          }

        }
      );


      groupsContainer
        .appendChild(card);

    }
  );

}



/* --------------------------- */
/* FILTERS                     */
/* --------------------------- */

filterButtons.forEach(button => {

  button.addEventListener(
    'click',
    () => {

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });


      button.classList.add('active');


      activeFilter =
        button.dataset.filter || 'all';


      renderGroups();

    }
  );

});



/* --------------------------- */
/* PROJECT MODAL               */
/* --------------------------- */

function renderProjectModal() {

  if (
    !projectModal ||
    !galleryGroups.length
  ) {
    return;
  }


  const group =
    galleryGroups[activeGroup];


  if (!group) {
    return;
  }


  const images =
    Array.isArray(group.images)
      ? group.images
      : [];


  const item =
    images[activeIndex];


  const multi =
    images.length > 1;



  modalTitle.textContent =
    tr(group.title);



  const category =
    getCategoryLabel(group);


  modalCategory.textContent =
    category;


  modalCategory.hidden =
    !category;



  const location =
    getProjectLocation(group);


  modalLocation.textContent =
    location;


  modalLocation.hidden =
    !location;



  if (item) {

    modalImage.src =
      item.src;


    modalImage.alt =
      `${tr(group.title)} — ${activeIndex + 1}/${images.length}`;

  } else {

    modalImage.removeAttribute(
      'src'
    );

    modalImage.alt = '';

  }



  const description =
    getProjectDescription(group);


  modalDescription.textContent =
    description;


  const overviewHeading =
    modalDescription
      .previousElementSibling;


  modalDescription.hidden =
    !description;


  if (overviewHeading) {
    overviewHeading.hidden =
      !description;
  }



  const services =
    getProjectServices(group);


  modalServices.textContent =
    services;


  const servicesHeading =
    modalServices
      .previousElementSibling;


  modalServices.hidden =
    !services;


  if (servicesHeading) {
    servicesHeading.hidden =
      !services;
  }



  modalPrev.hidden =
    !multi;


  modalNext.hidden =
    !multi;



  modalThumbs.innerHTML = '';



  if (multi) {

    images.forEach(
      (im, i) => {

        const thumb =
          document.createElement(
            'img'
          );


        thumb.className =
          'modal-thumb' +
          (
            i === activeIndex
              ? ' active'
              : ''
          );


        thumb.src =
          im.src;


        thumb.alt = '';


        thumb.loading =
          'lazy';


        thumb.addEventListener(
          'click',
          () => {

            activeIndex = i;

            renderProjectModal();

          }
        );


        modalThumbs
          .appendChild(thumb);

      }
    );

  }

}



function openProject(
  groupIndex,
  imageIndex = 0
) {

  if (!projectModal) {
    return;
  }


  activeGroup =
    groupIndex;


  activeIndex =
    imageIndex;


  renderProjectModal();


  projectModal
    .classList
    .add('active');


  projectModal
    .setAttribute(
      'aria-hidden',
      'false'
    );


  document.body
    .classList
    .add('modal-open');


  if (modalClose) {
    modalClose.focus();
  }

}



function closeProject() {

  if (!projectModal) {
    return;
  }


  projectModal
    .classList
    .remove('active');


  projectModal
    .setAttribute(
      'aria-hidden',
      'true'
    );


  document.body
    .classList
    .remove('modal-open');

}



function stepProject(delta) {

  const group =
    galleryGroups[activeGroup];


  if (
    !group ||
    !group.images ||
    !group.images.length
  ) {
    return;
  }


  activeIndex =
    (
      activeIndex +
      delta +
      group.images.length
    ) %
    group.images.length;


  renderProjectModal();

}



if (modalClose) {

  modalClose.addEventListener(
    'click',
    closeProject
  );

}



if (modalOverlay) {

  modalOverlay.addEventListener(
    'click',
    closeProject
  );

}



if (modalPrev) {

  modalPrev.addEventListener(
    'click',
    () => stepProject(-1)
  );

}



if (modalNext) {

  modalNext.addEventListener(
    'click',
    () => stepProject(1)
  );

}



// Keyboard controls
document.addEventListener(
  'keydown',
  (e) => {

    if (
      !projectModal ||
      !projectModal
        .classList
        .contains('active')
    ) {
      return;
    }


    if (e.key === 'Escape') {

      closeProject();

    } else if (
      e.key === 'ArrowLeft'
    ) {

      stepProject(-1);

    } else if (
      e.key === 'ArrowRight'
    ) {

      stepProject(1);

    }

  }
);



// Swipe support
let touchX = null;


if (modalStage) {

  modalStage.addEventListener(
    'touchstart',
    (e) => {

      touchX =
        e.changedTouches[0]
          .clientX;

    },
    {
      passive: true
    }
  );


  modalStage.addEventListener(
    'touchend',
    (e) => {

      if (touchX === null) {
        return;
      }


      const dx =
        e.changedTouches[0]
          .clientX -
        touchX;


      const group =
        galleryGroups[activeGroup];


      if (
        Math.abs(dx) > 40 &&
        group &&
        group.images &&
        group.images.length > 1
      ) {

        stepProject(
          dx < 0 ? 1 : -1
        );

      }


      touchX = null;

    },
    {
      passive: true
    }
  );

}



// Re-render on language change
langListeners.push(() => {

  renderGroups();


  if (
    projectModal &&
    projectModal
      .classList
      .contains('active')
  ) {

    renderProjectModal();

  }

});



// Load gallery
loadGallery();
