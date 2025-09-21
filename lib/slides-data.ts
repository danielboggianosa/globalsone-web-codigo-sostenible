export interface Slide {
  id: number
  type: "title" | "chapter" | "content"
  title: string
  subtitle?: string
  footer?: string
  image: string
  content?: {
    title: string
    description: string
    points?: string[]
  }[]
}

export const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    title: "Código Sostenible",
    subtitle: "Cómo programar código fácil de mantener.",
    image: "/placeholder.jpg?key=nk3an",
  },
  {
    id: 2,
    type: "chapter",
    title: "¿Qué es Código Sostenible?",
    subtitle: "Fundamentos para escribir código mantenible y duradero",
    image: "/sustainable-development.jpg",
    content: [
      {
        title: "Definición",
        description: "Código fácil de mantener con diseño intuitivo y mínima complejidad",
        points: ["Diseño intuitivo", "Mínima complejidad esencial", "Buena cobertura de test"],
      },
      {
        title: "Escribir para Humanos",
        description: "El código debe ser legible y comprensible para otros desarrolladores",
        points: ["Priorizar la legibilidad", "Usar nombres descriptivos", "Documentar decisiones complejas"],
      },
      {
        title: "Degeneración del Código",
        description: "Cómo evitar que el código se deteriore con el tiempo",
        points: [
          "Complejidad Accidental vs. Fundamental",
          "Refactorización continua",
          "Mantener la arquitectura limpia",
        ],
      },
      {
        title: "Las Personas Primero",
        description: "La empatía como principio fundamental del desarrollo",
        points: ["Considerar al equipo", "Facilitar el mantenimiento", "Reducir la carga cognitiva"],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    title: "Refactorización",
    subtitle: "La práctica diaria de mejorar el código existente",
    image: "/code-refactoring.jpg",
    content: [
      {
        title: "Práctica Diaria",
        description: "La refactorización debe ser parte del flujo de trabajo diario",
        points: ["Pequeñas mejoras constantes", "No esperar a grandes refactors", "Integrar en el desarrollo normal"],
      },
      {
        title: "Mejoras de Legibilidad",
        description: "Enfocarse en hacer el código más fácil de leer y entender",
        points: ["Renombrar variables y funciones", "Extraer métodos complejos", "Simplificar expresiones"],
      },
      {
        title: "Code Smells",
        description: "Identificar y eliminar patrones problemáticos en el código",
        points: [
          "Métodos muy largos",
          "Clases con muchas responsabilidades",
          "Código duplicado",
          "Comentarios excesivos",
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    title: "Fundamentos",
    subtitle: "Principios básicos para código sostenible",
    image: "/foundation-blocks.jpg",
    content: [
      {
        title: "Diseñar para el Presente",
        description: "Evitar la sobre-ingeniería y enfocarse en necesidades actuales",
        points: ["YAGNI (You Aren't Gonna Need It)", "Soluciones simples primero", "Evolución incremental"],
      },
      {
        title: "Uso Concreto vs Reutilización",
        description: "Priorizar soluciones específicas sobre abstracciones prematuras",
        points: [
          "Resolver el problema actual",
          "Abstraer cuando hay patrones claros",
          "Evitar generalización prematura",
        ],
      },
      {
        title: "Reglas del Código Sostenible",
        description: "Cuatro reglas fundamentales para mantener código de calidad",
        points: [
          "1. Cubierto por test",
          "2. Los test son sostenibles",
          "3. Las abstracciones tienen sentido",
          "4. Intencionalidad explícita",
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    title: "Técnicas para Elegir Nombres",
    subtitle: "El arte de nombrar elementos en el código",
    image: "/naming-tags.jpg",
    content: [
      {
        title: "Características de Buenos Nombres",
        description: "Propiedades que deben tener los nombres en el código",
        points: [
          "Fáciles de pronunciar",
          "Sin información técnica",
          "Concretos y específicos",
          "Forman frases naturales (is, has)",
        ],
      },
      {
        title: "Evitar Malas Prácticas",
        description: "Qué no hacer al nombrar elementos",
        points: [
          "Sin alias confusos",
          "Evitar abreviaciones",
          "No usar números en secuencia",
          "Evitar nombres genéricos",
        ],
      },
      {
        title: "Estrategias de Naming",
        description: "Técnicas para crear nombres efectivos",
        points: [
          "Apoyarse en el contexto",
          "Usar sustantivos, verbos, adjetivos apropiados",
          "Nombrar valores literales",
          "Renombrar al día siguiente si es necesario",
        ],
      },
    ],
  },
  {
    id: 6,
    type: "chapter",
    title: "Principio de Menor Sorpresa",
    subtitle: "La brújula del código sostenible",
    image: "/compass-navigation.jpg",
    content: [
      {
        title: "Definición del Principio",
        description: "El código debe comportarse como los desarrolladores esperan",
        points: ["Comportamiento predecible", "Consistencia en la API", "Seguir convenciones establecidas"],
      },
      {
        title: "Aplicación Práctica",
        description: "Cómo implementar este principio en el día a día",
        points: [
          "Métodos que hacen lo que su nombre indica",
          "Parámetros en orden lógico",
          "Valores de retorno esperados",
        ],
      },
      {
        title: "Evitar Efectos Secundarios",
        description: "Minimizar comportamientos inesperados",
        points: [
          "Funciones puras cuando sea posible",
          "Documentar efectos secundarios necesarios",
          "Separar comandos de consultas",
        ],
      },
    ],
  },
  {
    id: 7,
    type: "chapter",
    title: "Cohesión y Acoplamiento",
    subtitle: "La estrella polar del diseño de software",
    image: "/connected-modules.jpg",
    content: [
      {
        title: "Alta Cohesión",
        description: "Elementos relacionados deben estar juntos",
        points: ["Responsabilidades relacionadas", "Funciones que trabajan juntas", "Datos y comportamientos unidos"],
      },
      {
        title: "Bajo Acoplamiento",
        description: "Minimizar dependencias entre módulos",
        points: ["Ley de Demeter", "Dile, no preguntes (Tell, Don't Ask)", "Interfaces bien definidas"],
      },
      {
        title: "Connascence",
        description: "Medida de la fuerza de dependencia entre elementos",
        points: [
          "Connascence de nombre",
          "Connascence de tipo",
          "Connascence de significado",
          "Connascence de algoritmo",
        ],
      },
    ],
  },
  {
    id: 8,
    type: "chapter",
    title: "Principios SOLID",
    subtitle: "Cinco principios fundamentales del diseño orientado a objetos",
    image: "/solid-principles.jpg",
    content: [
      {
        title: "SRP - Responsabilidad Única",
        description: "Una clase debe tener una sola razón para cambiar",
        points: ["Una responsabilidad por clase", "Facilita el mantenimiento", "Reduce el acoplamiento"],
      },
      {
        title: "OCP - Abierto-Cerrado",
        description: "Abierto para extensión, cerrado para modificación",
        points: ["Extensible sin modificar código existente", "Uso de abstracciones", "Polimorfismo y herencia"],
      },
      {
        title: "LSP - Sustitución de Liskov",
        description: "Los objetos derivados deben ser sustituibles por sus bases",
        points: ["Contratos bien definidos", "Precondiciones no más fuertes", "Postcondiciones no más débiles"],
      },
      {
        title: "ISP - Segregación de Interfaces",
        description: "Muchas interfaces específicas mejor que una general",
        points: [
          "Interfaces cohesivas",
          "Evitar dependencias innecesarias",
          "Clientes no dependen de métodos que no usan",
        ],
      },
      {
        title: "DIP - Inversión de Dependencias",
        description: "Depender de abstracciones, no de concreciones",
        points: [
          "Módulos de alto nivel no dependen de bajo nivel",
          "Ambos dependen de abstracciones",
          "Facilita testing y flexibilidad",
        ],
      },
    ],
  },
  {
    id: 9,
    type: "chapter",
    title: "Implementación Sostenible",
    subtitle: "Técnicas prácticas para escribir código mantenible",
    image: "/implementation-coding.jpg",
    content: [
      {
        title: "Estructura y Formato",
        description: "Organización visual del código",
        points: ["Indentación consistente", "Reducir el ámbito al máximo", "Cláusulas guarda y simetría"],
      },
      {
        title: "Composición vs Herencia",
        description: "Preferir composición sobre herencia",
        points: ["Mayor flexibilidad", "Menos acoplamiento", "Más fácil de testear"],
      },
      {
        title: "Constructores y Funciones",
        description: "Mejores prácticas para métodos y constructores",
        points: [
          "Constructores simples",
          "Constructores con nombre",
          "Separar control de flujo y lógica",
          "Preferir funciones puras",
        ],
      },
      {
        title: "Parámetros y CQS",
        description: "Gestión de parámetros y separación de responsabilidades",
        points: ["Sin parámetros de configuración", "Reducir la aridad", "CQS: Separar Consultas y Comandos"],
      },
    ],
  },
  {
    id: 10,
    type: "chapter",
    title: "Gestión y Prevención de Errores",
    subtitle: "Estrategias para código robusto y resiliente",
    image: "/error-handling.jpg",
    content: [
      {
        title: "Prevención de Errores Humanos",
        description: "Diseñar sistemas que minimicen errores",
        points: [
          "Comprender el lenguaje profundamente",
          "Valores, referencias, objetos",
          "Comparación (equals, hashCode)",
          "Copia superficial vs profunda",
        ],
      },
      {
        title: "Áreas de Concentración de Accidentes",
        description: "Zonas del código más propensas a errores",
        points: ["Gestión del estado", "Asincronía y concurrencia", "Manejo de recursos", "Validación de entrada"],
      },
      {
        title: "Código Resiliente vs Defensivo",
        description: "Estrategias para manejar situaciones inesperadas",
        points: ["Fail fast vs fail safe", "Validación en fronteras", "Recuperación elegante"],
      },
      {
        title: "Gestión de Ausencia y Errores",
        description: "Patrones para manejar valores ausentes y errores",
        points: ["Patrón Objeto Nulo", "Tipo Optional/Maybe", "Tipo Either", "Patrón Notificación", "Tipo Try"],
      },
    ],
  },
  {
    id: 11,
    type: "chapter",
    title: "Tipos Específicos del Dominio",
    subtitle: "Expresividad y cohesión a través de tipos",
    image: "/domain-types.jpg",
    content: [
      {
        title: "Ventajas de Tipos Específicos",
        description: "Por qué crear tipos propios del dominio",
        points: [
          "Mayor expresividad",
          "Mejor cohesión",
          "Anti-Primitive Obsession",
          "Validación en tiempo de compilación",
        ],
      },
      {
        title: "Objetos Valor vs Entidades",
        description: "Diferencias fundamentales en el diseño",
        points: [
          "Objetos Valor: inmutables, sin identidad",
          "Entidades: mutables, con identidad",
          "Cuándo usar cada uno",
        ],
      },
      {
        title: "Genéricos y Tipos Algebraicos",
        description: "Herramientas avanzadas de tipado",
        points: [
          "Genéricos para reutilización",
          "Tipos Suma (Union Types)",
          "Tipos Producto (Record Types)",
          "Composición de tipos",
        ],
      },
    ],
  },
  {
    id: 12,
    type: "chapter",
    title: "Principios Malinterpretados",
    subtitle: "Desmitificando reglas obsoletas de programación",
    image: "/programming-myths.jpg",
    content: [
      {
        title: "Contexto Histórico",
        description: "Por qué surgieron ciertas reglas y por qué ya no aplican",
        points: [
          "Limitaciones de hardware antiguo",
          "Herramientas de desarrollo primitivas",
          "Evolución de lenguajes y paradigmas",
        ],
      },
      {
        title: "Reglas Obsoletas",
        description: "Principios que ya no son relevantes o son contraproducentes",
        points: [
          "Un solo return por función",
          "Definir variables al inicio",
          "Interfaces siempre desacoplan",
          "Getters y Setters para todo",
        ],
      },
      {
        title: "Optimización Prematura",
        description: "El equilibrio entre legibilidad y rendimiento",
        points: [
          "El código debe ser óptimo (mito)",
          "Legibilidad primero, optimización después",
          "Medir antes de optimizar",
          "Comentar solo lo necesario",
        ],
      },
    ],
  },
  {
    id: 13,
    type: "chapter",
    title: "Créditos",
    image: "/placeholder.jpg?key=nch6r",
    content: [
      {
        title: "Libro",
        description: "Está basado en el libro",
        points: [
          "Autor: Carlos Blé Jurado",
          "Prólogo: Javier Ferrer",
        ],
      },
      {
        title: "Resumen",
        description: "Puntos principales",
        points: [
          "Autor: Daniel Boggiano",
        ],
      },
      {
        title: "Audio",
        description: "Podcast generado con IA",
        points: [
          "Autor: Daniel Boggiano",
          "YouTube: "
        ],
      },
    ]
  }
]
