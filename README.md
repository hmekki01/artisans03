# 🛠️ Artisans de Confiance - Allier (03)

**Le SaaS de mise en relation locale pour la communauté musulmane arabophone dans l'Allier.**

Ce projet est une plateforme moderne permettant aux particuliers de trouver des artisans locaux (Vichy, Moulins, Montluçon) validés, parlant français et arabe, sans intermédiaire.

---

## 🚀 Tech Stack (Architecture MVP)

Le projet utilise les technologies les plus récentes pour garantir performance, sécurité et scalabilité :

* **Frontend :** [Next.js 14+](https://nextjs.org/) (App Router) avec **Tailwind CSS** pour le design.
* **Animations :** [Framer Motion](https://www.framer.com/motion/) pour une UX fluide.
* **Backend & Auth :** [Supabase](https://supabase.com/) (PostgreSQL + Row Level Security).
* **Emails :** [Resend](https://resend.com/) pour les notifications et bienvenues.
* **Hébergement :** [Vercel](https://vercel.com/).

---

## 🏗️ Structure de la Base de Données

Le schéma est conçu pour séparer l'authentification sécurisée des données publiques :


- `storage/avatars` : Bucket public pour les photos de profil et logos.


---

## 🛠️ Installation & Configuration

1. **Cloner le projet :**
  ```bash
  git clone [https://github.com/votre-compte/artisans-allier.git](https://github.com/votre-compte/artisans-allier.git)
  cd artisans-allier
