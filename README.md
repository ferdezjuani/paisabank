## Paisabank

Este repositorio es un challenge técnico para @ paisanos.io para el rol Product Engineer. Para correr el proyecto deberás:

1. Instalar dependencias

```bash
npm i
# or
npm install
```

2. Correr migraciones (asegurate de tener PostgreSQL y prisma en tu computadora)

```bash
npx prisma migrate dev --name init
```

3. Correr el proyecto en modo development:

```bash
npm run dev
```

# Tecnologías utilizadas

```bash
-Nextjs v14 + Typescript
-TailwindCSS
-PostgreSQL como DB + Prisma como ORM
-Supabase para acceso a la base de datos
-Vercel para deploy de la aplicación
```

# Recursos utilizados

```bash
-@tanstack/react-query
-axios
-swiper + react-id-swiper
-Flowbite (para los componentes Spinner.tsx y LogoutModal.tsx)
```
