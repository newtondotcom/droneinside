# Prompt

> Make on commit per point

## Mobile version

## Use motion to animate sections contents on appearing, be creative with shaking, translattion along x and y axis.

## Populate the translations system 

The old translations are stored in a old file located in `droninside/src/lib/locales/trad.ts`

I want you to splitg them following a page based logic like this: 

```json
{
    "HomePage": {
      "title": "Hello world!"
    }
}
```

You can use the translations using this : 
```tsx
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

## Tweak a bit my catch phrases to make them attractives for customers.

## Improve SEO and accessibility

## Make sure dark/white theme are operationnal

## Utiliser le composant Title dans la section aerial-3d.

## Créer la page type d'une annonce immobilière
- Photos
- Plan 2d interactif avec des chiffres
- Modèle 3D interactif de l'extérieur
- Description

## Générer du contenu blog pour le SEO

Sujets : 

- Explication Photogrammétrie
- Application mesure LIDAR pour créations de modèles 3D d'intérieur, de plan d'étage etc
- Drone FPV 
- Drones FPV en intérieur
- Drones FPV pour l'immobillier
- Avantages vidéos et photos dans la promotion d'un bien immobillier

Nom du fichier URL donc doit-etre signgicifactif 
Chaque article doit être lu en 2 minutes approximativement
Contenu diversifié en incluant des tableaux des quotes des emojis dans la mesure du possible

# Version mobile

# Long term : 

- create a booking platform online

- page to hire drone pilots

