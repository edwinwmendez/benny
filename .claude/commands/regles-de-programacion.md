# Reglas de Desarrollo para AI Agents

## Descripción General

Este documento define las reglas específicas de desarrollo que deben seguirse al trabajar en este proyecto. Estas reglas están optimizadas para guiar tanto a desarrolladores humanos como a AI Agents en la implementación de código.

## Formato y Estilo de Código

### Formateo
- **SIGUE** la convención de indentación del proyecto (tabulación o espacios, según esté configurado)
- Si no hay convención establecida, **usa tabulación por defecto**
- Mantén consistencia en la indentación a lo largo de todo el archivo
- Respeta las configuraciones de linting y formateo automático del proyecto (ESLint, Prettier, Black, gofmt, etc.)
- Usa nombres de variables y funciones descriptivos siguiendo la convención del lenguaje

### Naming Conventions (Universales)
- **SIGUE** las convenciones del lenguaje específico del proyecto (camelCase en JavaScript, snake_case en Python, PascalCase en C#, etc.)
- Usa nombres descriptivos y claros que expresen la intención: `calcularTotalPedido()` en lugar de `calc()`
- Prefija variables booleanas con `is`, `has`, `can`, `should`: `isValid`, `hasPermission`, `canDelete`
- Usa nombres de constantes en MAYÚSCULAS siguiendo la convención del lenguaje
- Mantén consistencia en todo el proyecto con la convención elegida

### Estructura de Archivos
- Organiza imports al inicio del archivo
- Agrupa funciones relacionadas
- Coloca funciones de utilidad al final del archivo

## Desarrollo e Implementación

### Principios de Simplicidad
- **SIEMPRE** prioriza soluciones simples sobre soluciones complejas
- Busca la implementación más directa que resuelva el problema
- Evita over-engineering o premature optimization

### Principios Fundamentales de Programación

#### DRY (Don't Repeat Yourself)
- **ELIMINA** código duplicado creando funciones, clases o módulos reutilizables
- Si escribes el mismo código más de dos veces, refactoriza en una función
- Centraliza lógica común en utilidades compartidas

#### KISS (Keep It Simple, Stupid)
- **ELIGE** la solución más simple que funcione
- Evita complejidad innecesaria en algoritmos y arquitectura
- Prefiere código claro y legible sobre código "clever"

#### YAGNI (You Aren't Gonna Need It)
- **NO** implementes funcionalidad que no se necesita actualmente
- Construye solo lo que está especificado en los requirements
- Evita agregar features "por si acaso" en el futuro

#### Clean Code
- **ESCRIBE** código que se auto-documente con nombres claros
- Mantén funciones pequeñas y con una sola responsabilidad
- Usa indentación y espaciado consistente
- Elimina código muerto y comentarios obsoletos

### Reutilización de Código
- **SIEMPRE** busca código existente para iterar en lugar de crear nuevo código desde cero
- Revisa la base de código antes de implementar nueva funcionalidad
- **EVITA** la duplicación de código siempre que sea posible
- Si encuentras lógica similar, refactoriza para crear una función reutilizable

### Alcance de Cambios
- **SOLO** haz los cambios solicitados o aquellos en los que tengas plena confianza
- No introduzcas modificaciones no relacionadas con la tarea actual
- Documenta cualquier cambio adicional que consideres necesario antes de implementarlo

## Gestión de Servidores y Entornos

### Reinicio de Servidores
- **SIEMPRE** reinicia el servidor después de realizar cambios para que puedan probarse
- **MATA** todos los servidores relacionados que hayan sido creados en pruebas anteriores antes de iniciar un nuevo servidor
- Verifica que el puerto esté libre antes de iniciar un nuevo servidor

### Entornos de Desarrollo
- **ESCRIBE** código que tenga en cuenta los diferentes entornos: desarrollo, pruebas y producción
- Usa variables de entorno para configuración específica por entorno
- No hardcodees valores que cambien entre entornos

## Manejo de Errores y Debugging

### Corrección de Bugs
- Al corregir un error o bug, **NO** introduzcas un nuevo patrón o tecnología sin antes haber agotado todas las opciones con la implementación actual
- Si decides introducir un nuevo patrón, **ELIMINA** la implementación anterior para evitar lógica duplicada
- Implementa manejo de errores específico, no genérico

### Logging y Debugging
- Logea errores con contexto suficiente para debugging
- Incluye información relevante: timestamp, usuario, acción, error específico
- Fail fast cuando detectes condiciones inválidas

## Organización y Limpieza de Código
### Mantenimiento de la Base de Código
- **MANTÉN** la base de código limpia y bien organizada
- Refactoriza código cuando identifiques patrones repetitivos
- Elimina código comentado que no sirve
- Elimina imports no utilizados

### Scripts y Archivos Temporales
- **EVITA** escribir scripts directamente en archivos si es posible, especialmente si ese script solo se va a ejecutar una vez
- Crea archivos separados para scripts de migración o tareas específicas
- Documenta scripts de una sola ejecución para referencia futura

## Documentación y Comentarios

### Comentarios en Código
- Escribe comentarios explicativos **SOLO** para lógica compleja no obvia
- Evita comentarios que simplemente repiten lo que hace el código
- Actualiza comentarios cuando modifiques la funcionalidad
- Usa comentarios para explicar **por qué**, no **qué**

### Documentación de Funciones
- Documenta parámetros de funciones que no sean auto-explicativos
- Incluye ejemplos de uso para funciones complejas
- Actualiza la documentación cuando modifiques funcionalidad existente

## Control de Versiones

### Commits
- Haz commits frecuentes con mensajes descriptivos
- Usa mensajes en presente: "Agrega funcionalidad X", no "Agregué funcionalidad X"
- Revisa los cambios antes de hacer commit usando `git diff`

### Archivos a Ignorar
- **NO** hagas commit de archivos de configuración local o temporales
- Mantén actualizado el archivo `.gitignore`
- No incluyas credenciales o información sensible en el repositorio

## Seguridad

### Validación de Datos
- **SIEMPRE** valida los datos de entrada del usuario
- Sanitiza inputs antes de procesarlos
- Valida tanto en frontend como en backend

### Información Sensible
- **NO** hardcodees credenciales o información sensible en el código
- Usa variables de entorno para configuración sensible
- Mantén archivos de configuración con credenciales fuera del repositorio

## Performance

### Optimización de Consultas
- **EVITA** consultas innecesarias a bases de datos dentro de loops
- Usa batch queries cuando sea posible
- Implementa lazy loading cuando sea apropiado

### Carga de Recursos
- Optimiza imports para cargar solo lo necesario
- Evita cargar librerías completas si solo usas una función
- Considera el impacto de nuevas dependencias en el bundle size

## Testing

### Ejecución de Tests
- **EJECUTA** tests existentes antes de hacer cambios
- No pushees código que rompa tests existentes
- Ejecuta tests tanto unitarios como de integración

### Creación de Tests
- Agrega tests para nueva funcionalidad
- Incluye tests para casos edge y manejo de errores
- Mantén tests simples y enfocados en una sola funcionalidad

## Acciones Prohibidas

### ❌ NO Hagas Esto:
- No ignores las convenciones de formateo del proyecto (linters, formatters automáticos)
- No dupliques código existente sin refactorizar (viola DRY)
- No introduzcas complejidad innecesaria (viola KISS)
- No implementes funcionalidad no requerida actualmente (viola YAGNI)
- No introduzcas nuevas tecnologías sin evaluar alternativas actuales
- No hagas commits sin revisar los cambios
- No hardcodees credenciales o información sensible
- No ignores errores silenciosamente
- No escribas código que solo funcione en un entorno específico
- No modifiques archivos sin entender completamente su propósito
- No agregues dependencias sin evaluar su necesidad
- No dejes código commented out sin documentar por qué

### ✅ SÍ Haz Esto:
- Antes de proponer  y/o desarrollar cualquier codigo, debes asegurarte de que siempre este actualizado, para ello debes buscar referencia con el MCP Context7
- Sigue las convenciones de formateo y naming del lenguaje del proyecto
- Aplica principios DRY, KISS, YAGNI y Clean Code consistentemente
- Revisa código existente antes de implementar nuevas funcionalidades
- Usa herramientas de linting y formateo automático del proyecto
- Documenta decisiones importantes en comentarios
- Implementa manejo de errores apropiado
- Usa variables de entorno para configuración
- Escribe tests para funcionalidad crítica
- Mantén commits pequeños y enfocados
- Refactoriza código duplicado en funciones reutilizables
- Escribe código auto-documentado con nombres descriptivos

## Ejemplos Específicos

### Ejemplo: Formateo Consistente
```javascript
// ✅ Correcto - usando la convención del proyecto (tabulación)
function miFuncion() {
	if (condicion) {
		return resultado;
	}
	return null;
}
```

```python
# ✅ Correcto - siguiendo PEP 8 (4 espacios en Python)
def mi_funcion():
    if condicion:
        return resultado
    return None
```

### Ejemplo: DRY - Reutilización vs Duplicación
```javascript
// ✅ Correcto - función reutilizable (DRY)
function validarEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Usar en múltiples lugares
const esValidoRegistro = validarEmail(emailRegistro);
const esValidoLogin = validarEmail(emailLogin);

// ❌ Incorrecto - código duplicado
const esValidoRegistro = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRegistro);
const esValidoLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLogin);
```

### Ejemplo: KISS - Simplicidad vs Complejidad
```python
# ✅ Correcto - solución simple (KISS)
def es_par(numero):
    return numero % 2 == 0

# ❌ Incorrecto - innecesariamente complejo
def es_par(numero):
    if numero % 2 == 0:
        return True
    else:
        return False
```
