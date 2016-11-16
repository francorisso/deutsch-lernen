import Immutable from 'immutable';

const NAMESPACE = 'deutsch-flashcards/vocabulary';

export const MODE_HIDDEN = `${NAMESPACE}/mode_hidden`;
export const MODE_SHOWN = `${NAMESPACE}/mode_shown`;

export const LOAD = `${NAMESPACE}/load`;
export const SWITCH_MODE = `${NAMESPACE}/switch_mode`;

const initState = Immutable.Map({
  words: Immutable.List([]),
});
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOAD:
      return state.set('words', Immutable.List(action.words));
    case SWITCH_MODE: {
      // TODO FIX BRUTEFORCE
      const { itemId } = action;
      return state.set('words', Immutable.List(state.get('words').toArray().map((item) => {
        if (item.id === itemId) {
          const mode = item.mode === MODE_HIDDEN ? MODE_SHOWN : MODE_HIDDEN;
          return Object.assign({ ...item }, { mode });
        }
        return item;
      })));
    }
    default:
      return state;
  }
}

export function switchItemState(itemId) {
  return {
    type: SWITCH_MODE,
    itemId,
  };
}

export function load() {
  let words = [
    {
      name: 'der Teppich (-)',
      image: 'deutsch_tepich',
    },
    {
      name: 'der Tisch (er)',
      image: 'tisch_fzug1b',
    },
    {
      name: 'der Stuhl (e)',
      image: 'stuhl_wyi23q',
    },
    {
      name: 'das Sofa (e)',
      image: 'sofa_d00ql0',
    },
    {
      name: 'der Sessel (e)',
      image: 'sessel_c93fa8',
    },
    {
      name: 'der Schrank (e)',
      image: 'schrank_yet3s4',
    },
    {
      name: 'die Lampe (e)',
      image: 'lampe_t2awiz',
    },
    {
      name: 'das Bild (e)',
      image: 'bild_w2kl5z',
    },
    {
      name: 'das Bett (e)',
      image: 'bett_d4nbxb',
    },
    {
      name: 'die Kette (e)',
      image: 'kette_izh1e6',
    },
    {
      name: 'der Fotoapparat (e)',
      image: 'fotoapparat_eqk6xg',
    },
    {
      name: 'das Feuerzeug (e)',
      image: 'feuerzeug_jtq4ur',
    },
    {
      name: 'die Flasche (e)',
      image: 'flasche_aj6qpn',
    },
    {
      name: 'das Buch (e)',
      image: 'buch_jthuv2',
    },
    {
      name: 'die Brille (e)',
      image: 'brille_so8qin',
    },
    {
      name: 'der Bleistift (e)',
      image: 'bleistift_glbme2',
    },
    {
      name: 'der Schlüssel (e)',
      image: 'schlusel_uubyqi',
    },
    {
      name: 'der Kugelschreiber (e)',
      image: 'kugelschreiber_hpmrn3',
    },
    {
      name: 'das Uhr (e)',
      image: 'uhr_mkxnjp',
    },
    {
      name: 'der Schirm (e)',
      image: 'schirm_kamqsv',
    },
    {
      name: 'die Tasche (e)',
      image: 'tasche_utb0tv',
    },
    {
      name: 'der Streichholz (e)',
      image: 'streichholz_bvg7y7',
    },
    {
      name: 'die Seife (e)',
      image: 'steife_wfub1c',
    },
    {
      name: 'die Geldbörse (e)',
      image: 'geldborse_jg5zyl',
    },

    {
      name: 'der Schinken (e)',
      image: 'schinken_bdavta',
    },
    {
      name: 'der Apfel (e)',
      image: 'apfel_paruch',
    },
    {
      name: 'die Butter (e)',
      image: 'butter_pf8xac',
    },
    {
      name: 'der Fisch (e)',
      image: 'fisch_ksyagp',
    },
    {
      name: 'der Kuchen (e)',
      image: 'kuchen_p55nbx',
    },
    {
      name: 'die Kartoffel (e)',
      image: 'kartoffel_iqjgit',
    },
    {
      name: 'der Braten (e)',
      image: 'braten_ltg5v0',
    },
    {
      name: 'der Käse (e)',
      image: 'kese_eamkjt',
    },
    {
      name: 'die Orange (e)',
      image: 'orange_ukzpn7',
    },
    {
      name: 'der Salat (e)',
      image: 'salat_dq5s8j',
    },
    {
      name: 'die Suppe (e)',
      image: 'suppe_im0yqo',
    },
    {
      name: 'die Milch (e)',
      image: 'milch_sc3avc',
    },
    {
      name: 'die Schokolade (e)',
      image: 'schokolade_frb5f3',
    },
    {
      name: 'der Tee (e)',
      image: 'tee_sm7gcp',
    },
    {
      name: 'die Tomate (e)',
      image: 'tomate_b1xxre',
    },
    {
      name: 'das Brot (e)',
      image: 'brot_k8yrul',
    },

    {
      name: 'der Computer (e)',
      image: 'computer_enot6c',
    },
    {
      name: 'die SMS (e)',
      image: 'sms_ndoxxq',
    },
    {
      name: 'das Telefon (e)',
      image: 'telefon_dkp5uw',
    },
    {
      name: 'der Drucker (e)',
      image: 'drucker_olfuue',
    },
    {
      name: 'das Handy (e)',
      image: 'handy_xdennl',
    },
    {
      name: 'der Kalender (e)',
      image: 'kalender_w33ycj',
    },
    {
      name: 'das Formular (e)',
      image: 'formulare_qafhtw',
    },
    {
      name: 'der Laptop (e)',
      image: 'laptop_ldzegi',
    },
    {
      name: 'die E-mail (e)',
      image: 'e-mail_pjxfzf',
    },
    {
      name: 'das Notizbuch (e)',
      image: 'notizbuch_ooc6hq',
    },
    {
      name: 'der Bildschirm (e)',
      image: 'bildschirm_zamddx',
    },
    {
      name: 'die Maus (e)',
      image: 'maus_fbcpeq',
    },
    {
      name: 'die Briefmarke (e)',
      image: 'briefmarke_xvaqeh',
    },
    {
      name: 'die Rechnung (e)',
      image: 'rechnung_bsyqtw',
    },
    {
      name: 'der Stift (e)',
      image: 'stift_aorxra',
    },
  ];
  words = words.map((word, idx) => ({
    ...word,
    id: idx,
    image: `http://res.cloudinary.com/inloove/image/upload/w_300,h_300,c_fit/${word.image}.jpg`,
    mode: MODE_HIDDEN,
  }));
  return {
    type: LOAD,
    words,
  };
}