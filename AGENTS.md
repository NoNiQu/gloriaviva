# AGENTS.md — Gloria Viva

## Objetivo del proyecto

Gloria Viva es una web sobre las glorias toledanas. La prioridad es mantener su identidad visual, su contenido y su funcionamiento mientras se mejora la calidad del código. No trasladar decisiones, componentes ni configuraciones de Entre Silencios sin comprobar que aquí corresponden.

## Antes de trabajar

- Leer este archivo y revisar únicamente las partes pertinentes del proyecto: `README.md`, `package.json`, configuración, rutas, componentes y servicios, según existan.
- Identificar el framework, las dependencias y los comandos reales antes de proponer soluciones. No inventar estructura, scripts ni tecnologías.
- Respetar los cambios preexistentes y trabajar solo en los archivos necesarios para el encargo.
- Distinguir hechos comprobados, riesgos deducidos e hipótesis. No presentar una posibilidad como un fallo confirmado.
- Si la petición es auditar, revisar, explicar o diagnosticar, trabajar en **solo lectura**. No aplicar cambios hasta recibir autorización explícita.

## Criterios de implementación

- Preferir correcciones pequeñas, claras y fáciles de revisar. No refactorizar por el mero hecho de reducir líneas o eliminar duplicaciones triviales.
- Conservar el comportamiento existente salvo que Marcos autorice expresamente cambiarlo.
- Preservar rutas, enlaces, textos, imágenes, metadatos SEO, contratos públicos, tipados y estructura de los datos.
- Respetar la estética de Gloria Viva: tipografía, colores, tamaños, animaciones, composición y espaciados. **No cambiar el diseño sin autorización.**
- Mantener un diseño adaptable en móvil, tablet y escritorio. Comprobar especialmente los cambios de distribución entre puntos de ruptura.
- Cuidar la accesibilidad: navegación por teclado, foco visible, etiquetas, semántica HTML, texto alternativo y preferencias de movimiento reducido.
- Evitar dependencias, abstracciones y archivos nuevos si la solución existente puede simplificarse de forma segura.
- No eliminar comentarios útiles, validaciones ni gestión de errores sin demostrar que sobran.

## Datos, imágenes y seguridad

- Comprobar cómo se organizan y enlazan los recursos de este repositorio antes de alterar rutas o identificadores.
- Si hay Supabase, APIs u otros servicios externos, respetar sus contratos y permisos. No modificar esquemas, políticas, datos remotos ni integraciones sin autorización específica.
- Nunca mostrar, copiar al chat ni confirmar en Git credenciales, tokens, archivos `.env` o secretos.
- No ejecutar pruebas de carga, simulaciones de ataques, migraciones ni acciones sobre producción sin permiso expreso.
- No introducir datos de ejemplo en vistas reales ni reemplazar contenido correcto por contenido supuesto.

## Comprobación de cambios

1. Revisar el diff y confirmar que el alcance coincide con lo autorizado.
2. Ejecutar las verificaciones **existentes** que correspondan (por ejemplo, typecheck, lint, test o build, si están definidas). No inventar scripts.
3. Comprobar `git diff --check` cuando se hayan modificado archivos versionados.
4. Indicar qué pruebas manuales quedan pendientes en navegador, especialmente en móvil, tablet y escritorio.
5. Si la skill `code-simplifier-sst` está disponible, utilizarla tras cambios significativos para revisar claridad y mantenimiento **sin modificar el comportamiento ni ampliar el alcance**.

## Git, despliegue y comunicación

- No crear commits, hacer `push`, abrir PR ni desplegar sin una solicitud expresa. Un `push` puede activar automáticamente el despliegue.
- No descartar, sobrescribir ni revertir trabajo preexistente de Marcos.
- Antes de proponer una corrección, explicar brevemente el problema, su evidencia, el cambio mínimo, el riesgo y las pruebas previstas.
- Tras implementar, resumir archivos modificados, verificaciones correctas, comprobaciones pendientes y confirmar si se han realizado commits o despliegues.
- Si un detalle importante del diseño o del comportamiento es ambiguo, preguntar antes de decidir por Marcos.
