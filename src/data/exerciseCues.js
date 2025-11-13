// EXERCISE CUES DATABASE
// Tassonomia tecnica per TUTTI gli esercizi non guidati
// Bilanciere, Manubri, Corpo Libero, Kettlebell, Elastici
// NO macchine auto-guidate

export const EXERCISE_CUES = {
  // SQUAT VARIANTS
  'Squat Bilanciere': {
    type: 'barbell',
    difficulty: 'intermediate',
    cues: [
      'Posiziona bilanciere su trapezi superiori, non sul collo',
      'Piedi larghezza spalle, punte extraruotate 15-30 gradi',
      'Inspira profondamente e blocca core (manovra di Valsalva)',
      'Scendi spingendo ginocchia in fuori, peso su TUTTO IL PIEDE',
      'Scendi fino a femore parallelo o oltre se mobilità lo permette',
      'Sali mantenendo peso distribuito su tutto il piede'
    ],
    commonMistakes: [
      'Ginocchia che collassano verso interno',
      'Peso solo sui talloni: schiena si alza o solo sulle punte',
      'Schiena che si curva: perdita posizione neutra',
      'Bilanciere sul collo invece che su trapezi',
      'Espirare durante lo sforzo: perdita stabilità core'
    ],
    safetyNotes: 'Usa sempre rack con sicure. Test mobilità caviglia prima. Mantieni blocco respiratorio sotto carico.',
    muscleGroups: ['Quadricipiti', 'Glutei', 'Erettori spinali', 'Core']
  },
  'Front Squat': {
    type: 'barbell',
    difficulty: 'advanced',
    cues: [
      'Bilanciere su deltoidi anteriori',
      'Gomiti ALTI, paralleli a terra',
      'Grip clean: dita sotto bilanciere o incrociato braccia X',
      'Busto più verticale rispetto a back squat',
      'Inspira e blocca core, mantieni gomiti alti',
      'Scendi mantenendo bilanciere sopra centro piede'
    ],
    commonMistakes: [
      'Gomiti che cadono in basso',
      'Bilanciere che rotola sul collo',
      'Busto che si inclina troppo avanti',
      'Peso solo sui talloni: schiena si alza'
    ],
    safetyNotes: 'Richiede ottima mobilità polsi e spalle. Progressione da goblet squat.',
    muscleGroups: ['Quadricipiti (enfasi)', 'Core', 'Deltoidi anteriori']
  },
  'Goblet Squat': {
    type: 'dumbbell',
    difficulty: 'beginner',
    cues: [
      'Tieni manubrio/kettlebell verticale davanti al petto, gomiti sotto',
      'Piedi larghezza spalle o poco oltre',
      'Inspira e scendi spingendo ginocchia in fuori',
      'Gomiti passano DENTRO le ginocchia in basso (mobilità)',
      'Mantieni peso vicino al corpo, busto verticale'
    ],
    commonMistakes: [
      'Peso troppo lontano dal corpo',
      'Schiena curva',
      'Ginocchia che collassano',
      'Peso solo sui talloni'
    ],
    safetyNotes: 'Ottimo per imparare pattern squat. Sicuro per principianti.',
    muscleGroups: ['Quadricipiti', 'Glutei', 'Core']
  },
  
  // PANCA PETTO
  'Panca Piana Bilanciere': {
    type: 'barbell',
    difficulty: 'intermediate',
    cues: [
      'Sdraiato su panca, piedi FISSI a terra (leg drive)',
      'Scapole retratte: spalle indietro e giù, petto in fuori',
      'Grip poco oltre larghezza spalle, polsi dritti',
      'Bilanciere parte sopra sterno, non gola',
      'Inspira in alto, MANTIENI blocco inspiratorio per tutta la rep',
      'Scendi controllato fino a sfiorare petto al capezzolo',
      'Spingi mantenendo blocco, gomiti 45° dal corpo'
    ],
    commonMistakes: [
      'Gomiti troppo aperti (90°): stress spalle',
      'Rimbalzare bilanciere sul petto',
      'Glutei che si alzano da panca',
      'Scapole non retratte: spalle che vanno avanti',
      'Espirare durante la salita: perdita tensione'
    ],
    safetyNotes: 'Usa sempre spotter o rack con sicure. Collare obbligatorio. Blocco respiratorio critico.',
    muscleGroups: ['Pettorali', 'Deltoidi anteriori', 'Tricipiti']
  },
  
  // STACCO
  'Stacco da Terra': {
    type: 'barbell',
    difficulty: 'advanced',
    cues: [
      'Bilanciere sopra centro piede a contatto con tibie',
      'Piedi larghezza anca, grip appena fuori gambe',
      'Inspira, blocca core, schiena NEUTRA (no curva)',
      'Peso su TUTTO IL PIEDE: tripode (tallone base, alluce base, mignolo)',
      'Spingi attraverso tutto il piede, bilanciere scorre su tibie',
      'Estendi anche e ginocchia INSIEME (no segmented pull)',
      'Blocca in alto: spalle indietro, anche completamente estese'
    ],
    commonMistakes: [
      'Schiena curva: cifosi lombare INFORTUNIO',
      'Bilanciere lontano dal corpo',
      'Tirare con schiena invece che spingere con gambe',
      'Iperestendere schiena in alto',
      'Peso solo sui talloni: schiena si alza prematuramente'
    ],
    safetyNotes: 'ESERCIZIO TECNICO. Inizia con peso leggero. Video fondamentale. Blocco respiratorio essenziale.',
    muscleGroups: ['Erettori spinali', 'Glutei', 'Femorali', 'Trapezi', 'Grip']
  },
  
  // TRAZIONI
  'Trazioni': {
    type: 'bodyweight',
    difficulty: 'advanced',
    cues: [
      'Grip poco oltre larghezza spalle, pollici sopra (overhand)',
      'Partenza: braccia tese, scapole DEPRESSE (non spalle alle orecchie)',
      'Inspira prima di iniziare, mantieni blocco per tutta la rep',
      'Inizia movimento: SCAPOLE retrazione, poi piega gomiti',
      'Gomiti vanno verso BASSO e DIETRO, non ai lati',
      'Sali fino a mento sopra sbarra',
      'Scendi controllato mantenendo blocco, estendi completamente'
    ],
    commonMistakes: [
      'Spalle che salgono verso orecchie: no scapole attive',
      'Range incompleto: mento non sopra sbarra',
      'Kipping: dondolare',
      'Discesa non controllata',
      'Espirare durante trazione: perdita stabilità'
    ],
    safetyNotes: 'Progressione: Negative > Band assisted > Full. Grip strength fondamentale.',
    muscleGroups: ['Dorsali', 'Bicipiti', 'Trapezi medio-bassi', 'Core']
  },
  
  // CORE
  'Plank': {
    type: 'bodyweight',
    difficulty: 'beginner',
    cues: [
      'Avambracci a terra, gomiti sotto spalle',
      'Corpo RIGIDO dalla testa ai talloni (plank perfetto)',
      'Core contratto: ombelico verso colonna',
      'Glutei contratti, NO bacino che cede',
      'Sguardo a terra, collo neutrale',
      'Respira normalmente, mantieni tensione',
      'Obiettivo: tempo sotto tensione, non durata con forma scadente'
    ],
    commonMistakes: [
      'Bacino che cede: lordosi',
      'Bacino troppo alto: perdita tensione core',
      'Spalle che vanno avanti: gomiti non sotto spalle',
      'Trattenere respiro'
    ],
    safetyNotes: 'Base per tutti esercizi core. Qualità > durata.',
    muscleGroups: ['Retto addominale', 'Trasverso', 'Erettori', 'Glutei']
  }
};

// HELPER FUNCTIONS

// Recupera cue tecnici per un esercizio
export function getExerciseCues(exerciseName) {
  // Exact match
  if (EXERCISE_CUES[exerciseName]) {
    return EXERCISE_CUES[exerciseName];
  }
  
  // Partial match (es. "Squat Bilanciere 5x5" -> "Squat Bilanciere")
  for (const [key, value] of Object.entries(EXERCISE_CUES)) {
    if (exerciseName.includes(key)) {
      return value;
    }
  }
  
  // Fallback per esercizi senza cue
  return {
    type: 'machine',
    difficulty: 'beginner',
    cues: ['Segui le indicazioni della macchina'],
    commonMistakes: ['Non personalizzare la macchina a te stesso'],
    safetyNotes: 'Esercizio guidato, segui il percorso della macchina.',
    muscleGroups: ['Vari']
  };
}

// Check se esercizio richiede tassonomia (NO macchine)
export function requiresCues(exerciseName) {
  const machineKeywords = ['machine', 'press', 'leg press', 'chest press', 'lat machine', 'cable', 'smith', 'hack squat'];
  const lower = exerciseName.toLowerCase();
  
  for (const keyword of machineKeywords) {
    if (lower.includes(keyword) && !lower.includes('military press') && !lower.includes('push')) {
      return false;
    }
  }
  return true;
}

// Formatta cue per UI
export function formatCuesForUI(cues) {
  if (!cues || !cues.cues) return null;
  
  return {
    title: 'Come eseguire correttamente',
    steps: cues.cues.map((cue, i) => `${i + 1}. ${cue}`),
    mistakes: cues.commonMistakes?.length > 0 ? {
      title: 'Errori comuni da evitare',
      items: cues.commonMistakes
    } : null,
    safety: cues.safetyNotes ? {
      title: 'Note di sicurezza',
      text: cues.safetyNotes
    } : null,
    muscles: cues.muscleGroups ? {
      title: 'Muscoli coinvolti',
      list: cues.muscleGroups
    } : null,
    difficulty: cues.difficulty
  };
}
