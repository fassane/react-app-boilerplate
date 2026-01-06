<p align="center"><a href="https://lesbonsdeals.com" target="_blank"><img src="./.github_images/app-logo.png" width="400" heigth="300" alt="App Logo"></a></p>


## Presentation
***Boilerplate*** est : 


## Installation
Ce projet a été conçu en utilisant *Vite*, *ReactJS*, *TypeScript*, *Shadcn UI*, *TailwindCSS*, *Redux* <br>
Prière de bien vouloir vérifier les configurations préréquises sur
les documentations officielles de [Vite](https://...), de [ReactJS](https://react.dev), de [Redux](https://redux.js.org/), de [Redux Toolkit](https://redux-toolkit.js.org/), de [Shadcn UI](https://ui.shadcn.com/docs), de [TailwindCSS](https://tailwindcss.com/docs/).

#### Cloner le projet
```shell
git clone git@github.com:fassane/react-app-boilerplate.git app
```

#### Installer les dépendances
```shell
yarn
```


## Structure du projet
Le projet se structure comme suit :
```bash
tree -L 3
.
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── css
│   │   └── main.css
│   ├── fonts
│   │   ├── averta
│   │   │   ├── Averta-Bold-Italic.otf
│   │   │   └── Averta.otf
│   │   └── ubuntu
│   │       ├── Ubuntu-Medium.ttf
│   │       ├── Ubuntu-Regular.ttf
│   │       └── UFL.txt
│   ├── icons
│   │   └── icon.png
│   ├── images
│   │   ├── auth-bg.jpg
│   │   ├── home
│   │   │   ├── daily-course.png
│   │   │   └── home-and-advertise.png
│   │   ├── product-1.webp
│   │   ├── product-2.webp
│   │   ├── product-3.webp
│   │   └── product-4.webp
│   ├── logo.png
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── admin
│   │   │   ├── admin-dashboard
│   │   │   │   ├── AdminDashboard.scss
│   │   │   │   └── AdminDashboard.tsx
│   │   │   ├── admin-profile
│   │   │   │   └── AdminProfile.tsx
│   │   │   ├── admin-settings
│   │   │   │   ├── AdminSettings.scss
│   │   │   │   ├── AdminSettings.tsx
│   │   │   │   ├── Modals
│   │   │   │   │   └── AddOrUpdateAdminModal.tsx
│   │   │   │   ├── SettingNavTab.tsx
│   │   │   │   └── tabs
│   │   │   │       ├── SettingAdministrators.tsx
│   │   │   │       ├── SettingFaqs.tsx
│   │   │   │       ├── SettingOptions.tsx
│   │   │   │       └── SettingTags.tsx
│   │   │   ├── admin-users
│   │   │   │   └── UsersList.tsx
│   │   │   └── message-contact
│   │   │       ├── cards
│   │   │       │   └── ContactCard.tsx
│   │   │       └── MessageContactAdmin.tsx
│   │   ├── auth
│   │   │   ├── auth.scss
│   │   │   ├── AuthWrapper.tsx
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── hooks
│   │   │   │   ├── UseLoginForm.tsx
│   │   │   │   └── UseRegisterUserForm.tsx
│   │   │   └── Login.tsx
│   │   ├── front
│   │   │   ├── cards
│   │   │   │   └── ProductCard.tsx
│   │   │   ├── Home
│   │   │   │   ├── Banner
│   │   │   │   │   ├── Banner.scss
│   │   │   │   │   └── Banner.tsx
│   │   │   │   ├── Home.scss
│   │   │   │   ├── Home.tsx
│   │   │   │   └── Products.tsx
│   │   │   └── Shops
│   │   ├── layouts
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── components
│   │   │   │   ├── admin-sidebar.tsx
│   │   │   │   └── user-sidebar.tsx
│   │   │   └── UserLayout.tsx
│   │   ├── Sass
│   │   │   ├── app.scss
│   │   │   ├── fonts.scss
│   │   │   └── variables.scss
│   │   ├── shared
│   │   │   ├── Alert
│   │   │   │   ├── Alert.scss
│   │   │   │   └── EmptyAlert.tsx
│   │   │   ├── Button
│   │   │   │   ├── Button.scss
│   │   │   │   └── Button.tsx
│   │   │   ├── DecorTitle.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── FrontLayout
│   │   │   │   ├── FrontFooter
│   │   │   │   │   ├── FrontFooter.scss
│   │   │   │   │   └── FrontFooter.tsx
│   │   │   │   ├── FrontHeader
│   │   │   │   │   ├── FrontHeader.scss
│   │   │   │   │   └── FrontHeader.tsx
│   │   │   │   ├── FrontLayout.scss
│   │   │   │   └── FrontLayout.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Loader
│   │   │   │   ├── Loader.scss
│   │   │   │   └── SplashLoader.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── MyDropzone.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── TableSkeleton.tsx
│   │   ├── ui
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── tooltip.tsx
│   │   └── user
│   │       ├── UserDashboard
│   │       │   └── UserDashboard.tsx
│   │       └── UserMessage
│   │           └── UserMessage.tsx
│   ├── hooks
│   │   └── use-mobile.ts
│   ├── index.css
│   ├── Index.scss
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── redux
│   │   ├── hook.ts
│   │   ├── slice
│   │   │   └── User.slice.ts
│   │   └── store.ts
│   ├── Responsive.scss
│   ├── routes
│   │   └── router.tsx
│   ├── utils
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   ├── auth.api.ts
│   │   │   │   └── auth.type.ts
│   │   │   ├── product
│   │   │   │   ├── product.api.ts
│   │   │   │   └── product.type.ts
│   │   │   └── user
│   │   │       ├── user.api.ts
│   │   │       └── user.type.ts
│   │   ├── http.ts
│   │   ├── Icons.tsx
│   │   ├── storage.ts
│   │   ├── theme-provider.tsx
│   │   ├── Utils.tsx
│   │   └── VersionChecker.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Contexte


