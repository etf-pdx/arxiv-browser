export interface Subcategory {
  name: string,
  iconUrl: string,
  id: string,
  description: string
}

export interface Category {
  name: string,
  iconUrl: string,
  subCategories: Subcategory[]
}

export const categories = [
  {
    "name": "Computer Science",
    "iconUrl": "https://img.icons8.com/ios/50/000000/computer.png",
    "subCategories": [
      {
        "name": "Artificial Intelligence",
        "id": "cs.AI",
        "iconUrl": "https://img.icons8.com/ios/50/000000/artificial-intelligence.png",
        "description": "Covers all areas of AI except Vision, Robotics, Machine Learning, Multiagent Systems, and Computation and Language (Natural Language Processing), which have separate subject areas. In particular, includes Expert Systems, Theorem Proving (although this may overlap with Logic in Computer Science), Knowledge Representation, Planning, and Uncertainty in AI."
      },
      {
        "name": "Hardware Architecture",
        "id": "cs.AR",
        "iconUrl": "https://img.icons8.com/ios/50/000000/arduino-uno-board.png",
        "description": "Covers systems organization and hardware architecture."
      },
      {
        "name": "Computational Complexity",
        "id": "cs.CC",
        "iconUrl": "https://img.icons8.com/ios/50/000000/one-to-many.png",
        "description": "Covers models of computation, complexity classes, structural complexity, complexity tradeoffs, upper and lower bounds."
      },
      {
        "name": "Computational Engineering, Finance, and Science",
        "id": "cs.CE",
        "iconUrl": "https://img.icons8.com/ios-glyphs/50/000000/mechanistic-analysis.png",
        "description": "Covers applications of computer science to the mathematical modeling of complex systems in the fields of science, engineering, and finance. Papers here are interdisciplinary and applications-oriented, focusing on techniques and tools that enable challenging computational simulations to be performed, for which the use of supercomputers or distributed computing platforms is often required."
      },
      {
        "name": "Computational Geometry",
        "id": "cs.CG",
        "iconUrl": "https://img.icons8.com/ios/50/000000/geometry.png",
        "description": ""
      },
      {
        "name": "Computation and Language",
        "id": "cs.CL",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/language.png",
        "description": "Covers natural language processing. Note that work on artificial languages (programming languages, logics, formal systems) that does not explicitly address natural-language issues broadly construed (natural-language processing, computational linguistics, speech, text retrieval, etc.) is not appropriate for this area."
      },
      {
        "name": "Cryptography and Security",
        "id": "cs.CR",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/cyber-security.png",
        "description": "Covers all areas of cryptography and security including authentication, public key cryptosytems, proof-carrying code, etc."
      },
      {
        "name": "Computer Vision and Pattern Recognition",
        "id": "cs.CV",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/vision.png",
        "description": "Covers image processing, computer vision, pattern recognition, and scene understanding."
      },
      {
        "name": "Computers and Society",
        "id": "cs.CY",
        "iconUrl": "https://img.icons8.com/external-glyph-geotatah/50/000000/external-association-business-partnership-glyph-glyph-geotatah.png",
        "description": "Covers impact of computers on society, computer ethics, information technology and public policy, legal aspects of computing, computers and education."
      },
      {
        "name": "Databases",
        "id": "cs.DB",
        "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-databases-web-seo-prettycons-lineal-prettycons.png",
        "description": "Covers database management, datamining, and data processing."
      },
      {
        "name": "Distributed, Parallel, and Cluster Computing",
        "id": "cs.DC",
        "iconUrl": "https://img.icons8.com/ios/50/000000/paralell-workflow.png",
        "description": "Covers fault-tolerance, distributed algorithms, stabilility, parallel computation, and cluster computing."
      },
      {
        "name": "Digital Libraries",
        "id": "cs.DL",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/mp3.png",
        "description": "Covers all aspects of the digital library design and document and text creation. Note that there will be some overlap with Information Retrieval (which is a separate subject area)."
      },
      {
        "name": "Discrete Mathematics",
        "id": "cs.DM",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/graph-clique.png",
        "description": "Covers combinatorics, graph theory, applications of probability."
      },
      {
        "name": "Data Structures and Algorithms",
        "id": "cs.DS",
        "iconUrl": "https://img.icons8.com/ios/50/000000/data-matrix-code.png",
        "description": "Covers data structures and analysis of algorithms."
      },
      {
        "name": "Emerging Technologies",
        "id": "cs.ET",
        "iconUrl": "https://img.icons8.com/ios/50/000000/hologram.png",
        "description": "Covers approaches to information processing (computing, communication, sensing) and bio-chemical analysis based on alternatives to silicon CMOS-based technologies, such as nanoscale electronic, photonic, spin-based, superconducting, mechanical, bio-chemical and quantum technologies (this list is not exclusive). Topics of interest include (1) building blocks for emerging technologies, their scalability and adoption in larger systems, including integration with traditional technologies, (2) modeling, design and optimization of novel devices and systems, (3) models of computation, algorithm design and programming for emerging technologies."
      },
      {
        "name": "Formal Languages and Automata Theory",
        "id": "cs.FL",
        "iconUrl": "https://img.icons8.com/ios/50/000000/terms-and-conditions.png",
        "description": "Covers automata theory, formal language theory, grammars, and combinatorics on words."
      },
      {
        "name": "General Literature",
        "id": "cs.GL",
        "iconUrl": "https://img.icons8.com/ios/50/000000/literature--v1.png",
        "description": "Covers introductory material, survey material, predictions of future trends, biographies, and miscellaneous computer-science related material."
      },
      {
        "name": "Graphics",
        "id": "cs.GR",
        "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-graphics-card-crypto-and-currency-prettycons-lineal-prettycons-1.png",
        "description": "Covers all aspects of computer graphics."
      },
      {
        "name": "Computer Science and Game Theory",
        "id": "cs.GT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/controller.png",
        "description": "Covers all theoretical and applied aspects at the intersection of computer science and game theory, including work in mechanism design, learning in games (which may overlap with Learning), foundations of agent modeling in games (which may overlap with Multiagent systems), coordination, specification and formal methods for non-cooperative computational environments. The area also deals with applications of game theory to areas such as electronic commerce."
      },
      {
        "name": "Human-Computer Interaction",
        "id": "cs.HC",
        "iconUrl": "https://img.icons8.com/ios/50/000000/woman-at-computer.png",
        "description": "Covers human factors, user interfaces, and collaborative computing."
      },
      {
        "name": "Information Retrieval",
        "id": "cs.IR",
        "iconUrl": "https://img.icons8.com/ios/50/000000/download--v1.png",
        "description": "Covers indexing, dictionaries, retrieval, content and analysis."
      },
      {
        "name": "Information Theory",
        "id": "cs.IT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/information--v1.png",
        "description": "Covers theoretical and experimental aspects of information theory and coding."
      },
      {
        "name": "Machine Learning",
        "id": "cs.LG",
        "iconUrl": "https://img.icons8.com/ios/50/000000/machine-learning.png",
        "description": "Papers on all aspects of machine learning research (supervised, unsupervised, reinforcement learning, bandit problems, and so on) including also robustness, explanation, fairness, and methodology."
      },
      {
        "name": "Logic in Computer Science",
        "id": "cs.LO",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/logic-data-types.png",
        "description": "Covers all aspects of logic in computer science, including finite model theory, logics of programs, modal logic, and program verification."
      },
      {
        "name": "Multiagent Systems",
        "id": "cs.MA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/bee-swarm.png",
        "description": "Covers multiagent systems, distributed artificial intelligence, intelligent agents, coordinated interactions. and practical applications."
      },
      {
        "name": "Multimedia",
        "id": "cs.MM",
        "iconUrl": "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-multimedia-multimedia-kiranshastry-lineal-kiranshastry.png",
        "description": ""
      },
      {
        "name": "Mathematical Software",
        "id": "cs.MS",
        "iconUrl": "https://img.icons8.com/ios/50/000000/tableau-software.png",
        "description": ""
      },
      {
        "name": "Numerical Analysis",
        "id": "cs.NA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/financial-growth-analysis.png",
        "description": ""
      },
      {
        "name": "Neural and Evolutionary Computing",
        "id": "cs.NE",
        "iconUrl": "https://img.icons8.com/ios/50/000000/neuron.png",
        "description": "Covers neural networks, connectionism, genetic algorithms, artificial life, adaptive behavior."
      },
      {
        "name": "Networking and Internet Architecture",
        "id": "cs.NI",
        "iconUrl": "https://img.icons8.com/ios/50/000000/networking-manager.png",
        "description": "Covers all aspects of computer communication networks, including network architecture and design, network protocols, and internetwork standards (like TCP/IP). Also includes topics, such as web caching, that are directly relevant to Internet architecture and performance."
      },
      {
        "name": "Other Computer Science",
        "id": "cs.OH",
        "iconUrl": "https://img.icons8.com/ios-glyphs/50/000000/broken-computer.png",
        "description": "This is the classification to use for documents that do not fit anywhere else."
      },
      {
        "name": "Operating Systems",
        "id": "cs.OS",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/ubuntu.png",
        "description": ""
      },
      {
        "name": "Performance",
        "id": "cs.PF",
        "iconUrl": "https://img.icons8.com/windows/50/000000/performance-2.png",
        "description": "Covers performance measurement and evaluation, queueing, and simulation."
      },
      {
        "name": "Programming Languages",
        "id": "cs.PL",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-computer-languages-programming-and-coding-flatart-icons-outline-flatarticons.png",
        "description": "Covers programming language semantics, language features, programming approaches (such as object-oriented programming, functional programming, logic programming). Also includes material on compilers oriented towards programming languages; other material on compilers may be more appropriate in Architecture (AR)."
      },
      {
        "name": "Robotics",
        "id": "cs.RO",
        "iconUrl": "https://img.icons8.com/ios/50/000000/robot-2.png",
        "description": ""
      },
      {
        "name": "Symbolic Computation",
        "id": "cs.SC",
        "iconUrl": "https://img.icons8.com/ios/50/000000/symlink-file.png",
        "description": ""
      },
      {
        "name": "Sound",
        "id": "cs.SD",
        "iconUrl": "https://img.icons8.com/ios/50/000000/room-sound.png",
        "description": "Covers all aspects of computing with sound, and sound as an information channel. Includes models of sound, analysis and synthesis, audio user interfaces, sonification of data, computer music, and sound signal processing."
      },
      {
        "name": "Software Engineering",
        "id": "cs.SE",
        "iconUrl": "https://img.icons8.com/ios/50/000000/software-license.png",
        "description": "Covers design tools, software metrics, testing and debugging, programming environments, etc."
      },
      {
        "name": "Social and Information Networks",
        "id": "cs.SI",
        "iconUrl": "https://img.icons8.com/external-becris-lineal-becris/50/000000/external-neural-data-science-becris-lineal-becris.png",
        "description": "Covers the design, analysis, and modeling of social and information networks, including their applications for on-line information access, communication, and interaction, and their roles as datasets in the exploration of questions in these and other domains, including connections to the social and biological sciences."
      },
      {
        "name": "Systems and Control",
        "id": "cs.SY",
        "iconUrl": "https://img.icons8.com/ios/50/000000/control-panel.png",
        "description": "This section includes theoretical and experimental research covering all facets of automatic control systems. The section is focused on methods of control system analysis and design using tools of modeling, simulation and optimization. Specific areas of research include nonlinear, distributed, adaptive, stochastic and robust control in addition to hybrid and discrete event systems. Application areas include automotive and aerospace control systems, network control, biological systems, multiagent and cooperative control, robotics, reinforcement learning, sensor networks, control of cyber-physical and energy-related systems, and control of computing systems."
      }
    ]
  },
  {
    "name": "Economics",
    "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-economics-education-prettycons-lineal-prettycons.png",
    "subCategories": [
      {
        "name": "Econometrics",
        "id": "econ.EM",
        "iconUrl": "https://img.icons8.com/ios/50/000000/statistics.png",
        "description": "Econometric Theory, Micro-Econometrics, Macro-Econometrics, Empirical Content of Economic Relations discovered via New Methods, Methodological Aspects of the Application of Statistical Inference to Economic Data."
      },
      {
        "name": "General Economics",
        "id": "econ.GN",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-economics-business-flatart-icons-outline-flatarticons.png",
        "description": "General methodological, applied, and empirical contributions to economics."
      },
      {
        "name": "Theoretical Economics",
        "id": "econ.TH",
        "iconUrl": "https://img.icons8.com/ios/50/000000/general-ledger.png",
        "description": "Includes theoretical contributions to Contract Theory, Decision Theory, Game Theory, General Equilibrium, Growth, Learning and Evolution, Macroeconomics, Market and Mechanism Design, and Social Choice."
      }
    ]
  },
  {
    "name": "Electrical Engineering and Systems Science",
    "iconUrl": "https://img.icons8.com/ios/50/000000/electrical.png",
    "subCategories": [
      {
        "name": "Audio and Speech Processing",
        "id": "eess.AS",
        "iconUrl": "https://img.icons8.com/ios-glyphs/50/000000/speech-to-text.png",
        "description": "Theory and methods for processing signals representing audio, speech, and language, and their applications. This includes analysis, synthesis, enhancement, transformation, classification and interpretation of such signals as well as the design, development, and evaluation of associated signal processing systems. Machine learning and pattern analysis applied to any of the above areas is also welcome. Specific topics of interest include: auditory modeling and hearing aids; acoustic beamforming and source localization; classification of acoustic scenes; speaker separation; active noise control and echo cancellation; enhancement; de-reverberation; bioacoustics; music signals analysis, synthesis and modification; music information retrieval; audio for multimedia and joint audio-video processing; spoken and written language modeling, segmentation, tagging, parsing, understanding, and translation; text mining; speech production, perception, and psychoacoustics; speech analysis, synthesis, and perceptual modeling and coding; robust speech recognition; speaker recognition and characterization; deep learning, online learning, and graphical models applied to speech, audio, and language signals; and implementation aspects ranging from system architecture to fast algorithms."
      },
      {
        "name": "Image and Video Processing",
        "id": "eess.IV",
        "iconUrl": "https://img.icons8.com/ios/50/000000/video.png",
        "description": "Theory, algorithms, and architectures for the formation, capture, processing, communication, analysis, and display of images, video, and multidimensional signals in a wide variety of applications. Topics of interest include: mathematical, statistical, and perceptual image and video modeling and representation; linear and nonlinear filtering, de-blurring, enhancement, restoration, and reconstruction from degraded, low-resolution or tomographic data; lossless and lossy compression and coding; segmentation, alignment, and recognition; image rendering, visualization, and printing; computational imaging, including ultrasound, tomographic and magnetic resonance imaging; and image and video analysis, synthesis, storage, search and retrieval."
      },
      {
        "name": "Signal Processing",
        "id": "eess.SP",
        "iconUrl": "https://img.icons8.com/ios/50/000000/electrical-threshold.png",
        "description": "Theory, algorithms, performance analysis and applications of signal and data analysis, including physical modeling, processing, detection and parameter estimation, learning, mining, retrieval, and information extraction. The term 'signal' includes speech, audio, sonar, radar, geophysical, physiological, (bio-) medical, image, video, and multimodal natural and man-made signals, including communication signals and data. Topics of interest include: statistical signal processing, spectral estimation and system identification; filter design, adaptive filtering / stochastic learning; (compressive) sampling, sensing, and transform-domain methods including fast algorithms; signal processing for machine learning and machine learning for signal processing applications; in-network and graph signal processing; convex and nonconvex optimization methods for signal processing applications; radar, sonar, and sensor array beamforming and direction finding; communications signal processing; low power, multi-core and system-on-chip signal processing; sensing, communication, analysis and optimization for cyber-physical systems such as power grids and the Internet of Things."
      },
      {
        "name": "Systems and Control",
        "id": "eess.SY",
        "iconUrl": "https://img.icons8.com/ios/50/000000/control-panel.png",
        "description": "This section includes theoretical and experimental research covering all facets of automatic control systems. The section is focused on methods of control system analysis and design using tools of modeling, simulation and optimization. Specific areas of research include nonlinear, distributed, adaptive, stochastic and robust control in addition to hybrid and discrete event systems. Application areas include automotive and aerospace control systems, network control, biological systems, multiagent and cooperative control, robotics, reinforcement learning, sensor networks, control of cyber-physical and energy-related systems, and control of computing systems."
      }
    ]
  },
  {
    "name": "Mathematics",
    "iconUrl": "https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-mathematics-calculate-itim2101-lineal-itim2101.png",
    "subCategories": [
      {
        "name": "Commutative Algebra",
        "id": "math.AC",
        "iconUrl": "https://img.icons8.com/ios/50/000000/plus--v1.png",
        "description": "Commutative rings, modules, ideals, homological algebra, computational aspects, invariant theory, connections to algebraic geometry and combinatorics"
      },
      {
        "name": "Algebraic Geometry",
        "id": "math.AG",
        "iconUrl": "https://img.icons8.com/ios/50/000000/impossible-shapes.png",
        "description": "Algebraic varieties, stacks, sheaves, schemes, moduli spaces, complex geometry, quantum cohomology"
      },
      {
        "name": "Analysis of PDEs",
        "id": "math.AP",
        "iconUrl": "https://img.icons8.com/carbon-copy/50/000000/delta.png",
        "description": "Existence and uniqueness, boundary conditions, linear and non-linear operators, stability, soliton theory, integrable PDE's, conservation laws, qualitative dynamics"
      },
      {
        "name": "Algebraic Topology",
        "id": "math.AT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/doughnut.png",
        "description": "Homotopy theory, homological algebra, algebraic treatments of manifolds"
      },
      {
        "name": "Classical Analysis of ODEs",
        "id": "math.CA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/bleach.png",
        "description": "Special functions, orthogonal polynomials, harmonic analysis, ODE's, differential relations, calculus of variations, approximations, expansions, asymptotic"
      },
      {
        "name": "Combinatorics",
        "id": "math.CO",
        "iconUrl": "https://img.icons8.com/ios/50/000000/graph-clique.png",
        "description": "Discrete mathematics, graph theory, enumeration, combinatorial optimization, Ramsey theory, combinatorial game theory"
      },
      {
        "name": "Category Theory",
        "id": "math.CT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/category.png",
        "description": "Enriched categories, topoi, abelian categories, monoidal categories, homological algebra"
      },
      {
        "name": "Complex Variables",
        "id": "math.CV",
        "iconUrl": "https://img.icons8.com/external-outline-juicy-fish/50/000000/external-complex-gears-and-cogs-outline-outline-juicy-fish.png",
        "description": "Holomorphic functions, automorphic group actions and forms, pseudoconvexity, complex geometry, analytic spaces, analytic sheaves"
      },
      {
        "name": "Differential Geometry",
        "id": "math.DG",
        "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-geometry-astrology-and-symbology-prettycons-lineal-prettycons-1.png",
        "description": "Complex, contact, Riemannian, pseudo-Riemannian and Finsler geometry, relativity, gauge theory, global analysis"
      },
      {
        "name": "Dynamical Systems",
        "id": "math.DS",
        "iconUrl": "https://img.icons8.com/external-outline-geotatah/50/000000/external-dynamic-emergency-and-disaster-management-outline-geotatah.png",
        "description": "Dynamics of differential equations and flows, mechanics, classical few-body problems, iterations, complex dynamics, delayed differential equations"
      },
      {
        "name": "Functional Analysis",
        "id": "math.FA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/formula-fx.png",
        "description": "Banach spaces, function spaces, real functions, integral transforms, theory of distributions, measure theory"
      },
      {
        "name": "General Mathematics",
        "id": "math.GM",
        "iconUrl": "https://img.icons8.com/external-becris-lineal-becris/50/000000/external-math-literary-genres-becris-lineal-becris.png",
        "description": "Mathematical material of general interest, topics not covered elsewhere"
      },
      {
        "name": "General Topology",
        "id": "math.GN",
        "iconUrl": "https://img.icons8.com/ios/50/000000/rhomboid-shape.png",
        "description": "Continuum theory, point-set topology, spaces with algebraic structure, foundations, dimension theory, local and global properties"
      },
      {
        "name": "Group Theory",
        "id": "math.GR",
        "iconUrl": "https://img.icons8.com/ios/50/000000/group-objects.png",
        "description": "Finite groups, topological groups, representation theory, cohomology, classification and structure"
      },
      {
        "name": "Geometric Topology",
        "id": "math.GT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/top-view.png",
        "description": "Manifolds, orbifolds, polyhedra, cell complexes, foliations, geometric structures"
      },
      {
        "name": "History and Overview",
        "id": "math.HO",
        "iconUrl": "https://img.icons8.com/ios/50/000000/activity-history.png",
        "description": "Biographies, philosophy of mathematics, mathematics education, recreational mathematics, communication of mathematics, ethics in mathematics"
      },
      {
        "name": "Information Theory",
        "id": "math.IT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/information--v1.png",
        "description": "Covers theoretical and experimental aspects of information theory and coding"
      },
      {
        "name": "K-Theory and Homology",
        "id": "math.KT",
        "iconUrl": "https://img.icons8.com/ios-glyphs/50/000000/congruent-symbol.png",
        "description": "Algebraic and topological K-theory, relations with topology, commutative algebra, and operator algebras"
      },
      {
        "name": "Logic",
        "id": "math.LO",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/logic-data-types.png",
        "description": "Logic, set theory, point-set topology, formal mathematics"
      },
      {
        "name": "Metric Geometry",
        "id": "math.MG",
        "iconUrl": "https://img.icons8.com/external-justicon-lineal-justicon/50/000000/external-ruler-construction-justicon-lineal-justicon.png",
        "description": "Euclidean, hyperbolic, discrete, convex, coarse geometry, comparisons in Riemannian geometry, symmetric spaces"
      },
      {
        "name": "Mathematical Physics",
        "id": "math.MP",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/physics.png",
        "description": "Articles in this category focus on areas of research that illustrate the application of mathematics to problems in physics, develop mathematical methods for such applications, or provide mathematically rigorous formulations of existing physical theories. Submissions to math-ph should be of interest to both physically oriented mathematicians and mathematically oriented physicists; submissions which are primarily of interest to theoretical physicists or to mathematicians should probably be directed to the respective physics/math categories."
      },
      {
        "name": "Numerical Analysis",
        "id": "math.NA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/financial-growth-analysis.png",
        "description": "Numerical algorithms for problems in analysis and algebra, scientific computation"
      },
      {
        "name": "Number Theory",
        "id": "math.NT",
        "iconUrl": "https://img.icons8.com/ios/50/000000/real-number.png",
        "description": "Prime numbers, diophantine equations, analytic number theory, algebraic number theory, arithmetic geometry, Galois theory"
      },
      {
        "name": "Operator Algebras",
        "id": "math.OA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/math.png",
        "description": "Algebras of operators on Hilbert space, C^*-algebras, von Neumann algebras, non-commutative geometry"
      },
      {
        "name": "Optimization and Control",
        "id": "math.OC",
        "iconUrl": "https://img.icons8.com/external-becris-lineal-becris/50/000000/external-optimization-data-science-becris-lineal-becris.png",
        "description": "Operations research, linear programming, control theory, systems theory, optimal control, game theory"
      },
      {
        "name": "Probability",
        "id": "math.PR",
        "iconUrl": "https://img.icons8.com/ios/50/000000/normal-distribution-histogram--v1.png",
        "description": "Theory and applications of probability and stochastic processes: e.g. central limit theorems, large deviations, stochastic differential equations, models from statistical mechanics, queuing theory"
      },
      {
        "name": "Quantum Algebra",
        "id": "math.QA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/minus.png",
        "description": "Quantum groups, skein theories, operadic and diagrammatic algebra, quantum field theory"
      },
      {
        "name": "Rings and Algebras",
        "id": "math.RA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/ring-front-view.png",
        "description": "Non-commutative rings and algebras, non-associative algebras, universal algebra and lattice theory, linear algebra, semigroups"
      },
      {
        "name": "Representation Theory",
        "id": "math.RT",
        "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-geometry-astrology-and-symbology-prettycons-lineal-prettycons.png",
        "description": "Linear representations of algebras and groups, Lie theory, associative algebras, multilinear algebra"
      },
      {
        "name": "Symplectic Geometry",
        "id": "math.SG",
        "iconUrl": "https://img.icons8.com/ios/50/000000/mesh.png",
        "description": "Hamiltonian systems, symplectic flows, classical integrable systems"
      },
      {
        "name": "Spectral Theory",
        "id": "math.SP",
        "iconUrl": "https://img.icons8.com/ios/50/000000/ghost--v1.png",
        "description": "Schrodinger operators, operators on manifolds, general differential operators, numerical studies, integral operators, discrete models, resonances, non-self-adjoint operators, random operators/matrices"
      },
      {
        "name": "Statistics Theory",
        "id": "math.ST",
        "iconUrl": "https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-statistics-network-technology-itim2101-lineal-itim2101.png",
        "description": "Applied, computational and theoretical statistics: e.g. statistical inference, regression, time series, multivariate analysis, data analysis, Markov chain Monte Carlo, design of experiments, case studies"
      }
    ]
  },
  {
    "name": "Physics",
    "iconUrl": "https://img.icons8.com/ios/50/000000/physics.png",
    "subCategories": [
      /* Astrophysics */
      {
        "name": "Cosmology and Nongalactic Astrophysics",
        "id": "astro-ph.CO",
        "iconUrl": "https://img.icons8.com/external-others-made-by-made/50/000000/external-astronomy-space-others-made-by-made-88.png",
        "description": "Phenomenology of early universe, cosmic microwave background, cosmological parameters, primordial element abundances, extragalactic distance scale, large-scale structure of the universe. Groups, superclusters, voids, intergalactic medium. Particle astrophysics: dark energy, dark matter, baryogenesis, leptogenesis, inflationary models, reheating, monopoles, WIMPs, cosmic strings, primordial black holes, cosmological gravitational radiation."
      },
      {
        "name": "Earth and Planetary Astrophysics",
        "id": "astro-ph.EP",
        "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-physics-university-courses-wanicon-lineal-wanicon.png",
        "description": "Interplanetary medium, planetary physics, planetary astrobiology, extrasolar planets, comets, asteroids, meteorites. Structure and formation of the solar system."
      },
      {
        "name": "Astrophysics of Galaxies",
        "id": "astro-ph.GA",
        "iconUrl": "https://img.icons8.com/ios/50/000000/galaxy.png",
        "description": "Phenomena pertaining to galaxies or the Milky Way. Star clusters, HII regions and planetary nebulae, the interstellar medium, atomic and molecular clouds, dust. Stellar populations. Galactic structure, formation, dynamics. Galactic nuclei, bulges, disks, halo. Active Galactic Nuclei, supermassive black holes, quasars. Gravitational lens systems. The Milky Way and its contents."
      },
      {
        "name": "High Energy Astrophysical Phenomena",
        "id": "astro-ph.HE",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/xray.png",
        "description": "Cosmic ray production, acceleration, propagation, detection. Gamma ray astronomy and bursts, X-rays, charged particles, supernovae and other explosive phenomena, stellar remnants and accretion systems, jets, microquasars, neutron stars, pulsars, black holes."
      },
      {
        "name": "Instrumentation and Methods for Astrophysics",
        "id": "astro-ph.IM",
        "iconUrl": "https://img.icons8.com/ios/50/000000/telescope.png",
        "description": "Detector and telescope design, experiment proposals. Laboratory Astrophysics. Methods for data analysis, statistical methods. Software, database design."
      },
      {
        "name": "Solar and Stellar Astrophysics",
        "id": "astro-ph.IM",
        "iconUrl": "https://img.icons8.com/ios/50/000000/shooting-stars.png",
        "description": "White dwarfs, brown dwarfs, cataclysmic variables. Star formation and protostellar systems, stellar astrobiology, binary and multiple systems of stars, stellar evolution and structure, coronas. Central stars of planetary nebulae. Helioseismology, solar neutrinos, production and detection of gravitational radiation from stellar systems."
      },
      /* Condensed Matter */
      {
        "name": "Disordered Systems and Neural Networks",
        "id": "cond-mat.dis-nn",
        "iconUrl": "https://img.icons8.com/ios/50/000000/neuron.png",
        "description": "Glasses and spin glasses; properties of random, aperiodic and quasiperiodic systems; transport in disordered media; localization; phenomena mediated by defects and disorder; neural networks."
      },
      {
        "name": "Mesoscale and Nanoscale Physics",
        "id": "cond-mat.mes-hall",
        "iconUrl": "https://img.icons8.com/external-prettycons-solid-prettycons/50/000000/external-electrons-technology-prettycons-solid-prettycons.png",
        "description": "Semiconducting nanostructures: quantum dots, wires, and wells. Single electronics, spintronics, 2d electron gases, quantum Hall effect, nanotubes, graphene, plasmonic nanostructures."
      },
      {
        "name": "Materials Science",
        "id": "cond-mat.mtrl-sci",
        "iconUrl": "https://img.icons8.com/ios/50/000000/commodity.png",
        "description": "Techniques, synthesis, characterization, structure. Structural phase transitions, mechanical properties, phonons. Defects, adsorbates, interfaces."
      },
      {
        "name": "Other Condensed Matter",
        "id": "cond-mat.other",
        "iconUrl": "https://img.icons8.com/windows/50/000000/box-other.png",
        "description": "Work in condensed matter that does not fit into the other cond-mat classifications."
      },
      {
        "name": "Quantum Gases",
        "id": "cond-mat.quant-gas",
        "iconUrl": "https://img.icons8.com/ios/50/000000/clouds.png",
        "description": "Ultracold atomic and molecular gases, Bose-Einstein condensation, Feshbach resonances, spinor condensates, optical lattices, quantum simulation with cold atoms and molecules, macroscopic interference phenomena."
      },
      {
        "name": "Soft Condensed Matter",
        "id": "cond-mat.soft",
        "iconUrl": "https://img.icons8.com/ios/50/000000/membrane.png",
        "description": "Membranes, polymers, liquid crystals, glasses, colloids, granular matter."
      },
      {
        "name": "Statistical Mechanics",
        "id": "cond-mat.stat-mech",
        "iconUrl": "https://img.icons8.com/ios/50/000000/mechanistic-analysis.png",
        "description": "Phase transitions, thermodynamics, field theory, non-equilibrium phenomena, renormalization group and scaling, integrable models, turbulence."
      },
      {
        "name": "Strongly Correlated Electrons",
        "id": "cond-mat.str-el",
        "iconUrl": "https://img.icons8.com/ios-filled/50/000000/magnet.png",
        "description": "Quantum magnetism, non-Fermi liquids, spin liquids, quantum criticality, charge density waves, metal-insulator transitions."
      },
      {
        "name": "Superconductivity",
        "id": "cond-mat.supr-con",
        "iconUrl": "https://img.icons8.com/ios/50/000000/circuit.png",
        "description": "Superconductivity: theory, models, experiment. Superflow in helium."
      },
      /* MISC */
      {
        "name": "General Relativity and Quantum Cosmology",
        "id": "gr-qc",
        "iconUrl": "https://img.icons8.com/ios/50/000000/einstein.png",
        "description": "General Relativity and Quantum Cosmology Areas of gravitational physics, including experiments and observations related to the detection and interpretation of gravitational waves, experimental tests of gravitational theories, computational general relativity, relativistic astrophysics, solutions to Einstein's equations and their properties, alternative theories of gravity, classical and quantum cosmology, and quantum gravity."
      },
      {
        "name": "Mathematical Physics",
        "id": "math-ph",
        "iconUrl": "https://img.icons8.com/material-outlined/50/000000/physics.png",
        "description": "Articles in this category focus on areas of research that illustrate the application of mathematics to problems in physics, develop mathematical methods for such applications, or provide mathematically rigorous formulations of existing physical theories. Submissions to math-ph should be of interest to both physically oriented mathematicians and mathematically oriented physicists; submissions which are primarily of interest to theoretical physicists or to mathematicians should probably be directed to the respective physics/math categories."
      },
      {
        "name": "Nuclear Experiment",
        "id": "nucl-ex",
        "iconUrl": "https://img.icons8.com/external-justicon-lineal-justicon/50/000000/external-nuclear-ecology-justicon-lineal-justicon.png",
        "description": ""
      },
      {
        "name": "Nuclear Theory",
        "id": "nucl-th",
        "iconUrl": "https://img.icons8.com/ios/50/000000/nuclear.png",
        "description": ""
      },
      {
        "name": "Quantum Physics",
        "id": "quant-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/gyroscope.png",
        "description": ""
      },
      /* High Energy Physics */
      {
        "name": "High Energy Physics - Experiment",
        "id": "hep-ex",
        "iconUrl": "https://img.icons8.com/ios/50/000000/high-risk.png",
        "description": ""
      },
      {
        "name": "High Energy Physics - Lattice",
        "id": "hep-lat",
        "iconUrl": "https://img.icons8.com/ios/50/000000/lattice-pattern.png",
        "description": "Lattice field theory. Phenomenology from lattice field theory. Algorithms for lattice field theory. Hardware for lattice field theory."
      },
      {
        "name": "High Energy Physics - Phenomenology",
        "id": "hep-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/particles.png",
        "description": "Theoretical particle physics and its interrelation with experiment. Prediction of particle physics observables: models, effective field theories, calculation techniques. Particle physics: analysis of theory through experimental results."
      },
      {
        "name": "High Energy Physics - Theory",
        "id": "hep-th",
        "iconUrl": "https://img.icons8.com/external-justicon-lineal-justicon/50/000000/external-flip-graphic-design-justicon-lineal-justicon.png",
        "description": "Formal aspects of quantum field theory. String theory, supersymmetry and supergravity."
      },
      /* Nonlinear Sciences */
      {
        "name": "Adaptation and Self-Organizing Systems",
        "id": "nlin.AO",
        "iconUrl": "https://img.icons8.com/external-outline-geotatah/50/000000/external-adaptation-sales-incentive-compensation-outline-geotatah-2.png",
        "description": "adaptation, self-organizing systems, statistical physics, fluctuating systems, stochastic processes, interacting particle systems, machine learning"
      },
      {
        "name": "Chaotic Dynamics",
        "id": "nlin.CD",
        "iconUrl": "https://img.icons8.com/ios/50/000000/airodynamic.png",
        "description": "dynamical systems, chaos, quantum chaos, topological dynamics, cycle expansions, turbulence, propagation"
      },
      {
        "name": "Cellular Automata and Lattice Gases",
        "id": "nlin.CG",
        "iconUrl": "https://img.icons8.com/fluency-systems-regular/50/000000/wave-square--v1.png",
        "description": "computational methods, time series analysis, signal processing, wavelets, lattice gases"
      },
      {
        "name": "Pattern Formation and Solitons",
        "id": "nlin.PS",
        "iconUrl": "https://img.icons8.com/ios/50/000000/fish-scales-pattern.png",
        "description": "pattern formation, coherent structures, solitons"
      },
      {
        "name": "Exactly Solvable and Integrable Systems",
        "id": "nlin.SI",
        "iconUrl": "https://img.icons8.com/wired/50/000000/lattice-pattern.png",
        "description": "exactly solvable systems, integrable PDEs, integrable ODEs, Painleve analysis, integrable discrete maps, solvable lattice models, integrable quantum systems"
      },
      /* Physics */
      {
        "name": "Accelerator Physics",
        "id": "physics.acc-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/roller-coaster.png",
        "description": "Accelerator theory and simulation. Accelerator technology. Accelerator experiments. Beam Physics. Accelerator design and optimization. Advanced accelerator concepts. Radiation sources including synchrotron light sources and free electron lasers. Applications of accelerators."
      },
      {
        "name": "Atmospheric and Oceanic Physics",
        "id": "physics.ao-ph",
        "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-climate-farming-and-agriculture-wanicon-lineal-wanicon.png",
        "description": "Atmospheric and oceanic physics and physical chemistry, biogeophysics, and climate science."
      },
      {
        "name": "Applied Physics",
        "id": "physics.app-ph",
        "iconUrl": "https://img.icons8.com/windows/50/000000/physics.png",
        "description": "Applications of physics to new technology, including electronic devices, optics, photonics, microwaves, spintronics, advanced materials, metamaterials, nanotechnology, and energy sciences."
      },
      {
        "name": "Atomic and Molecular Clusters",
        "id": "physics.atm-clus",
        "iconUrl": "https://img.icons8.com/ios/50/000000/peptide.png",
        "description": "Atomic and molecular clusters, nanoparticles: geometric, electronic, optical, chemical, magnetic properties, shell structure, phase transitions, optical spectroscopy, mass spectrometry, photoelectron spectroscopy, ionization potential, electron affinity, interaction with intense light pulses, electron diffraction, light scattering, ab initio calculations, DFT theory, fragmentation, Coulomb explosion, hydrodynamic expansion."
      },
      {
        "name": "Atomic Physics",
        "id": "physics.atom-ph",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-atom-science-flatart-icons-outline-flatarticons-1.png",
        "description": "Atomic and molecular structure, spectra, collisions, and data. Atoms and molecules in external fields. Molecular dynamics and coherent and optical control. Cold atoms and molecules. Cold collisions. Optical lattices."
      },
      {
        "name": "Biological Physics",
        "id": "physics.bio-ph",
        "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-biological-university-courses-wanicon-lineal-wanicon.png",
        "description": "Molecular biophysics, cellular biophysics, neurological biophysics, membrane biophysics, single-molecule biophysics, ecological biophysics, quantum phenomena in biological systems (quantum biophysics), theoretical biophysics, molecular dynamics/modeling and simulation, game theory, biomechanics, bioinformatics, microorganisms, virology, evolution, biophysical methods."
      },
      {
        "name": "Chemical Physics",
        "id": "physics.chem-ph",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-chemistry-school-and-learning-flatart-icons-outline-flatarticons.png",
        "description": "Experimental, computational, and theoretical physics of atoms, molecules, and clusters - Classical and quantum description of states, processes, and dynamics; spectroscopy, electronic structure, conformations, reactions, interactions, and phases. Chemical thermodynamics. Disperse systems. High pressure chemistry. Solid state chemistry. Surface and interface chemistry."
      },
      {
        "name": "Classical Physics",
        "id": "physics.class-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/bouncing-ball.png",
        "description": "Newtonian and relativistic dynamics; many particle systems; planetary motions; chaos in classical dynamics. Maxwell's equations and dynamics of charged systems and electromagnetic forces in materials. Vibrating systems such as membranes and cantilevers; optomechanics. Classical waves, including acoustics and elasticity; physics of music and musical instruments. Classical thermodynamics and heat flow problems."
      },
      {
        "name": "Computational Physics",
        "id": "physics.comp-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/sine--v1.png",
        "description": "All aspects of computational science applied to physics."
      },
      {
        "name": "Data Analytics, Statistics and Probability",
        "id": "physics.data-an",
        "iconUrl": "https://img.icons8.com/external-linector-lineal-linector/50/000000/external-data-analytics-seo-marketing-linector-lineal-linector.png",
        "description": "Methods, software and hardware for physics data analysis: data processing and storage; measurement methodology; statistical and mathematical aspects such as parametrization and uncertainties."
      },
      {
        "name": "Physics Education",
        "id": "physics.ed-ph",
        "iconUrl": "https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-physics-education-prettycons-lineal-prettycons.png",
        "description": "Report of results of a research study, laboratory experience, assessment or classroom practice that represents a way to improve teaching and learning in physics. Also, report on misconceptions of students, textbook errors, and other similar information relative to promoting physics understanding."
      },
      {
        "name": "Fluid Dynamics",
        "id": "physics.flu-dyn",
        "iconUrl": "https://img.icons8.com/ios/50/000000/flow.png",
        "description": "Turbulence, instabilities, incompressible/compressible flows, reacting flows. Aero/hydrodynamics, fluid-structure interactions, acoustics. Biological fluid dynamics, micro/nanofluidics, interfacial phenomena. Complex fluids, suspensions and granular flows, porous media flows. Geophysical flows, thermoconvective and stratified flows. Mathematical and computational methods for fluid dynamics, fluid flow models, experimental techniques."
      },
      {
        "name": "General Physics",
        "id": "physics.gen-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/physics-book.png",
        "description": ""
      },
      {
        "name": "Geophysics",
        "id": "physics.geo-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/geography.png",
        "description": "Atmospheric physics. Biogeosciences. Computational geophysics. Geographic location. Geoinformatics. Geophysical techniques. Hydrospheric geophysics. Magnetospheric physics. Mathematical geophysics. Planetology. Solar system. Solid earth geophysics. Space plasma physics. Mineral physics. High pressure physics."
      },
      {
        "name": "History and Philosophy of Physics",
        "id": "physics.hist-ph",
        "iconUrl": "https://img.icons8.com/external-becris-lineal-becris/50/000000/external-history-literary-genres-becris-lineal-becris.png",
        "description": "History and philosophy of all branches of physics, astrophysics, and cosmology, including appreciations of physicists."
      },
      {
        "name": "Instrumentation and Detectors",
        "id": "physics.ins-det",
        "iconUrl": "https://img.icons8.com/external-becris-lineal-becris/50/000000/external-tools-business-management-becris-lineal-becris.png",
        "description": "Instrumentation and Detectors for research in natural science, including optical, molecular, atomic, nuclear and particle physics instrumentation and the associated electronics, services, infrastructure and control equipment."
      },
      {
        "name": "Medical Physics",
        "id": "physics.med-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/survival-bag.png",
        "description": "Radiation therapy. Radiation dosimetry. Biomedical imaging modelling. Reconstruction, processing, and analysis. Biomedical system modelling and analysis. Health physics. New imaging or therapy modalities."
      },
      {
        "name": "Optics",
        "id": "physics.optics",
        "iconUrl": "https://img.icons8.com/ios/50/000000/glasses.png",
        "description": "Adaptive optics. Astronomical optics. Atmospheric optics. Biomedical optics. Cardinal points. Collimation. Doppler effect. Fiber optics. Fourier optics. Geometrical optics (Gradient index optics. Holography. Infrared optics. Integrated optics. Laser applications. Laser optical systems. Lasers. Light amplification. Light diffraction. Luminescence. Microoptics. Nano optics. Ocean optics. Optical computing. Optical devices. Optical imaging. Optical materials. Optical metrology. Optical microscopy. Optical properties. Optical signal processing. Optical testing techniques. Optical wave propagation. Paraxial optics. Photoabsorption. Photoexcitations. Physical optics. Physiological optics. Quantum optics. Segmented optics. Spectra. Statistical optics. Surface optics. Ultrafast optics. Wave optics. X-ray optics."
      },
      {
        "name": "Plasma Physics",
        "id": "physics.plasm-ph",
        "iconUrl": "https://img.icons8.com/ios/50/000000/plasma-ball.png",
        "description": "Fundamental plasma physics. Magnetically Confined Plasmas (includes magnetic fusion energy research). High Energy Density Plasmas (inertial confinement plasmas, laser-plasma interactions). Ionospheric, Heliophysical, and Astrophysical plasmas (includes sun and solar system plasmas). Lasers, Accelerators, and Radiation Generation. Low temperature plasmas and plasma applications (include dusty plasmas, semiconductor etching, plasma-based nanotechnology, medical applications). Plasma Diagnostics, Engineering and Enabling Technologies (includes fusion reactor design, heating systems, diagnostics, experimental techniques)."
      },
      {
        "name": "Popular Physics",
        "id": "physics.pop-ph",
        "iconUrl": "https://img.icons8.com/windows/50/000000/popularity.png",
        "description": ""
      },
      {
        "name": "Physics and Society",
        "id": "physics.soc-ph",
        "iconUrl": "https://img.icons8.com/ios-glyphs/50/000000/safety-collection-place.png",
        "description": "Structure, dynamics and collective behavior of societies and groups (human or otherwise). Quantitative analysis of social networks and other complex networks. Physics and engineering of infrastructure and systems of broad societal impact (e.g., energy grids, transportation networks)."
      },
      {
        "name": "Space Physics",
        "id": "physics.space-ph",
        "iconUrl": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/50/000000/external-aurora-landscape-vitaliy-gorbachev-lineal-vitaly-gorbachev.png",
        "description": "Space plasma physics. Heliophysics. Space weather. Planetary magnetospheres, ionospheres and magnetotail. Auroras. Interplanetary space. Cosmic rays. Synchrotron radiation. Radio astronomy."
      }
    ]
  },
  {
    "name": "Quantitative Biology",
    "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-biology-ecology-environment-wanicon-lineal-wanicon.png",
    "subCategories": [
      {
        "name": "Biomolecules",
        "id": "q-bio.BM",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-molecule-chemistry-flatart-icons-outline-flatarticons.png",
        "description": "DNA, RNA, proteins, lipids, etc.; molecular structures and folding kinetics; molecular interactions; single-molecule manipulation."
      },
      {
        "name": "Cell Behavior",
        "id": "q-bio.CB",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-cell-biology-flatart-icons-outline-flatarticons-2.png",
        "description": "Cell-cell signaling and interaction; morphogenesis and development; apoptosis; bacterial conjugation; viral-host interaction; immunology."
      },
      {
        "name": "Genomics",
        "id": "q-bio.GN",
        "iconUrl": "https://img.icons8.com/ios/50/000000/dna-helix.png",
        "description": "DNA sequencing and assembly; gene and motif finding; RNA editing and alternative splicing; genomic structure and processes (replication, transcription, methylation, etc); mutational processes."
      },
      {
        "name": "Molecular Networks",
        "id": "q-bio.MN",
        "iconUrl": "https://img.icons8.com/ios/50/000000/decentralized-network.png",
        "description": "Gene regulation, signal transduction, proteomics, metabolomics, gene and enzymatic networks."
      },
      {
        "name": "Neurons and Cognition",
        "id": "q-bio.NC",
        "iconUrl": "https://img.icons8.com/external-outline-geotatah/50/000000/external-nerve-managerial-psychology-outline-geotatah.png",
        "description": "Synapse, cortex, neuronal dynamics, neural network, sensorimotor control, behavior, attention."
      },
      {
        "name": "Other Quantitative Biology",
        "id": "q-bio.OT",
        "iconUrl": "https://img.icons8.com/windows/50/000000/box-other.png",
        "description": "Work in quantitative biology that does not fit into the other q-bio classifications."
      },
      {
        "name": "Populations and Evolution",
        "id": "q-bio.PE",
        "iconUrl": "https://img.icons8.com/external-outline-geotatah/50/000000/external-animal-ecological-interaction-outline-geotatah.png",
        "description": "Population dynamics, spatio-temporal and epidemiological models, dynamic speciation, co-evolution, biodiversity, foodwebs, aging; molecular evolution and phylogeny; directed evolution; origin of life."
      },
      {
        "name": "Quantitative Methods",
        "id": "q-bio.QM",
        "iconUrl": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-beaker-chemistry-flatart-icons-outline-flatarticons.png",
        "description": "All experimental, numerical, statistical and mathematical contributions of value to biology."
      },
      {
        "name": "Subcellular Processes",
        "id": "q-bio.SC",
        "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-microorganism-virus-transmission-wanicon-lineal-wanicon.png",
        "description": "Assembly and control of subcellular structures (channels, organelles, cytoskeletons, capsules, etc.); molecular motors, transport, subcellular localization; mitosis and meiosis."
      },
      {
        "name": "Tissues and Organs",
        "id": "q-bio.TO",
        "iconUrl": "https://img.icons8.com/ios/50/000000/medical-heart.png",
        "description": "Blood flow in vessels, biomechanics of bones, electrical waves, endocrine system, tumor growth."
      }
    ]
  },
  {
    "name": "Quantitative Finance",
    "iconUrl": "https://img.icons8.com/ios/50/000000/money-bag-pound.png",
    "subCategories": [
      {
        "name": "Computational Finance",
        "id": "q-fin.CP",
        "iconUrl": "https://img.icons8.com/ios/50/000000/insert-credit-card.png",
        "description": "Computational methods, including Monte Carlo, PDE, lattice and other numerical methods with applications to financial modeling"
      },
      {
        "name": "Economics",
        "id": "q-fin.EC",
        "iconUrl": "https://img.icons8.com/external-wanicon-lineal-wanicon/50/000000/external-economics-university-courses-wanicon-lineal-wanicon.png",
        "description": "Economics, including micro and macro economics, international economics, theory of the firm, labor economics, and other economic topics outside finance"
      },
      {
        "name": "General Finance",
        "id": "q-fin.GN",
        "iconUrl": "https://img.icons8.com/ios/50/000000/general-ledger.png",
        "description": "Development of general quantitative methodologies with applications in finance"
      },
      {
        "name": "Mathematical Finance",
        "id": "q-fin.MF",
        "iconUrl": "https://img.icons8.com/ios/50/000000/duration-finance.png",
        "description": "Mathematical and analytical methods of finance, including stochastic, probabilistic and functional analysis, algebraic, geometric and other methods"
      },
      {
        "name": "Portfolio Management",
        "id": "q-fin.PM",
        "iconUrl": "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-portfolio-business-kiranshastry-lineal-kiranshastry.png",
        "description": "Security selection and optimization, capital allocation, investment strategies and performance measurement"
      },
      {
        "name": "Pricing of Securities",
        "id": "q-fin.PR",
        "iconUrl": "https://img.icons8.com/ios/50/000000/price-tag-usd--v1.png",
        "description": "Valuation and hedging of financial securities, their derivatives, and structured products"
      },
      {
        "name": "Risk Management",
        "id": "q-fin.RM",
        "iconUrl": "https://img.icons8.com/ios/50/000000/high-risk.png",
        "description": "Measurement and management of financial risks in trading, banking, insurance, corporate and other applications"
      },
      {
        "name": "Statistical Finance",
        "id": "q-fin.ST",
        "iconUrl": "https://img.icons8.com/ios/50/000000/graph-report-script.png",
        "description": "Statistical, econometric and econophysics analyses with applications to financial markets and economic data"
      },
      {
        "name": "Trading and Market Microstructure",
        "id": "q-fin.TR",
        "iconUrl": "https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-trading-fintech-itim2101-lineal-itim2101.png",
        "description": "Market microstructure, liquidity, exchange and auction design, automated trading, agent-based modeling and market-making"
      }
    ]
  },
  {
    "name": "Statistics",
    "iconUrl": "https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-statistics-calculate-itim2101-lineal-itim2101.png",
    "subCategories": [
      {
        "name": "Applications",
        "id": "stat.AP",
        "iconUrl": "https://img.icons8.com/ios/50/000000/download-pie-chart-report.png",
        "description": "Biology, Education, Epidemiology, Engineering, Environmental Sciences, Medical, Physical Sciences, Quality Control, Social Sciences"
      },
      {
        "name": "Computation",
        "id": "stat.CO",
        "iconUrl": "https://img.icons8.com/ios/50/000000/calculator--v1.png",
        "description": "Algorithms, Simulation, Visualization"
      },
      {
        "name": "Methodology",
        "id": "stat.ME",
        "iconUrl": "https://img.icons8.com/external-outline-geotatah/50/000000/external-methodology-lean-startup-outline-geotatah.png",
        "description": "Design, Surveys, Model Selection, Multiple Testing, Multivariate Methods, Signal and Image Processing, Time Series, Smoothing, Spatial Statistics, Survival Analysis, Nonparametric and Semiparametric Methods"
      },
      {
        "name": "Machine Learning",
        "id": "stat.ML",
        "iconUrl": "https://img.icons8.com/ios/50/000000/machine-learning.png",
        "description": "Covers machine learning papers (supervised, unsupervised, semi-supervised learning, graphical models, reinforcement learning, bandits, high dimensional inference, etc.) with a statistical or theoretical grounding"
      },
      {
        "name": "Other Statistics",
        "id": "stat.OT",
        "iconUrl": "https://img.icons8.com/windows/50/000000/box-other.png",
        "description": "Work in statistics that does not fit into the other stat classifications"
      },
      {
        "name": "Statistics Theory",
        "id": "stat.TH",
        "iconUrl": "https://img.icons8.com/ios/50/000000/statistics-report.png",
        "description": "Asymptotics, Bayesian Inference, Decision Theory, Estimation, Foundations, Inference, Testing"
      }
    ]
  }
] as Category[];