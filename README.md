# Pizza Time - try something amazing!

> #### _THE Real world React project_

<img src="https://github.com/Egormity/pizza-time/blob/master/assets/Preview-main.png?raw=true"/>

**Pizza Time** &ndash; Delicious online experience. I developed e-commerce platform for this pizza restaurant (based on another creators's site), featuring an interactive menu with a variety of options including pizza, sushi, and pasta. Simplifying the online ordering process and providing a seamless user experience was the key goal of this project.

### **_Live Version on Vercel_** &ndash; **[Pizza Time](https://egormity-pizza-time.vercel.app)**

```
Pizza-Time:
   ├─────────────────────public
  src                      ├───about
   ├───contexts            ├───footer
   ├───data                ├───global
   ├───Features            ├───home
   │   ├───about           └───images-row
   │   ├───account
   │   ├───blog
   │   ├───careers
   │   ├───cart
   │   ├───contacts
   │   ├───footer
   │   ├───home
   │   ├───menu
   │   ├───navbar
   │   ├───privacy
   │   ├───refunds
   │   └───terms
   ├───hooks
   ├───pages
   ├───services
   ├───ui
   │   ├───Backgrounds
   │   └───loyauts
   └───utils
```

### In this project such technologies and libraries were used:

- TypescriptReact - as main idea of this work
- Vite - for local devolopment server and compilor
- Supabase - for "backend"
- React Query - for recieving and manipulating with data from backend
- React Router - for handling page routing
- React Hook Form - for handling forms
- React Icons - for awesome icons
- React Hot Toast - for pretty and easy to use toasts
- Tailwind - for styling
- Local Storage - for storing fake cart and user registration

---

> ### _About Pizza Time:_

🍕 Dynamic Culinary Hub: Fictional restaurant featuring an extensive menu including pizzas, sushi, and pasta.

🎇 UI Efficiency via Pagination and Motion: Implemented pre-feching paggination for user-friendly menu, blog page division, optimizing exploration. Some fancy and small animations were added to make user expirience more exciting.

📑 Efficient Data Management: Data is managed with up-to-date technologies. All the data is stored in Supabase, handled with React Query, which gives up an upportunity to easily get only the data we need and store it in cash to provide more friendly user experience.

👤 Personalized User Interaction: Enabled ***fake*** user registration, login, and profile management. Users can create new accounts, modify and delete profiles.

Pizza Time brings together delicious food and advanced technology, creating a user-friendly digital experience. It's where great food meets programming, letting users enjoy a convenient and satisfying culinary journey.

### Here you can see the more full site overview: (see [Pizza Time](https://egormity-pizza-time.vercel.app))

<img src="https://github.com/Egormity/pizza-time/blob/master/assets/Full-preview.jpg?raw=true"/>

### _I was inspired by the work of:_

<a target="_blanc" href="https://github.com/catherineisonline/pizza-time-with-react">
  <img alt="Static Badge" src="https://img.shields.io/badge/Catherine_Isonline_git-8A2BE2">
</a>

###

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
