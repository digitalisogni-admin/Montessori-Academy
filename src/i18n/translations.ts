export const translations = {
  fr: {
    contactLocal: {
      title: "Contact",
      subtitle: "Restons en contact",
      desc: "Vous avez une question, une suggestion ou besoin d'aide ? N'hésitez pas à m'écrire.",
      name: "Nom complet",
      email: "Adresse e-mail",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message",
      info: "Informations",
      address: "123 Avenue de l'Éducation, 75000 Paris",
      labelAddress: "Adresse",
      phone: "+33 1 23 45 67 89",
      labelPhone: "Téléphone",
      emailAddress: "contact@espaceprof.fr",
      labelEmail: "Email",
      hoursTitle: "Horaires de réponse",
      hoursDesc: "Je m'applique à répondre à tous les messages dans un délai de 24 à 48 heures ouvrées.",
      visionTitle: "Notre Vision",
      visionDesc: "Au-delà d'un simple centre de soutien, l'Académie Montessori a pour ambition de révolutionner l'approche de l'apprentissage extra-scolaire. Nous croyons que chaque élève, s'il est placé dans un environnement stimulant et respectueux de son rythme, peut développer non seulement des compétences académiques solides, mais aussi une curiosité intarissable pour le monde qui l'entoure. Notre vision est celle d'une éducation libre, vivante, où l'erreur est perçue comme une étape fondamentale de la découverte et où la joie de comprendre supplante l'obligation de retenir."
    },
    nav: {
      resources: "Ressources",
      pedagogy: "Pédagogie",
      contact: "Contact",
      studentArea: "Espace Élève",
      search: "Rechercher...",
      theme: "Thème"
    },
    hero: {
      badge: "Académie Montessori",
      titlePart1: "Suivez l'Enfant, ",
      titlePart2: "Changez le Monde.",
      welcome: "Bienvenue dans l'espace numérique du ",
      teacher: "Méthode Montessori",
      description: ". Ici, nous laissons l'intelligence s'épanouir naturellement.",
      cta: "Explorer le Matériel",
      discover: "Découvrir"
    },
    announcements: {
      title: "Dernières Nouvelles",
      items: [
        "Nouveau module de cryptographie ajouté en Mathématiques !",
        "Les dates des prochains examens de sciences sont en ligne.",
        "Rejoignez le club de lecture ce vendredi à 16h."
      ]
    },
    about: {
      title: "Ma Pédagogie",
      subtitle: "Philosophie",
      content: "Mon approche repose sur l'engagement actif et la curiosité. Je crois fermement que chaque élève possède un potentiel unique qui ne demande qu'à être éveillé par les bonnes méthodes d'enseignement.",
      values: [
        { title: "Pensée Critique", desc: "Au-delà de la mémorisation, comprendre le 'pourquoi'." },
        { title: "Apprentissage Actif", desc: "Des projets concrets plutôt que des cours magistraux." },
        { title: "Soutien Continu", desc: "Un accompagnement personnalisé pour chaque élève." }
      ]
    },
    testimonials: {
      title: "Ce Que Disent Les Élèves",
      subtitle: "Retours",
      items: [
        { name: "Sophie M.", role: "Terminale S", content: "Les cours de sciences sont devenus passionnants. J'ai enfin compris la physique quantique !" },
        { name: "Lucas D.", role: "Première ES", content: "La méthode d'enseignement de M. Dubois m'a réconcilié avec les mathématiques." },
        { name: "Emma T.", role: "Ancienne Élève", content: "L'approche interactive m'a beaucoup aidée à préparer mes études supérieures." }
      ]
    },
    subjects: {
      subtitle: "Ressources",
      title: "Mes Enseignements",
      items: {
        'vita-pratica': {
          title: "Vita Pratica",
          description: "Activités favorisant l'indépendance, la coordination et le soin de l'environnement.",
          concepts: ["Autonomie", "Confiance en soi", "Conscience de l'autre"]
        },
        'sensoriale': {
          title: "Sensoriale",
          description: "Développer et affiner les sens pour appréhender les subtilités du monde qui nous entoure.",
          concepts: ["Discernement visuel", "Perception auditive", "Raffinement tactile"]
        },
        'linguaggio': {
          title: "Linguaggio",
          description: "De la phonétique à la grande littérature : explorer la communication à travers le prisme de la beauté lexicale.",
          concepts: ["Expression libre", "Grammaire vivante", "Richesse du vocabulaire"]
        },
        'matematica-cultura': {
          title: "Matematica & Cultura",
          description: "Esprit absorbant et abstraction : la découverte de l'ordre, de la logique et de notre univers.",
          concepts: ["Esprit logique", "Compréhension cosmique", "Découverte des nombres"]
        }
      }
    },
    subjectPage: {
      notFound: "Matière non trouvée",
      backHome: "Retour à l'accueil",
      backSubjects: "Retour aux enseignements",
      program: "Programme & Modules",
      modulesCount: "modules",
      progress: "Votre Progression",
      quizPreview: "Quiz Rapide",
      quizQuestion: "Quelle est la capitale de la France ?",
      quizAnswers: ["Lyon", "Marseille", "Paris", "Bordeaux"],
      quizCorrect: "Bonne réponse !",
      quizIncorrect: "Essayez encore.",
      modules: {
        'vita-pratica': [
          { title: "Soin de la Personne", type: "Cours", duration: "2 semaines", status: "completed" },
          { title: "Soin de l'Environnement", type: "Atelier", duration: "3 semaines", status: "in-progress" },
          { title: "Grâce et Courtoisie", type: "Vidéo", duration: "1 semaine", status: "locked" }
        ],
        'sensoriale': [
          { title: "Blocs Cylindriques", type: "Atelier", duration: "2 semaines", status: "completed" },
          { title: "Tablettes de Couleurs", type: "Exercices", duration: "2 semaines", status: "in-progress" },
          { title: "Cylindres Sonores", type: "Vidéo", duration: "1 semaine", status: "locked" }
        ],
        'linguaggio': [
          { title: "Lettres Rugueuses", type: "Cours", duration: "4 semaines", status: "completed" },
          { title: "Alphabet Mobile", type: "Atelier", duration: "Encours", status: "in-progress" },
          { title: "Composition de Phrases", type: "Projet", duration: "2 semaines", status: "locked" }
        ],
        'matematica-cultura': [
          { title: "Perles Dorées", type: "Cours", duration: "4 semaines", status: "completed" },
          { title: "Fuseaux Numériques", type: "Atelier", duration: "2 semaines", status: "in-progress" },
          { title: "Botanique & Zoologie", type: "Vidéo", duration: "3 semaines", status: "locked" }
        ]
      }
    },
    studentDashboard: {
      title: "Tableau de Bord Élève",
      welcome: "Bonjour, Alex !",
      stats: {
        progress: "Progression Globale",
        grade: "Moyenne Actuelle",
        due: "À Rendre"
      },
      recentActivity: "Activité Récente",
      activities: [
        { title: "Quiz Mathématiques", date: "Il y a 2h", score: "18/20" },
        { title: "Lecture: Chapitre 4", date: "Hier", score: "Terminé" },
        { title: "Exercices Physique", date: "Lun", score: "À revoir" }
      ],
      badges: "Badges Obtenus",
      badgeList: ["Chercheur Or", "Vitesse Lumière", "Pythagore"],
      notes: {
        title: "Notes Partagées",
        subtitle: "Ressources de la communauté",
        uploadTitle: "Partager une note",
        items: [
          { title: "Fiche Révision Bac - Histoire", author: "Marie L.", likes: 24, subject: "Histoire" },
          { title: "Formules Mécanique", author: "Thomas B.", likes: 18, subject: "Physique" }
        ]
      },
      calendar: {
        title: "Emploi du Temps",
        items: [
          { title: "Cours de Maths (Live)", time: "10:00 - 11:30", type: "live" },
          { title: "Rendu DM Physique", time: "23:59", type: "deadline" }
        ]
      },
      pomodoro: {
        title: "Minuteur de Concentration",
        start: "Démarrer",
        pause: "Pause",
        reset: "Réinitialiser"
      }
    },
    tools: {
      title: "Outils de l'Apprenant",
      essayGrader: "Correcteur IA de Dissertations",
      whiteboard: "Tableau Blanc Collaboratif",
      certificate: "Générer mon Certificat",
      parentDash: "Portail Parents",
      tutoring: "Tutorat entre pairs",
      playlists: "Playlists d'Étude",
      vrLab: "Labo Chimie VR",
      messaging: "Message Parents-Profs",
      pronunciation: "Vérif. Prononciation",
      mindmap: "Cartes Mentales IA",
      reports: "Rapports Hebdo",
      pomodoroPet: "Pomodoro Pets",
      groupHub: "Projets de Groupe",
      simulator: "Simulateur Historique",
      accessibility: "Suite Accessibilité",
      offline: "Synchro Hors-ligne",
      bidding: "Bourse aux Devoirs",
      calculator: "Calculatrice Scientifique",
      mentalHealth: "Pause Respiration"
    },
    chatTool: {
      title: "Assistant Virtuel",
      aiTutor: "Tuteur IA",
      teacher: "Enseignant",
      placeholder: "Posez votre question...",
      send: "Envoyer",
      mockTutor: "Bonjour ! Je suis votre tuteur IA. Comment puis-je vous aider aujourd'hui ? L'exploration est la clé de l'apprentissage.",
      mockTeacher: "Bonjour. Je vois que vous travaillez dur. Souhaitez-vous approfondir un concept Montessori en particulier ?"
    },
    leaderboard: {
      title: "Classement de la Semaine",
      you: "Toi"
    },
    accessibility: {
      title: "Accessibilité",
      increaseText: "Agrandir le texte",
      decreaseText: "Réduire le texte",
      highContrast: "Contraste élevé",
      hideImages: "Masquer les images",
      reset: "Réinitialiser"
    },
    chat: {
      title: "Messagerie Classe",
      teacher: "M. Dubois (Professeur)",
      online: "En ligne",
      type: "Écrivez votre message...",
      messages: [
        { sender: "teacher", text: "Bonjour à tous, n'oubliez pas le DM pour demain !" },
        { sender: "student", text: "Oui monsieur, pouvez-vous réexpliquer l'exercice 3 ?" },
        { sender: "teacher", text: "Bien sûr, je poste une vidéo explicative ce soir." }
      ]
    },
    podcasts: {
      title: "Leçons en Audio",
      subtitle: "Écoutez en déplacement",
      description: "Écoutez les leçons clés résumées dans un format audio. Parfait pour les révisions dans les transports en commun.",
      items: [
        { title: "La Révolution Industrielle", duration: "15 min" },
        { title: "Introduction aux Nombres Complexes", duration: "22 min" }
      ]
    },
    flashcards: {
      title: "Flashcards de Révision",
      flip: "Retourner",
      next: "Suivant",
      cards: [
        { front: "Quelle est la dérivée de x² ?", back: "2x" },
        { front: "Date de la chute du mur de Berlin ?", back: "9 Novembre 1989" }
      ]
    },
    dailyChallenge: {
      title: "Défi du Jour",
      question: "Si un train part de Paris à 8h à 200km/h et un autre part de Lyon à 9h à 150km/h...",
      cta: "Tenter sa chance",
      points: "+50 points XP"
    },
    newsletter: {
      title: "Restez Informé",
      subtitle: "Recevez les mises à jour sur le programme et des ressources exclusives.",
      placeholder: "votre@email.com",
      cta: "S'inscrire"
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        { q: "Comment accéder aux replays des cours ?", a: "Les replays sont disponibles dans chaque module de matière, 24h après le cours en direct." },
        { q: "Est-il possible d'avoir un accompagnement individuel ?", a: "Oui, des créneaux de tutorat sont réservables chaque jeudi après-midi." },
        { q: "Comment fonctionnent les badges ?", a: "Ils sont attribués automatiquement lors de la complétion de séries d'exercices avec plus de 80% de réussite." }
      ]
    },
    footer: {
      slogan: "Découvrir, Apprendre et Réussir ensemble.",
      legal: "Mentions légales",
      sitemap: "Plan du site",
      contact: "Contact",
      rights: "Tous droits réservés."
    }
  },
  en: {
    contactLocal: {
      title: "Contact",
      subtitle: "Get in touch",
      desc: "Have a question, suggestion or need help? Don't hesitate to reach out.",
      name: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      info: "Information",
      address: "123 Education Ave, 75000 Paris",
      labelAddress: "Address",
      phone: "+33 1 23 45 67 89",
      labelPhone: "Phone",
      emailAddress: "contact@espaceprof.fr",
      labelEmail: "Email",
      hoursTitle: "Response Time",
      hoursDesc: "I aim to respond to all messages within 24 to 48 business hours.",
      visionTitle: "Our Vision",
      visionDesc: "Beyond a simple support center, Montessori Academy aims to revolutionize the approach to extracurricular learning. We believe that every student, if placed in a stimulating environment that respects their pace, can develop not only solid academic skills, but also an unquenchable curiosity for the world around them. Our vision is that of a free, living education, where mistakes are seen as a fundamental step in discovery and where the joy of understanding supersedes the obligation to remember."
    },
    nav: {
      resources: "Resources",
      pedagogy: "Pedagogy",
      contact: "Contact",
      studentArea: "Student Area",
      search: "Search...",
      theme: "Theme"
    },
    hero: {
      badge: "Montessori Academy",
      titlePart1: "Follow the Child, ",
      titlePart2: "Change the World.",
      welcome: "Welcome to the digital sanctuary of the ",
      teacher: "Montessori Method",
      description: ". Where learning is a flow, not a chore.",
      cta: "Explore Materials",
      discover: "Discover"
    },
    announcements: {
      title: "Latest News",
      items: [
        "New cryptography module added in Mathematics!",
        "The dates for the upcoming science exams are online.",
        "Join the literature club this Friday at 4 PM."
      ]
    },
    about: {
      title: "My Pedagogy",
      subtitle: "Philosophy",
      content: "My approach is built on active engagement and curiosity. I firmly believe that every student has a unique potential waiting to be unlocked by the right teaching methods.",
      values: [
        { title: "Critical Thinking", desc: "Beyond memorization, understanding the 'why'." },
        { title: "Active Learning", desc: "Hands-on projects rather than just lectures." },
        { title: "Continuous Support", desc: "Personalized guidance for every student." }
      ]
    },
    testimonials: {
      title: "What Students Say",
      subtitle: "Feedback",
      items: [
        { name: "Sophie M.", role: "Senior Year", content: "Science classes have become fascinating. I finally understand quantum physics!" },
        { name: "Lucas D.", role: "Junior Year", content: "Mr. Dubois' teaching method reconciled me with mathematics." },
        { name: "Emma T.", role: "Alumni", content: "The interactive approach greatly helped me prepare for higher education." }
      ]
    },
    subjects: {
      subtitle: "Resources",
      title: "My Subjects",
      items: {
        'vita-pratica': {
          title: "Practical Life",
          description: "Activities that foster independence, coordination, and care for the environment.",
          concepts: ["Autonomy", "Self-confidence", "Social awareness"]
        },
        'sensoriale': {
          title: "Sensorial",
          description: "Developing and refining the senses to grasp the subtleties of the world around us.",
          concepts: ["Visual discernment", "Auditory perception", "Tactile refinement"]
        },
        'linguaggio': {
          title: "Language",
          description: "From phonetics to great literature: exploring communication through the lens of lexical beauty.",
          concepts: ["Free expression", "Living grammar", "Vocabulary richness"]
        },
        'matematica-cultura': {
          title: "Mathematics & Culture",
          description: "Absorbent mind and abstraction: the discovery of order, logic, and our universe.",
          concepts: ["Logical thinking", "Cosmic understanding", "Number exploration"]
        }
      }
    },
    subjectPage: {
      notFound: "Subject not found",
      backHome: "Back to home",
      backSubjects: "Back to subjects",
      program: "Program & Modules",
      modulesCount: "modules",
      progress: "Your Progress",
      quizPreview: "Quick Quiz",
      quizQuestion: "What is the capital of France?",
      quizAnswers: ["Lyon", "Marseille", "Paris", "Bordeaux"],
      quizCorrect: "Correct answer!",
      quizIncorrect: "Try again.",
      modules: {
        'vita-pratica': [
          { title: "Self Care", type: "Lesson", duration: "2 weeks", status: "completed" },
          { title: "Environmental Care", type: "Workshop", duration: "3 weeks", status: "in-progress" },
          { title: "Grace and Courtesy", type: "Video", duration: "1 week", status: "locked" }
        ],
        'sensoriale': [
          { title: "Cylinder Blocks", type: "Workshop", duration: "2 weeks", status: "completed" },
          { title: "Color Tablets", type: "Exercises", duration: "2 weeks", status: "in-progress" },
          { title: "Sound Cylinders", type: "Video", duration: "1 week", status: "locked" }
        ],
        'linguaggio': [
          { title: "Sandpaper Letters", type: "Lesson", duration: "4 weeks", status: "completed" },
          { title: "Movable Alphabet", type: "Workshop", duration: "Ongoing", status: "in-progress" },
          { title: "Sentence Construction", type: "Project", duration: "2 weeks", status: "locked" }
        ],
        'matematica-cultura': [
          { title: "Golden Beads", type: "Lesson", duration: "4 weeks", status: "completed" },
          { title: "Number Spindles", type: "Workshop", duration: "2 weeks", status: "in-progress" },
          { title: "Botany & Zoology", type: "Video", duration: "3 weeks", status: "locked" }
        ]
      }
    },
    studentDashboard: {
      title: "Student Dashboard",
      welcome: "Hello, Alex!",
      stats: {
        progress: "Overall Progress",
        grade: "Current Average",
        due: "To Submit"
      },
      recentActivity: "Recent Activity",
      activities: [
        { title: "Math Quiz", date: "2h ago", score: "18/20" },
        { title: "Reading: Chapter 4", date: "Yesterday", score: "Completed" },
        { title: "Physics Exercises", date: "Mon", score: "To review" }
      ],
      badges: "Earned Badges",
      badgeList: ["Gold Seeker", "Light Speed", "Pythagoras"],
      notes: {
        title: "Shared Notes",
        subtitle: "Community resources",
        uploadTitle: "Share a note",
        items: [
          { title: "Final Exam Review - History", author: "Marie L.", likes: 24, subject: "History" },
          { title: "Mechanics Formulas", author: "Thomas B.", likes: 18, subject: "Physics" }
        ]
      },
      calendar: {
        title: "Schedule",
        items: [
          { title: "Math Class (Live)", time: "10:00 - 11:30", type: "live" },
          { title: "Physics Assignment Due", time: "23:59", type: "deadline" }
        ]
      },
      pomodoro: {
        title: "Focus Timer",
        start: "Start",
        pause: "Pause",
        reset: "Reset"
      }
    },
    tools: {
      title: "Student Tools",
      essayGrader: "AI Essay Grader",
      whiteboard: "Collaborative Whiteboard",
      certificate: "Generate Certificate",
      parentDash: "Parent Portal",
      tutoring: "Peer Tutoring",
      playlists: "Study Playlists",
      vrLab: "VR Chemistry Lab",
      messaging: "Parent-Teacher Messaging",
      pronunciation: "Pronunciation Check",
      mindmap: "AI Mind Maps",
      reports: "Weekly Reports",
      pomodoroPet: "Pomodoro Pets",
      groupHub: "Group Projects",
      simulator: "Historical Simulator",
      accessibility: "Accessibility Suite",
      offline: "Offline Sync",
      bidding: "Homework Bids",
      calculator: "Scientific Calculator",
      mentalHealth: "Breathing Break"
    },
    chatTool: {
      title: "Virtual Assistant",
      aiTutor: "AI Tutor",
      teacher: "Teacher",
      placeholder: "Ask your question...",
      send: "Send",
      mockTutor: "Hello! I am your AI Tutor. How can I help you today? Remember, exploring is the first step to learning.",
      mockTeacher: "Good morning. I see you're studying hard. Is there any Montessori concept you'd like to dive deeper into?"
    },
    leaderboard: {
      title: "Weekly Leaderboard",
      you: "You"
    },
    accessibility: {
      title: "Accessibility",
      increaseText: "Increase text",
      decreaseText: "Decrease text",
      highContrast: "High contrast",
      hideImages: "Hide images",
      reset: "Reset"
    },
    chat: {
      title: "Class Chat",
      teacher: "Mr. Dubois (Teacher)",
      online: "Online",
      type: "Type your message...",
      messages: [
        { sender: "teacher", text: "Hello everyone, don't forget the assignment for tomorrow!" },
        { sender: "student", text: "Yes sir, could you re-explain exercise 3?" },
        { sender: "teacher", text: "Sure, I'll post an explanation video tonight." }
      ]
    },
    podcasts: {
      title: "Audio Lessons",
      subtitle: "Listen on the go",
      description: "Listen to key lessons summarized in an audio format. Perfect for reviewing on your commute.",
      items: [
        { title: "The Industrial Revolution", duration: "15 min" },
        { title: "Intro to Complex Numbers", duration: "22 min" }
      ]
    },
    flashcards: {
      title: "Review Flashcards",
      flip: "Flip",
      next: "Next",
      cards: [
        { front: "What is the derivative of x²?", back: "2x" },
        { front: "Date of the fall of the Berlin Wall?", back: "November 9, 1989" }
      ]
    },
    dailyChallenge: {
      title: "Daily Challenge",
      question: "If a train leaves Paris at 8am at 200km/h and another leaves Lyon at 9am at 150km/h...",
      cta: "Try your luck",
      points: "+50 XP points"
    },
    newsletter: {
      title: "Stay Updated",
      subtitle: "Get updates on the curriculum and exclusive resources.",
      placeholder: "your@email.com",
      cta: "Subscribe"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How can I access lesson replays?", a: "Replays are available in each subject module, 24 hours after the live session." },
        { q: "Is it possible to get 1-on-1 support?", a: "Yes, tutoring slots can be booked every Thursday afternoon." },
        { q: "How do badges work?", a: "They are automatically awarded upon completing exercise series with over 80% success." }
      ]
    },
    footer: {
      slogan: "Discover, Learn and Succeed together.",
      legal: "Legal Terms",
      sitemap: "Sitemap",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  it: {
    contactLocal: {
      title: "Contatto",
      subtitle: "Mettiamoci in contatto",
      desc: "Hai una domanda, un suggerimento o hai bisogno di aiuto? Non esitare a scrivermi.",
      name: "Nome e cognome",
      email: "Indirizzo email",
      subject: "Oggetto",
      message: "Il tuo messaggio",
      send: "Invia messaggio",
      info: "Informazioni",
      address: "123 Viale dell'Educazione, 75000 Parigi",
      labelAddress: "Indirizzo",
      phone: "+33 1 23 45 67 89",
      labelPhone: "Telefono",
      emailAddress: "contact@espaceprof.fr",
      labelEmail: "Email",
      hoursTitle: "Tempi di risposta",
      hoursDesc: "Mi impegno a rispondere a tutti i messaggi entro 24-48 ore lavorative.",
      visionTitle: "La Nostra Visione",
      visionDesc: "Oltre a un semplice centro di supporto, l'Accademia Montessori mira a rivoluzionare l'approccio all'apprendimento extrascolastico. Crediamo che ogni studente, se posto in un ambiente stimolante e rispettoso del proprio ritmo, possa sviluppare non solo solide competenze accademiche, ma anche un'insaziabile curiosità per il mondo che lo circonda. La nostra visione è quella di un'educazione libera e viva, dove l'errore è visto come un passaggio fondamentale nella scoperta e dove la gioia di capire supera l'obbligo di ricordare."
    },
    nav: {
      resources: "Risorse",
      pedagogy: "Pedagogia",
      contact: "Contatto",
      studentArea: "Area Studenti",
      search: "Cerca...",
      theme: "Tema"
    },
    hero: {
      badge: "Accademia Montessori",
      titlePart1: "Segui il Bambino, ",
      titlePart2: "Cambia il Mondo.",
      welcome: "Benvenuti nella piattaforma digitale basata sul ",
      teacher: "Metodo Montessori",
      description: ". Dove l'apprendimento è una scoperta naturale.",
      cta: "Esplora i Materiali",
      discover: "Scopri"
    },
    announcements: {
      title: "Ultime Notizie",
      items: [
        "Nuovo modulo di crittografia aggiunto in Matematica!",
        "Le date dei prossimi esami di scienze sono online.",
        "Unisciti al club di lettura questo venerdì alle 16:00."
      ]
    },
    about: {
      title: "La Mia Pedagogia",
      subtitle: "Filosofia",
      content: "Il mio approccio si basa sul coinvolgimento attivo e sulla curiosità. Credo fermamente che ogni studente abbia un potenziale unico che aspetta solo di essere sbloccato dai giusti metodi di insegnamento.",
      values: [
        { title: "Pensiero Critico", desc: "Oltre la memorizzazione, capire il 'perché'." },
        { title: "Apprendimento Attivo", desc: "Progetti pratici piuttosto che semplici lezioni." },
        { title: "Supporto Continuo", desc: "Una guida personalizzata per ogni studente." }
      ]
    },
    testimonials: {
      title: "Dicono Gli Studenti",
      subtitle: "Feedback",
      items: [
        { name: "Sophie M.", role: "Ultimo Anno", content: "Le lezioni di scienze sono diventate affascinanti. Ho finalmente capito la fisica quantistica!" },
        { name: "Lucas D.", role: "Terzo Anno", content: "Il metodo di insegnamento del Sig. Dubois mi ha riconciliato con la matematica." },
        { name: "Emma T.", role: "Ex Alunna", content: "L'approccio interattivo mi ha aiutato molto a prepararmi per l'istruzione superiore." }
      ]
    },
    subjects: {
      subtitle: "Materiali",
      title: "I Nostri Piani di Sviluppo",
      items: {
        'vita-pratica': {
          title: "Vita Pratica",
          description: "Attività che favoriscono l'indipendenza, la coordinazione e la cura dell'ambiente.",
          concepts: ["Autonomia", "Fiducia in se stessi", "Consapevolezza sociale"]
        },
        'sensoriale': {
          title: "Sensoriale",
          description: "Sviluppare ed affinare i sensi per comprendere le qualità del mondo che ci circonda.",
          concepts: ["Discernimento visivo", "Percezione uditiva", "Affinamento tattile"]
        },
        'linguaggio': {
          title: "Linguaggio",
          description: "Dalla fonetica alla letteratura: esplorare la comunicazione attraverso i sensi.",
          concepts: ["Espressione libera", "Grammatica viva", "Ricchezza del vocabolario"]
        },
        'matematica-cultura': {
          title: "Matematica & Cultura",
          description: "Mente assorbente e astrazione: la scoperta dell'ordine e dell'universo.",
          concepts: ["Pensiero logico", "Comprensione cosmica", "Scoperta dei numeri"]
        }
      }
    },
    subjectPage: {
      notFound: "Materia non trovata",
      backHome: "Torna alla home",
      backSubjects: "Torna agli insegnamenti",
      program: "Programma e Moduli",
      modulesCount: "moduli",
      progress: "Il Tuo Progresso",
      quizPreview: "Quiz Veloce",
      quizQuestion: "Qual è la capitale della Francia?",
      quizAnswers: ["Lione", "Marsiglia", "Parigi", "Bordeaux"],
      quizCorrect: "Risposta corretta!",
      quizIncorrect: "Riprova.",
      modules: {
        'vita-pratica': [
          { title: "Cura della Persona", type: "Lezione", duration: "2 settimane", status: "completed" },
          { title: "Cura dell'Ambiente", type: "Laboratorio", duration: "3 settimane", status: "in-progress" },
          { title: "Grazia e Cortesia", type: "Video", duration: "1 settimana", status: "locked" }
        ],
        'sensoriale': [
          { title: "Incastri Cilindrici", type: "Laboratorio", duration: "2 settimane", status: "completed" },
          { title: "Tavolette dei Colori", type: "Esercizi", duration: "2 settimane", status: "in-progress" },
          { title: "Cilindri Sonori", type: "Video", duration: "1 settimana", status: "locked" }
        ],
        'linguaggio': [
          { title: "Lettere Smerigliate", type: "Lezione", duration: "4 settimane", status: "completed" },
          { title: "Alfabeto Mobile", type: "Laboratorio", duration: "In corso", status: "in-progress" },
          { title: "Analisi della Frave", type: "Progetto", duration: "2 settimane", status: "locked" }
        ],
        'matematica-cultura': [
          { title: "Perle Dorate", type: "Lezione", duration: "4 settimane", status: "completed" },
          { title: "Fusi Numerici", type: "Laboratorio", duration: "2 settimane", status: "in-progress" },
          { title: "Botanica e Zoologia", type: "Video", duration: "3 settimane", status: "locked" }
        ]
      }
    },
    studentDashboard: {
      title: "Dashboard Studenti",
      welcome: "Ciao, Alex!",
      stats: {
        progress: "Progresso Globale",
        grade: "Media Attuale",
        due: "Da Consegnare"
      },
      recentActivity: "Attività Recente",
      activities: [
        { title: "Quiz di Matematica", date: "2 ore fa", score: "18/20" },
        { title: "Lettura: Capitolo 4", date: "Ieri", score: "Completato" },
        { title: "Esercizi di Fisica", date: "Lun", score: "Da rivedere" }
      ],
      badges: "Badge Ottenuti",
      badgeList: ["Ricercatore d'Oro", "Velocità della Luce", "Pitagora"],
      notes: {
        title: "Appunti Condivisi",
        subtitle: "Risorse della comunità",
        uploadTitle: "Condividi un appunto",
        items: [
          { title: "Ripasso Esame - Storia", author: "Marie L.", likes: 24, subject: "Storia" },
          { title: "Formule di Meccanica", author: "Thomas B.", likes: 18, subject: "Fisica" }
        ]
      },
      calendar: {
        title: "Orario",
        items: [
          { title: "Lezione di Matematica (Live)", time: "10:00 - 11:30", type: "live" },
          { title: "Consegna Compito di Fisica", time: "23:59", type: "deadline" }
        ]
      },
      pomodoro: {
        title: "Timer Concentrazione",
        start: "Avvia",
        pause: "Pausa",
        reset: "Reset"
      }
    },
    tools: {
      title: "Strumenti dello Studente",
      essayGrader: "Correzione IA per Saggi",
      whiteboard: "Lavagna Condivisa",
      certificate: "Genera Certificato",
      parentDash: "Portale Genitori",
      tutoring: "Tutoraggio tra pari",
      playlists: "Playlist di Studio",
      vrLab: "Lab Chimica VR",
      messaging: "Messaggi Genitori-Insegnanti",
      pronunciation: "Controllo Pronuncia",
      mindmap: "Mappe Mentali IA",
      reports: "Report Settimanali",
      pomodoroPet: "Pomodoro Pets",
      groupHub: "Progetti di Gruppo",
      simulator: "Simulatore Storico",
      accessibility: "Accessibilità Avanzata",
      offline: "Sincronizzazione Offline",
      bidding: "Borsa Compiti",
      calculator: "Calcolatrice Scientifica",
      mentalHealth: "Pausa Respiro"
    },
    chatTool: {
      title: "Assistente Virtuale",
      aiTutor: "Tutor AI",
      teacher: "Insegnante",
      placeholder: "Fai la tua domanda...",
      send: "Invia",
      mockTutor: "Ciao! Sono il tuo Tutor AI. Come posso aiutarti con i tuoi studi oggi? Ricorda, esplorare è il primo passo per imparare.",
      mockTeacher: "Buongiorno. Vedo che stai studiando con impegno. C'è qualche concetto del materiale Montessori che vorresti approfondire?"
    },
    leaderboard: {
      title: "Classifica Settimanale",
      you: "Tu"
    },
    accessibility: {
      title: "Accessibilità",
      increaseText: "Ingrandisci testo",
      decreaseText: "Riduci testo",
      highContrast: "Contrasto elevato",
      hideImages: "Nascondi immagini",
      reset: "Reimposta"
    },
    chat: {
      title: "Chat della Classe",
      teacher: "Sig. Dubois (Insegnante)",
      online: "Online",
      type: "Scrivi un messaggio...",
      messages: [
        { sender: "teacher", text: "Ciao a tutti, non dimenticate il compito per domani!" },
        { sender: "student", text: "Sì professore, può rispiegare l'esercizio 3?" },
        { sender: "teacher", text: "Certo, pubblicherò un video esplicativo stasera." }
      ]
    },
    podcasts: {
      title: "Lezioni Audio",
      subtitle: "Ascolta in movimento",
      description: "Ascolta le lezioni chiave riassunte in un formato audio. Perfetto per il ripasso sui mezzi pubblici.",
      items: [
        { title: "La Rivoluzione Industriale", duration: "15 min" },
        { title: "Intro ai Numeri Complessi", duration: "22 min" }
      ]
    },
    flashcards: {
      title: "Flashcard di Ripasso",
      flip: "Gira",
      next: "Prossima",
      cards: [
        { front: "Qual è la derivata di x²?", back: "2x" },
        { front: "Data della caduta del Muro di Berlino?", back: "9 Novembre 1989" }
      ]
    },
    dailyChallenge: {
      title: "Sfida del Giorno",
      question: "Se un treno parte da Parigi alle 8 a 200km/h e un altro parte da Lione alle 9 a 150km/h...",
      cta: "Tenta la fortuna",
      points: "+50 punti XP"
    },
    newsletter: {
      title: "Rimani Aggiornato",
      subtitle: "Ricevi aggiornamenti sul programma e risorse esclusive.",
      placeholder: "tua@email.com",
      cta: "Iscriviti"
    },
    faq: {
      title: "Domande Frequenti",
      items: [
        { q: "Come posso accedere alle registrazioni delle lezioni?", a: "Le registrazioni sono disponibili in ogni modulo della materia, 24 ore dopo la sessione live." },
        { q: "È possibile avere un supporto individuale?", a: "Sì, gli slot di tutoraggio possono essere prenotati ogni giovedì pomeriggio." },
        { q: "Come funzionano i badge?", a: "Vengono assegnati automaticamente al completamento di serie di esercizi con oltre l'80% di successo." }
      ]
    },
    footer: {
      slogan: "Scoprire, Imparare e Avere Successo insieme.",
      legal: "Note legali",
      sitemap: "Mappa del sito",
      contact: "Contatti",
      rights: "Tutti i diritti riservati."
    }
  }
};
