import HeroSafe from '@/components/Hero';
import ArtisanSearch from '@/components/ArtisanSearch';
import FAQ from '@/components/FAQ';
import { supabase } from '@/lib/supabaseClient';
import AboutSection from '@/components/AboutSection';

const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('is_verified', true) // <--- Filtre de sécurité
  .order('created_at', { ascending: false });
  
export default function LandingPage() {
return (
<main className="min-h-screen bg-white">
{/* 1. La section du haut avec les boutons */}
<HeroSafe />

{/* 2. La section de recherche avec l'ID pour le bouton "Trouver un artisan" */}
<section id="search" className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
Annuaire des artisans du 03
</h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">

</p>
</div>

{/* Appel du composant que nous venons de créer */}
<ArtisanSearch />
</div>
</section>

{/* 3. La FAQ pour rassurer les clients */}
<FAQ />
<AboutSection />

{/* Footer simple */}

</main>
);
}
