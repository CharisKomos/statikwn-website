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
/*  i18n — Greek (default) / English                                   */
/* ------------------------------------------------------------------ */
const translations = {
  el: {
    'meta.title': 'STATIKΩN — Υπηρεσίες Πολιτικού Μηχανικού',
    'meta.desc': 'Η STATIKΩN προσφέρει επαγγελματικές υπηρεσίες πολιτικού μηχανικού, στατικές μελέτες και συμβουλευτική έργων. Ζητήστε προσφορά σήμερα.',

    'nav.services': 'Υπηρεσίες',
    'nav.portfolio': 'Έργα',
    'nav.quote': 'Ζητήστε Προσφορά',
    'nav.contact': 'Επικοινωνία',

    'hero.title': 'Κατασκευές Φτιαγμένες<br />να Διαρκούν',
    'hero.subtitle': 'Η STATIKΩN προσφέρει αξιόπιστες υπηρεσίες πολιτικού μηχανικού και στατικών μελετών — από τη σύλληψη και τον σχεδιασμό έως τη συμβουλευτική και την επίβλεψη έργων.',
    'hero.cta1': 'Ζητήστε Προσφορά',
    'hero.cta2': 'Δείτε τα Έργα',

    'services.title': 'Υπηρεσίες',
    'services.subtitle': 'Ολοκληρωμένες λύσεις μηχανικής προσαρμοσμένες στο έργο σας.',
    'svc.struct.title': 'Στατική Μελέτη',
    'svc.struct.desc': 'Λεπτομερής στατική ανάλυση και σχεδιασμός για κατοικίες, εμπορικά και βιομηχανικά κτίρια.',
    'svc.consult.title': 'Συμβουλευτικές Υπηρεσίες',
    'svc.consult.desc': 'Εξειδικευμένες συμβουλές για σκοπιμότητα, συμμόρφωση με κανονισμούς, υλικά και δομική ακεραιότητα.',
    'svc.superv.title': 'Επίβλεψη Έργων',
    'svc.superv.desc': 'Επίβλεψη επί τόπου και έλεγχος ποιότητας ώστε η κατασκευή να ανταποκρίνεται στη μελέτη.',
    'svc.inspect.title': 'Έλεγχοι & Αξιολογήσεις',
    'svc.inspect.desc': 'Δομικοί έλεγχοι, αξιολογήσεις κατάστασης και προτάσεις ενίσχυσης.',
    'svc.permit.title': 'Άδειες & Τεκμηρίωση',
    'svc.permit.desc': 'Προετοιμασία τεχνικών σχεδίων και εγγράφων για άδειες δόμησης.',
    'svc.renov.title': 'Μηχανική Ανακαινίσεων',
    'svc.renov.desc': 'Δομικές λύσεις για ανακαινίσεις, επεκτάσεις και επανάχρηση υφιστάμενων κτιρίων.',

    'portfolio.title': 'Έργα',
    'portfolio.subtitle': 'Μια επιλογή από ολοκληρωμένα και τρέχοντα έργα.',
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
    'form.opt.struct': 'Στατική Μελέτη',
    'form.opt.consult': 'Συμβουλευτική',
    'form.opt.inspect': 'Έλεγχος / Αξιολόγηση',
    'form.opt.renov': 'Ανακαίνιση',
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

    'hero.title': 'Engineering Structures<br />Built to Last',
    'hero.subtitle': 'STATIKΩN delivers reliable civil and structural engineering services — from concept and design to consulting and project supervision.',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'View Projects',

    'services.title': 'Services',
    'services.subtitle': 'Comprehensive engineering solutions tailored to your project.',
    'svc.struct.title': 'Structural Design',
    'svc.struct.desc': 'Detailed structural analysis and design for residential, commercial, and industrial buildings.',
    'svc.consult.title': 'Consulting',
    'svc.consult.desc': 'Expert advice on feasibility, code compliance, materials, and structural integrity.',
    'svc.superv.title': 'Project Supervision',
    'svc.superv.desc': 'On-site supervision and quality control to ensure construction matches design intent.',
    'svc.inspect.title': 'Inspections & Assessments',
    'svc.inspect.desc': 'Structural inspections, condition assessments, and reinforcement recommendations.',
    'svc.permit.title': 'Permits & Documentation',
    'svc.permit.desc': 'Preparation of technical drawings and documentation for building permits.',
    'svc.renov.title': 'Renovation Engineering',
    'svc.renov.desc': 'Structural solutions for renovations, extensions, and adaptive reuse of existing buildings.',

    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'A selection of completed and ongoing projects.',
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
    'form.opt.struct': 'Structural Design',
    'form.opt.consult': 'Consulting',
    'form.opt.inspect': 'Inspection / Assessment',
    'form.opt.renov': 'Renovation',
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

function t(key) {
  const dict = translations[currentLang] || translations[DEFAULT_LANG];
  return key in dict ? dict[key] : key;
}

function applyLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;

  // plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  // rich text (allows <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });

  // document + meta
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

  // footer copyright (with current year)
  const copy = document.getElementById('footerCopy');
  if (copy) copy.textContent = t('footer.copy').replace('{year}', new Date().getFullYear());

  // active state on the switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
}

// wire up the switch buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

// initial language: the visitor's saved choice, otherwise Greek (default)
let initial = DEFAULT_LANG;
try {
  const saved = localStorage.getItem('lang');
  if (saved && SUPPORTED.includes(saved)) initial = saved;
} catch (e) { /* ignore */ }
applyLanguage(initial);

/* ------------------------------------------------------------------ */
/*  Quote form: AJAX submit to Formspree so the page doesn't redirect  */
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
      headers: { 'Accept': 'application/json' }
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
