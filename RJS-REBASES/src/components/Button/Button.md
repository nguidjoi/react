# Exercice — Création d’un composant `Button` typé avec React + TypeScript

## Objectif

Créer un composant `Button` réutilisable en React et TypeScript en utilisant les interfaces fournies ci-dessous comme base de typage.

Le composant devra également :

* accepter une `ref`
* être correctement typé
* être documenté via une Storybook Story

---

## Interfaces fournies

```ts
export interface UILevel {
   level: 'primary' | 'optional' | 'critical';
}

export interface UISize {
   size: 'small' | 'medium' | 'large';
}

export interface UIActionnable {
   action: () => void;
}
```

---

# Travail demandé

## 1. Créer le composant `Button`

Créer un composant React `Button` en TypeScript respectant les contraintes suivantes :

### Props attendues

Le composant doit :

* utiliser les interfaces fournies
* accepter un texte (`children`)
* accepter un état `disabled`
* transmettre une `ref` vers l’élément HTML `<button>`

### Contraintes techniques

* typer correctement la `ref`
* typer correctement les props
* utiliser les attributs HTML natifs du bouton quand pertinent

### Exemple d’utilisation attendu

```tsx
<Button
   level="primary"
   size="medium"
   action={() => console.log('clicked')}
>
   Save
</Button>
```

---

## 2. Gestion du style

Ajouter des styles dépendants :

### `level`

* `primary`
* `optional`
* `critical`

### `size`

* `small`
* `medium`
* `large`

Le choix de la stratégie CSS est libre :

* CSS Modules
* SCSS
* Tailwind
* Styled Components
* etc.

---

## 3. Gestion des interactions

Le bouton doit :

* déclencher `action` au clic
* respecter l’état `disabled`
* rester accessible (`aria`, focus, clavier)

---

## 4. Création de la Story Storybook

Créer une story Storybook pour le composant.

### Stories minimales attendues

* `Primary`
* `Optional`
* `Critical`
* `Disabled`

### Bonus

Ajouter des `controls` Storybook pour :

* `level`
* `size`
* `disabled`

---

## 5. Bonus facultatifs

### Bonus 1 — Variantes avancées

Ajouter :

* un état `loading`
* une icône avant/après le texte


---

# Livrables attendus

* `Button.tsx`
* `Button.styled.tsx`
* `Button.stories.tsx`


---

# Critères d’évaluation

## TypeScript

* qualité du typage
* bonne utilisation des interfaces
* typage de `forwardRef`

## React

* composition propre
* gestion des props natives
* accessibilité

## Storybook

* stories fonctionnelles
* clarté des variantes
* controls configurés correctement

## Code quality

* lisibilité
* séparation des responsabilités
* conventions de nommage
